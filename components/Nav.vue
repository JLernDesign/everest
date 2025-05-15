<script setup>
const props = defineProps(['type']);
const route = useRoute();
import gsap from 'gsap';

// filter links for desktop
let pageList = pages;
if (props.type == 'desktop') {
  pageList = pages.filter((page) => page.desktop);
}

// setup hovers for desktop
onMounted(() => {
  if (props.type == 'desktop') {
    const nav = document.querySelector('ul.main-nav');
    const links = nav.querySelectorAll('li');
    links.forEach((link) => {
      link.addEventListener('mouseenter', navHoverOn);
      link.addEventListener('mouseleave', navHoverOff);
    });
  }
});

const navHoverOn = (e) => {
  const el = e.target.querySelector('.icon-wrap');
  gsap.to(el, {
    duration: 0.5,
    y: -5,
    backgroundImage:
      'linear-gradient(rgba(255,255,255, 0.2), rgba(255,255,255, 0))',
    ease: 'power3.out',
  });
};
const navHoverOff = (e) => {
  const el = e.target.querySelector('.icon-wrap');
  gsap.to(el, {
    duration: 0.5,
    y: 0,
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))',
    ease: 'elastic.out(1.5,1)',
  });
};
</script>

<template>
  <nav :class="type">
    <ul class="main-nav anim-resize">
      <li
        v-for="page in pageList"
        :class="page.url == route.fullPath && 'active'"
      >
        <span class="active-circ"></span>
        <NuxtLink :to="page.url" class="nav-link">
          <div class="icon-wrap">
            <img :src="`icons/${page.icon}.svg`" alt="" />
          </div>

          <p class="small-caps">{{ page.title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  display: block;
}
ul {
  width: 100%;
  position: relative;
  z-index: 1;
  display: grid;
  grid-auto-columns: minmax(100px, 1fr);
  grid-auto-flow: column;
  gap: 55px;
  padding: 0 100px;
  text-align: center;
  .icon-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 auto 15px;
    padding: 18px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
    display: grid;
    place-content: center;
  }
  li {
    position: relative;
  }
  p {
    color: #fff;
  }
}

nav.desktop {
  .active-circ {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    top: -30px;
    background-color: #fff;
    transform: translateY(-20px);
    transition: var(--ease-in-out);
  }
  li.active {
    .active-circ {
      transform: translateY(0px);
    }
  }
  .nav-link {
    p {
      display: inline-block;
      position: relative;
    }
    p:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(currentColor, currentColor);
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 0% 2px;
      transition: var(--ease-out);
    }
    &:hover {
      p:after {
        background-size: 100% 2px;
      }
    }
  }
}

@media (max-width: 1300px) {
  nav.desktop {
    ul {
      gap: 20px;
      padding: 0 45px;

      .icon-wrap {
        width: 70px;
        height: 70px;
        padding: 14px;
        margin-bottom: 10px;
        border-width: 1px;
      }
    }
    .active-circ {
      top: -26px;
    }
  }
}
</style>
