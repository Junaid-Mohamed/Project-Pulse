
const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">HOURS</div>
  
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {["Dashboard", "Projects", "Team", "Clients", "Time", "Reports"].map(
            (item, index) => (
              <li key={index} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>
  
        {/* Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span>Mario</span>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  