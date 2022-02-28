<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";
import { Client } from "boardgame.io/client";
import FourSoulsGame from "./game/four_souls";
import Board from "./components/Board.vue";

const state: any = reactive({
  clientState: null,
})

let _unsubscribe: () => void;
onMounted(() => {
  const client = Client({ game: FourSoulsGame });
  client.start();
  _unsubscribe = client.subscribe((clientState) => state.clientState = clientState);
})

onUnmounted(() => {
  _unsubscribe();
})

</script>

<template>
  <Board />
</template>

<style scoped>
.board {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: radial-gradient(#912a04, #3a1901);
}
</style>
