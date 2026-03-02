<script setup>
const props = defineProps(["data"]);
const loaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 200);

  const theme = useState("theme");
  theme.value = "light";
});
</script>

<template>
  <Section
    class="mt-[7rem] bg-shadowblue pb-[2rem] s:pb-section-bot"
    :class="data.jaggedEdge && 's:mt-[26.6rem]'"
  >
    <UITexture />
    <FooterJag v-if="data.jaggedEdge" loc="top" />

    <!-- columns -->
    <div
      class="relative mx-auto flex max-w-base flex-col items-start justify-between text-white s:flex-row"
      ref="main"
    >
      <!-- left -->
      <div class="text w-full s:w-1/2 s:pr-[11.5rem]">
        <!-- eyebrow -->
        <div v-if="data.header.eyebrow" class="eyebrow mb-6">
          <h3
            class="font-helvb text-body-xsm-mob uppercase text-red s:text-body-xsm"
          >
            {{ data.header.eyebrow }}
          </h3>
        </div>

        <!-- header / intro -->
        <div class="has-break space-y-[2rem] s:space-y-[3.5rem]">
          <h1
            class="text font-barlow-cond text-xl-mob leading-xl -tracking-sm s:text-xl"
            v-html="formatText(data.header.headline)"
          ></h1>

          <div v-if="data.header.intro" class="max-w-[52rem]">
            <p v-html="formatText(data.header.intro)"></p>
          </div>

          <!-- cta buttons -->
          <div
            class="cta-group items-center justify-start pt-6 s:flex s:space-x-[5rem] max-s:space-y-8"
          >
            <CtaGroup
              v-if="data.header.cta"
              :data="data.header.cta.buttons"
              align="left"
              theme="light"
            />

            <!-- rep -->
            <div
              v-if="data.rep"
              class="author flex items-stretch space-x-6 divide-x-1 divide-white"
            >
              <img
                v-if="data.rep.photo"
                :src="data.rep.photo.url"
                alt=""
                class="w-[4rem] overflow-hidden rounded-full s:w-[5rem]"
              />
              <div class="flex items-center pl-6">
                <p
                  class="font-barlow-cond text-body-sm-mob uppercase text-white"
                >
                  {{ data.rep.name }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="data.intro" class="max-w-[52rem]">
            <p v-html="formatText(data.intro)"></p>
          </div>
        </div>
      </div>

      <!-- right (form) -->
      <div
        class="relative w-full overflow-hidden rounded-base-mob bg-shadowblue p-[2.5rem] text-white s:w-1/2 s:rounded-base s:p-[5rem] max-s:order-1 max-s:mt-[5rem] max-s:pb-[5rem]"
      >
        <!-- hubspot form -->
        <LandingFormBlock :data="data" loc="cta" />
        <!-- end hubspot form -->
      </div>
    </div>
  </Section>
</template>
