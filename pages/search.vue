<script setup>
const route = useRoute();
const q = route.query.q;
console.log(q);

const loaded = ref(false);

onMounted(() => {
  const theme = useState("theme");
  theme.value = "light";

  setTimeout(() => {
    loaded.value = true;
  }, 200);
});
</script>

<template>
  <div class="bg-jaffa">
    <!-- basic hero -->
    <BasicHero :data="{ headline: 'Search Results' }" class="max-s:pb-[4rem]" />

    <!-- content -->
    <Section class="!pt-0 pb-section-bot-mob s:pb-section-bot">
      <div
        class="article bullets mx-auto s:min-h-[80rem] s:max-w-[865px] [&_*+*]:mt-[1.8rem] [&_*+*]:s:mt-[3.2rem] [&_*+h2]:mt-[6rem] [&_*+h2]:s:mt-[9rem] [&_a:hover]:text-red [&_a]:break-all [&_a]:underline [&_a]:underline-offset-[.25rem] [&_h2]:font-helvb [&_h2]:text-body-md-mob [&_h2]:s:text-body-md [&_h3+p]:mt-[.25rem] [&_h3+p]:s:mt-[.5rem] [&_h3]:font-helvb [&_ul]:space-y-[1rem]"
      ></div>
    </Section>

    <!--  <FooterLockup /> -->

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>
