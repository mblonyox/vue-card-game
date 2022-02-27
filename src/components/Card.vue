<script setup lang="ts">

</script>

<template>
  <div class="card">

  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  width: 260px;
  height: 360px;
  background-image: url(../assets/Back_Loot.png);
  background-size: contain;
  position: absolute;
  top: -180px;
  transition: .2s;
}

.card:hover {
  cursor: grab;
  top: -200px;
}
</style>