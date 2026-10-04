import Link from 'next/link'
import {Calendar, ArrowRight, Sparkles} from 'lucide-react'
import {client} from '@/lib/sanity/client'
import {urlFor} from '@/lib/sanity/image'

const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage {
    asset,
    alt
  },
  publishedAt,
  excerpt,
  "author": author->name,
  "categories": categories[]->title
}`

async function getPosts() {
  return client.fetch(POSTS_QUERY)
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-[#EEF1F6] bg-linear-to-br from-[#F4FBFF] via-white to-[#FFF5FB]">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#000061]/5" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-purple-200/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-[#000061] shadow-sm">
            <Sparkles size={16} />
            AYO Blog
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-[#000061] sm:text-5xl lg:text-6xl">
            Ideas, Insights & Inspiration
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover insights, ideas and useful stories designed to help
            businesses grow, connect and build better digital experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#000061]">
              From AYO
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest Stories
            </h2>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <article
                key={post._id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100 sm:h-60">
                  {post.mainImage?.asset ? (
                    <img
                      src={urlFor(post.mainImage)
                        .width(900)
                        .height(600)
                        .fit('crop')
                        .url()}
                      alt={post.mainImage.alt || post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#000061]">
                      <span className="text-5xl font-bold text-white/20">
                        AYO
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/0" />
                  {post.categories?.[0] && (
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#000061]">
                        {post.categories[0]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={15} />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString(
                        'en-US',
                        {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        },
                      )}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#000061]">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-gray-600">
                      {post.excerpt}
                    </p>
                  )}

                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#000061]"
                  >
                    Read More
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#000061]/20 transition-all duration-300 group-hover:bg-[#000061] group-hover:text-white">
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-[#000061] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let’s build something better.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Explore AYO’s services and discover how we can help bring your
            digital ideas to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#000061] transition-transform hover:scale-105"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
