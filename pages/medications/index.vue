<script setup lang="ts">
useHead({
  title: "Médicaments",
});

const { data, pending, error } = await useFetch("/api/medications");
</script>

<template>
  <div class="lg:w-2/4 md:w-3/4 m-auto">
    <p class="mb-8">Liste des médicaments :</p>
    <p v-if="pending">Chargement...</p>
    <p v-else-if="error" class="text-red-500">Une erreur est survenue.</p>
    <ul v-if="data" class="space-y-4">
      <li v-for="item in data" :index="item.id">
        <div class="border rounded-lg">
          <div class="p-4 flex flex-col">
            <p class="font-medium">{{ item.name }}</p>
            <MedicationTable :item="item"></MedicationTable>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
