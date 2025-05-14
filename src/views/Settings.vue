<template>
  <div class="p-6 min-h-screen">
    <div
      class="topbar flex items-center justify-between bg-teal-50 px-4 py-4 rounded-md text-gray-700 mb-2"
    >
      <h1 class="text-xl font-bold">Settings</h1>
      <router-link to="/" class="flex items-center">
        <i class="pi pi-arrow-left text-xl mr-2"></i>
        Back
      </router-link>
    </div>

    <div class="space-y-6">
      <!-- Profile Section -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          Profile Settings
        </h2>
        <div class="space-y-4">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-600"
              >Username</label
            >
            <input
              id="username"
              type="text"
              v-model="settings.username"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-600"
              >Email Address</label
            >
            <input
              id="email"
              type="email"
              v-model="settings.email"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <!-- Password Section -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          Password Settings
        </h2>
        <div class="space-y-4">
          <div>
            <label
              for="current-password"
              class="block text-sm font-medium text-gray-600"
              >Current Password</label
            >
            <input
              id="current-password"
              type="password"
              v-model="settings.currentPassword"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your current password"
            />
          </div>
          <div>
            <label
              for="new-password"
              class="block text-sm font-medium text-gray-600"
              >New Password</label
            >
            <input
              id="new-password"
              type="password"
              v-model="settings.newPassword"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a new password"
            />
          </div>
          <div>
            <label
              for="confirm-password"
              class="block text-sm font-medium text-gray-600"
              >Confirm Password</label
            >
            <input
              id="confirm-password"
              type="password"
              v-model="settings.confirmPassword"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your new password"
            />
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          Notification Settings
        </h2>
        <div class="flex items-center space-x-4">
          <label
            for="email-notifications"
            class="text-sm font-medium text-gray-600"
            >Email Notifications</label
          >
          <input
            id="email-notifications"
            type="checkbox"
            v-model="settings.emailNotifications"
            class="w-5 h-5 text-blue-500 rounded focus:outline-none"
          />
        </div>
        <div class="flex items-center space-x-4 mt-4">
          <label
            for="sms-notifications"
            class="text-sm font-medium text-gray-600"
            >SMS Notifications</label
          >
          <input
            id="sms-notifications"
            type="checkbox"
            v-model="settings.smsNotifications"
            class="w-5 h-5 text-blue-500 rounded focus:outline-none"
          />
        </div>
      </div>

      <!-- Save Changes Button -->
      <div class="flex justify-end mt-6">
        <button
          @click="saveSettings"
          class="px-6 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-600 transition-all "
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const settings = ref({
  username: "",
  email: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  emailNotifications: false,
  smsNotifications: false,
});

const saveSettings = () => {
  console.log("Settings saved:", settings.value);
  // You can handle the save logic here (e.g., send the data to an API)
};
</script>
