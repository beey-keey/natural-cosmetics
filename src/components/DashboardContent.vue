<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="stat in stats" :key="stat.label" class="fade-in">
        <v-card class="stat-card">
          <v-card-title>{{ stat.value }}</v-card-title>
          <v-card-subtitle>{{ stat.label }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { label: "Total Sales", value: "$12,345" },
        { label: "New Customers", value: "342" },
        { label: "Products Sold", value: "1,234" },
      ],
    };
  },
};
</script>

<style>
.stat-card {
  background-color: #f5ebe0;
  color: #5a4036;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}
.stat-card:hover {
  transform: scale(1.05);
}
.fade-in {
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
