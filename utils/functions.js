import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useBreakpoints } from "@vueuse/core";

export const top_margin = 40;
export const basew = 1800;

export const color_set = [
  "bg-red",
  "bg-green",
  "bg-lightblue",
  "bg-jaffalt",
  "bg-yellow",
];

// format color picks for tailwind
export const bgColor = (obj) => {
  switch (obj.bgColor) {
    case "blue":
      return "bg-lightblue";
    case "lightblue":
      return "bg-skyblue";
    case "darkblue":
      return "bg-blue";
    case "red":
      return "bg-red";
    case "tan":
      return "bg-jaffalt";
    case "yellow":
      return "bg-yellow";
    case "green":
      return "bg-green";
    case "black":
      return "bg-shadowblue";

    default:
      break;
  }
};
export const accentColor = (obj) => {
  switch (obj.accentColor) {
    case "blue":
      return "text-lightblue border-lightblue";
    case "red":
      return "text-red border-red";
    case "tan":
      return "text-jaffalt border-jaffalt";
    case "yellow":
      return "text-yellow";
    case "green":
      return "text-green border-green";

    default:
      break;
  }
};
export const fillColor = (obj) => {
  switch (obj.bgColor) {
    case "blue":
      return "fill-blue";
    case "red":
      return "fill-reddk";
    case "tan":
      return "fill-jaffadk";
    case "yellow":
      return "fill-yellowdk";
    case "green":
      return "fill-greendk";

    default:
      break;
  }
};

// turn section class on/off based on scroll position
export const toggleOn = (el, os = 0, add = 0) => {
  ScrollTrigger.create({
    trigger: el,
    start: `top+=${os} bottom`,
    end: `bottom+=${add} top`,

    onEnter: () => {
      /*       console.log("onEnter", el);
       */ el.classList.add("on");
    },
    onEnterBack: () => {
      /*       console.log("onEnterBack", el);
       */ el.classList.add("on");
    },
    onLeave: () => {
      /*       console.log("onLeave", el);
       */ el.classList.remove("on");
    },
    onLeaveBack: () => {
      /*       console.log("onLeaveBack", el);
       */ el.classList.remove("on");
    },
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

// animate items into place on scroll to section
export const animIntoView = (
  items,
  trigger,
  stagger = 0.1,
  start = "top 50%",
  func,
) => {
  //console.log(items);

  // set initial positions
  gsap.set(items, {
    yPercent: 25,
    opacity: 0,
  });

  // trigger animate on when enter into view
  gsap.to(items, {
    duration: 1.25,
    yPercent: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: stagger,
    scrollTrigger: {
      trigger: trigger,
      start: start,
      onEnter: () => {
        if (func != undefined) {
          func("enter");
        }
      },
      onEnterBack: () => {
        if (func != undefined) {
          func("enter");
        }
      },
    },
  });
};

// expand/collapse sections
export const toggleExpand = (id, group, speed = 0.75) => {
  group.forEach((item, i) => {
    if (id == i) {
      // open
      if (!item.classList.contains("open")) {
        item.classList.add("open");
        const h = item.scrollHeight;
        gsap.to(item, {
          duration: speed,
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
          { duration: speed, height: 0, ease: "power3.inOut" },
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
          { duration: speed, height: 0, ease: "power3.inOut" },
        );
      }
    }
  });
};

export const isTouchDevice = () => {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  return isTouchDevice;
};

// check if SSR
export const isSSR = () => {
  if (typeof window !== "undefined") {
    return true;
  }
};

if (isSSR()) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
}

const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, "");
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

// video modal
export const openVideoModal = (obj) => {
  const videoID = useState("videoID", () => "");
  const modal = document.getElementById("video-modal");
  const wrap = document.getElementById("video-player");
  videoID.value = obj;

  gsap.fromTo(
    modal,
    { opacity: 0, display: "block" },
    {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
    },
  );
  gsap.fromTo(
    wrap,
    { opacity: 0 },
    {
      delay: 0.2,
      duration: 0.5,
      opacity: 1,
      ease: "quad.out",
    },
  );
};

// gate modal
export const openGateModal = (url, type, formData) => {
  const gatedUrl = useState("gatedUrl");
  gatedUrl.value = { url: url, type: type };

  const gateForm = useState("gateForm");
  gateForm.value = formData;

  const modal = document.getElementById("gate-modal");
  gsap.fromTo(
    modal,
    { opacity: 0, display: "block" },
    {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
    },
  );
};

// preload hidden images
export const preloadImg = (file) => {
  let img = new Image();
  img.src = file;
  //img.onload = () => console.log("loaded " + img.src);
};

// text formatting
export const formatText = (str) => {
  let formatted = str;
  formatted = removeWidows(formatted);
  formatted = addLineBreaks(formatted);
  return formatted;
};

export const addLineBreaks = (str) => {
  return str?.replaceAll("\n", " <br />");
};
export const removeWidows = (string) => {
  if (!string || string.length < 0) {
    return string;
  }

  // trim whitespace and then split into an array of words
  const words = string.trim().split(" ");
  const totalWords = words.length;
  if (totalWords < 4) {
    return string;
  }

  // wrap the last two words in a nobr
  const formattedLastWords =
    '<span class="nobr">' +
    words[totalWords - 2] +
    " " +
    words[totalWords - 1] +
    "</span>";

  // remove the last two words from the array
  words.splice(-2, 2);

  return words.join(" ") + " " + formattedLastWords;
};

// shortcuts
export const qs = (s, o = document) => o.querySelector(s);
export const qsa = (s, o = document) => [...o.querySelectorAll(s)];
export const rect = (el) => el.getBoundingClientRect();

// parallax - not used
export const parallaxSection = (wrap, margin, os = 0) => {
  // section to move
  const px_section = wrap.querySelector(".section-wrap");

  // set initial positions to account for margin
  gsap.set(wrap, {
    marginTop: "-" + (margin - os) + "rem",
  });
  gsap.set(px_section, {
    y: margin + "rem",
  });

  // animate section
  gsap.to(px_section, {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: wrap,
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
  });
};

export const splitHeadline = (el, wrap) => {
  // split headline into letters
  const spl = new SplitText(el, {
    type: "chars, words",
    charsClass: "letter",
    wordsClass: "word pb-[.35rem] whitespace-nowrap",
  });

  // set initial positions
  const letters = wrap.querySelectorAll(".letter");
  gsap.set(letters, {
    opacity: 1,
    yPercent: 100,
  });
};

// cloud parallax

export const cloudParallax = (
  trigger,
  endTrigger = null,
  clouds,
  cloudY,
  st = "top top",
  end = "bottom top",
) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      endTrigger: endTrigger || trigger,
      start: st,
      end: end,
      scrub: true,
    },
  });

  // move clouds
  clouds.forEach((cloud, i) => {
    tl.to(
      cloud,
      {
        y: cloudY[i] + "rem",
        ease: "none",
      },
      0,
    );
  });
};

export const scrollHeadline = (el) => {
  // split headline into letters
  splitHeadline(el.querySelectorAll(".text"), el);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      end: "bottom 60%",
      scrub: true,
    },
  });

  // get characters and reverse order
  const letters = gsap.utils.toArray(el.querySelectorAll(".letter")).reverse();

  // animate each character on
  tl.to(letters, {
    duration: 0.5,
    opacity: 1,
    stagger: 0.05,
    yPercent: 0,
    ease: "power3.inOut",
  });
};
