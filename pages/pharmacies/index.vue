<script setup>
import PharmaciesList from "../../pharmacies.json";
</script>

<template>
  <div class="lg:w-2/4 md:w-3/4 m-auto">
    <p class="mb-8">Liste des pharmacies:</p>
    <ul class="space-y-4">
      <li v-for="(item, key) in PharmaciesList">
        <div class="border rounded-lg flex flex-col sm:flex-row">
          <img
            :src="item.image"
            width="240"
            class="object-cover ratio-16-9 rounded-lg"
          />
          <div class="p-4">
            <p class="font-medium">{{ item.name }}</p>
            <p class="text-gray-500 pt-2">
              {{ item.road }} - {{ item.zipCode }}
            </p>
            <p class="text-gray-500 pt-2">{{ item.phone }}</p>
            <div class="block mt-4">
              <NuxtLink
                class="px-4 py-2 bg-cyan-400 rounded-md inline-block"
                :to="`pharmacies/${item.id}`"
              >
                Consulter les stocks
              </NuxtLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.ratio-16-9 {
  aspect-ratio: 16/9;
}
</style>
