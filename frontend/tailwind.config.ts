import type { Config } from "tailwindcss";
import tailwindcssRadixColors from "tailwindcss-radix-colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        'accent-10': 'var(--accent-10)',
        'accent-11': 'var(--accent-11)',
        'accent-12': 'var(--accent-12)',
        'accent-surface': 'var(--accent-surface)',
        'accent-indicator': 'var(--accent-indicator)',
        'accent-track': 'var(--accent-track)',
        'accent-contrast': 'var(--accent-contrast)',
      },
    },
  },
  plugins: [tailwindcssRadixColors],
};
export default config;
