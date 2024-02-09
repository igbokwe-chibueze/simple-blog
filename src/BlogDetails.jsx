import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();

  const handleClickDelete = () => {
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
          <div className=" flex justify-start items-center space-x-3">
            <button onClick={handleClickDelete} className="bg-pink-600 text-white border-0 py-2 px-4 rounded">delete</button>
            <Link to={`/edit/${blog.id}`} className="bg-green-600 text-white border-0 py-2 px-4 rounded">edit</Link>
          </div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;