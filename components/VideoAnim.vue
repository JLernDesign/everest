<script setup>
import is from "is_js";
const props = defineProps(["file", "loc", "loop", "autoplay", "size"]);

const chrome = is.chrome();
const firefox = is.firefox();
const safari = is.safari();
const edge = is.edge();
const ios = is.ios();

const file = computed(() => {
  if (props.file.includes("infographics")) {
    const ext = chrome ? "-vp9-chrome" : "-hevc-safari";
    return props.file + ext;
  }
  return props.file;
});

const video = ref(null);

const playVideo = () => {
  //console.log("play", video.value.currentTime);
  video.value.play();
};

const pauseVideo = () => {
  //console.log("pause", video.value.currentTime);
  video.value.pause();
};

defineExpose({
  playVideo,
  pauseVideo,
});
</script>

<template>
  <div class="video-anim pointer-events-none h-full w-full">
    <video
      muted
      playsinline
      :loop="loop && true"
      :autoplay="autoplay && true"
      ref="video"
      :class="size === 'fill' ? 'h-full w-full' : null"
    >
      <source
        v-if="safari || ios"
        :src="`/video/${file}.mp4`"
        type="video/mp4"
      />
      <source
        v-else-if="chrome || firefox || edge"
        :src="`/video/${file}.webm`"
        type="video/webm"
      />
    </video>
  </div>
</template>

<style scoped></style>
