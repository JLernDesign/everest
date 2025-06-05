<script setup>
import gsap from "gsap";
const videoID = useState("videoID");
const video_ready = ref(false);
let player;

/* testing */
const url =
  "https://video.wixstatic.com/video/e3b010_3282c34472b249cd9d56e7907b23043e/1080p/mp4/file.mp4";
const file = "/public/video/sample-video.mp4";

onMounted(() => {
  player = document.getElementById("video");

  watch(videoID, () => {
    video_ready.value = true;
  });
});
onUnmounted(() => {});

const closeVideoModal = (id) => {
  video_ready.value = false;
  player.pause();

  const modal = document.getElementById("video-modal");
  const wrap = document.getElementById("video-player");
  gsap.to(modal, {
    duration: 0.35,
    opacity: 0,
    display: "none",
    ease: "power3.in",
    onComplete: function () {
      videoID.value = "";
    },
  });
  gsap.to(wrap, {
    duration: 0.35,
    opacity: 0,
    xPercent: 10,
    yPercent: -10,
    ease: "power3.in",
  });
};
</script>

<template>
  <div
    id="video-modal"
    class="modal fixed left-0 top-0 z-[21] hidden h-screen w-screen overscroll-contain"
  >
    <UITexture class="opacity-[.98]" @click="closeVideoModal" />
    <div
      class="flex h-screen w-screen items-center justify-center p-side-mob s:p-side"
    >
      <div
        id="video-player"
        class="modal-contents relative aspect-video w-full max-w-[119rem]"
      >
        <video
          id="video"
          class="absolute h-full w-full overflow-hidden rounded-base object-contain"
          controls
        >
          <source :src="url" type="video/mp4" />
        </video>
        <button
          class="absolute -right-[2.5rem] -top-[5rem] size-[3rem]"
          @click="closeVideoModal"
        >
          <div
            v-for="n in 2"
            class="absolute left-1/2 top-1/2 h-0 w-[2rem] -translate-x-1/2 -translate-y-1/2 border-t-2 border-skyblue"
            :class="n == 1 ? 'rotate-45' : '-rotate-45'"
          ></div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
