<script setup>
import { IconChevron } from '#components';
</script>

<template>
  <footer class="main relative">
    <UITexture />

    <!-- main content -->
    <div class="relative pt-[11rem]">
      <div class="p-side-mob s:p-side">
        <!-- brands -->
        <Brands
          theme="dark"
          :data="[
            '/logos/sutter-hill.svg',
            '/logos/altimeter.png',
            '/logos/redpoint.png',
            '/logos/dl.svg',
          ]"
        />

        <!-- logo -->
        <NuxtLink to="/" class="block w-[9.4rem] h-[8.1rem]">
          <IconLogo color="white" />
        </NuxtLink>
      </div>

      <!-- footer details -->
      <div class="bg-shadowblue p-side-mob s:p-side relative">
        <UIJagEdge color="fill-shadowblue" />

        <!-- links -->
        <div class="group">
          <!-- title -->
          <h3 class="uppercase text-red font-barlow-cond text-[2.1rem]">
            Explore EVEREST
          </h3>

          <!-- menu -->
          <FooterMenu />
        </div>

        <!-- legal -->
        <div class="legal text-body-xsm text-white mt-[15rem]">
          <p>© 2025 Everest Systems, Inc</p>
        </div>

        <!-- close footer details -->
      </div>

      <!-- close content -->
    </div>
  </footer>
</template>

<style scoped></style>
