<template>
  <div class="cafe-item">
    <h3 class="cafe-item__title">{{ cafe.name }}</h3>
    <img :src="cafe.photo" alt="Cafe Photo" v-if="cafe.photo" class="cafe-item__photo" />
    <p v-if="cafe.business_lunch && cafe.price" class="cafe-item__price">
      Price: {{ cafe.price }}
    </p>
    <p v-else-if="cafe.business_lunch && !cafe.price" class="cafe-item__price">
      Price: No lunch available
    </p>
    <p v-else class="cafe-item__price">
      Price: No lunch available
    </p>
    <p v-if="cafe.cuisine" class="cafe-item__cuisine">Cuisine: {{ cafe.cuisine }}</p>
    <p v-if="cafe.distance" class="cafe-item__distance">Distance: {{ cafe.distance }} meters</p>
    <p v-if="cafe.time" class="cafe-item__time">Time: {{ cafe.time }} minutes</p>
    <p v-if="cafe.address" class="cafe-item__address">Address: {{ cafe.address }}</p>
    <p v-if="cafe.landmark" class="cafe-item__landmark">Landmark: {{ cafe.landmark }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cafe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.cafe-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.cafe-item__title {
  font-size: 18px;
  margin-bottom: 8px;
}

.cafe-item__photo {
  max-width: 100%;
  max-height: 150px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.cafe-item__price {
  font-size: 14px;
  margin: 4px 0;
}

.cafe-item__cuisine,
.cafe-item__distance,
.cafe-item__time,
.cafe-item__address,
.cafe-item__landmark {
  font-size: 14px;
  margin: 4px 0;
}
</style>
