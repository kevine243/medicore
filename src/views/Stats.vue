<template>
  <div class="p-6 min-h-screen">
    <div
      class="topbar flex items-center justify-between bg-teal-50 px-4 py-4 rounded-md text-gray-700 mb-2"
    >
      <h1 class="text-xl font-bold">Analytics</h1>
      <router-link to="/" class="flex items-center">
        <i class="pi pi-arrow-left text-xl mr-2"></i>
        Back
      </router-link>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div class="bg-gray-50 p-4 rounded-lg shadow">
        <p class="text-sm text-gray-500">Patients</p>
        <p class="text-2xl font-bold">1,230</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg shadow">
        <p class="text-sm text-gray-500">Appointments</p>
        <p class="text-2xl font-bold">890</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg shadow">
        <p class="text-sm text-gray-500">Prescriptions</p>
        <p class="text-2xl font-bold">652</p>
      </div>
      <div class="bg-gray-50 p-4 rounded-lg shadow">
        <p class="text-sm text-gray-500">Monthly Revenue</p>
        <p class="text-2xl font-bold">$12,400</p>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-2">Weekly Patient Visits</h2>
        <canvas id="lineChart"></canvas>
      </div>

      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-semibold mb-2">Top Prescribed Medicines</h2>
        <canvas id="barChart"></canvas>
      </div>

      <div class="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2 w-96 mx-auto">
        <h2 class="text-lg font-semibold mb-2">Patient Gender Distribution</h2>
        <canvas id="pieChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

onMounted(() => {
  // Line Chart - Weekly Patients
  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Patients",
          data: [120, 190, 300, 250, 210, 340, 400],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
    },
  });

  // Bar Chart - Top Prescriptions
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: [
        "Paracetamol",
        "Ibuprofen",
        "Amoxicillin",
        "Aspirin",
        "Metformin",
      ],
      datasets: [
        {
          label: "Prescriptions",
          data: [300, 200, 250, 180, 150],
          backgroundColor: [
            "#10b981",
            "#3b82f6",
            "#6366f1",
            "#f59e0b",
            "#ef4444",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
    },
  });

  // Pie Chart - Gender Distribution
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: ["Male", "Female", "Other"],
      datasets: [
        {
          data: [55, 42, 3],
          backgroundColor: ["#3b82f6", "#ec4899", "#a855f7"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom" } },
    },
  });
});
</script>
