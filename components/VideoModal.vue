<script setup>
import { VideoPlayer } from "vue-datocms";
import gsap from "gsap";
const videoID = useState("videoID");
const video_ready = ref(false);
let video, player, provider;

onMounted(() => {
  watch(videoID, () => {
    if (videoID.value) {
      // set video and provider
      if (videoID.value.file) {
        // mux
        video = videoID.value.file.video;
        provider = "mux";
      } else {
        // youtube
        video = videoID.value.external;
        provider = videoID.value.external.provider;
      }

      // trigger render
      video_ready.value = true;

      // play video
      setTimeout(() => {
        // play mux video
        player = document.getElementById("video");
        if (provider == "mux") {
          player.play();
        }
      }, 500);
    }
  });
});
onUnmounted(() => {});

const closeVideoModal = (id) => {
  // pause mux video
  player = document.getElementById("video");
  if (provider && provider == "mux") {
    player.pause();
  }

  const modal = document.getElementById("video-modal");
  const wrap = document.getElementById("video-player");
  gsap.to(modal, {
    duration: 0.35,
    opacity: 0,
    display: "none",
    ease: "power3.in",
    onComplete: function () {
      videoID.value = "";
      video_ready.value = false;
    },
  });
  /* gsap.to(wrap, {
    duration: 0.35,
    opacity: 0,
    ease: "power3.in",
  }); */
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
        <!-- raw video -->
        <VideoPlayer
          v-if="video_ready && provider == 'mux'"
          :data="video"
          id="video"
          accent-color="#FC5161"
          class="overflow-hidden rounded-base-mob s:rounded-base"
        />

        <!-- youtube -->
        <ScriptYouTubePlayer
          v-if="video_ready && provider == 'youtube'"
          trigger="visible"
          width="100%"
          height="auto"
          :player-vars="{ autoplay: true, rel: 0 }"
          class="h-full w-full overflow-hidden rounded-base-mob s:rounded-base"
          :video-id="video.providerUid"
          ref="yt_player"
        />

        <!-- close button -->
        <button
          class="absolute -right-[.5rem] -top-[4rem] size-[3rem] s:-right-[2.5rem] s:-top-[5rem]"
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
