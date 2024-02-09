/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {

  const handleClickDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload(); // Reload the page
    })
  }

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <div className='flex justify-end items-center space-x-2 text-xs'>
            <button onClick={() => handleClickDelete(blog.id)} className="bg-pink-600 text-white border-0 py-2 px-4 rounded">D</button>
            <Link to={`/edit/${blog.id}`} className="bg-green-600 text-white border-0 py-2 px-4 rounded">E</Link>
          </div>

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