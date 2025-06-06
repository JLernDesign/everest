<script setup>
const props = defineProps(["data", "id"]);
</script>

<template>
  <div
    class="submenu absolute left-0 top-full z-0 mt-[2.25rem] hidden min-w-full translate-y-[1.5rem] opacity-0 before:absolute before:-top-[3rem] before:left-1/2 before:h-[3rem] before:w-[30rem] before:-translate-x-1/2 before:content-['']"
  >
    <div
      class="menu-bg absolute left-1/2 -translate-x-1/2 rounded-base bg-shadowblue bg-[url(/ui/menu-texture@2x.webp)] bg-cover p-[1.5rem]"
      :class="id == 'Product' ? 'w-[90rem]' : 'w-[41rem]'"
    >
      <ul
        class="divide-y-1 divide-whiteline rounded-[.7rem] bg-shadowblue text-body-xsm leading-sm text-white"
        :class="
          id == 'Product' &&
          'grid grid-cols-2 [&_li:nth-child(2)]:!border-t-transparent [&_li:nth-child(even)]:border-l-1'
        "
      >
        <template v-if="id == 'Product'">
          <SubmenuLinkIcon v-for="n in 4" :data="data" />
        </template>
        <template v-else>
          <SubmenuLink v-for="n in 4" :data="data" />
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
