<script setup>
const props = defineProps(["theme"]);
const formId = "36355ffe-9c44-4682-a5de-b73edd288b28";

onMounted(() => {
  if (formId) {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48112164",
          formId: formId,
          target: "#hubspotSignupForm",
          css: "",
        });
      }
    });
  }
});
</script>

<template>
  <div class="mx-auto s:max-w-[63rem] s:pb-[4rem] s:pt-[10rem]">
    <header
      class="has-break mb-10 space-y-[1.5rem] text-center"
      :class="theme === 'dark' ? 'text-red' : 'text-black'"
    >
      <h2 class="font-barlow-cond text-lg-mob leading-lg s:text-lg">
        Get the latest Everest news
      </h2>
      <p class="leading-body-sm text-body-sm-mob s:text-body-sm">
        Some nice copy here about what you get when you sign up.
      </p>
    </header>

    <!-- hubspot form -->
    <div class="form min-h-[5rem]">
      <div
        id="hubspotSignupForm"
        v-once
        class="[&_.hs-input]:leading-normal [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.hs-error-msgs]:h-0 [&_.hs-error-msgs]:translate-y-2 [&_.hs-error-msgs_label]:!text-body-sm-mob [&_.hs-form-field_label]:!hidden [&_.hs-input]:h-[5rem] [&_.hs-input]:!w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-[#444] [&_.hs-input]:bg-shadowblue [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:text-white [&_.hs-input]:outline-none s:[&_.hs-input]:!px-[1.875rem] s:[&_.hs-input]:text-body-sm [&_.submitted-message]:text-center [&_fieldset]:w-full [&_fieldset]:!max-w-none [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_input[type='submit']]:absolute [&_input[type='submit']]:right-0 [&_input[type='submit']]:top-0 [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-sm [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm [&_input[type='submit']]:text-skyblue"
        :class="
          theme === 'dark'
            ? '[&_.hs-error-msgs]:text-red [&_.submitted-message]:text-white'
            : '[&_.submitted-message]:text-black'
        "
      ></div>
    </div>
    <!-- end hubspot form -->
  </div>
</template>
