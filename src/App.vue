<template>
  <div class="main">
    <!-- Left -->
    <div class="main__column">
      <HelloFigma />
    </div>

    <!-- Right -->
    <div class="main__column">
      <DemoCard />
    </div>

    <!-- Builder Tag -->
    <BuilderTag />
  </div>
</template>

<script setup>
import HelloFigma from "@/components/HelloFigma.vue";
import DemoCard from "@/components/DemoCard.vue";
import BuilderTag from "@/components/BuilderTag.vue";
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  padding: 0 48px;
  height: 100vh;
  width: 100vw;
  position: relative;

  &__column {
    display: flex;
    align-items: center;
    padding: 0 48px;
  }
}
</style>
