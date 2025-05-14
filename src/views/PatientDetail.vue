<template>
  <div class="px-10">
    <div
      class="topbar flex items-center justify-between bg-teal-50 px-4 py-4 rounded-md text-gray-700"
    >
      <h1 class="text-xl font-bold">Patient Detail</h1>
      <router-link to="/" class="flex items-center">
        <i class="pi pi-arrow-left text-xl mr-2"></i>
        Back
      </router-link>
    </div>
    <div class="patient-detail py-4" v-if="patient.name">
      <div class="patient-top flex justify-between items-center">
        <div class="left-data flex items-center gap-4">
          <img
            :src="`https://i.pravatar.cc/150?img=${Math.floor(
              Math.random() * 70
            )}`"
            alt="Patient Image"
            class="rounded-full object-cover w-24 h-24"
          />
          <div class="text">
            <h1 class="text-2xl font-bold">{{ patient.name }}</h1>
            <p class="text-gray-500 text-xs">
              {{ patient.age }} years old, ID: 00000000{{ patient.id }},
              {{ patient.sex }}
            </p>
          </div>
        </div>
        <div class="right-data">
          <div class="top-button flex gap-4">
            <button class="rounded-lg bg-teal-400 text-white px-6 py-2">
              Book Appointment
            </button>
            <button class="rounded-lg border border-gray-300 px-6 py-2">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Loading patient data...</p>
    </div>
    <div class="shadow-md">
      <div class="detail-box flex gap-4">
        <div
          class="phone-numberbox rounded-lg bg-gray-50 p-4 w-[33.33%] shadow-md"
        >
          <div class="p-2 text-gray-600">
            <i class="pi pi-phone"></i>
            Phone Number
          </div>
          <span class="font-semibold">{{ patient.phone }}</span>
        </div>
        <div
          class="phone-numberbox rounded-lg bg-gray-50 p-4 w-[33.33%] shadow-md"
        >
          <div class="p-2 text-gray-600">
            <i class="pi pi-envelope"></i>
            Email
          </div>
          <span class="font-semibold">{{ patient.email }}</span>
        </div>
        <div
          class="phone-numberbox rounded-lg bg-gray-50 p-4 w-[33.33%] shadow-md"
        >
          <div class="p-2 text-gray-600">
            <i class="pi pi-plus"></i>
            Disease
          </div>
          <span class="font-semibold">{{ patient.disease }}</span>
        </div>
      </div>
    </div>

    <div class="card pt-10">
      <Tabs value="0">
        <TabList>
          <Tab value="0">Patient History</Tab>
          <Tab value="1">Diagnosis</Tab>
          <Tab value="2">Treatment</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0">
              <strong>Patient History:</strong> The patient has a history of
              hypertension and type 2 diabetes. Regular check-ups have been
              scheduled every three months to monitor blood pressure and glucose
              levels. The patient has been on medication for both conditions for
              the past five years.
            </p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">
              <strong>Diagnosis:</strong> The patient was diagnosed with
              hypertension in 2018 and type 2 diabetes in 2020. Recent lab
              results indicate that blood pressure remains elevated, and HbA1c
              levels are slightly above the target range. The patient is advised
              to continue with the current medication and to schedule a
              follow-up appointment.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0">
              <strong>Treatment:</strong> The treatment plan includes a
              combination of antihypertensive medication and oral hypoglycemic
              agents. The patient is also advised to follow a low-sodium,
              low-sugar diet and to engage in regular physical activity.
              Lifestyle modifications and adherence to the prescribed medication
              regimen are crucial for managing the conditions effectively.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

// Patient data
const patient = ref({});
const route = useRoute();

onMounted(async () => {
  try {
    const id = route.params.id; // Get the ID from the route parameters
    console.log("Patient ID:", id); // Log the ID to ensure it is correct
    const response = await axios.get(`http://localhost:3000/patients/${id}`);
    patient.value = response.data;
    console.log("Patient data:", patient.value); // Log the patient data
  } catch (error) {
    console.error("Error fetching patient data:", error);
    // Optionally, set an error message to display to the user
  }
});
</script>
