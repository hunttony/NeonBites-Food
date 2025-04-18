import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 right-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-neon-blue">NeonBites</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#menu" className="text-white hover:text-neon-blue transition">
              Menu
            </a>
            <div className="relative">
              <FaShoppingCart className="text-2xl text-white hover:text-neon-blue cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-neon-blue text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;