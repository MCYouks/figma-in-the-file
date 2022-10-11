<template>
  <div class="greetings">
    <h1 class="green">Figma: In the file</h1>
    <h3>
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

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
