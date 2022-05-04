<template>
  <section
    class="bg-white py-8 leading-7 text-gray-900 sm:py-12 md:py-16 lg:py-24"
  >
    <div class="mx-auto max-w-6xl border-solid px-4 px-10 lg:px-12">
      <div
        class="flex flex-col items-start border-0 border-gray-200 leading-7 text-gray-900 lg:flex-row lg:items-center"
      >
        <div class="box-border flex-1 border-solid text-center sm:text-left">
          <h2
            class="m-0 border-0 border-gray-200 text-left text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl"
          >
            Never miss a post.
          </h2>
          <p
            class="mt-2 border-0 border-gray-200 text-left text-xl text-gray-900 sm:text-2xl"
          >
            Register for a free account today.
          </p>
        </div>
        <router-link
          :to="{ name: 'register-view' }"
          class="mt-6 ml-0 inline-flex w-full cursor-pointer items-center justify-center rounded border border-solid border-zinc-600 bg-zinc-600 px-5 py-4 font-sans text-base leading-none text-white no-underline focus-within:border-zinc-700 focus-within:bg-zinc-700 focus-within:text-white hover:border-zinc-700 hover:bg-zinc-700 hover:text-white sm:text-lg md:w-auto md:text-xl lg:mt-0 lg:ml-6"
        >
          <span>Register Now </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterSection",
};
</script>
