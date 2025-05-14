<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/navigation/SideBar.vue";

</script>

<template>
  <main class="grid grid-cols-5 gap-4">
    <header class="col-span-1">
      <div class="wrapper">
        <SideBar />
      </div>
    </header>
    <div class="body col-span-4 py-1 rounded-md">
      <RouterView />
    </div>
  </main>
</template>
