
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import CompanyCard from "./components/company-card.vue";
let API_KEY = 'ba0235c4d6ba3983024e60f0b3143eddf61513a8';
// создание переменной с помощью ref из фреймворка vue.js
let search = ref('');
let companies = ref([]);

// выбранная пользователем организация
let selectedCompany = ref(null);

// функция для получения
async function getCompanies() {
  // ссылка на сервис с информацией о компаниях
  let url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party'
  // данные которые необходимо передать сервису
  let data = {
    query: search.value,
  };
  let options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + API_KEY,
    },
  };
  let response = await axios.post(url, data, options)
  // ПОЛУЧЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ  (Hi OPi HA MiНЯ)
  companies.value = response.data.suggestions
}
  // функция для выбора организации
  async function selectCompany(company) {
        selectedCompany.value = company;
}

// функция для возвращения к форме поиска организации
async function goBack() {
      selectedCompany.value = null;
}

function deleteCompany(index) {
  companies.value.splice(index, 1)
}

</script>

<template>
  <div class="app">
    <div class="companies-card">
      <transition name="mode-fade" mode="out-in">
        <CompanyCard
            @goBack="goBack"
          v-if="selectedCompany"
          :selected-company="selectedCompany"
          />
        <div v-else>
          <h1 class="card-title">
            Поиск организации
          </h1>

          <div class="search-form">
            <input
                v-model="search"
                class="search-input"
                id="search-input"
                @keyup.enter="getCompanies"
                placeholder="Напишите название организации">
            <button
                class="search-button"
                id="search-button"
                @click="getCompanies">Найти
            </button>
          </div>

          <div class="companies-list">
            <div class="companies-title">
              Найденные организации:
            </div>

            <div
                v-if="companies.length > 0"
                class="companies"
            >
              <div
                  class="company"
                  @click="selectCompany(company)"
                  v-for="(company, index) in companies"
                  :class="{
              'active-company': company.data.state.status === 'ACTIVE',
              'inactive-company': company.data.state.status !== 'ACTIVE',
            }"
              >
                <div class="company-name">
                  {{ index + 1 }}. {{ company.value }}
                </div>
                <div class="company-inn">
                  ИНН: {{ company.data.inn }}
                </div>
                <div class="company-address">
                  АДРЕС: {{ company.data.address.value }}
                </div>
                <button @click.stop="deleteCompany(index)">Удалить</button>
              </div>
            </div>
            <div v-else>
              Напишите название организации в текстовое поле и нажмите кнопку "Найти".
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<style scoped>
.active-company {
    background-color: #e3ffd4
}

.inactive-company {
    background-color: #ffd4d4;
}

.mode-fade-enter-active, .mode-fade-leave-active {
  transition:opacity .3s ease
}

.mode-fade-enter-from, .mode-fade-leave-to {
  opacity: 0;
}
</style>


