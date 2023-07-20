<template>
  <div class="cafe-list">
    <h2 class="cafe-list__title">Cafe List</h2>
    <button class="cafe-list__button" @click="randomCafe">Get Random Cafe</button>
    <div class="selected-cafe" v-if="selectedCafe">
      <h3 class="selected-cafe__title">Randomly Selected Cafe:</h3>
      <CafeItem :cafe="selectedCafe" />
    </div>

    <div class="cafes-grid">
      <CafeItem
        v-for="cafe in cafes"
        :key="cafe.id"
        :cafe="cafe"
        class="cafe-item"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import CafeItem from './cafeItem.vue';

export default {
  components: {
    CafeItem,
  },
  setup() {
    const cafes = ref([]);
    const selectedCafe = ref(null);

    const fetchCafes = async () => {
      try {
        const response = await fetch('https://bandaumnikov.ru/api/test/site/get-index');
        const data = await response.json();
        cafes.value = data.data;
      } catch (error) {
        console.error(error);
      }
    };

    const randomCafe = () => {
      if (cafes.value.length > 0) {
        const randomIndex = Math.floor(Math.random() * cafes.value.length);
        selectedCafe.value = cafes.value[randomIndex];
      }
    };

    fetchCafes();

    return {
      cafes,
      selectedCafe,
      randomCafe,
    };
  },
};
</script>

<style scoped>
.cafe-list {
  padding: 16px;
}

.cafe-list__button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;
}

.cafe-list__title {
  font-size: 24px;
  margin-bottom: 16px;
}
.cafes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
}

.cafe-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.selected-cafe {
  margin-top: 24px;
  border: 2px solid #007bff;
  padding: 16px;
  border-radius: 8px;
}

.selected-cafe__title {
  font-size: 20px;
  margin-bottom: 16px;
}
</style>
