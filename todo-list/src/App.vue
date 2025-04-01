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
          type="text"
          placeholder="Новая задача"
        />
        <button>+</button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
			<li>
				<button>
					Название задачи
				</button>
				<button>X</button>
			</li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button>Удалить выполненные</button>
        <button>Удалить все</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Ожидают выполнения:</span>
      </div>
    </div>
  </div>
</template>

<script>

</script>
