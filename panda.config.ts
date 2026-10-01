import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
  jsxFramework: 'vue',
})
