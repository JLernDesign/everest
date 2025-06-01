<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div>
    <!-- header -->
    <div class="px-side-lg relative border-t border-t-whiteline">
      <div
        class="w-full border-x border-x-whiteline bg-[url(/public/why/ai-lines-bgfull.svg)] bg-cover px-side py-[11.2rem]"
      >
        <div
          class="mx-auto w-[81rem] space-y-[2.5rem] rounded-base bg-shadowblue p-[6rem] text-center"
        >
          <h2 class="font-barlow-cond text-lg font-bold leading-lg">
            What AI-native ERP really delivers for your business.
          </h2>
          <p>
            AI-native architecture in ERP changes what’s possible for your SaaS
            business. When you embed intelligence into the core platform, you
            enable faster execution, sharper insight, and greater agility at
            every level of the business
          </p>
        </div>
      </div>
    </div>

    <!-- buckets -->
    <div class="px-side-lg relative border-t border-t-whiteline">
      <div class="flex flex-wrap border-x border-x-whiteline">
        <div
          v-for="n in 4"
          class="bucket w-1/2 px-[8rem] py-[5rem]"
          :class="[
            n > 2 && 'border-t border-t-whiteline',
            n % 2 == 0 && 'border-l border-l-whiteline',
          ]"
        >
          <div
            class="icon mb-[2.5rem] size-[3.6rem] rounded-full border-2 border-green"
          ></div>
          <h3 class="font-barlow-cond text-sm font-bold leading-lg text-green">
            Close books faster with <br />AI-assisted workflows
          </h3>
          <p class="mt-[1.8rem] text-body-sm leading-sm">
            Automate recurring tasks, reduce manual touchpoints, <br />and speed
            up close cycles with built-in intelligence.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
