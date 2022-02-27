<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
const card_num = ref(5);
</script>

<template>
  <button class="draw-button" @click="card_num += 1">Draw a card</button>
  <div class="hand-container">
    <TransitionGroup name="hand">
      <div class="card-container" v-for="item in card_num" :key="item">
        <Card />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.hand-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  border: 1px dashed white;
  display: flex;
  justify-content: center;
}

.card-container {
  width: 175px;
  min-width: 20px;
  max-width: 200px;
}

.hand-enter-active,
.hand-leave-active {
  transition: all 0.3s ease;
}

.hand-enter-from,
.hand-leave-to {
  width: 20px;
  opacity: 0;
  transform: translateY(-100px);
}
</style>