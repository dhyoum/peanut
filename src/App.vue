<template>
  <v-app>
    <AppBar @drawer="drawer = !drawer" />
    <NavBar v-model="drawer" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>
