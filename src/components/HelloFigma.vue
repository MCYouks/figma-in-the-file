<template>
  <div class="hello">
    <!-- Logo -->
    <img class="hello__logo" alt="Figma logo" src="@/assets/images/figma.svg" />

    <!-- Container -->
    <div class="hello__container">
      <!-- Title -->
      <h1 class="hello__container__title">Figma: In the file</h1>

      <!-- Subtitle -->
      <h3 class="hello__container__subtitle">
        Let's discover tips to better collaborate between designers and
        engineers.
      </h3>

      <!-- Toggle Light/Dark Mode -->
      <ToggleModeButton class="hello__container__button" />
    </div>
  </div>
</template>

<script setup>
import ToggleModeButton from "@/components/ToggleModeButton.vue";
</script>

<style lang="scss" scoped>
.hello {
  display: flex;
  gap: 24px;
  margin-top: 48px;

  &__logo {
    width: 125px;
    height: 125px;
  }

  &__container {
    display: flex;
    flex-direction: column;

    &__title {
      font-weight: 500;
      font-size: 40px;
      top: -10px;
    }

    &__subtitle {
      font-size: 24px;
    }

    &__button {
      margin-top: 24px;
      align-self: flex-start;
    }
  }
}
</style>
