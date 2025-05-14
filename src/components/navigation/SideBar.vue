<template>
  <div
    class="flex h-screen flex-col justify-between border-e border-gray-100 bg-white"
  >
    <div class="px-4 py-6">
      <span
        class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
      >
        Logo
      </span>

      <ul class="mt-6 space-y-4">
        <li class="my-2">
          <RouterLink
            to="/"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
            :class="{ 'bg-teal-400 text-white': $route.path === '/' }"
          >
            <i class="pi pi-user text-lg"></i>
            Patients
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/appointments"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
            :class="{ 'bg-teal-400 text-white': $route.path === '/appointments' }"
          >
            <i class="pi pi-calendar text-lg"></i>
            Appointments
          </RouterLink>
        </li>

        <li class="my-2">
          <RouterLink
            to="/analytics"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
            :class="{ 'bg-teal-400 text-white': $route.path === '/analytics' }"
          >
            <i class="pi pi-chart-bar text-lg"></i>
            Analytics
          </RouterLink>
        </li>

        <li class="my-2">
          <RouterLink
            to="/notifications"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
            :class="{
              'bg-teal-400 text-white': $route.path === '/notifications',
            }"
          >
            <i class="pi pi-bell text-lg"></i>
            Notifications
          </RouterLink>
        </li>

        <li class="my-2">
          <RouterLink
            to="/settings"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
            :class="{ 'bg-teal-400 text-white': $route.path === '/settings' }"
          >
            <i class="pi pi-cog text-lg"></i>
            Settings
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <RouterLink
        to="/profile"
        class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="size-10 rounded-full object-cover"
        />

        <div>
          <p class="text-xs">
            <strong class="block font-medium">Eric Frusciante</strong>

            <span> eric@frusciante.com </span>
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
