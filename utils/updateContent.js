import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();

export default function (id, path) {
  const route_type = useState('route_type');
  route_type.value = 'custom';

  const newpage = path + id;

  // close toggle menu if exists
  const menu = document.querySelector('.toggle-menu');
  if (width.value <= 550 && menu) {
    const parent = menu.closest('.menu-wrap');
    parent.classList.remove('open');
    menu.classList.remove('open');
    gsap.to(menu, {
      duration: 0.5,
      opacity: 0,
      y: -10,
      ease: 'back.in',
    });
  }

  // remove old content
  const items = document.querySelectorAll('.scroll-reveal');
  items.forEach((item) => {
    item.classList.remove('on');
  });

  // scroll back to top
  gsap.killTweensOf(window);
  gsap.to(window, {
    duration: 0.75,
    scrollTo: 0,
    ease: 'expo.inOut',
    onComplete: function () {
      navigateTo(newpage);
      setTimeout(function () {
        route_type.value = '';
      }, 1000);
    },
  });
}
