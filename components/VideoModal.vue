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
        // youtube or vimeo
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

  // close modal
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

        <!-- vimeo -->
        <ScriptVimeoPlayer
          v-if="video_ready && provider == 'vimeo'"
          trigger="visible"
          width="100%"
          height="auto"
          :vimeo-options="{ autoplay: true, controls: true }"
          class="h-full w-full overflow-hidden rounded-base-mob s:rounded-base"
          :id="video.providerUid"
        />

        <!-- close button -->
        <UICloseBtn
          :close="closeVideoModal"
          class="-right-[.5rem] -top-[4rem] s:-right-[2.5rem] s:-top-[5rem]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
