<template>
  <div class="card">
    <!-- Avatar -->
    <div class="card__avatar">
      <div class="card__avatar__emoji">👋</div>
    </div>

    <!-- Title -->
    <div class="card__title">Bonjour à tous</div>

    <!-- Subtitle -->
    <div class="card__subtitle">Bienvenue à la démo Figma In the File</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 32px;
  border: 1px solid var(--gray-5);
  border-radius: 5px;
  background: var(--white);
  box-shadow: var(--shadow-lg);

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    border-radius: 100%;
    background: var(--gray-7);

    &__emoji {
      font-size: 24px;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
    color: var(--gray-2);
  }

  &__subtitle {
    font-size: 16px;
    color: var(--gray-3);
  }
}
</style>
