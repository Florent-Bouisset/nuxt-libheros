<script setup lang="ts">
import { MedicationAvailability } from "@/types";

const props = defineProps<{ item: MedicationAvailability }>();
const sortByProperty = ref<"price" | "stock">("price");
const sortDirection = ref("asc");

const toggleSortDirection = () => {
  sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
};
const sortBy = (property: "price" | "stock") => {
  if (property === sortByProperty.value) {
    toggleSortDirection();
  } else {
    sortDirection.value = "asc";
    sortByProperty.value = property;
  }
};

const currencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

const sortedData = computed(() => {
  return props.item.availability.sort((a, b) => {
    if (sortDirection.value === "asc") {
      return b[sortByProperty.value] - a[sortByProperty.value];
    } else {
      return a[sortByProperty.value] - b[sortByProperty.value];
    }
  });
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th class="text-start">Pharmacie</th>
        <th @click="sortBy('price')">
          <div class="flex justify-end">
            <span>Prix</span>
            <img
              src="/arrow-downward-rounded.svg"
              class="ml-1 transition-transform"
              :class="{
                'rotate-180': sortDirection === 'asc',
                'opacity-0 hover:opacity-50': sortByProperty !== 'price',
              }"
            />
          </div>
        </th>
        <th @click="sortBy('stock')">
          <div class="flex justify-end">
            <span>Stock</span>
            <img
              src="/arrow-downward-rounded.svg"
              class="ml-1 transition-transform"
              :class="{
                'rotate-180': sortDirection === 'asc',
                'opacity-0 hover:opacity-50': sortByProperty !== 'stock',
              }"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sortedData" :key="row.id">
        <td class="text-start">{{ row.name }}</td>
        <td class="text-end">
          {{ currencyFormatter.format(row.price) }}
        </td>
        <td class="text-end">
          <template v-if="row.stock > 0">{{ row.stock }}</template>
          <span v-else class="bg-red-400 rounded-full text-xs px-2 py-1"
            >Indisponible</span
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
