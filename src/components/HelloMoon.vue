<template>
  <img src="@/assets/images/moon.svg" class="moon" />
</template>

<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
});

// Computed
const opacity = computed(() => (props.isDark ? 0.4 : 0.6));
</script>

<style lang="scss" scoped>
.moon {
  position: absolute;
  top: 50vh;
  opacity: v-bind(opacity);
}
</style>
