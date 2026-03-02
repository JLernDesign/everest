<script setup>
const props = defineProps(["data"]);

// get start time
let starttime = 0;
if (props.data.video.provider == "youtube") {
  starttime = props.data.video.url.split("t=")[1].split("s")[0];
}
</script>

<template>
  <div class="relative aspect-video w-full [&>div]:aspect-video">
    <ScriptYouTubePlayer
      v-if="data.video.provider == 'youtube'"
      width="100%"
      height="auto"
      :player-vars="{ rel: 0, start: starttime }"
      :video-id="data.video.providerUid"
    />

    <!-- vimeo -->
    <ScriptVimeoPlayer
      v-if="data.video.provider == 'vimeo'"
      width="100%"
      height="auto"
      :vimeo-options="{ autoplay: true, controls: true }"
      :id="data.video.providerUid"
    />
  </div>
</template>

<style scoped></style>
