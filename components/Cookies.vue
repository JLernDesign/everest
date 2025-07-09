<script setup>
import gsap from "gsap";

const cookies = ref(false);

onMounted(() => {
  if (document.cookie.includes("cookies_popup=true")) {
    cookies.value = true;
  }
});

const closePopup = () => {
  document.cookie = "cookies_popup=true; path=/; max-age=31536000;";
  gsap.to(".cookies", {
    opacity: 0,
    duration: 0.2,
    display: "none",
    ease: "none",
  });
};
</script>

<template>
  <div
    v-if="!cookies"
    class="cookies fixed bottom-[2rem] left-0 z-20 s:bottom-[4rem] s:left-[4rem] max-s:px-side-mob"
  >
    <div
      class="cookies-inner w-full rounded-base bg-shadowblue p-[2rem] text-body-xsm leading-sm text-white s:w-[83rem]"
    >
      <div class="cookies-content space-y-[1rem]">
        <p>
          We use cookies on our website to see how you interact with it. By
          accepting, you agree to our use of such cookies.
        </p>
        <div class="cookies-buttons flex gap-[2.5rem]">
          <button class="button underline" @click="closePopup">Accept</button>
          <button class="button underline" @click="closePopup">Decline</button>
        </div>
      </div>
      <!-- close button -->
      <button
        class="absolute right-[1rem] top-[1rem] size-[1rem]"
        @click="closePopup"
      >
        <div
          v-for="n in 2"
          class="absolute left-1/2 top-1/2 h-0 w-[1.25rem] -translate-x-1/2 -translate-y-1/2 border-t-2 border-skyblue"
          :class="n == 1 ? 'rotate-45' : '-rotate-45'"
        ></div>
      </button>
    </div>
  </div>
</template>
