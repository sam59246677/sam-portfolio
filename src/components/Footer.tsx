function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500"> © {new Date().getFullYear()} Sam. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/sam59246677" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 transition hover:text-blue-600">
            GitHub
          </a>
          <a href="#home" className="text-sm font-medium text-gray-600 transition hover:text-blue-600">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;