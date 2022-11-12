import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  // const navigate = useNavigate();
  // navigate(-1); // -1 to return to previous page, 1 to go a page forward
  // // navigate("/welcome", { replace: true });
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
