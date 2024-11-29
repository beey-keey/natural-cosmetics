<template>
  <v-app>
    <!-- <v-container fluid class="dashboard"> -->
    <!-- <Navbar /> -->
    <FlowerBloom />
    <!-- <v-col cols="3">
          <Sidebar />
        </v-col> -->
    <!-- <v-col cols="9">
          <DashboardContent />
        </v-col> -->
    <!-- </v-container> -->
  </v-app>
</template>

<script>
import FlowerBloom from "./components/FlowerBloom.vue";

export default {
  components: { FlowerBloom },
};
</script>

<style>
.dashboard {
  background: linear-gradient(135deg, #f5ebe0, #f5d3c8);
  min-height: 100vh;
  color: #5a4036;
  font-family: "Roboto", sans-serif;
}
</style>
