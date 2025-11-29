import { useState, useEffect } from "react";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const colorSchemes = [
  { value: 'default', label: 'Purple', colors: ['#7C3AED', '#A78BFA'] },
  { value: 'emerald-beige', label: 'Emerald & Beige', colors: ['#00674F', '#C3A878'] },
  { value: 'purple-gold', label: 'Purple & Gold', colors: ['#9333EA', '#FBBF24'] },
  { value: 'blue', label: 'Blue', colors: ['#1E40AF', '#60A5FA'] },
  { value: 'olive-gold', label: 'Olive & Gold', colors: ['#6B7D2E', '#F4A261'] },
  { value: 'dark-gray', label: 'Dark Gray', colors: ['#737373', '#A3A3A3'] },
  { value: 'dark-cyan', label: 'Dark Cyan', colors: ['#0891B2', '#22D3EE'] },
  { value: 'emerald-gold', label: 'Emerald & Gold', colors: ['#00674F', '#F4A261'] },
  { value: 'mint', label: 'Mint', colors: ['#10B981', '#6EE7B7'] },
  { value: 'green-earth', label: 'Green & Earth', colors: ['#059669', '#84CC16'] },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { colorScheme, setColorScheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={cn(
              "text-2xl font-bold transition-colors",
              isScrolled 
                ? "text-foreground hover:text-primary" 
                : "text-white hover:text-primary-light drop-shadow-lg"
            )}
          >
            MU
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative group",
                  colorScheme === 'emerald-beige' 
                    ? (isScrolled ? "text-foreground hover:text-foreground/90" : "text-white hover:text-white/95")
                    : "text-foreground hover:text-foreground/85"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                  colorScheme === 'emerald-beige' 
                    ? (isScrolled ? "bg-primary" : "bg-white")
                    : "bg-primary"
                )} />
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent"
                  aria-label="Change color scheme"
                >
                  <Palette className={cn(
                    "h-5 w-5",
                    colorScheme === 'emerald-beige' && !isScrolled 
                      ? "text-white" 
                      : ""
                  )} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  Color Themes
                </div>
                {colorSchemes.map((scheme) => (
                  <DropdownMenuItem
                    key={scheme.value}
                    onSelect={(e) => {
                      e.preventDefault();
                      console.log('Navigation: Setting theme to', scheme.value);
                      setColorScheme(scheme.value);
                    }}
                    className={`cursor-pointer flex items-center gap-3 ${
                      colorScheme === scheme.value ? 'bg-accent' : ''
                    }`}
                  >
                    <div className="flex gap-1">
                      {scheme.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-3 h-3 rounded-full border border-border"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="text-sm">{scheme.label}</span>
                    {colorScheme === scheme.value && (
                      <span className="ml-auto text-primary">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              onClick={() => {
                handleNavClick("#contact");
              }}
              className="gradient-bg text-white hover:opacity-90"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "h-6 w-6",
                colorScheme === 'emerald-beige' && !isScrolled 
                  ? "text-white" 
                  : ""
              )} />
            ) : (
              <Menu className={cn(
                "h-6 w-6",
                colorScheme === 'emerald-beige' && !isScrolled 
                  ? "text-white" 
                  : ""
              )} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border rounded-sm animate-fade-in bg-background shadow-lg">
            <div className="flex flex-col gap-2 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/50"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-border">
                <Button
                  onClick={() => {
                    handleNavClick("#contact");
                  }}
                  className="gradient-bg text-white hover:opacity-90 w-full py-6 text-base font-semibold"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

