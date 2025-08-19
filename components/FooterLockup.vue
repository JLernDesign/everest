<script setup>
const props = defineProps(["data"]);
const investors = useState("investors");
</script>

<template>
  <div class="footer-lockup relative z-0 overflow-hidden text-black s:z-1">
    <UITexture class="block s:hidden" />
    <UITexture class="bg-[position:0_bottom !top-[-26.6rem] hidden s:block" />
    <FooterJag />

    <!-- callout -->
    <GlobalCallout :data="data" />

    <div class="relative pb-[4rem] pt-[2.5rem] s:pb-6">
      <div class="p-side-mob s:p-side">
        <!-- brands -->
        <Brands
          v-if="investors"
          theme="dark"
          :data="investors"
          :scroll="false"
        />

        <!-- logo -->
        <NuxtLink
          :to="$localePath('/')"
          class="footer-logo mt-[3.5rem] block h-[5.3rem] w-[6.2rem] s:mt-[15rem] s:h-[8.1rem] s:w-[9.4rem]"
        >
          <IconLogo color="white" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
