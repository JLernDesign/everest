<script setup>
import gsap from "gsap";

const page = {
  hubspotId: "4d5fb6f7-233e-4bd1-a143-79eb7e7994e2",
};

const gatedUrl = useState("gatedUrl");
const gatedContent = inject("gated_content");

onMounted(() => {
  window.addEventListener("message", (event) => {
    if (
      event.data.type === "hsFormCallback" &&
      event.data.eventName === "onFormReady"
    ) {
      nextTick(() => {
        console.log("form loaded");
      });
    }
    if (
      event.data.type === "hsFormCallback" &&
      event.data.eventName === "onFormSubmit"
    ) {
      console.log("form submitted");
      //showGatedContent();
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
          onFormSubmitted: () => {
            console.log("✅ HubSpot form submitted!");
          },
        });
      }
    });
  }
});

const closeModal = () => {
  // close modal
  const modal = document.getElementById("gate-modal");
  gsap.to(modal, {
    duration: 0.35,
    opacity: 0,
    display: "none",
    ease: "power3.in",
  });

  // reset gatedUrl
  gatedUrl.value = "";
};

const showGatedContent = () => {
  const modal = document.getElementById("gate-modal");
  const form = modal.querySelector(".form");
  const gatedContent = modal.querySelector(".gated-content");
  const gatedContentInner = gatedContent.querySelector(".gated-content-inner");
  const modalInner = modal.querySelector(".modal-inner");

  const startHeight = modalInner.offsetHeight;
  const formHeight = form.offsetHeight;
  const gateHeight = gatedContentInner.offsetHeight;
  const dif = formHeight - gateHeight;

  // hide form
  gsap.to(form, {
    duration: 0.25,
    opacity: 0,
    ease: "none",
  });

  // animate height
  gsap.to(modalInner, {
    delay: 0.25,
    duration: 0.5,
    height: startHeight - dif,
    ease: "power3.out",
    onComplete: () => {
      // remove form
      form.style.display = "none";

      // show gated content
      gsap.fromTo(
        gatedContent,
        {
          opacity: 0,
          display: "block",
          height: "auto",
        },
        {
          duration: 0.5,
          opacity: 1,
          ease: "none",
        },
      );
    },
  });
};
</script>

<template>
  <div
    id="gate-modal"
    class="modal fixed left-0 top-0 z-[21] hidden h-screen w-screen overscroll-contain"
  >
    <UITexture class="opacity-[.98]" @click="closeModal" />
    <div
      class="flex h-screen w-screen items-center justify-center p-side-mob s:p-side"
    >
      <div
        class="modal-inner relative w-full max-w-[73.5rem] rounded-base-mob bg-jaffa p-[5rem] pb-[10rem] s:rounded-base"
      >
        <header
          class="has-break space-y-[2rem] text-center s:space-y-[2.5rem] s:pb-4"
          @click="showGatedContent"
        >
          <h2
            v-if="gatedContent.headline"
            class="font-barlow-cond text-lg-mob leading-lg s:text-lg"
          >
            {{ gatedContent.headline }}
          </h2>
          <p
            v-if="gatedContent.intro"
            class="leading-body-sm text-body-sm-mob s:text-body-sm"
          >
            {{ gatedContent.intro }}
          </p>
        </header>

        <!-- hubspot form -->
        <div class="form min-h-[32rem]">
          <div
            id="hubspotForm"
            v-once
            class="form [&_.hs-input]:leading-normal [&_input[type='submit']:hover]:text-lime [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.hs-form-field]:flex-1 [&_.hs-form-field_label]:text-body-sm-mob [&_.hs-form-field_label]:text-white [&_.hs-form-field_label]:opacity-75 [&_.hs-input]:mt-3 [&_.hs-input]:h-[5rem] [&_.hs-input]:w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-whiteline [&_.hs-input]:bg-shadowblue [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:text-white [&_.hs-input]:outline-none [&_.hs-input]:s:mt-3 s:[&_.hs-input]:!px-[1.875rem] [&_fieldset]:w-full [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_form]:space-y-[3rem] [&_input[type='checkbox']]:mt-0 [&_input[type='checkbox']]:h-auto [&_input[type='submit']]:mt-[1rem] [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-btn [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm-mob [&_input[type='submit']]:text-skyblue [&_select]:appearance-none [&_textarea]:!h-[13rem] [&_textarea]:!resize-none"
          ></div>
        </div>
        <!-- end hubspot form -->

        <!-- gated content -->
        <div class="gated-content h-0 w-full overflow-hidden text-center">
          <div class="gated-content-inner py-[4rem]">
            <CtaBtn :data="{ external: true }" :to="gatedUrl"
              >Download Ebook</CtaBtn
            >
          </div>
        </div>

        <!-- close button -->
        <UICloseBtn
          :close="closeModal"
          class="-right-[.5rem] -top-[4rem] s:-right-[2.5rem] s:-top-[5rem]"
        />

        <!-- bg lines -->
        <div
          class="absolute bottom-0 left-0 h-[7.6rem] w-full overflow-hidden rounded-b-base-mob s:rounded-b-base"
        >
          <img
            src="/ui/modal-bglines.svg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
