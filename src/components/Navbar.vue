<template>
  <nav id="header" class="w-full z-30 top-0 py-1 shadow-md">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
      <label for="menu-toggle" class="cursor-pointer md:hidden block">
        <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/">Home
              </router-link>
              <router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/products">
                Product</router-link>
              <router-link class="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/about">
                About</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#menu-toggle:checked+#menu {
  @apply block;
}
</style>
