<script setup></script>

<template>
  <footer class="main relative min-h-[50rem]">
    <UITexture />

    <div class="content relative pt-[11rem]">
      <Brands
        theme="dark"
        :data="[
          '/logos/sutter-hill.svg',
          '/logos/altimeter.png',
          '/logos/redpoint.png',
          '/logos/dl.svg',
        ]"
      />

      <NuxtLink to="/" class="block w-[9.4rem] h-[8.1rem]">
        <IconLogo color="white" />
      </NuxtLink>
    </div>
    <p>© Copyright 2024</p>
  </footer>
</template>

<style scoped></style>
