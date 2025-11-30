import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

const colorSchemes = [
  { value: 'default', label: 'Default (Purple)', colors: ['#7C3AED', '#A78BFA'] },
  { value: 'blue', label: 'Blue', colors: ['#1E40AF', '#60A5FA'] },
  { value: 'purple-gold', label: 'Purple & Gold', colors: ['#9333EA', '#FBBF24'] },
  { value: 'green-earth', label: 'Green & Earth', colors: ['#059669', '#84CC16'] },
  { value: 'olive-gold', label: 'Olive & Gold', colors: ['#6B7D2E', '#F4A261'] },
  { value: 'dark-gray', label: 'Dark Gray', colors: ['#737373', '#A3A3A3'] },
  { value: 'emerald-gold', label: 'Emerald & Gold', colors: ['#047857', '#F59E0B'] },
  { value: 'mint', label: 'Mint', colors: ['#10B981', '#6EE7B7'] },
  { value: 'dark-cyan', label: 'Dark Cyan', colors: ['#0891B2', '#22D3EE'] },
  { value: 'emerald-beige', label: 'Emerald & Beige', colors: ['#047857', '#D4A574'] },
];

const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300 bg-background/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40"
          aria-label="Change color scheme"
          title="Change Color Scheme"
        >
          <Palette className="h-7 w-7 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 max-h-[80vh] overflow-y-auto">
        {colorSchemes.map((scheme) => (
          <DropdownMenuItem
            key={scheme.value}
            onSelect={(e) => {
              e.preventDefault();
              console.log('ThemeSwitcher: Setting theme to', scheme.value);
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
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span>{scheme.label}</span>
            {colorScheme === scheme.value && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;

