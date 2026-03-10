import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import stanfordLogo from "@/assets/stanford-medicine-logo.svg";

const navItems = [
{ label: "Home", path: "/" },
{ label: "Overview", path: "/overview" },
{ label: "Learn", path: "/learn" },
{ label: "Implement", path: "/apply" },
{ label: "Get Involved", path: "/get-involved" }];


const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={stanfordLogo} alt="Stanford School of Medicine" className="h-14" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              location.pathname === item.path ?
              "bg-primary/10 text-primary" :
              "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}>
            
              {item.label}
            </Link>
          )}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}>
          
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen &&
      <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col py-4 gap-1">
            {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "px-4 py-3 text-sm font-medium rounded-md transition-colors",
              location.pathname === item.path ?
              "bg-primary/10 text-primary" :
              "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}>
            
                {item.label}
              </Link>
          )}
          </nav>
        </div>
      }
    </header>);

};

export default Navbar;