/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className='text-xl text-pink-600 mb-2'>{ blog.title }</h2>
            <p className="text-gray-800">Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;