<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="content-block blog-table w-full s:!my-[8rem] max-s:!my-[5rem]">
    <!-- desktop -->
    <div
      class="hidden w-full rounded-base-mob bg-jaffadk p-[.8rem] s:block s:rounded-base"
    >
      <div class="table-head flex w-full gap-[.8rem]">
        <div
          class="w-1/2 rounded-sm bg-jaffa px-12 py-6 font-barlow-cond uppercase"
        >
          {{ data.colLeft }}
        </div>
        <div
          class="w-1/2 rounded-sm bg-jaffa px-12 py-6 font-barlow-cond uppercase"
        >
          {{ data.colRight }}
        </div>
      </div>
      <div
        class="table-body !mt-[.8rem] w-full divide-y divide-grayline rounded-sm bg-white text-body-sm-mob leading-[1.4]"
      >
        <div class="flex w-full" v-for="row in data.tableRows">
          <div class="flex min-h-[6.6rem] w-1/2 items-center px-12 py-5">
            {{ row.colLeft }}
          </div>
          <div
            class="flex min-h-[6.6rem] w-1/2 items-center border-l border-l-grayline px-12 py-5"
          >
            {{ row.colRight }}
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div
      v-for="n in 2"
      class="w-full rounded-base-mob bg-jaffadk p-[.8rem] s:hidden s:rounded-base"
      :class="n == 2 && '!mt-[2rem]'"
    >
      <div class="table-head w-full">
        <div
          class="w-full rounded-sm bg-jaffa px-12 py-8 font-barlow-cond uppercase"
        >
          {{ n == 1 ? data.colLeft : data.colRight }}
        </div>
      </div>
      <div
        class="table-body !mt-[.8rem] w-full divide-y divide-grayline rounded-sm bg-white text-body-xsm-mob leading-[1.46]"
      >
        <div class="px-12 py-7" v-for="row in data.tableRows">
          {{ n == 1 ? row.colLeft : row.colRight }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
