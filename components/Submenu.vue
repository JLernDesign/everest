<script setup></script>

<template>
  <div
    class="submenu absolute left-0 top-full z-0 mt-[2.25rem] hidden min-w-full translate-y-[1.5rem] opacity-0 before:absolute before:-top-[3rem] before:left-0 before:h-[3rem] before:w-full before:content-['']"
  >
    <div
      class="absolute left-1/2 w-[41rem] -translate-x-1/2 rounded-base bg-shadowblue bg-[url(/ui/menu-texture1@2x.jpg)] bg-cover p-[1.5rem]"
    >
      <ul
        class="divide-y-1 divide-whiteline rounded-[.7rem] bg-shadowblue text-body-xsm leading-sm text-white"
      >
        <li v-for="n in 3" class="px-10 py-8 pb-7">
          <NuxtLink href="/" class="mb-[.1rem] block font-helvb"
            >Everest vs. Legacy ERP</NuxtLink
          >
          Automate financial consolidations and reporting.
        </li>
        <!-- <template v-for="item in data.subMenu.menu">
          <li>
            <NuxtLink
              :to="item.url"
              :target="data.target"
              @click="type == 'main' ? closeMenu() : close_func()"
            >
              <div
                v-if="data.subMenu.menuType == 'icons'"
                :class="`list-icon bg-${item.icon.bgcolor}`"
              >
                <img :src="`/icons/menu/${item.icon.icon}.svg`" alt="" />
              </div>
              {{ item.title }}
            </NuxtLink>
          </li>
        </template> -->
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
