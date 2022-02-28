<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  monsterDeckCount: 20,
  monsterZones: [
    [],
    []
  ]
});

</script>

<template>
  <div class="monster-area">
    <ul class="monster-card-deck">
      <li
        class="monster-card-back"
        v-for="i in state.monsterDeckCount"
        :style="{
          top: `-${i / 3}px`,
          left: `${i / 3}px`
        }"
      ></li>
    </ul>
    <div class="monster-card-zone" v-for="zone in state.monsterZones">
      <ul>
        <li class="monster-card-face" v-for="card in zone"></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.monster-area {
  position: fixed;
  top: 100px;
  left: 10%;
  width: 80%;
  display: flex;
  justify-content: start;
  gap: 20px;
}

.monster-card-deck {
  width: 195px;
  height: 270px;
  margin-right: 100px;
}

.monster-card-zone {
  width: 195px;
  height: 270px;
  border-radius: 8px;
  border: 1px dashed white;
}

.monster-card-back {
  position: absolute;
  width: 195px;
  height: 270px;
  border-radius: 8px;
  background-image: url(../assets/MonsterCardBack-308x420.png);
  background-size: contain;
}

ul {
  list-style-type: none;
}
</style>