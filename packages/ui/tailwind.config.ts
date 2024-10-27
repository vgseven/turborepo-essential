import { default as twConfig } from "@repo/tailwind-config/tailwind";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...twConfig,
      content: ["./src/**/*.{ts,tsx}"],
      theme: {},
    },
  ],
};

export default config;
