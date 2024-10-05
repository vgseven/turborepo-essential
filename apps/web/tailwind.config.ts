import type { Config } from "tailwindcss";
import { default as twConfig } from "@repo/tailwind-config/tailwind";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...twConfig,
      content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/ui/**/*.tsx",
        "./src/content/**/*.mdx",
        "../../packages/ui/src/**/*.{ts,tsx}",
      ],
      theme: {
        extend: {
          ...twConfig?.theme?.extend,
          fontFamily: {
            geistSans: ["var(--font-geist-sans)"],
            geistMono: ["var(--font-geist-mono)"],
          },
        },
      },
    },
  ],
};

export default config;
