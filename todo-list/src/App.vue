<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>Список задач</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input
            v-model="add"
            type="text"
            placeholder="Новая задача"
        />
        <button
            @click="addTasks()"
            id="add">+</button>


      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
			<li v-for =  "(task, index) in tasks">
				<button :class="{ 'toggle-completed': task.completed }" @click="task.completed = !task.completed">
					{{ task.name }}
				</button>
				<button
            @click="delTasks(index)"
            id="del">х</button>
			</li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button>Удалить выполненные</button>
        <button
            @click="delAllTasks()"
            id="delAll">Удалить все</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Ожидают выполнения:</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let tasks = ref([])
let add = ref('')

async function addTasks() {
  let task = {
    name: add.value,
    completed: false
  }
  tasks.value.push(task)
  add.value = '';
}

addTasks()

async function delTasks(index) {
  tasks.value.splice(index, 1);
}

delTasks()

async function delAllTasks() {
  tasks.value = []
}
</script>
