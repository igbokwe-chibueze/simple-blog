import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      navigate('/');
    })
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl text-pink-600 mb-8">Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="text-left">
        <label className="block mb-2">Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
        />
        <label className="block mb-2">Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
        ></textarea>
        <label className="block mb-2">Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button className="bg-pink-600 text-white border-0 py-2 px-4">
          Add Blog
        </button>
      </form>
    </div>
  );
}
 
export default Create;