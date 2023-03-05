<script setup></script>

<template>
  <header class="flex justify-center">
    <nav class="py-8">
      <ul>
        <li>
          <NuxtLink
            to="/"
            class="px-6 py-2 rounded-full"
            active-class="bg-cyan-300"
            >Accueil</NuxtLink
          >
          <NuxtLink
            to="/pharmacies"
            class="px-6 py-2 rounded-full"
            active-class="bg-cyan-300"
            >Pharmacies</NuxtLink
          >
          <NuxtLink
            to="/medications"
            class="px-6 py-2 rounded-full"
            active-class="bg-cyan-300"
            >Médicaments</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
