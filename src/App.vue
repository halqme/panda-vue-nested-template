<script setup lang="ts">
import { css } from '../styled-system/css'
</script>

<template>
  <main>
    <template v-if="true">
      <p>Inside the nested template.</p>
    </template>

    <p :class="css({ bg: 'red.500' })">This background should be generated.</p>
  </main>
</template>
