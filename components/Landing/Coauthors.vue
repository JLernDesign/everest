<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <Section class="pb-[5rem] s:pb-section-bot">
    <SectionHeader :data="data.header" template="landing" />

    <div
      class="relative mx-auto mt-[2.5rem] flex w-full max-w-base flex-col items-center gap-[2.5rem] s:mt-[5rem] s:flex-row s:items-stretch s:justify-center s:gap-[5.5rem]"
    >
      <div
        v-for="author in data.authors"
        class="w-full max-w-[45.5rem] flex-1 rounded-base-mob bg-white p-side-mob s:rounded-base s:p-[5rem]"
      >
        <div class="flex flex-col">
          <div
            class="mb-[2.5rem] aspect-[.88] max-w-[18rem] overflow-hidden rounded-base s:mb-side"
          >
            <img
              v-if="author.photo"
              :src="author.photo.url"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>

          <h3 class="font-helvb">
            {{ author.name }}
          </h3>
          <div
            class="mt-6 divide-y-1 divide-grayline border-y-1 border-grayline s:mt-10"
          >
            <p
              v-if="author.title"
              class="py-4 text-body-sm-mob leading-sm s:py-8 s:text-body-sm"
            >
              {{ author.title }}
            </p>
            <p
              v-for="item in author.workHistory"
              :key="item.id"
              class="py-4 text-body-sm-mob leading-sm s:py-8 s:text-body-sm"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
