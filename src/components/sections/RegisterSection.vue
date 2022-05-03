<template>
  <section class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
    <div class="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
      <div class="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
        <div class="box-border flex-1 text-center border-solid sm:text-left">
          <h2 class="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
            Never miss a post.
          </h2>
          <p class="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
            Register for a free account today.
          </p>
        </div>
        <router-link :to="{name: 'register-view'}" class="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-zinc-600 border border-zinc-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-zinc-700 hover:border-zinc-700 hover:text-white focus-within:bg-zinc-700 focus-within:border-zinc-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
          <span>Register Now </span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterSection"
}
</script>