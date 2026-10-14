import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./navbar.css";

function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ,
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="nav-logo">
        Sidhant<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

export default navbar;