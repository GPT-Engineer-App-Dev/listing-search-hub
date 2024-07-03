import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full py-4 border-t text-center">
      <nav className="space-x-4">
        <Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
        <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
        <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
      </nav>
    </footer>
  );
};