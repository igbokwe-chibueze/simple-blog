import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="text-pink-600">The Dojo Blog</h1>
      <div className="ml-auto space-x-4">
        <Link to="/" className="text-gray-800 hover:text-pink-600">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }} >New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;