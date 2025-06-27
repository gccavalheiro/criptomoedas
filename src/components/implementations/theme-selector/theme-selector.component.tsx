'use client';
import { ThemeSelector as ThemeSelectorComponent } from '@/components/theme-selector.component';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ThemeSelector() {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    return theme === 'light' ? <Moon /> : <Sun />;
  };

  const getThemeLabel = () => {
    return theme === 'light'
      ? 'Alternar para modo escuro'
      : 'Alternar para modo claro';
  };

  return (
    <ThemeSelectorComponent.Root>
      <ThemeSelectorComponent.Button
        onClick={toggleTheme}
        aria-label={getThemeLabel()}
        title={getThemeLabel()}
      >
        <ThemeSelectorComponent.Icon>
          {getThemeIcon()}
        </ThemeSelectorComponent.Icon>
      </ThemeSelectorComponent.Button>
    </ThemeSelectorComponent.Root>
  );
}
