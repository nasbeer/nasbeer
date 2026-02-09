import { Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useEffect } from "react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  // Force dark theme on mount
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <button
      className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 border border-primary/20 cursor-default"
      aria-label="Dark theme active"
      disabled
    >
      <Moon className="w-5 h-5" />
    </button>
  );
}
