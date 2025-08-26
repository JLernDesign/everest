<script setup>
const props = defineProps(["theme", "loc"]);
const signupForm = inject("signup_form");

onMounted(() => {
  if (signupForm.hubspotId) {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48112164",
          formId: signupForm.hubspotId,
          target: `#hubspotSignupForm${props.loc}`,
          css: "",
          formInstanceId: props.loc,
        });
      }
    });
  }
});
</script>

<template>
  <div class="mx-auto max-w-[30rem] s:max-w-[63rem]">
    <header
      class="has-break mb-10 space-y-[1.5rem] text-center"
      :class="theme === 'dark' ? 'text-red' : 'text-black'"
    >
      <h2
        v-if="signupForm.headline"
        class="font-barlow-cond text-lg-mob leading-lg s:text-lg"
        v-html="signupForm.headline"
      ></h2>
      <p
        v-if="signupForm.intro"
        class="leading-body-sm text-body-sm-mob s:text-body-sm"
        v-html="signupForm.intro"
      ></p>
    </header>

    <!-- hubspot form -->
    <div class="form min-h-[5rem]" :class="theme">
      <div
        :id="`hubspotSignupForm${loc}`"
        v-once
        class="[&_.hs-input]:leading-normal [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.hs-error-msgs]:h-0 [&_.hs-error-msgs]:translate-y-2 [&_.hs-error-msgs_label]:!text-body-sm-mob [&_.hs-form-field_label]:!hidden [&_.hs-input]:h-[5rem] [&_.hs-input]:!w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:outline-none s:[&_.hs-input]:!px-[1.875rem] s:[&_.hs-input]:text-body-sm [&_.submitted-message]:text-center [&_fieldset]:w-full [&_fieldset]:!max-w-none [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_input[type='submit']]:absolute [&_input[type='submit']]:right-0 [&_input[type='submit']]:top-0 [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[10rem] [&_input[type='submit']]:rounded-sm [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm [&_input[type='submit']]:text-skyblue s:[&_input[type='submit']]:min-w-[13.5rem]"
        :class="
          theme === 'dark'
            ? '[&_.hs-error-msgs]:text-red [&_.hs-input]:border-[#444] [&_.hs-input]:bg-shadowblue [&_.hs-input]:text-white [&_.submitted-message]:text-white'
            : '[&_.hs-input]:border-jaffalt [&_.hs-input]:bg-jaffa [&_.hs-input]:text-black [&_.submitted-message]:text-black'
        "
      ></div>
    </div>
    <!-- end hubspot form -->
  </div>
</template>
