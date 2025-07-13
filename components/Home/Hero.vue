<script setup>
import { Image as DatocmsImage } from "vue-datocms";
const props = defineProps(["data", "mediaSlides"]);

const hero_img = {
  responsiveImage: {
    srcSet:
      "https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png?dpr=0.25 523w,https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png?dpr=0.5 1046w,https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png?dpr=0.75 1569w,https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png 2092w",
    webpSrcSet:
      "https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png?dpr=0.25&fm=webp 523w,https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png?dpr=0.5&fm=webp 1046w,https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png?dpr=0.75&fm=webp 1569w,https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png?fm=webp 2092w",
    sizes: "(max-width: 2092px) 100vw, 2092px",
    src: "https://www.datocms-assets.com/160976/1752429988-ph-home-hero-2x.png",
    width: 2092,
    height: 1904,
    aspectRatio: 1.0987394957983194,
    alt: null,
    title: null,
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAADeUlEQVR42n2V67LbJhSFEaCrfa6Zad//IfKj0zc6TdqcHFu2JSTyLYQU223DzB4h2Ky1b2z85z/+NDFGM8+zmaYpSQgT/1Na07DWGu/9b74sf6/K8qmqKqbl5Jw7FUXRc74PIYzDMMyIQ/w4jiXnnRQ3AgFJOMS/XQiYWwSCGd0IuKRgXkBQoF+gZzVn2Cz8Oouxzrdtm4CuPZCsayLLHkQZI/As1nnvQPMY6DkTsTpmD0o8KhNB13X/CtH/EAjcVlVt67ry8kResTcRxZkzdgzBECen8Gwh+hWB1lcCrC8BLau6bmpJVWnNWW0a49EHH4JxTATyIBGgvBFck1wTEE950EGwB3vfNHULUUHCR2dNDcElGgPBTIGEWwK5fu3BOgScZxDYPXpPi7hnkZXeF96aEfPPIkBG5220rpJXwl0IVksXD/gyj1eiKipm88q+5FOWLp1zbgT4ZBaSAW0OGVnmszhPxn+ZA0ZNDb6yJoIX1iTtol9dZKksZu2CTkAKwpNKNHnQ930CmuTBdtHC4lFM5jwC8EAwH4j5AwbtkUaXSncBgon9AYxRZziriooS/md/OBwWAoHLKsCvvWA03KbGO1cvhVSpMBxflS1RciETnNC/BHkRggh0AYufBGuIIAiZZG0VS6k6LpqfAJUMyAjhCYIDBO9gvE/T3IM/cH7SeeFuIVpzEBKBPAhrHlQhZ4DOhOMM6DH3Is3fWf+KAV/Q+wcjv2PgWX1JIdIgySMg8w3Bz68I5h6CHisPEHzIdd1a9k8U/t/U5BsEb2D9xTpeTEf2LpsHAo93pbmJSd8jBEd1TIw4qrEptpoD8g2Fr5ngjf8+3OXw5qIp1tdipcQmlXThfyAcA/oSk0LmHJ65I6ofMsDcDWH4pmn+8x6sb0K+C6ktqwUDbtVVc7sWkRSmFSPlUIatHqRmh0a8I7jrRyrVFos7CHaZYFbLgLjV/lbqa/50VgT7/T57ELdXbCOQ9TE+wPBIMp+x9gXgx0xAO/Ijt/xICL+D8ZHzshVKSvJut7vppgvBvIUHecLCF8BfAfwE7lMmaHSL87N5zBdtAHi8IVhzcN+yU9NbLtpjIQ+cUzd9Lpc3WXmo5IGTB0UhDw6cPXH2CzJvBKoIja2bYrneEM0pYT0mjeJMKFpi0gLcIbxsVcoBBB0EO/Q64t5x0TrAD2sOfgCgq/PG1kWNZgAAAABJRU5ErkJggg==",
  },
};
</script>

<template>
  <Section :hero="true" class="!pt-[10.5rem] s:!pt-[24.5rem] s:pb-[10rem]">
    <SectionHeader
      class="max-w-[60rem]"
      align="left"
      :data="data"
      loc="home-hero"
    />

    <!-- image -->
    <div
      class="image-wrap relative left-1/2 top-auto -ml-[91rem] w-[180rem] origin-top scale-[.4] s:absolute s:left-0 s:top-0 s:ml-0 s:scale-100 max-s:mt-[3.2rem] max-s:h-[36rem]"
    >
      <UIGlow
        class="left-[36.2rem] top-[8.3rem] h-[106.2rem] !w-[118.1rem] s:top-[19.7rem]"
        src="/home/hero-glow.svg"
      />
      <div
        class="bg-image absolute left-[31.4rem] top-0 z-1 w-[104.6rem] s:top-[11.4rem]"
      >
        <div class="computer absolute left-0 top-0 z-0">
          <DatocmsImage :data="hero_img.responsiveImage" />
          <!-- <img src="/public/home/ph-home-hero@2x.png" alt="" /> -->
        </div>
      </div>

      <!-- clouds -->
      <UICloud type="2" class="-right-[32.4rem] -top-[30.5rem]" />
      <div class="cloud-group absolute left-0 top-[35rem] z-1 s:top-[45.8rem]">
        <UICloud type="3" class="left-[64.7rem] top-[23rem]" />
        <UICloud type="1" class="-left-[9rem] top-[27rem] -scale-x-100" />
        <UICloud
          type="1"
          class="left-[24.6rem] top-[44rem] !w-[91rem] -rotate-[10deg]"
        />
        <UICloud type="2" class="-left-[22.9rem] top-0" />
      </div>
    </div>

    <!-- video -->
    <div
      v-if="mediaSlides && mediaSlides.length > 0"
      class="relative z-5 s:mt-[24rem] s:grid s:justify-end"
    >
      <MediaSlider :data="mediaSlides" />
    </div>

    <UIArrowDown class="max-s:hidden" />
  </Section>
</template>

<style scoped></style>
