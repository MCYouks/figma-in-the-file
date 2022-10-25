<template>
  <!-- Toggle -->
  <div class="toggle">
    <!-- Indicator -->
    <div class="toggle__indicator" :class="{ active }" />
  </div>
</template>

<script setup>
// Props
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.toggle {
  display: flex;
  align-items: center;
  width: 80px;
  height: 48px;
  border: 1px solid var(--gray-6);
  border-radius: 100px;
  padding: 0 6px;
  background: var(--white);
  box-shadow: var(--shadow-sm);
  z-index: 1;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-md);
  }

  &__indicator {
    height: 36px;
    width: 36px;
    border-radius: 100px;
    background: var(--gray-6);
    transition: var(--transition-3);

    &:not(.active) {
      transform: translateX(42px);
    }
  }
}
</style>
