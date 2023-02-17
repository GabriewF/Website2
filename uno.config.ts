import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

export default defineConfig({
  // Transformer's
  transformers: [
    // Compile Classes
    transformerCompileClass({ keepUnknown: true }),

    // Variant Groups
    transformerVariantGroup(),

    // Directives
    transformerDirectives(),
  ],

  shortcuts: {
    theme: "@dark:(bg-zinc-900 text-neutral-100) bg-neutral-100 text-zinc-900",
    center: "top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]",
  },

  // Preset's
  presets: [
    // Uno Preset
    presetUno(),

    // Webfont's
    presetWebFonts({
      inlineImports: true,
      extendTheme: true,
      fonts: {
        sans: {
          name: "Satoshi",
          provider: "fontshare",
        },
        serif: {
          name: "Zodiak",
          provider: "fontshare",
        },
        mono: {
          name: "JetBrains Mono",
          provider: "fontshare",
        },
        slab: {
          name: "Bespoke Slab",
          provider: "fontshare",
        },
        display: {
          name: "Melodrama",
          provider: "fontshare",
        },
        handwritten: {
          name: "Oswald",
          provider: "fontshare",
        },
      },
    }),
  ],
});
