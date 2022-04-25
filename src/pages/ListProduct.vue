<script setup lang="ts">
import { ref, watch } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { getAllCategory } from '@/api/category'
import { getFilteredProducts } from '@/api/product'
import { Product as IProduct } from '@/types/product';
import { Category as ICategory } from '@/types/category';
import Product from '@/components/Product.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const products = ref<IProduct[]>([])
const categories = ref<ICategory[]>([])

const filterKey = ref('')
const filterCategoryId = ref('')

const loadProducts = async () => {
  const key = route.query.key ? String(route.query.key) : null
  const categoryId = route.query.categoryId ? Number(route.query.categoryId) : null
  products.value = await getFilteredProducts(key, categoryId)
}

const loadCategories = async () => {
  categories.value = await getAllCategory()
}

const filterForm = () => {
  router.push({ path: route.path, query: { key: filterKey.value, categoryId: filterCategoryId.value } })
}

watch(() => route.query, loadProducts, { deep: true, immediate: true })

const onLoad = async () => {
  loadProducts()
  loadCategories()
}

onLoad()


</script>

<template>
  <MainLayout>

    <div class="container mx-auto mt-12">
      <header class="my-4 text-3xl font-bold flex items-center justify-center">Produk</header>

      <form class="flex flex-col md:flex-row p-4 justify-center" @submit.prevent="filterForm">
        <input class="border-2 p-1 px-2 rounded mt-2 border-gray-300 md:mr-2" type="text" v-model="filterKey"
          placeholder="Cari Nama Barang">

        <select class="bg-gray-100 p-1 px-2 mt-2 border-gray-300 border-2 rounded md:mr-2" v-model="filterCategoryId">
          <option value="">All</option>
          <option v-for="(c, i) in categories" :key="i" :value="c.id">{{ c.attributes.name }}</option>
        </select>

        <button
          class="rounded border-2 bg-blue-400 mt-2 p-1 px-2 text-white hover:bg-blue-500 transition-all ease-out duration-300">
          Apply Filter
        </button>
      </form>

      <div v-if="products.length" class="md:grid md:grid-cols-4 mt-6 gap-6">
        <Product v-for="(p, i) in products" :product="p" :index="i" />
      </div>
      <div v-else>
        <p class="text-xl text-center text-gray-400 p-16">Tidak Ada Barang</p>
      </div>

    </div>
  </MainLayout>
</template>
