const Navbar = () => {
    return (
      <nav className="bg-black p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
          <div className="text-lg font-bold">
            <a href="/">New York Times</a>
          </div>
          <div>
            <a href="/" className="px-4 hover:text-gray-200">Home</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  