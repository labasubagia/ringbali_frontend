<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue'
import { Product as IProduct } from '@/types/product'
import { getProduct } from '@/api/product';

const route = useRoute()
const product = ref<IProduct | null>(null)

const text = computed(() => {
  return `Halo saya tertarik dengan produk ${product?.value?.attributes?.name}`
})

const onLoad = async () => {
  product.value = await getProduct(<string>route.params.id)
}

onLoad()

</script>

<template>
  <MainLayout>
    <div class="py-12 bg-gray-100">
      <div class="container mx-auto md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div id="carouselCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                v-for="(img, i) in product?.attributes?.image.data ?? []"
                type="button"
                data-bs-target="#carouselCaptions"
                :data-bs-slide-to="i"
                :class="[i == 0 ? 'active' : null]"
                :aria-current="i == 0 ? 'true' : 'false'"
                :aria-label="`Slide ${i + 1}`"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div
                v-for="(img, i) in product?.attributes?.image.data ?? []"
                :class="['carousel-item float-left w-full', i == 0 ? 'active' : null]"
              >
                <img
                  :src="img?.attributes?.formats?.medium?.url"
                  class="block object-cover md:w-[35rem] md:h-[35rem] rounded"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="px-8 flex flex-col">
            <h1 class="text-2xl">{{ product?.attributes?.name }}</h1>
            <p
              class="text-xl font-bold text-yellow-500 mt-4"
            >Rp. {{ Number(product?.attributes?.price).toLocaleString('id') }}</p>
            <p class="mt-4">{{ product?.attributes?.description }}</p>
            <a
              class="mt-6 rounded-xl px-5 py-4 bg-green-300 text-xl text-center"
              target="_blank"
              :href="`https://wa.me/6289513080754?text=${text}`"
            >Buy Via Whatsapp</a>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
