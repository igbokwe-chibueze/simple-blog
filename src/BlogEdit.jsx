import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // When blog data changes, update the form fields with the blog's values
    if (blog) {
      setTitle(blog.title);
      setBody(blog.body);
      setAuthor(blog.author);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { title, body, author };

    setIsSubmitting(true); // Set isSubmitting to true to indicate form submission

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
        fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog)
        })
        .then(() => {
            setIsSubmitting(false);
            navigate(-1);
            // navigate('/');
        })
        .catch(error => console.error(error));
    }, 2000); // Adjust the delay time as needed
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
        
        <h2 className="text-2xl text-pink-600 mb-8">Edit Blog</h2>
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        <>
        </>
        { blog && (
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

                <button 
                    className={`bg-pink-600 text-white border-0 py-2 px-4 ${isSubmitting && 'cursor-not-allowed opacity-50'}`}
                >
                    {isSubmitting ? '...Processing' : 'Update Blog'} {/* Render button label conditionally */}
                </button>
            </form>
        )}

        <button onClick={() => navigate(-1)} className="bg-gray-400 text-white border-0 py-2 px-4 rounded mt-4">
            Return
        </button>
    </div>
  );
}
 
export default BlogEdit;
