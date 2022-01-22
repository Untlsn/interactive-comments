<script setup lang="ts">
let count = $ref(0);
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-4">
    <p>Simple counter using vue ref</p>
    <button class="bg-gray-200 rounded-xl px-2 py-1" @click="() => count++">
      Count: {{ count }}
    </button>
  </div>
</template>
