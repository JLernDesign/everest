<script setup>
const props = defineProps(["data", "color"]);
</script>

<template>
  <div>
    <div class="px-side-lg relative flex border-t border-t-whiteline">
      <!-- side images -->
      <div
        v-for="n in 2"
        class="absolute top-0 h-full w-[16rem]"
        :class="n == 1 ? 'left-0' : 'right-0 -scale-x-100'"
      >
        <img
          src="/public/why/ai-side-blue1@2x.png"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>

      <!-- text -->
      <div
        class="flex w-[43%] flex-col justify-between border-x border-x-whiteline"
      >
        <div class="p-side">
          <p>
            System changes shouldn’t come with delays,downtime, or risk to your
            production environment. Everest’s Live Sandbox™ gives you a safer,
            smarter way to manage change. In this fully isolated environment,
            teams can test, simulate, and validate updates before they go live,
            eliminating the need for risky trial-and-error in production.
          </p>
        </div>

        <!-- slide nav -->
        <ul class="divide-y-1 divide-whiteline border-t border-t-whiteline">
          <li v-for="n in 4" class="px-side py-6">
            <button
              class="text-h5 font-barlow-cond font-bold uppercase text-lightblue"
            >
              Build and Test
            </button>
          </li>
        </ul>
      </div>

      <!-- image -->
      <div class="w-[57%] border-r border-r-whiteline p-8">
        <div
          class="ph-image grid aspect-[1.32] place-content-center rounded-sm bg-skyblue p-12"
        >
          <img src="/public/why/ph-aifirst-screen@2x.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
