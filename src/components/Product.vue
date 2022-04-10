<script setup lang="ts">
import { Product } from '@/types/product'

interface Props {
  product: Product
}

const { product } = defineProps<Props>()
</script>


<template>
  <router-link :to="`/products/${product.id}`">
    <div class="rounded overflow-hidden">
      <img
        class="object-fit"
        v-if="product.attributes.image.data.length"
        :src="product.attributes.image.data[0].attributes.formats.small.url"
        :alt="product.attributes.name"
      />
      <p class="mt-2 font-bold text-lg">{{ product.attributes.name }}</p>
      <p>Rp. {{ product.attributes.price.toLocaleString('id') }}</p>
    </div>
  </router-link>
</template>
