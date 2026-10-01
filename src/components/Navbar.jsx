import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { LuMenu, LuX } from "react-icons/lu";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/DynamicIO", Icon: FaGithub },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Fold the navbar away while scrolling down and bring it back on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 64) setHidden(false);
      else if (Math.abs(y - lastY) > 8) setHidden(y > lastY);
      if (Math.abs(y - lastY) > 8) lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape or when resizing up to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Scroll to a section ourselves so closing the mobile menu can't cancel the jump
  const goTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView();
      history.replaceState(null, "", href);
    });
  };

  return (
    <header
      onFocus={() => setHidden(false)}
      className={`sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md transition-transform duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-8">
        <a href="#top" onClick={(e) => goTo(e, "#top")} className="flex flex-shrink-0 items-center">
          <img className="w-10" src={logo} alt="Ben Abraham, back to top" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => goTo(e, href)}
              className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-4 border-l border-neutral-800 pl-6 text-xl">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-400 transition-colors duration-200 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-neutral-300 md:hidden"
        >
          {open ? <LuX strokeWidth={1.5} /> : <LuMenu strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-y border-neutral-900 bg-neutral-950/95 backdrop-blur-md md:hidden"
        >
          <div className="container mx-auto flex flex-col px-8 py-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => goTo(e, href)}
                className="flex min-h-[44px] items-center border-b border-neutral-900 text-base text-neutral-300 last:border-b-0"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-2 py-3 text-2xl">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center text-neutral-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
