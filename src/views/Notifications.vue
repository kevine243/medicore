<template>
  <div class="p-6 min-h-screen">
    <div
      class="topbar flex items-center justify-between bg-teal-50 px-4 py-4 rounded-md text-gray-700 mb-2"
    >
      <h1 class="text-xl font-bold">Notifications</h1>
      <router-link to="/" class="flex items-center">
        <i class="pi pi-arrow-left text-xl mr-2"></i>
        Back
      </router-link>
    </div>

    <div class="space-y-4">
      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="bg-white border-l-4 p-4 rounded shadow flex items-start space-x-4"
        :class="{
          'border-blue-500': notification.type === 'info',
          'border-green-500': notification.type === 'success',
          'border-yellow-500': notification.type === 'warning',
          'border-red-500': notification.type === 'error',
        }"
      >
        <div class="text-2xl">
          <span v-if="notification.type === 'info'">ℹ️</span>
          <span v-else-if="notification.type === 'success'">✅</span>
          <span v-else-if="notification.type === 'warning'">⚠️</span>
          <span v-else-if="notification.type === 'error'">❌</span>
        </div>

        <div>
          <h2 class="font-semibold text-gray-800">{{ notification.title }}</h2>
          <p class="text-gray-600 text-sm">{{ notification.message }}</p>
          <p class="text-xs text-gray-400 mt-1">{{ notification.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const notifications = ref([
  {
    title: "New Appointment Scheduled",
    message: "Dr. Smith will see John Doe at 3:30 PM today.",
    type: "info",
    time: "10 minutes ago",
  },
  {
    title: "Prescription Approved",
    message: "Paracetamol for Jane Doe has been approved.",
    type: "success",
    time: "30 minutes ago",
  },
  {
    title: "Low Inventory Alert",
    message: "Ibuprofen stock is below the safety threshold.",
    type: "warning",
    time: "1 hour ago",
  },
  {
    title: "Lab Result Delay",
    message:
      "Results for patient #A123 will be delayed due to system maintenance.",
    type: "error",
    time: "2 hours ago",
  },
]);
</script>
