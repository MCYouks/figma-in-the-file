<template>
  <button class="button" @click="toggleDark()">
    Switch to {{ isDark ? "Light" : "Dark" }}
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

// Vue Use - Dark API
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 5px;
  font-weight: 500;
  padding: 0 16px;
  background: var(--primary);
  color: var(--white-text);
  transition: var(--transition-1);
  cursor: pointer;

  &:hover {
    background: var(--primary-dark);
  }
}
</style>
