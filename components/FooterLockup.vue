<script setup>
const props = defineProps(["data"]);
const investors = useState("investors");
</script>

<template>
  <div class="footer-lockup relative text-black">
    <UITexture />

    <!-- callout -->
    <GlobalCallout :data="data" />

    <div class="relative pb-6 pt-[2.5rem]">
      <div class="p-side-mob s:p-side">
        <!-- brands -->
        <Brands v-if="investors" theme="dark" :data="investors" />

        <!-- logo -->
        <NuxtLink to="/" class="mt-[15rem] block h-[8.1rem] w-[9.4rem]">
          <IconLogo color="white" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
