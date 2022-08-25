<template>
  <p v-if="state === 'loading'">Loading data, please wait...</p>
  <p v-else-if="state === 'error'">Please try again.</p>
  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
export type State = "success" | "error" | "loading";

defineProps<{ state: State }>();
</script>
