<template>
  <div>
    <div
      class="topbar flex items-center my-2 justify-between bg-teal-50 px-4 py-4 rounded-md text-gray-700"
    >
      <h1 class="text-xl font-bold">Appointments</h1>
      <router-link to="/" class="flex items-center">
        <i class="pi pi-arrow-left text-xl mr-2"></i>
        Back
      </router-link>
    </div>
    <div class="grid grid-cols-6 gap-4">
      <div class="calendar col-span-2">
        <div class="card flex justify-center">
          <DatePicker
            v-model="date"
            inline
            showWeek
            class="w-full sm:w-[30rem]"
          />
        </div>
      </div>
      <div class="appointments col-span-4">
        <div class="card">
          <DataTable
            v-model:filters="filters"
            v-model:selection="selectedPatients"
            :value="patients"
            paginator
            :rows="10"
            dataKey="id"
            filterDisplay="menu"
            :globalFilterFields="[
              'name',
              'sex',
              'disease',
              'doctor',
              'result',
              'email',
              'phone',
            ]"
          >
            <template #header>
              <div class="flex justify-between">
                <Button
                  type="button"
                  icon="pi pi-filter-slash"
                  label="Clear"
                  outlined
                  @click="clearFilter()"
                />
                <IconField>
                  <InputIcon>
                    <i class="pi pi-search" />
                  </InputIcon>
                  <InputText
                    v-model="filters['global'].value"
                    placeholder="Keyword Search"
                  />
                </IconField>
              </div>
            </template>
            <template #empty> No patients found. </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column header="Time" sortable style="min-width: 8rem" field="time">
              <template #body="{ data }">
                {{ data.time }}
              </template>
            </Column>
            <Column
              field="name"
              header="Name"
              sortable
              style="min-width: 14rem"
            >
              <template #body="{ data }">
                <router-link
                  :to="{ name: 'PatientDetail', params: { id: data.id } }"
                >
                  {{ data.name }}
                </router-link>
              </template>
              <template #filter="{ filterModel }">
                <InputText
                  v-model="filterModel.value"
                  type="text"
                  placeholder="Search by name"
                />
              </template>
            </Column>
            <Column field="age" header="Age" sortable style="min-width: 10rem">
              <template #body="{ data }">
                {{ data.age }}
              </template>
              <template #filter="{ filterModel }">
                <InputNumber v-model="filterModel.value" />
              </template>
            </Column>
            <Column field="sex" header="Sex" sortable style="min-width: 10rem">
              <template #body="{ data }">
                {{ data.sex }}
              </template>
              <template #filter="{ filterModel }">
                <InputText
                  v-model="filterModel.value"
                  type="text"
                  placeholder="Search by sex"
                />
              </template>
            </Column>
            <Column
              field="disease"
              header="Disease"
              sortable
              style="min-width: 14rem"
            >
              <template #body="{ data }">
                {{ data.disease }}
              </template>
              <template #filter="{ filterModel }">
                <InputText
                  v-model="filterModel.value"
                  type="text"
                  placeholder="Search by disease"
                />
              </template>
            </Column>
            <Column
              field="doctor"
              header="Doctor"
              sortable
              style="min-width: 14rem"
            >
              <template #body="{ data }">
                {{ data.doctor }}
              </template>
              <template #filter="{ filterModel }">
                <InputText
                  v-model="filterModel.value"
                  type="text"
                  placeholder="Search by doctor"
                />
              </template>
            </Column>
            <Column
              field="result"
              header="Result"
              sortable
              style="min-width: 12rem"
            >
              <template #body="{ data }">
                <Tag
                  :value="data.result"
                  :severity="getSeverity(data.result)"
                />
              </template>
              <template #filter="{ filterModel }">
                <Select
                  v-model="filterModel.value"
                  :options="results"
                  placeholder="Select One"
                  showClear
                >
                  <template #option="slotProps">
                    <Tag
                      :value="slotProps.option"
                      :severity="getSeverity(slotProps.option)"
                    />
                  </template>
                </Select>
              </template>
            </Column>
            <Column
              field="email"
              header="Email"
              sortable
              style="min-width: 14rem"
            >
              <template #body="{ data }">
                {{ data.email }}
              </template>
              <template #filter="{ filterModel }">
                <InputText
                  v-model="filterModel.value"
                  type="text"
                  placeholder="Search by email"
                />
              </template>
            </Column>
            <Column
              field="phone"
              header="Phone"
              sortable
              style="min-width: 14rem"
            >
              <template #body="{ data }">
                {{ data.phone }}
              </template>
              <template #filter="{ filterModel }">
                <InputText
                  v-model="filterModel.value"
                  type="text"
                  placeholder="Search by phone"
                />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Tag from "primevue/tag";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Select from "primevue/select";
import DatePicker from "primevue/datepicker";
import { useRouter } from "vue-router";

const router = useRouter();

const date = ref(null); // Initialize the date model
const patients = ref();
const selectedPatients = ref();
const filters = ref();
const results = ref(["Stable", "Critical", "Improving", "Deteriorating"]);

const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 12) + 1; // Random hour between 1 and 12
  const minutes = Math.floor(Math.random() * 60); // Random minute between 0 and 59
  const amPm = Math.random() < 0.5 ? "AM" : "PM"; // Randomly choose AM or PM
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${amPm}`;
};

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/patients");
    console.log("Full response:", response); // Log the full response
    if (response.data) {
      patients.value = response.data.map((patient) => ({
        ...patient,
        time: getRandomTime(), // Add a random time to each patient
      }));
      console.log("Patients data:", patients.value); // Log the patients data
    } else {
      console.error("Unexpected response structure:", response);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    age: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    sex: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    disease: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    doctor: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    result: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    email: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    phone: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
  };
};

initFilters();

const clearFilter = () => {
  initFilters();
};

const getSeverity = (result) => {
  switch (result) {
    case "Stable":
      return "success";
    case "Critical":
      return "danger";
    case "Improving":
      return "info";
    case "Deteriorating":
      return "warn";
    default:
      return null;
  }
};
</script>
