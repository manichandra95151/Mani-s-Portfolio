export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-[rgba(26,26,26,0.5)] rounded-full px-6 py-3 flex items-center justify-center gap-6 z-50">
      <a href="#about" className="text-white font-medium hover:underline underline-offset-4">
        Home
      </a>
      <a href="#skills" className="text-white font-medium hover:underline underline-offset-4">
        Skills
      </a>
      <a href="#projects" className="text-white font-medium hover:underline underline-offset-4">
        Projects
      </a>
      <a href="#certificates" className="text-white font-medium hover:underline underline-offset-4">
        Certificates
      </a> 
      <a href="#contact" className="text-white font-medium hover:underline underline-offset-4">
        Message Me
      </a>
    </nav>
  );
}
