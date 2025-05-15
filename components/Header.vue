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
  <div class="logo-main">
    <NuxtLink to="/">Logo</NuxtLink>
  </div>
  <header class="main">
    <!-- nav -->
  </header>
  <!-- mobile menu -->
</template>

<style scoped></style>
