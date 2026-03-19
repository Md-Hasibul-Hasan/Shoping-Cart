import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center gap-4 bg-slate-200 ">
      {/* <Link to="/">Home</Link> {" | "} */}
      <Link to="/shop">Shop</Link> {" | "} 
      <Link to="/cart">Cart</Link> {" | "}
      <Link to="/add">Add Product</Link> 
      <hr />
    </nav>
  );
};

export default Nav;
