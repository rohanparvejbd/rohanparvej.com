export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ROHAN PARVEJ</div>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
        </ul>
      </nav>
    </header>
  );
}