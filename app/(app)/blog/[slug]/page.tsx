import Link from 'next/link'
import {ArrowLeft, Calendar} from 'lucide-react'
import {PortableText, type PortableTextComponents} from '@portabletext/react'
import {notFound} from 'next/navigation'
import {client} from '@/sanity/lib/client'
import {urlFor} from '@/sanity/lib/image'

const POST_QUERY = `*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  mainImage{asset, alt},
  publishedAt,
  excerpt,
  body,
  "author": author->{name, image},
  "categories": categories[]->title
}`

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({children}) => <p className="mb-6 text-[17px] leading-8 text-gray-800">{children}</p>,
    h1: ({children}) => <h2 className="mb-6 mt-12 text-4xl font-bold leading-tight text-gray-900">{children}</h2>,
    h2: ({children}) => <h2 className="mb-5 mt-10 text-3xl font-semibold leading-snug text-gray-900">{children}</h2>,
    h3: ({children}) => <h3 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">{children}</h3>,
    h4: ({children}) => <h4 className="mb-3 mt-6 text-xl font-semibold text-gray-900">{children}</h4>,
    blockquote: ({children}) => <blockquote className="my-8 border-l-4 border-[#000061] pl-5 italic text-gray-700">{children}</blockquote>,
  },
  list: {
    bullet: ({children}) => <ul className="mb-8 list-disc space-y-3 pl-6">{children}</ul>,
    number: ({children}) => <ol className="mb-8 list-decimal space-y-3 pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li className="leading-8 text-gray-800">{children}</li>,
    number: ({children}) => <li className="leading-8 text-gray-800">{children}</li>,
  },
  marks: {
    link: ({children, value}) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="font-medium text-[#000061] underline underline-offset-2">
        {children}
      </a>
    ),
  },
  types: {
    image: ({value}) => (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src={urlFor(value).width(1200).fit('max').url()} alt={value.alt || ''} className="my-10 w-full rounded-xl shadow-md" />
    ),
  },
}

async function getPost(slug: string) {
  return client.fetch(POST_QUERY, {slug})
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const post = await getPost(slug)

  if (!post) return {title: 'Post Not Found'}

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the AYO Blog.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on the AYO Blog.`,
      images: post.mainImage?.asset ? [urlFor(post.mainImage).width(1200).url()] : [],
    },
  }
}

export default async function BlogPostPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:py-20">
        <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#000061] transition-opacity hover:opacity-70">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {post.categories?.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {post.categories.map((category: string) => (
              <span key={category} className="rounded-full bg-[#000061]/10 px-3 py-1.5 text-xs font-semibold text-[#000061]">
                {category}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">{post.title}</h1>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</span>
          </div>
        </div>

        {post.mainImage?.asset && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={urlFor(post.mainImage)
              .width(1400)
              .height(900)
              .fit('crop')
              .url()}
            alt={post.mainImage.alt || post.title}
            className="w-full h-auto aspect-square object-contain rounded-xl mb-8"
          />
        )}

        {post.excerpt && <p className="mt-10 text-lg leading-8 text-gray-600">{post.excerpt}</p>}

        <div className="mt-10">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        <div className="mt-14 border-t border-gray-200 pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#000061]">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </article>
    </main>
  )
}
