import { Link } from "react-router-dom";

function AppNavLink() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default AppNavLink;
