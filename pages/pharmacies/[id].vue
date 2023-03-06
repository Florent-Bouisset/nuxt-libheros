<script setup>
const route = useRoute();
const { data, pending, error } = await useFetch(
  `/api/pharmacies/${route.params.id}`
);

const currencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

useHead({
  title: data.value.name || "Detail pharmacie",
});
</script>

<template>
  <div class="lg:w-2/4 md:w-3/4 m-auto">
    <p v-if="pending">Chargement...</p>
    <p v-else-if="error" class="text-red-500">Une erreur est survenue.</p>
    <template v-else>
      <p class="mb-8">Produits en stock dans cette pharmacie :</p>
      <div class="flex flex-col sm:flex-row">
        <img
          :src="data.image"
          width="240"
          class="object-cover ratio-16-9 rounded-lg"
        />
        <div class="p-4">
          <p class="font-medium">{{ data.name }}</p>
          <p class="text-gray-500 pt-2">{{ data.road }} - {{ data.zipCode }}</p>
          <p class="text-gray-500 pt-2">{{ data.phone }}</p>
          <div class="block mt-4"></div>
        </div>
      </div>
      <hr class="my-6" />

      <div class="flex flex-col">
        <table>
          <thead>
            <tr>
              <th class="text-start">Médicament</th>
              <th class="text-end">Prix</th>
              <th class="text-end">Quantité en stock</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data.stock" :key="item.id">
              <td class="text-start">{{ item.name }}</td>
              <td class="text-end">
                {{ currencyFormatter.format(item.price) }}
              </td>
              <td class="text-end">
                <template v-if="item.stock > 0">{{ item.stock }}</template>
                <span v-else class="bg-red-400 rounded-full text-xs px-2 py-1"
                  >Indisponible</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <hr class="my-6" />
    <NuxtLink
      class="px-4 py-2 mt-6 bg-cyan-400 rounded-md inline-block"
      to="/pharmacies"
    >
      Retour à la liste des pharmacies
    </NuxtLink>
  </div>
</template>

<style scoped>
.ratio-16-9 {
  aspect-ratio: 16/9;
}
</style>
