<script setup>
import {ref} from 'vue';
let one = ref('')
let two = ref('')
let three = ref('')
let four = ref('')
let five = ref('')
let six = ref('')
let seven = ref('')

let ewrt = ref([])

function a1() {
  one.value = ''
  for (let i = 0; i < 5; i=i+1) {
    one.value = one.value + i + ' '
  }
}

function a2() {
  two.value = ''
  for (let i = 1; i < 6; i=i+1) {
    two.value = two.value + i + ' '
  }
}

function a3() {
  three.value = ''
  for (let i = 0; i < 10; i=i+1) {
    three.value = three.value + i + ' '
  }
}

function a4() {
  four.value = ''
  for (let i = 1; i < 11; i=i+1) {
    four.value = four.value + i + ' '
  }
}

function a5() {
  five.value = ''
  for (let i = 0; i < 20; i=i+2) {
    five.value = five.value + i + ' '
  }
}

function a6() {
  six.value = ''
  for (let i = 1; i < 21; i=i+2) {
    six.value = six.value + i + ' '
  }
}

function a7() {
  seven.value = ''
  ewrt.value = []
  for (let i = 1; i < 21; i = i + 1) {
    ewrt.value.push(i)
  }
}
</script>

<template>
  <div class="buttons">
    <div
        @click="a1"
        class="button">
  <button>Создать 5 цифр (начиная с 0)</button>
      {{ one }}
    </div>
    <div
        @click="a2"
        class="button">
  <button>Создать 5 цифр (начиная с 1)</button>
      {{ two }}
    </div>
    <div
        @click="a3"
        class="button">
  <button>Создать 10 цифр (начиная с 0)</button>
      {{ three }}
    </div>
    <div
        @click="a4"
        class="button">
  <button>Создать 10 цифр (начиная с 1)</button>
      {{ four }}
    </div>
    <div
        @click="a5"
        class="button">
  <button>Создать 10 цифр (начиная с 0 с шагом 2)</button>
      {{ five }}
    </div>
    <div
        @click="a6"
        class="button">
  <button>Создать 10 цифр (начиная с 1 с шагом 2)</button>
      {{ six }}
    </div>
    <div
        @click="a7"
        class="button">
  <button>Создать 20 цифр (начиная с 1, каждая чётная - красная)</button>
      <span v-for="i in ewrt" :class="{ 'red': i % 2 === 0 }" style="margin-left: 4px;">{{ i }}</span>
    </div>
  </div>
</template>

<style scoped>
.button {
  margin-top: 10px;
}

.red {
  color: red;
}
</style>