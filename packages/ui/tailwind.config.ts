import type { Config } from "tailwindcss";
import { default as twConfig } from "@repo/tailwind-config/tailwind";

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
