<script setup>
const props = defineProps(["data", "id"]);

// add filler block if odd number of products
let products, items;
if (props.id == "Product") {
  products = props.data;
  products.length % 2 != 0 && products.push("");
}

// fade others for product menu
onMounted(() => {
  if (props.id == "Product") {
    items = document.querySelectorAll(".inner-content");
  }
});

const handleMouseEnter = (index) => {
  items.forEach((item) => {
    item.classList.add("fade");
  });
  items[index].classList.remove("fade");
};

const handleMouseLeave = () => {
  items.forEach((item) => {
    item.classList.remove("fade");
  });
};
</script>

<template>
  <div
    class="submenu absolute left-0 top-full z-0 mt-[2.25rem] hidden min-w-full translate-y-[1.5rem] opacity-0 before:absolute before:-top-[3rem] before:left-1/2 before:h-[3rem] before:w-[30rem] before:-translate-x-1/2 before:content-['']"
  >
    <div
      class="menu-bg absolute left-1/2 -translate-x-1/2 rounded-base-mob bg-shadowblue bg-[url(/ui/menu-texture@2x.webp)] bg-cover p-[1.5rem] shadow-submenu s:rounded-base"
      :class="id == 'Product' ? 'w-[90rem]' : 'w-[41rem]'"
    >
      <ul
        class="menu-contents divide-y-1 divide-whiteline rounded-[.7rem] bg-shadowblue text-body-xsm-mob leading-sm text-white s:text-body-xsm [&_.fade]:opacity-20 [&_.inner-content]:transition-opacity [&_.inner-content]:duration-300"
        :class="
          id == 'Product' &&
          'grid grid-cols-2 [&_li:nth-child(2)]:!border-t-transparent [&_li:nth-child(even)]:border-l-1'
        "
      >
        <template v-if="id == 'Product'">
          <SubmenuLinkIcon
            v-for="(item, i) in products"
            :data="item"
            @mouseenter="item.label && handleMouseEnter(i)"
            @mouseleave="handleMouseLeave"
          />
        </template>
        <template v-else>
          <SubmenuLink v-for="(item, i) in data" :data="item" />
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
