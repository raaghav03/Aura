// components/Sidebar.jsx
// components/Sidebar.jsx
export default function Sidebar() {
  return (
    <div className="bg-gray-200 w-[14vw] p-4  h-screen top-0 left-0" >
      {/* fixed top-0 left-0 z-40 w-64 h-screen */}
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="block px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="block px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-200"
            >
              Dashboard
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
}
