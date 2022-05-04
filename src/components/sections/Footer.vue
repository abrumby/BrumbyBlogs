<template>
  <footer>
    <section class="bg-white">
      <div
        class="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8"
      >
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
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
        <div class="mt-8 flex justify-center space-x-6">
          <SocialLink
            icon="github"
            link-text="Github"
            social-url="https://github.com/abrumby"
          />
          <SocialLink
            icon="twitter"
            link-text="Twitter"
            social-url="https://twitter.com/adamBrumby"
          />
          <SocialLink
            icon="instagram"
            link-text="Instagram"
            social-url="https://www.instagram.com/adam.brumby/?hl=en-gb"
          />
          <SocialLink
            icon="linkedin"
            link-text="LinkedIn"
            social-url="https://www.linkedin.com/in/abrumby/"
          />
        </div>
        <p class="mt-8 text-center text-base leading-6 text-gray-400">
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
    FooterLink,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  },
};
</script>
