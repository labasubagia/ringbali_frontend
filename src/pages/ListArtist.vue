<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { getAllArtist } from '@/api/artist'
import { IArtist } from '@/types/artist'

const artists = ref<IArtist[]>([])

const onLoad = async () => {
  artists.value = await getAllArtist()
}
onLoad()
</script>


<template>
  <MainLayout>
    <div class="container mx-auto mt-12">
      <div class="h-64 rounded-md overflow-hidden bg-cover bg-center"
        style="background-image: url('https://www.goodnewsfromindonesia.id/uploads/post/large-shutterstock-144841870-d726bb1ec151379cabad05978aeecf36.jpg')">
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2 class="text-2xl text-white font-semibold">The local Artist</h2>
            <p class="mt-2 text-gray-200">Diharapkan dengan adanya platform ini produk dapat dikenal lebih luas dan
              meningkatkan pendapatan dari pengrajin lokal yang terkena dampak pandemi.</p>
          </div>
        </div>
      </div>

      <div v-if="artists.length" class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        <div v-for="(v, i) in artists" :key="i" class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div class="bg-white shadow-lg transform duration-200 easy-in-out">
            <div class=" h-32 overflow-hidden">
              <img class="w-full" :src="v.attributes.backdrop.data.attributes.url" alt="backdrop" />
            </div>
            <div class="flex justify-center px-5 -mt-12">
              <img class="h-32 w-32 bg-white p-2 rounded-full " :src="v.attributes.profile.data.attributes.url"
                alt="profile" />
            </div>
            <div class="py-4">
              <div class="text-center px-14">
                <h2 class="text-gray-800 text-lg font-bold">{{ v.attributes.name }}</h2>
                <p class="text-sm mt-2 text-gray-600">{{ v.attributes.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
