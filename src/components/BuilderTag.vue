<template>
  <div class="tag">
    <!-- Text -->
    <div class="tag__text">💛 from</div>

    <!-- Avatar -->
    <img class="tag__avatar" src="@/assets/images/andreas.png" />

    <!-- Text -->
    <a
      class="tag__text"
      href="https://twitter.com/andreasblondeau"
      target="_blank"
    >
      @andreasblondeau
    </a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tag {
  position: absolute;
  bottom: 48px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 40px;
  gap: 12px;
  border-radius: 5px;
  background: var(--gray-7);
  transition: var(--transition-1);

  @media screen and (min-width: 640px) {
    left: 64px;
  }

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
