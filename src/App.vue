<template>
  <div class="main">
    <div class="main__column">
      <HelloFigma />
    </div>
    <div class="main__column">
      <DemoCard />
    </div>
  </div>
</template>

<script setup>
import HelloFigma from "@/components/HelloFigma.vue";
import DemoCard from "@/components/DemoCard.vue";
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  padding: 0 48px;
  height: 100vh;
  width: 100vw;

  &__column {
    display: flex;
    align-items: center;
    padding: 0 48px;
  }
}
</style>
