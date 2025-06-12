<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div
    class="relative min-h-[43.8rem] rounded-base p-side"
    :class="[
      data.style == 'two-col'
        ? 'col-span-2 pr-[2.5rem] pt-[2.5rem]'
        : 'pb-[9rem]',
      data.bgColor ? bgColor(data) : 'bg-white',
    ]"
  >
    <!-- image/logo w/ quote -->
    <template v-if="data.style == 'basic'">
      <!-- image -->
      <img
        v-if="data.image"
        :src="data.image.url"
        alt=""
        class="mb-side w-[19.5rem] overflow-hidden rounded-base"
      />

      <!-- logo -->
      <img
        v-if="data.logo"
        :src="data.logo.url"
        alt=""
        class="mb-side w-[19.5rem] overflow-hidden rounded-base"
      />

      <!-- quote -->
      <blockquote v-if="data.quote" class="text-body-sm leading-sm">
        “{{ data.quote }}”
      </blockquote>
    </template>

    <!-- big quote on color -->
    <template v-if="data.style == 'big-quote'">
      <blockquote
        class="pt-10 font-barlow-cond text-sm font-bold leading-[.94]"
      >
        <div class="quote lt absolute left-[2rem] top-[3rem]">“</div>
        <div class="quote rt absolute bottom-[6rem] right-[4rem]">”</div>
        {{ data.quote }}
      </blockquote>
    </template>

    <!-- two column quote w/ big photo -->
    <template v-if="data.style == 'two-col'">
      <div class="flex justify-between">
        <!-- quote -->
        <div class="left w-[46%] pt-[1.5rem]">
          <img
            v-if="data.logo"
            :src="data.logo.url"
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
            :src="data.image.url"
            alt=""
            class="overflow-hidden rounded-base"
          />

          <hr class="my-[3.25rem] text-black" />

          <!-- stats -->
          <div v-if="data.statsGroup" class="stats flex space-x-14 leading-[1]">
            <div
              v-for="stat in data.statsGroup.stats"
              class="stat-item flex items-end space-x-4"
            >
              <h3 class="font-barlow-cond text-sm font-bold">
                {{ stat.figure }}
              </h3>
              <p class="text-body-xsm">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- byline -->
    <div
      v-if="data.name"
      class="byline absolute bottom-0 pb-[3rem] text-body-xsm"
    >
      <strong class="block font-helvb">{{ data.name }}</strong>
      {{ data.title }}
    </div>
  </div>
</template>

<style scoped></style>
