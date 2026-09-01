import { useEffect, useState } from "react";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  function handleNavClick() {
    setIsOpen(false);
  }
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Navbar */}
      <div className="border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#home" onClick={handleNavClick} className="text-xl font-bold tracking-tight text-gray-900">
            Sam
          </a>
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-600 transition hover:text-blue-600">
                {item.label}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button type="button" onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-30 rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"   aria-controls="mobile-menu" aria-label="Toggle navigation menu" aria-expanded={isOpen}>
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </nav>
      </div>
      {/* Mobile Menu Layer */}
      {isOpen && (
        <div className="fixed inset-0 z-20 md:hidden">
          {/* Overlay */}
          <button type="button" aria-label="Close navigation menu" onClick={() => setIsOpen(false)} className="absolute inset-0 cursor-default bg-black/20"/>
          {/* Menu */}
          <div id="mobile-menu" className="absolute left-0 right-0 top-20 border-t border-gray-200 bg-white shadow-lg">
            <nav className="mx-auto max-w-7xl px-6 py-5">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={handleNavClick} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600">
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;