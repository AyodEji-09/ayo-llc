import { Brand } from "./brand";

export const Navbar = () => {
  return (
    <header className="bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Brand />
      </nav>
    </header>
  );
};
