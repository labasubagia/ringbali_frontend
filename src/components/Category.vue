<script setup lang="ts">
import { Category } from '@/types/category'

interface Props {
  category: Category
}

const { category } = defineProps<Props>()
</script>

<template>
  <router-link :to="`/products?categoryId=${category.id}`">
    <div class="w-full h-64 mt-8 rounded-md overflow-hidden bg-cover bg-center md:mt-0"
      :style="`background-image: url(${category.attributes.image?.data.attributes.formats.small.url})`">
      <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div class="px-10 max-w-xl">
          <h2 class="text-2xl text-white font-semibold">{{ category.attributes.name }}</h2>
          <p class="mt-2 text-gray-200">{{ category.attributes.description }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
