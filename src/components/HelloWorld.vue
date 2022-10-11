<template>
  <div class="greetings">
    <h1 class="greetings__title">Figma: In the file</h1>
    <h3 class="greetings__subtitle">
      Let's discover tips to better collaborate between designers and engineers.
    </h3>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.greetings {
  &__title {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
    }
  }

  &__subtitle {
    font-size: 1.2rem;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
    }
  }
}
</style>
