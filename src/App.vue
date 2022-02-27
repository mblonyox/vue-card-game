<script setup lang="ts">
import HandContainer from "./components/HandContainer.vue"
let hands = []
</script>

<template>
  <div class="board">
    <HandContainer />
  </div>
</template>

<style scoped>
.board {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: radial-gradient(#912a04, #3a1901);
}
</style>
