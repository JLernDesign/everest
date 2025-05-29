<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div
    class="relative min-h-[43.8rem] rounded-base p-side"
    :class="
      data.layout == 'two-col'
        ? 'col-span-2 pr-[2.5rem] pt-[2.5rem]'
        : 'pb-[9rem]'
    "
    :style="`background-color: ${data.color};`"
  >
    <!-- image/logo w/ quote -->
    <template v-if="data.layout == 'image-quote'">
      <!-- image -->
      <img
        v-if="data.image"
        :src="data.image"
        alt=""
        class="mb-side w-[19.5rem] overflow-hidden rounded-base"
      />

      <!-- quote -->
      <blockquote v-if="data.quote" class="text-body-sm leading-sm">
        “{{ data.quote }}”
      </blockquote>
    </template>

    <!-- big quote on color -->
    <template v-if="data.layout == 'big-quote'">
      <blockquote class="font-barlow-cond text-sm font-bold leading-[.94]">
        <div class="quote lt absolute left-[2rem] top-[2rem]">“</div>
        <div class="quote rt absolute bottom-[6rem] right-[4rem]">”</div>
        {{ data.quote }}
      </blockquote>
    </template>

    <!-- two column quote w/ big photo -->
    <template v-if="data.layout == 'two-col'">
      <div class="flex justify-between">
        <!-- quote -->
        <div class="left w-[46%] pt-[1.5rem]">
          <img
            v-if="data.logo"
            :src="data.logo"
            alt=""
            class="mb-side w-[19.5rem] overflow-hidden rounded-base"
          />
          <blockquote v-if="data.quote" class="text-body-sm leading-sm">
            “{{ data.quote }}”
          </blockquote>
        </div>

        <!-- image -->
        <div class="right w-[47.5%]">
          <img
            v-if="data.image"
            :src="data.image"
            alt=""
            class="overflow-hidden rounded-base"
          />

          <!-- stats -->
          <hr class="my-side text-black" />
          <div class="stats mb-side flex space-x-14 leading-[1]">
            <div class="stat-item flex items-end space-x-4">
              <h3 class="font-barlow-cond text-sm font-bold">2X</h3>
              <p class="text-body-xsm">Awesome stat here</p>
            </div>
            <div class="stat-item flex items-end space-x-4">
              <h3 class="font-barlow-cond text-sm font-bold">100%</h3>
              <p class="text-body-xsm">Awesome stat here</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- byline -->
    <div
      v-if="data.byline"
      class="byline absolute bottom-0 pb-[3rem] text-body-xsm"
    >
      <strong class="block font-helvb">{{ data.byline.name }}</strong>
      {{ data.byline.title }}
    </div>
  </div>
</template>

<style scoped></style>
