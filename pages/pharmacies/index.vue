<script setup lang="ts">
const { data, pending, error } = await useFetch("/api/pharmacies");

useHead({
  title: "Pharmacies",
});
</script>

<template>
  <div class="lg:w-2/4 md:w-3/4 m-auto">
    <p class="mb-8">Liste des pharmacies :</p>
    <p v-if="pending">Chargement...</p>
    <p v-else-if="error" class="text-red-500">Une erreur est survenue.</p>
    <ul v-if="data" class="space-y-4">
      <li v-for="item in data" :index="item._id">
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
                :to="`pharmacies/${item._id}`"
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
