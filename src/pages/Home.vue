<script setup lang="ts">
import { ref } from "vue";
import { getAllCategory } from "@/api/category";
import { Category as ICategory } from "@/types/category";
import { Product as IProduct } from "@/types/product";
import { getAllProducts } from "@/api/product";
import MainLayout from "@/layouts/MainLayout.vue";
import Hero from "@/components/Hero.vue";
import Category from "@/components/Category.vue";
import Product from "@/components/Product.vue";

const categories = ref<ICategory[]>([]);
const products = ref<IProduct[]>([]);

const onLoad = async () => {
  categories.value = await getAllCategory();
  products.value = await getAllProducts();
};

onLoad();
</script>

<template>
  <MainLayout>
    <Hero />
    <div class="p-4">
      <!-- Category Section -->
      <div v-if="categories.length" class="container mx-auto">
        <header
          class="my-8 text-3xl font-bold flex items-center justify-center"
        >
          Kategori
        </header>
        <Category :category="categories[0]" />
        <div class="md:grid md:grid-cols-2 mt-6 gap-6">
          <Category
            v-for="(c, i) in categories.slice(1, 3)"
            :category="c"
            :index="i"
          />
        </div>
      </div>

      <!-- Product Section -->
      <div v-if="products.length" class="container mx-auto mt-12">
        <header
          class="my-8 text-3xl font-bold flex items-center justify-center"
        >
          Produk
        </header>
        <div class="md:grid md:grid-cols-4 mt-6 gap-6">
          <Product
            v-for="(p, i) in products.slice(0, 8)"
            :product="p"
            :index="i"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
