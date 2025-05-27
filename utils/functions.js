import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useBreakpoints } from "@vueuse/core";

export const top_margin = 55;
export const basew = 1800;

// auto scroll to section on click
export const jumpTo = (e) => {
  const os = 50;
  const id = e.target.dataset.id;
  const trg = document.querySelector('div[data-id="' + id + '"]');
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: trg, offsetY: os },
    ease: "expo.inOut",
  });
};

// turn section class on/off based on scroll position
export const registerSection = (el, os = 0) => {
  const elems = document.querySelectorAll(el);
  elems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top top+=" + os,
      end: "bottom top",
      onEnter: () => {
        elem.classList.add("on");
      },
      onEnterBack: () => {
        elem.classList.add("on");
      },
      onLeaveBack: () => {
        elem.classList.remove("on");
      },
      onLeave: () => {
        elem.classList.remove("on");
      },
    });
  });
};

// update side menu with active section
export const setActiveSection = (el, id) => {
  const secs = document.querySelector(el).querySelectorAll("li");
  secs.forEach((sec) => {
    if (sec.dataset.id == id) {
      sec.classList.add("on");
    } else {
      sec.classList.remove("on");
    }
  });
};

// pin side menu while scrolling

export const pinMenu = (el, startPin, endPin, topOs) => {
  // kill before creating new
  if (ScrollTrigger.getById("pinmenu") != undefined) {
    ScrollTrigger.getById("pinmenu").kill();
  }

  ScrollTrigger.create({
    id: "pinmenu",
    trigger: startPin,
    endTrigger: endPin,
    start: () => getMenuStart(),
    /* start: "top top+=" + topOs, */
    end: () => getMenuPos(el),
    pin: el,
    pinSpacing: false,
  });
};

// start from centered vertical
const getMenuStart = (cl) => {
  const w = window.innerWidth;
  const os = top_margin * (w / basew);
  return "top top+=" + os;
};
// end at end of article
const getMenuPos = (el) => {
  const w = window.innerWidth;
  const os = top_margin * (w / basew);
  const menu = el.querySelector(".menu");

  const h = menu.offsetHeight;
  return "top top+=" + (h + os);
};

// toggle class with scroll
export const scrollUpToggle = (el, cl) => {
  const elems = document.querySelectorAll(el);
  elems.forEach((elem) => {
    ScrollTrigger.create({
      id: "scrollup",
      trigger: "body",
      start: "top top+=-10",
      end: "bottom bottom",
      onEnter: () => {
        elem.classList.add(cl);
      },
      onLeaveBack: () => {
        elem.classList.remove(cl);
      },
    });
  });
};

// scrolltrigger reveal
export const scrollReveal = (el) => {
  const elems = el.querySelectorAll(".scroll-reveal");
  elems.forEach((elem) => {
    ScrollTrigger.create({
      id: "revealed",
      trigger: elem,
      start: "top 85%",
      onEnter: () => {
        elem.classList.add("on");
      },
    });
  });
};

// play/pause timeline when in view
export const playInView = (
  el,
  tl,
  func,
  add = 0,
  st = "top bottom",
  loop = true,
) => {
  ScrollTrigger.create({
    trigger: el,
    start: st,
    end: "bottom top+=" + -add,
    onEnter: () => {
      if (tl != undefined) {
        tl.play();
        /* console.log('play'); */
      }
      if (func != undefined) {
        func("enter");
      }
    },
    onEnterBack: () => {
      if (tl != undefined) {
        tl.play();
      }
      if (func != undefined) {
        func("enter");
      }
    },
    onLeave: () => {
      //console.log('leave');
      if (tl != undefined && loop) {
        tl.pause();
      }
      if (func != undefined) {
        func("leave");
      }
    },
    onLeaveBack: () => {
      if (tl != undefined && loop) {
        tl.pause();
      }
      if (func != undefined) {
        func("leave");
      }
    },
  });
};

// expand/collapse sections
export const toggleExpand = (id, group) => {
  group.forEach((item, i) => {
    if (id == i) {
      // open
      if (!item.classList.contains("open")) {
        item.classList.add("open");
        const h = item.scrollHeight;
        gsap.to(item, {
          duration: 0.75,
          height: h,
          ease: "power3.inOut",
          onComplete: function () {
            item.style.height = "auto";
          },
        });

        // close
      } else {
        item.classList.remove("open");
        const h = item.scrollHeight;
        gsap.fromTo(
          item,
          { height: h },
          { duration: 0.75, height: 0, ease: "power3.inOut" },
        );
      }

      // close others if open
    } else {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        const h = item.scrollHeight;
        gsap.fromTo(
          item,
          { height: h },
          { duration: 0.75, height: 0, ease: "power3.inOut" },
        );
      }
    }
  });
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const labelToScroll = (timeline, label) => {
  let st = timeline.scrollTrigger;
  return (
    st.start +
    (st.end - st.start) * (timeline.labels[label] / timeline.duration())
  );
};

export const isTouchDevice = () => {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  return isTouchDevice;
};

export const isSSR = () => {
  if (typeof window !== "undefined") {
    return true;
  }
};

if (isSSR()) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
}

const hoverSp = 0.5;
const hoverEase = "power3.out";

export const hoverOnSocial = (e) => {
  if (!isTouchDevice()) {
    const trg = e.target;
    const txt = trg.querySelector(".txt");
    const icon = trg.querySelector(".hover-icon");
    gsap.to(txt, {
      duration: hoverSp,
      yPercent: -100,
      opacity: 0,
      ease: hoverEase,
    });
    gsap.fromTo(
      icon,
      { yPercent: 100 },
      {
        duration: hoverSp,
        yPercent: 0,
        opacity: 1,
        ease: hoverEase,
      },
    );
  }
};
/* export const hoverOffSocial = (e) => {
  const trg = e.target;
  const txt = trg.querySelector('.txt');
  const icon = trg.querySelector('.hover-icon');
  gsap.to(txt, {
    duration: hoverSp,
    yPercent: 0,
    opacity: 1,
    ease: hoverEase,
  });
  gsap.to(icon, {
    duration: hoverSp,
    yPercent: 100,
    opacity: 0,
    ease: hoverEase,
  });
}; */

// drop menu toggle open/close
/* export const toggleDropMenu = (e) => {
  const parent = e.target.closest('.menu-wrap');
  const menu = parent.querySelector('.toggle-menu');

  // open menu
  if (!parent.classList.contains('open')) {
    //console.log('open');
    parent.classList.add('open');
    menu.classList.add('open');

    gsap.fromTo(
      menu,
      { display: 'block', opacity: 0, y: -10 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      }
    );

    // close menu
  } else {
    //console.log('close');
    parent.classList.remove('open');
    menu.classList.remove('open');

    gsap.to(menu, {
      duration: 0.5,
      opacity: 0,
      y: -10,
      ease: 'back.in',
    });
  }
}; */

export const createExcerpt = (
  content,
  maxNumberOfWords,
  trailingIndicator = "...",
) => {
  const listOfWords = content.trim().split(" ");
  const truncatedContent = listOfWords.slice(0, maxNumberOfWords).join(" ");
  const excerpt = truncatedContent + trailingIndicator;
  const output = listOfWords.length > maxNumberOfWords ? excerpt : content;

  return stripHTMLTags(output);
};

const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, "");

export const addLineBreaks = (str) => {
  return str.replaceAll("\n", "<br />");
};

/* export const openHL = (el) => {
  el.openAnim();
}; */

export const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export const layoutShiftRefresh = () => {
  ScrollTrigger.refresh();
};

// for VueUse SSR friendly breakpoints
export const breakpoints = useBreakpoints({
  mobile1: 0,
  mobile2: 550,
  tablet1: 650,
  tablet2: 900,
  laptop: 1024,
  desktop: 1200,
  lgdesktop: 1500,
});

// shortcuts
export const qs = (s, o = document) => o.querySelector(s);
export const qsa = (s, o = document) => [...o.querySelectorAll(s)];
export const rect = (el) => el.getBoundingClientRect();
