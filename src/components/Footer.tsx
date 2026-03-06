import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-secondary/30 py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground font-serif">S</span>
          </div>
          <p className="text-sm font-medium">Stanford AI & Medical Education</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/overview" className="hover:text-foreground transition-colors">Overview</Link>
          <Link to="/learn" className="hover:text-foreground transition-colors">Learn</Link>
          <Link to="/apply" className="hover:text-foreground transition-colors">Apply</Link>
          <Link to="/get-involved" className="hover:text-foreground transition-colors">Get Involved</Link>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 Stanford University</p>
      </div>
    </div>
  </footer>
);

export default Footer;
