<script setup lang="ts">
import { css } from '../styled-system/css'
</script>

<template>
  <main>
    <div v-if="true">
      <p>Inside the conditional element.</p>
    </div>

    <p :class="css({ bg: 'red.500' })">This background should be generated.</p>
  </main>
</template>
