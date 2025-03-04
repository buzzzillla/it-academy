<script setup>

let props = defineProps({
  selectedCompany: {
    type: Object,
  },
});

let emit = defineEmits(['goBack']);
// функция для возвращения назад
function goBack() {
    emit('goBack')
}


</script>

<template>
  <div class="company-card">
    <h1 class="card-title">
      {{selectedCompany.value}}
    </h1>
    <div
        :class="{
              'active': selectedCompany.data.state.status === 'ACTIVE',
              'inactive': selectedCompany.data.state.status !== 'ACTIVE',
            }"
        class="company-card__status">

      {{  selectedCompany.data.state.status === 'ACTIVE' ? "Действующая организация" : "Организация ликвидирована" }}
    </div>
    <div class="company-card__property">
      ОГРН организации: {{ selectedCompany.data.ogrn }}
    </div>

    <div class="company-card__property">
      ИНН организации: {{ selectedCompany.data.inn }}
    </div>

    <div class="company-card__property">
      КПП организации:  {{ selectedCompany.data.kpp }}
    </div>

    <div class="company-card__property">
      Дата регистрации:  {{ new Date(selectedCompany.data.state.registration_date).toLocaleDateString() }}
    </div>

    <div class="company-card__property">
      Адрес организации:  {{ selectedCompany.data.address.value }}
    </div>

    <div class="company-card__property">
      Руководитель:  {{ selectedCompany.data.management.name }}  ({{ selectedCompany.data.management.post.toLowerCase() }})
    </div>
    <button
        @click="goBack"
        class="company-card__button">Вернуться назад</button>
  </div>
</template>

<style scoped>

</style>