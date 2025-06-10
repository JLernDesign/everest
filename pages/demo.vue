<script setup>
import { demoQuery } from "~/assets/graphql/queries/demo.js";
import { toHead } from "vue-datocms";

const { data } = await useGraphqlQuery({
  query: demoQuery.loc.source.body,
});
const page = data.value.bookDemo;

onMounted(() => {
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
          class="font-barlow-cond text-xxl font-semibold uppercase leading-xxl"
        >
          {{ page.headline }}
        </h1>
      </header>
    </Section>

    <!-- contents -->
    <Section class="pb-section-bot-lg">
      <div class="mx-auto max-w-base">
        <!-- columns -->
        <div class="flex items-start justify-between">
          <!-- text -->
          <div class="w-[38%]">
            <h2 class="text-body-md leading-md">
              Send us your contact information and we will get back to you as
              soon as possible.
            </h2>

            <hr class="my-side text-black" />

            <!-- contact -->
            <div class="text-body-sm leading-sm">
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
            class="relative w-1/2 overflow-hidden rounded-base p-[5rem] text-white"
          >
            <UITexture />

            <!-- hubspot form -->
            <div
              id="hubspotForm"
              v-once
              class="[&_.hs-input]:leading-normal [&_input[type='submit']:hover]:text-lime [&_input[type='submit']]:leading-normal relative [&_.hs-form-field]:flex-1 [&_.hs-form-field_label]:text-body-sm [&_.hs-form-field_label]:text-white [&_.hs-form-field_label]:opacity-50 [&_.hs-input]:mt-3 [&_.hs-input]:h-[5rem] [&_.hs-input]:w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-whiteline [&_.hs-input]:bg-shadowblue [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm [&_.hs-input]:text-white [&_.hs-input]:outline-none [&_.hs-input]:s:mt-3 s:[&_.hs-input]:!px-[1.875rem] [&_fieldset]:w-full [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_form]:space-y-[3rem] [&_input[type='checkbox']]:mt-0 [&_input[type='checkbox']]:h-auto [&_input[type='submit']]:mt-[1rem] [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-btn [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm [&_input[type='submit']]:text-skyblue [&_select]:appearance-none"
            >
              <form>
                <fieldset class="form-columns-2">
                  <div
                    class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"
                  >
                    <label><span>First Name*</span></label>
                    <div class="input">
                      <input name="firstname" type="text" class="hs-input" />
                    </div>
                  </div>
                  <div
                    class="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"
                  >
                    <label><span>Last Name*</span></label>
                    <div class="input">
                      <input name="lastname" type="text" class="hs-input" />
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div
                    class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"
                  >
                    <label><span>Email*</span></label>
                    <div class="input">
                      <input name="firstname" type="email" class="hs-input" />
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div
                    class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"
                  >
                    <label><span>Company Name*</span></label>
                    <div class="input">
                      <input name="firstname" type="email" class="hs-input" />
                    </div>
                  </div>
                </fieldset>
                <div class="hs_submit hs-submit">
                  <input
                    type="submit"
                    class="hs-button primary large"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
            <!-- end hubspot form -->
          </div>
        </div>
      </div>
    </Section>

    <FooterLockup :data="page.footerCallout" />
  </div>
</template>

<style scoped></style>
