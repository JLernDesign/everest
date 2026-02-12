<script setup>
const props = defineProps(["data", "loc"]);

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
          target: `#hubspotForm-${props.loc}`,
          css: "",
        });
      }
    });
  }
});
</script>

<template>
  <div class="form landing-form">
    <div
      :id="`hubspotForm-${loc}`"
      class="form [&_.hs-input]:leading-normal [&_input[type='submit']:hover]:text-lime [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.form-columns-1_.hs-input]:!w-full [&_.form-columns-2_.field+.field]:max-s:mt-[3rem] [&_.form-columns-2_input]:max-s:!w-full [&_.hs-form-field]:flex-1 [&_.hs-form-field_label]:text-body-sm-mob [&_.hs-form-field_label]:text-white [&_.hs-form-field_label]:opacity-75 [&_.hs-input]:mt-3 [&_.hs-input]:h-[5rem] [&_.hs-input]:w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-whiteline [&_.hs-input]:bg-[#363E49] [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:text-white [&_.hs-input]:outline-none [&_.hs-input]:s:mt-3 s:[&_.hs-input]:!px-[1.875rem] [&_fieldset]:w-full [&_fieldset]:!max-w-none [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_fieldset_.input]:max-s:!mr-0 [&_form]:space-y-[3rem] [&_input[type='checkbox']]:mt-0 [&_input[type='checkbox']]:h-auto [&_input[type='submit']]:mt-[1rem] [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-btn [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm-mob [&_input[type='submit']]:text-skyblue [&_select]:appearance-none [&_textarea]:!h-[13rem] [&_textarea]:!resize-none"
    ></div>
  </div>
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
