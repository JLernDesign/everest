<script setup>
import gsap from "gsap";
const props = defineProps(["data", "num", "func"]);
const open = ref(false);
/* const main = ref(null);
const answer = ref(null);
const wrap = ref(null);
 */
/* 
const toggleQ = (e) => {
  if (e.target.classList.contains("closed")) {
    e.target.classList.remove("closed");
    e.target.classList.add("open");
    open.value = true;
    openQ();
  } else {
    e.target.classList.remove("open");
    e.target.classList.add("closed");
    open.value = false;
    closeQ();
  }
};

const openQ = () => {
  const h = answer.value.offsetHeight;
  gsap.to(wrap.value, {
    duration: 0.75,
    height: h,
    ease: "power3.inOut",
    onComplete: function () {
      wrap.value.style.height = "auto";
    },
  });
};

const closeQ = () => {
  const h = answer.value.offsetHeight;
  gsap.to(wrap.value, {
    duration: 0.5,
    height: 0,
    ease: "power3.out",
  });
}; */

const handleClick = (e) => {
  props.func(props.num);
  open.value = !open.value;
};

defineExpose({ open });
</script>

<template>
  <div
    class="faq-wrap closed relative flex justify-between border-b-1 border-b-[#3D4856]"
    ref="main"
  >
    <div
      class="absolute left-0 top-[6.9rem] h-0 w-full border-b-1 border-b-[#3D4856]"
    ></div>
    <!-- text -->
    <div class="faq-text w-full shrink px-side">
      <!-- question -->
      <h3
        class="q cursor-pointer py-[2.2rem] text-body-sm leading-sm transition-colors duration-300 hover:text-red"
        :class="open && 'text-red'"
        @click="handleClick"
      >
        Can Everest ERP handle multi-currency and multi-entity operations?
      </h3>

      <!-- answer -->
      <div class="faq-answer relative h-0 overflow-hidden" ref="wrap">
        <div class="py-20">
          <div
            class="relative rounded-base bg-jaffa px-[14rem] pb-side pt-[5rem] text-body-sm leading-sm text-black"
            ref="answer"
          >
            <div class="absolute left-[4.4rem] top-[5.5rem] w-[5.3rem]">
              <IconLogoMark color="red" />
            </div>
            <span class="space-y-10">
              <p>
                Yes, Everest ERP is built to support complex financial
                environments, including multi-currency and multi-entity
                operations, making it an ideal solution for global SaaS
                businesses. The platform allows organizations to manage multiple
                subsidiaries or business units across different regions while
                maintaining a centralized system for financial consolidation and
                oversight. By accommodating various local currencies and
                regulations, Everest ERP ensures accurate financial reporting
                and helps businesses stay compliant across jurisdictions without
                the need for extensive manual workarounds or third-party tools.
                This multi-dimensional functionality enables real-time
                visibility into financial performance at both the entity and
                consolidated levels. Finance teams can easily generate reports,
                track intercompany transactions, and manage compliance
                requirements for each entity. With automated currency
                conversions and built-in capabilities for handling transfer
                pricing, tax reporting, and local financial statements, Everest
                ERP streamlines operations for companies with diverse structures
                and international footprints.
              </p>
              <p>Second paragraph here</p>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- arrow -->
    <div
      class="faq-arrow relative w-[6.8rem] shrink-0 border-l-1 border-l-[#3D4856]"
    >
      <IconArrow
        class="arrow absolute left-[2.5rem] top-[2.5rem] rotate-90 duration-500 ease-in-out"
        color="stroke-red"
        :class="open && 'on'"
      />
    </div>
  </div>
</template>

<style scoped>
.arrow.on {
  transform: rotate(180deg);
}
</style>
