<script lang="ts" setup>
import MainLayout from "@/layouts/MainLayout.vue";

interface IPerson {
  name: string;
  image: string;
  role: string;
}

const teams: IPerson[] = [
  {
    image:
      "https://res.cloudinary.com/dvn1e68uc/image/upload/v1657774426/cikal_bf8c5e8b89.jpg?updated_at=2022-07-14T04:53:48.630Z",
    name: "Cikal",
    role: "Hustler",
  },
  {
    image:
      "https://res.cloudinary.com/dvn1e68uc/image/upload/v1657774430/ardi_crop_371d19a8b6.png?updated_at=2022-07-14T04:53:54.798Z",
    name: "Ardi",
    role: "Hipster",
  },
  {
    image:
      "https://res.cloudinary.com/dvn1e68uc/image/upload/v1657774414/nindya_crop_8eb5a06009.jpg?updated_at=2022-07-14T04:53:37.293Z",
    name: "Nindya",
    role: "Hipster",
  },
  {
    image:
      "https://res.cloudinary.com/dvn1e68uc/image/upload/v1657778108/alit_28a944ebca.jpg?updated_at=2022-07-14T05:55:09.400Z",
    name: "Alit",
    role: "Hacker",
  },
  {
    image:
      "https://res.cloudinary.com/dvn1e68uc/image/upload/v1657775262/laba_crop_17cc62b2c0.jpg?updated_at=2022-07-14T05:07:43.410Z",
    name: "Laba",
    role: "Hacker",
  },
];
</script>

<template>
  <MainLayout>
    <div class="max-w-screen-xl px-4 mx-auto md:mt-12 md:mb-8 md:px-8">
      <div class="mb-10 md:mb-16">
        <h2 class="text-2xl font-bold text-center mb-4">RingBali</h2>
        <p class="max-w-screen mx-auto text-center text-gray-500 md:text-lg">
          Ring memiliki arti “cincin” yang identik dengan perhiasan dan
          kerajinan handmade. Atau bisa juga dalam bahasa Bali ring juga berarti
          “dari”, Warna Coklat keemasan memberikan kesan hangat, nyaman dan
          aman. jadi nama RingBali bisa diartikan sebagai kerajinan handmade
          yang dibuat oleh pengrajin lokal yang ada di Bali.
        </p>
      </div>
      <div class="mb-10 md:mb-16">
        <h2 class="text-2xl font-bold text-center mb-4">Goals</h2>
        <p class="max-w-screen mx-auto text-center text-gray-500 md:text-lg">
          Pemasaran kerajinan di bali saat ini hanya sebatas penjualan di toko
          atau gerai yang ada di lokasi wisata, apalagi dimasa pandemi Covid-19
          ini kedatangan wisatawan sangat berkurang ke Bali sehingga sangat
          berdampak kepada pengrajin yang membuat oleh-oleh handmade khas Bali.
          Untuk membantu Pengrajin, RingBali situs E-Commerce yang menyalurkan
          produk kerajinan Handmade yang langsung diambil dari pengrajin lokal
          sehingga membantu meningkatkan penjualan dari pengrajin.
        </p>
      </div>
      <div class="mb-10 md:mb-16">
        <h2 class="text-2xl font-bold text-center mb-4">Our Team</h2>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <div v-for="(person, i) in teams" :key="i" class="max-w-sm rounded-lg">
          <div class="flex flex-col items-center pb-10">
            <img
              class="mb-3 object-cover w-48 h-48 rounded-full shadow-lg border-8"
              :src="
                person.image
                  ? person.image
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9AMnBfcU5oTPTWxB1BLfEB16DgLnMFQ8DVreCbY&s=0'
              "
              :alt="person.name"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {{ person.name }}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              person.role
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
