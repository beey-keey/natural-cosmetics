<template>
  <v-navigation-drawer app class="nude-sidebar">
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.text" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "Dashboard", icon: "mdi-view-dashboard" },
        { text: "Products", icon: "mdi-lipstick" },
        { text: "Orders", icon: "mdi-cart" },
        { text: "Customers", icon: "mdi-account-group" },
      ],
    };
  },
};
</script>

<style>
.nude-sidebar {
  background-color: #f5d3c8;
  color: #5a4036;
}
</style>
