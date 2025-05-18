<script setup>
const props = defineProps(['theme']);
const sticky = ref(false);

const setTheme = () => {
  // manual set
  if (props.theme) {
    theme.value = props.theme;
  }
};

onMounted(() => {
  setTheme();

  // sticky nav
  useEventListener(window, 'scroll', () => {
    if (window.scrollY > 0) {
      sticky.value = true;
    } else {
      sticky.value = false;
    }
  });
});

defineExpose({
  setTheme,
});
</script>

<template>
  <!-- logo -->
  <div class="logo-main absolute p-side">
    <NuxtLink to="/" class="block w-[9.4rem] h-[8.1rem]">
      <IconLogo />
    </NuxtLink>
  </div>

  <header class="main">
    <!-- nav -->
    <div class="w-full grid justify-center pt-[7.6rem]">
      <Nav type="main" />
    </div>

    <!-- cta / login -->
    <div class="absolute right-0 top-0 p-side">
      <CtaBtn>Try Everest</CtaBtn>
    </div>
  </header>

  <!-- mobile menu -->
</template>

<style scoped></style>
