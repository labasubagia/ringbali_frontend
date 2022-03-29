<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import Hero from '@/components/Hero.vue';
import { getAllCategory } from '@/api/category'
import { Category as ICategory } from '@/types/category'
import Category from '@/components/Category.vue';

const categories = ref<ICategory[]>([])
getAllCategory().then(data => categories.value = data)

</script>

<template>
  <MainLayout>
    <Hero />
    <div class="my-8">
      <div v-if="categories.length" class="container mx-auto px-8">
        <header class="my-8 text-3xl font-bold flex items-center justify-center">Categories</header>

        <Category :category="categories[0]" />

        <div class="md:grid md:grid-cols-2 mt-6 gap-6">
          <Category v-for="(c, i) in categories.slice(1, 3)" :index="i" :category="c" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
