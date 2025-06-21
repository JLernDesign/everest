<script setup>
import { demoQuery } from "~/assets/graphql/queries/demo.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: demoQuery.loc.source.body,
});
const page = data.value.bookDemo;
const form_id = "5350cf07-c779-4320-9bd6-a3ecc0bef59f";

onMounted(() => {
  window.addEventListener("message", (event) => {
    if (
      event.data.type === "hsFormCallback" &&
      event.data.eventName === "onFormReady"
    ) {
      nextTick(() => {
        loaded.value = true;
      });
    }
  });

  if (form_id) {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48112164",
          formId: form_id,
          target: "#hubspotForm",
          css: "",
        });
      }
    });
  }

  const theme = useState("theme");
  theme.value = "light";
});

// compile meta tags for head
useHead(() => {
  if (!data.value) return {};
  return toHead(page.seo);
});
</script>

<template>
  <div class="bg-jaffa">
    <Section :hero="true">
      <header class="text-center">
        <h1
          class="font-barlow-cond text-xxl-mob font-semibold uppercase leading-xxl s:text-xxl"
        >
          {{ page.headline }}
        </h1>
      </header>
    </Section>

    <!-- contents -->
    <Section class="pb-section-bot-lg">
      <div class="mx-auto max-w-base">
        <!-- columns -->
        <div class="flex flex-col items-start justify-between s:flex-row">
          <!-- text -->
          <div class="w-full s:w-[38%]">
            <h2 class="text-body-md-mob leading-md s:text-body-md">
              Send us your contact information and we will get back to you as
              soon as possible.
            </h2>

            <hr class="my-side text-black" />

            <!-- contact -->
            <div class="text-body-sm-mob leading-sm s:text-body-sm">
              <h3 class="font-barlow-cond text-[2.1rem] uppercase text-red">
                Contact
              </h3>
              <div class="relative mt-[2rem] columns-2 space-y-[2rem]">
                <div>
                  <span class="font-helvh">North America</span><br />
                  280 Hope Street<br />
                  Mountain View, CA 94041
                </div>
                <div>
                  <span class="font-helvh">Germany</span><br />
                  Max-Jarecki-Straße 21, 69115<br />
                  Heidelberg, Germany
                </div>
                <div>
                  <span class="font-helvh">North America</span><br />
                  280 Hope Street<br />
                  Mountain View, CA 94041
                </div>
                <div>
                  <span class="font-helvh">Germany</span><br />
                  Max-Jarecki-Straße 21, 69115<br />
                  Heidelberg, Germany
                </div>
              </div>
            </div>

            <hr class="my-side text-black" />

            <!-- <Brands v-if="logos" class="mt-[12rem]" theme="light" :data="logos" /> -->
          </div>

          <!-- form -->
          <div
            class="rounded-base-mob relative w-full overflow-hidden p-[5rem] text-white s:w-1/2 s:rounded-base"
          >
            <UITexture />

            <!-- hubspot form -->
            <div
              id="hubspotForm"
              v-once
              class="[&_.hs-input]:leading-normal [&_input[type='submit']:hover]:text-lime [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.hs-form-field]:flex-1 [&_.hs-form-field_label]:text-body-sm-mob [&_.hs-form-field_label]:text-white [&_.hs-form-field_label]:opacity-50 [&_.hs-input]:mt-3 [&_.hs-input]:h-[5rem] [&_.hs-input]:w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-whiteline [&_.hs-input]:bg-shadowblue [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:text-white [&_.hs-input]:outline-none [&_.hs-input]:s:mt-3 s:[&_.hs-input]:!px-[1.875rem] [&_fieldset]:w-full [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_form]:space-y-[3rem] [&_input[type='checkbox']]:mt-0 [&_input[type='checkbox']]:h-auto [&_input[type='submit']]:mt-[1rem] [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-btn [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm-mob [&_input[type='submit']]:text-skyblue [&_select]:appearance-none"
            ></div>
            <!-- end hubspot form -->
          </div>
        </div>
      </div>
    </Section>

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
