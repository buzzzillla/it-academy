<script setup>
import {ref} from "vue";

let cubes = ref([])

function faf() {
  let i = 0
  while (i !== 4) {
    i = +prompt('1 - красный блок, 2 - синий блок, 3 - зеленый блок, 4 - стоп игра')
    cubes.value.push(i)
  }
}

faf()

</script>

<template>
  <div class="blocks">
  <div
    v-for="cube in cubes"
    :class="{ 'red': cube === 1, 'blue': cube === 2, 'green': cube === 3 }"
  >
  </div>
  </div>
<!--<div class="red">-->

<!--</div>-->
<!--  <div class="blue">-->

<!--  </div>-->
<!--  <div class="green">-->

<!--  </div>-->
</template>

<style scoped>

.red {
  background-color: red;
  height: 150px;
  width: 150px;
  padding: 20px;
}

.blue {
  background-color: blue;
  height: 150px;
  width: 150px;
  padding: 20px;
}

.green {
  background-color: green;
  height: 150px;
  width: 150px;
  padding: 20px;
}

.blocks {
  display: flex;
}
</style>