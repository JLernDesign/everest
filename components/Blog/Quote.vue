<script setup>
const props = defineProps(["data"]);
/* 

  return h(
      "div",
      {
        class:
          "content-block quote relative left-1/2 w-screen max-s:-ml-[50vw] s:-translate-x-1/2 -ml-[20rem] s:!my-[10rem] max-s:!my-[8rem]",
      },
      [
        h(
          "div",
          {
            class:
              "quote-wrap s:bg-[url(/public/blog/quote-bg.svg)] bg-[url(/public/blog/quote-bg-mob.svg)] bg-cover s:px-[20rem] s:py-[13.2rem] py-[17rem] border-y-1 border-y-grayline",
          },
          [
            h(
              "blockquote",
              {
                class:
                  "text-xl-mob s:text-xl -tracking-sm font-barlow-cond leading-xl text-center s:p-[8rem] p-[4rem] rounded-base-mob s:rounded-base bg-jaffa",
              },
              record.text,
            ),
          ],
        ),
      ],
    );*/
</script>

<template>
  <div
    class="content-block quote relative left-1/2 -ml-[20rem] w-screen s:!my-[10rem] s:-translate-x-1/2 max-s:!my-[8rem] max-s:-ml-[50vw]"
  >
    <div
      class="quote-wrap border-y-1 border-y-grayline bg-[url(/public/blog/quote-bg-mob.svg)] bg-cover py-[17rem] s:bg-[url(/public/blog/quote-bg.svg)] s:py-[8rem]"
    >
      <div
        class="relative mx-auto flex flex-row justify-end s:!w-[132rem] max-s:flex-col max-s:pb-[5rem]"
      >
        <blockquote
          class="rounded-base-mob bg-jaffa p-[4rem] text-center font-barlow-cond text-xl-mob leading-lg -tracking-sm s:w-[92rem] s:rounded-base s:p-[4rem] s:text-center s:text-[7rem]"
        >
          {{ data.text }}
        </blockquote>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
