<template>
  <footer>
    <section class="bg-white">
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <div class="px-5 py-2">
            <FooterLink view-name="home-view" link-text="Home" />
          </div>
          <div class="px-5 py-2">
            <FooterLink view-name="blogs-view" link-text="Blogs" />
          </div>
          <div class="px-5 py-2">
            <FooterLink view-name="about-view" link-text="About" />
          </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <SocialLink icon="github" link-text="Github" social-url="https://github.com/abrumby" />
          <SocialLink icon="twitter" link-text="Twitter" social-url="https://twitter.com/adamBrumby" />
          <SocialLink icon="instagram" link-text="Instagram" social-url="https://www.instagram.com/adam.brumby/?hl=en-gb" />
          <SocialLink icon="linkedin" link-text="LinkedIn" social-url="https://www.linkedin.com/in/abrumby/" />
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          © 2022 Adam Brumby
        </p>
      </div>
    </section>
  </footer>
</template>

<script>
import FooterLink from "@/components/links/FooterLink";
import SocialLink from "@/components/links/SocialLink";
export default {
  name: "footer-vue",
  components: {
    SocialLink,
    FooterLink
  },
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  }
};
</script>