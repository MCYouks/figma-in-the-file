<template>
  <a class="tag" href="https://twitter.com/andreasblondeau" target="_blank">
    <!-- Avatar -->
    <img class="tag__avatar" src="@/assets/images/andreas.png" />

    <!-- Text -->
    <div class="tag__text">@andreasblondeau</div>
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.tag {
  position: absolute;
  bottom: 48px;
  left: 64px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 40px;
  gap: 12px;
  border-radius: 5px;
  background: var(--gray-7);
  transition: var(--transition-1);

  &:hover {
    background: var(--gray-6);
  }

  &__avatar {
    height: 24px;
    width: 24px;
    border-radius: 100%;
    object-fit: cover;
    background: var(--gray-6);
  }

  &__text {
    color: var(--gray-2);
  }
}
</style>
