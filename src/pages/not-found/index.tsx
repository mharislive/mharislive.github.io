import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-9xl">404</h2>
      <p className="mb-3">Page not found</p>
      <Link to="/" className="bg-fuchsia-950 px-3 py-1 shadow-lg rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
