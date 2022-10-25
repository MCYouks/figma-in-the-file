<template>
  <div class="main">
    <!-- Title -->
    <h1 class="main__title">Darkmode magic for Figma</h1>

    <!-- Toggle -->
    <ToggleButton :active="isDark" @click="toggleDark()" class="main__toggle" />

    <!-- Mooon -->
    <Moon :is-dark="isDark" />

    <!-- Builder Tag -->
    <BuilderTag />
  </div>
</template>

<script setup>
import BuilderTag from "@/components/BuilderTag.vue";
import Moon from "@/components/HelloMoon.vue";
import ToggleButton from "@/components/ToggleButton.vue";

import { useDark, useToggle } from "@vueuse/core";

// Vue Use - Dark API
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  &__title {
    font-size: 40px;
    font-weight: 600;
    margin-top: 96px;
    text-align: center;
    color: var(--gray-2);
  }

  &__toggle {
    margin-top: 128px;
  }
}
</style>
