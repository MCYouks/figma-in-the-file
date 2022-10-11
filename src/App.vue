<template>
  <div class="main">
    <div class="main__item">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/images/figma.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld />

        <!-- Toggle Light/Dark Mode -->
        <ToggleModeButton />
      </div>
    </div>
    <div class="main__item">
      <DemoCard />
    </div>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import ToggleModeButton from "@/components/ToggleModeButton.vue";
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

  &__item {
    display: flex;
    align-items: center;
    padding: 0 48px;
  }
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
