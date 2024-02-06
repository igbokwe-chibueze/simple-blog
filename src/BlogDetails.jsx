import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  return (
    <div className="max-w-2xl mx-auto my-4 py-4">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2 className="text-20 text-pink-600 mb-4">{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div className="my-5">{ blog.body }</div>
          <button onClick={handleClick} className="bg-pink-600 text-white border-0 py-2 px-4 rounded">delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;