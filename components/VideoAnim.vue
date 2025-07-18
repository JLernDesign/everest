<script setup>
import is from "is_js";
const props = defineProps(["file", "loc", "loop", "autoplay"]);

const chrome = is.chrome();
const firefox = is.firefox();
const safari = is.safari();
const edge = is.edge();
const ios = is.ios();

const video = ref(null);

const playVideo = () => {
  video.value.play();
};

defineExpose({
  playVideo,
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
