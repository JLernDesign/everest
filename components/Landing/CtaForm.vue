<script setup>
const props = defineProps(["data"]);
const loaded = ref(false);
onMounted(() => {
  if (props.data.hubspotId) {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48112164",
          formId: props.data.hubspotId,
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
  <Section
    class="mt-[7rem] bg-shadowblue pb-[2rem] s:mt-[26.6rem] s:pb-section-bot"
  >
    <UITexture />
    <FooterJag loc="top" />

    <!-- columns -->
    <div
      class="relative mx-auto flex max-w-base flex-col items-start justify-between text-white s:flex-row"
      ref="main"
    >
      <!-- left -->
      <div class="text w-full s:w-1/2 s:pr-[11.5rem]">
        <!-- eyebrow -->
        <div v-if="data.header.eyebrow" class="eyebrow mb-6">
          <h3 class="font-helvb text-body-xsm-mob text-red s:text-body-xsm">
            {{ data.header.eyebrow }}
          </h3>
        </div>

        <!-- header / intro -->
        <div class="has-break space-y-[2rem] s:space-y-[3.5rem]">
          <h1
            class="text font-barlow-cond text-xl-mob leading-xl -tracking-sm s:text-xl"
            v-html="formatText(data.header.headline)"
          ></h1>

          <!-- cta buttons -->
          <div
            class="cta-group items-center justify-start pt-6 s:flex s:space-x-[5rem] max-s:space-y-8"
          >
            <CtaGroup
              v-if="data.header.cta"
              :data="data.header.cta.buttons"
              :align="left"
              :theme="light"
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
        <div class="form landing-form">
          <div
            id="hubspotForm"
            v-once
            class="form [&_.hs-input]:leading-normal [&_input[type='submit']:hover]:text-lime [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.hs-form-field]:flex-1 [&_.hs-form-field_label]:text-body-sm-mob [&_.hs-form-field_label]:text-white [&_.hs-form-field_label]:opacity-75 [&_.hs-input]:mt-3 [&_.hs-input]:h-[5rem] [&_.hs-input]:w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-whiteline [&_.hs-input]:bg-[#363E49] [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:text-white [&_.hs-input]:outline-none [&_.hs-input]:s:mt-3 s:[&_.hs-input]:!px-[1.875rem] [&_fieldset]:w-full [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_form]:space-y-[3rem] [&_input[type='checkbox']]:mt-0 [&_input[type='checkbox']]:h-auto [&_input[type='submit']]:mt-[1rem] [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-btn [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm-mob [&_input[type='submit']]:text-skyblue [&_select]:appearance-none [&_textarea]:!h-[13rem] [&_textarea]:!resize-none"
          ></div>
        </div>
        <!-- end hubspot form -->
      </div>
    </div>
  </Section>
</template>

<style>
.landing-form {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px #363e49 inset;
    -webkit-text-fill-color: #fff;
    border-color: #363e49;
  }
}
</style>
