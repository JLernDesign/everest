<script setup>
const props = defineProps(["layout", "data"]);
</script>

<template>
  <Section
    class="pb-section-bot pt-[12rem]"
    :class="layout == 'img-rt' ? 'bg-jaffa' : 'bg-skyblue'"
    side="lg"
  >
    <!-- header -->
    <header
      class="relative flex justify-between"
      :class="
        layout == 'img-rt' ? '[&_.eyebrow]:bg-jaffa' : '[&_.eyebrow]:bg-skyblue'
      "
    >
      <LineFull class="top-1/2" />
      <div class="eyebrow relative z-1 bg-jaffa px-5 text-body-sm">
        {{ data.eyebrow }}
      </div>
      <div class="eyebrow relative z-1 bg-jaffa px-5">
        <IconEyebrow color="fill-black" />
      </div>
    </header>

    <!-- slides -->
    <div
      class="mt-[10rem] flex justify-between overflow-hidden rounded-base bg-shadowblue"
    >
      <!-- text -->
      <div
        class="text relative w-1/2 px-[5rem] pb-[13rem] pt-[11.5rem] text-white"
        :class="layout == 'img-rt' ? 'order-1' : 'order-2'"
      >
        <div class="max-w-[575px] space-y-7">
          <h2 class="font-helvb text-md leading-[1.09]">
            Where legacy <br />ERP fall short.
          </h2>
          <p>
            Legacy ERP systems weren’t built for the speed, scale, or complexity
            of SaaS. They rely on outdated architectures, require constant IT
            involvement, and force finance teams to stitch together point
            solutions just to stay afloat. What you get as a result is slower
            operations, higher costs, and missed opportunities.
          </p>
          <CtaBtn to="/">Try Everest</CtaBtn>
        </div>

        <!-- controls -->
        <div
          class="absolute bottom-[8rem] left-0 flex h-[3.2rem] w-full items-center px-[5rem]"
        >
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="left"
              :color="layout == 'img-rt' ? 'red' : 'blue'"
            />
          </div>
          <div
            class="count px-side font-barlow-cond font-bold"
            :class="layout == 'img-rt' ? 'text-red' : 'text-lightblue'"
          >
            1/10
          </div>
          <div class="relative h-full w-[23.4rem]">
            <UISlideArrow
              dir="right"
              :color="layout == 'img-rt' ? 'red' : 'blue'"
            />
          </div>
        </div>
      </div>

      <!-- image -->
      <div
        class="image w-[48.5%] rounded-base bg-cover px-[13rem] py-[5rem]"
        :class="
          layout == 'img-rt'
            ? 'order-2 bg-[url(/ui/mt-red@2x.jpg)]'
            : 'order-1 bg-[url(/ui/mt-blue@2x.jpg)]'
        "
      >
        <div
          class="flex h-full min-h-[62rem] flex-col justify-end space-y-4 rounded-base bg-jaffa p-[3.2rem] text-body-sm leading-sm"
        >
          <h3 class="font-helvh">Manual, error-prone revenue recognition</h3>
          <p>
            Legacy systems struggle with modern revenue models. Teams are forced
            to manage ASC 606 compliance in spreadsheets, increasing the risk of
            errors and delaying the close.
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
