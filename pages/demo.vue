<script setup>
import { demoQuery } from "~/assets/graphql/queries/demo.js";

const formLoaded = ref(false);
const loaded = ref(false);
const { data } = await useGraphqlQuery({
  query: demoQuery.loc.source.body,
});
const page = data.value.bookDemo;
const locations = data.value.global.locations;
const logos = data.value.bookDemo.featuredLogos;

onMounted(() => {
  window.addEventListener("message", (event) => {
    if (
      event.data.type === "hsFormCallback" &&
      event.data.eventName === "onFormReady"
    ) {
      nextTick(() => {
        formLoaded.value = true;
      });
    }
  });

  if (page.hubspotId) {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48112164",
          formId: page.hubspotId,
          target: "#hubspotForm",
          css: "",
        });
      }
    });
  }

  setTimeout(() => {
    loaded.value = true;
  }, 200);

  const theme = useState("theme");
  theme.value = "light";
});
</script>

<template>
  <div class="bg-jaffa">
    <Seo :data="page.seo" />

    <Section :hero="true" class="max-s:pt-hero-mob-lg">
      <header class="text-center">
        <h1
          class="-tracking-md-mob font-barlow-cond-semibold text-xxl-mob uppercase leading-xxl s:text-xxl s:-tracking-md"
        >
          {{ page.headline }}
        </h1>
        <!-- <h2
          class="block text-body-md-mob leading-md s:hidden max-s:pt-[2.5rem] max-s:text-center"
        >
          {{ page.intro }}
        </h2> -->
      </header>
    </Section>

    <!-- contents -->
    <Section class="pb-section-bot-mob s:pb-section-bot-lg max-s:pt-[3rem]">
      <div class="mx-auto max-w-base">
        <!-- columns -->
        <div class="flex flex-col items-start justify-between s:flex-row">
          <!-- text -->
          <div class="w-full s:w-[38%] max-s:order-2 max-s:mt-side">
            <h2 class="text-body-md-mob leading-md s:text-body-md">
              {{ page.intro }}
            </h2>
            <p
              v-if="page.byline"
              class="mt-[2rem] text-body-sm-mob leading-sm s:text-body-sm"
            >
              {{ page.byline }}
            </p>

            <hr class="text-black s:my-side max-s:my-[2.5rem]" />

            <!-- contact -->
            <div
              v-if="locations"
              class="text-body-sm-mob leading-sm s:text-body-sm"
            >
              <h3 class="font-barlow-cond text-[2.1rem] uppercase text-red">
                Contact
              </h3>
              <div
                class="relative mt-[1rem] space-y-[1.5rem] s:mt-[2rem] s:columns-2 s:space-y-[2rem]"
              >
                <div v-for="item in locations">
                  <span class="font-helvh">{{ item.location }}</span
                  ><br />
                  <span v-html="formatText(item.address)"></span>
                </div>
              </div>
            </div>

            <hr class="text-black s:my-side max-s:my-[2.5rem]" />

            <!-- brands -->
            <div
              v-if="logos"
              class="mt-[4rem] w-full overflow-hidden [&_h4]:!text-left"
            >
              <Brands theme="light" :data="logos" :scroll="true" />
            </div>
          </div>

          <!-- form -->
          <div
            class="relative w-full overflow-hidden rounded-base-mob p-[2.5rem] text-white s:w-1/2 s:rounded-base s:p-[5rem] max-s:order-1 max-s:pb-[5rem]"
          >
            <UITexture />

            <!-- hubspot form -->
            <div class="form" :class="!formLoaded && 'off min-h-[80.4rem]'">
              <div
                id="hubspotForm"
                v-once
                class="form [&_.hs-input]:leading-normal [&_input[type='submit']:hover]:text-lime [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.hs-form-field]:flex-1 [&_.hs-form-field_label]:text-body-sm-mob [&_.hs-form-field_label]:text-white [&_.hs-form-field_label]:opacity-75 [&_.hs-input]:mt-3 [&_.hs-input]:h-[5rem] [&_.hs-input]:w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-whiteline [&_.hs-input]:bg-shadowblue [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:text-white [&_.hs-input]:outline-none [&_.hs-input]:s:mt-3 s:[&_.hs-input]:!px-[1.875rem] [&_fieldset]:w-full [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_form]:space-y-[3rem] [&_input[type='checkbox']]:mt-0 [&_input[type='checkbox']]:h-auto [&_input[type='submit']]:mt-[1rem] [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-btn [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm-mob [&_input[type='submit']]:text-skyblue [&_select]:appearance-none [&_textarea]:!h-[13rem] [&_textarea]:!resize-none"
              ></div>
            </div>
            <!-- end hubspot form -->
          </div>
        </div>
      </div>
    </Section>

    <FlexibleBlocks :data="page.flexibleContent.modules" template="demo" />

    <FooterLockup :data="page.footerCallout" />

    <!-- cover image for fade in -->
    <LoadCover :loaded="loaded" color="bg-jaffa" />
  </div>
</template>

<style scoped>
.form {
  opacity: 1;
  transition: opacity 0.25s linear;
  &.off {
    opacity: 0;
  }
}
</style>
