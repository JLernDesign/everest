<script setup>
import gsap from 'gsap';
const menu = ref(null);
const props = defineProps(['data', 'type', 'active', 'submenu', 'close_func']);

// submenu
const openMenu = () => {
  console.log('open');

  gsap.killTweensOf(menu.value);
  gsap.to(menu.value, {
    duration: 0.5,
    display: 'block',
    opacity: 1,
    y: 0,
    ease: 'power3.out',
  });
};
const closeMenu = () => {
  gsap.killTweensOf(menu.value);
  gsap.to(menu.value, {
    duration: 0.3,
    opacity: 0,
    display: 'none',
    y: 15,
    ease: 'power3.in',
  });
};

// handle menu click
const handleClick = (e) => {
  if (e.target.dataset.parent) {
    toggleSubMenu(e);
  } else {
    closeMenu();
    if (e.target.target == '_blank') {
      window.open(e.target.dataset.href, '_blank');
    } else {
      if (props.close_func) {
        props.close_func();
      }
      navigateTo(e.target.dataset.href);
    }
  }
};

// toggle mobile submenu
const toggleSubMenu = (e) => {
  const child = e.target;
  const parent = child.parentElement;

  const el = parent.querySelector('.nav-sub');
  const arrow = parent.querySelector('.arrow');

  // open
  if (!e.target.classList.contains('open')) {
    e.target.classList.add('open');

    const h = parent.querySelector('.submenu').offsetHeight;

    gsap.to(el, {
      duration: 0.75,
      height: h,
      ease: 'power3.inOut',
      onComplete: function () {
        el.style.height = 'auto';
      },
    });

    gsap.to(arrow, {
      duration: 0.75,
      rotation: 90,
      ease: 'power3.inOut',
    });

    // close
  } else {
    e.target.classList.remove('open');

    gsap.to(el, {
      duration: 0.75,
      height: 0,
      ease: 'power3.inOut',
    });

    gsap.to(arrow, {
      duration: 0.75,
      rotation: 0,
      ease: 'power3.inOut',
    });
  }
};
</script>

<template>
  <li
    @mouseleave="type != 'mobile' && submenu ? closeMenu() : null"
    class="relative"
  >
    <NuxtLink
      :to="type == 'main' ? data.url : null"
      :data-parent="type == 'mobile' && submenu ? true : null"
      :target="data.target"
      class="relative z-1 toplink text-body-sm"
      :class="[type == 'main' && active == data.title ? 'on' : null]"
      @mouseenter="type == 'main' && submenu ? openMenu() : null"
      @click.prevent="handleClick"
      >{{ data.title }}

      <!-- mobile arrow -->
      <div v-if="type == 'mobile' && submenu" class="arrow">
        <img src="/public/ui/chevron.svg" alt="" />
      </div>
    </NuxtLink>

    <div v-if="submenu" class="nav-sub w-full relative z-0 h-0">
      <ul
        class="submenu absolute min-w-full left-0 top-full z-0 mt-[.8rem] hidden opacity-0 before:content-[''] before:absolute before:left-0 before:-top-[3rem] before:w-full before:h-[3rem]"
        ref="menu"
      >
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
  </li>
</template>

<style scoped>
/* @media (max-width: 1024px) {
  .nav-sub {
    height: 0;
    overflow: hidden;
  }
  .submenu {
    border: none !important;
    padding-bottom: 15px;
    padding-top: 16px;
    padding-left: 22px;
    li {
      font-family: 'Inter', sans-serif;
      font-size: 18px;
      text-transform: none;
      letter-spacing: 0;
      font-weight: 400;
    }
    li + li {
      border: none !important;
      margin-top: 22px;
    }
    a {
      &:hover {
        background-color: var(--black);
        color: var(--cream);
      }
    }
  }

  .nav-sub {
    &.icons {
      .submenu {
        a {
          display: flex;
          justify-items: flex-start;
          align-items: center;
        }
      }
      .list-icon {
        width: 46px;
        height: 46px;
        flex-shrink: 0;
        margin-right: 20px;

        img {
          object-fit: cover;
        }
      }
    }
  }
} */
</style>
