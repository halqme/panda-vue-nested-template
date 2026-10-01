# Panda 2.0.1 Vue nested-template extraction repro

This project reproduces missing CSS extraction from a Vue SFC when an inner
`<template>` closes before a later `css()` call in the root template.

## Reproduce

```sh
pnpm install
pnpm panda:codegen
pnpm exec panda cssgen --include 'src/App.vue' --outfile /tmp/nested-template.css --max-warnings 0
```

`src/App.vue` places `css({ bg: 'red.500' })` after a nested
`<template v-if>`. On Panda 2.0.1, `cssgen` exits with status 0 and reports no
diagnostics, but the CSS utility is missing:

```sh
rg -F '.bg_red\.500' /tmp/nested-template.css || echo 'missing as reproduced'
```

For comparison, run the same extraction on `repro/div-control.vue`, where the
nested `<template v-if>` is replaced with `<div v-if>`:

```sh
pnpm exec panda cssgen --include 'repro/div-control.vue' --outfile /tmp/div-control.css --max-warnings 0
rg -F '.bg_red\.500' /tmp/div-control.css
```

The control output contains the utility. `panda.config.ts` scans `src/` by
default so the control fixture does not hide the failure in the regular
`pnpm panda:cssgen` run. Generated `styled-system/` files are ignored by Git.
