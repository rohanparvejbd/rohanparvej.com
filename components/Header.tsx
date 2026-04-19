export default function Header() {
  return (
    <header className="p-6 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Rohan Parvej</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}