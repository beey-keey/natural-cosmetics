<template>
  <v-card style="height: 100%">
    <v-layout style="height: 100%">
      <v-navigation-drawer
        style="background-color: #737a5d"
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item :prepend-avatar="logo" title="Rhodo beauty" nav>
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="users"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100%">
        <v-card style="height: 100%" background-color="edf3e9">
          <h3 style="display: flex; justify-content: center">Rhodo beauty</h3>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import logo from "@/assets/logo.jpg";
export default {
  data() {
    return {
      drawer: true,
      rail: true,
      logo,
    };
  },
};
</script>
