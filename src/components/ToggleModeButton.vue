<template>
  <button @click="toggleDark()">Toggle {{ isDark ? "Light" : "Dark" }}</button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

// Vue Use - Dark API
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped></style>
