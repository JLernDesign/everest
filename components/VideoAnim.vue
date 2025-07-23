<script setup>
import is from "is_js";

const props = defineProps({
  file: {
    type: String,
    required: true,
  },
  loc: {
    type: String,
    default: "center",
  },
  loop: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "fill",
  },
  alpha: {
    type: Boolean,
    default: true,
  },
});

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
      :class="size === 'fill' ? 'h-full w-full object-cover' : null"
    >
      <template v-if="alpha">
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
      </template>

      <source v-else :src="`/video/${file}.mp4`" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped></style>
