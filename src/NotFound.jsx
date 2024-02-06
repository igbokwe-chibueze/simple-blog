import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="max-w-2xl mx-auto my-4 py-4">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;