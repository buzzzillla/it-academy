<script setup>
import axios from 'axios';
import { ref , computed, onMounted } from 'vue'


// переменная для хранения изображений
let images = ref([])

// индекс изображения отображаемого на экране
let currentIndex= ref(-1)

let animals= ref('cat')

// изображение отображаемое на экране
let currentImage = computed(() => {
  return images.value[currentIndex.value]
})

// функция для получения изображения
async function getImg() {
  let url = 'https://api.thedogtapi.com/v1/images/search'
  if (animals.value === 'cats') {
    url = 'https://api.thecatapi.com/v1/images/search'
  }
  // получение нового изображения
  let response = await axios.get(url)
  // получение ссылки на изображение
  let newImg = response.data[0].url
  // добавляем изображение в массив
  images.value.push(newImg)
  // обновляем индекс на индекс изображения
  currentIndex.value = images.value.length - 1;
}

function goBack() {
  // уменьшаем индекс на 1
  currentIndex.value = currentIndex.value - 1
}

// функция для перехода к следующему изображению
function goNext() {
  // если мы на первом изображении, загружаем новое
    if (currentIndex === images.value.length - 1) {
      getImg();
    }
    else {
      currentIndex.value = currentIndex.value + 1;
    }
}

onMounted( () => {
  getImg()
});

async function getDogs() {
        animals.value = 'dogs'
  await getImg()
}

async function getCats() {
        animals.value = 'cats'
  await getImg()
}
</script>

<template>

<div class="pets-slider">
 <button
     v-if="currentIndex > 0"
     @click="goBack"
     class="button-prev">
   ←
 </button>

  <button
      @click="getCats"
      id="cats">CATS</button>
  <button
      @click="getDogs"
      id="dogs">DOGS</button>

  <img
      :src="currentImage"
      alt="Фото с котиком"
      class="pet-image">

  <button
      @click="goNext"
      class="button-next">
    →
  </button>
</div>

</template>

<style scoped>

</style>
