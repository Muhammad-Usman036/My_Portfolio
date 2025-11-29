import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '@/lib/themes';

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorSchemeState] = useState(() => {
    const saved = localStorage.getItem('colorScheme');
    return saved || 'default';
  });

  const applyColorScheme = (scheme) => {
    const root = document.documentElement;
    const themeName = scheme && scheme !== '' ? scheme : 'default';
    
    // Remove ALL theme-related classes (including fragments)
    const currentClasses = root.className.split(/\s+/).filter(cls => {
      return cls && !cls.startsWith('theme-') && !cls.match(/^-\w+/);
    });
    root.className = currentClasses.join(' ').trim();
    
    // Add the new theme class
    const themeClass = `theme-${themeName}`;
    root.classList.add(themeClass);
    
    // Apply CSS variables directly via JavaScript (bypasses CSS specificity issues)
    const themeColors = themes[themeName] || themes['default'];
    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    
    // Force a reflow to ensure styles are applied
    void root.offsetHeight;
    
    console.log('✅ Theme applied:', themeClass);
    console.log('✅ CSS variables set directly via JavaScript');
    
    // Verify CSS variables are being applied
    setTimeout(() => {
      const primaryColor = getComputedStyle(root).getPropertyValue('--primary').trim();
      const expected = themeColors['--primary'];
      console.log('CSS Variable --primary:', primaryColor, 'Expected:', expected);
      
      if (primaryColor === expected) {
        console.log('✅ Theme colors applied successfully!');
      } else {
        console.warn('⚠️ Theme colors may not be fully applied');
      }
    }, 10);
  };

  const setColorScheme = (scheme) => {
    console.log('Setting color scheme to:', scheme); // Debug log
    setColorSchemeState(scheme);
    localStorage.setItem('colorScheme', scheme);
    applyColorScheme(scheme);
  };

  useEffect(() => {
    applyColorScheme(colorScheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

