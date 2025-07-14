import gsap from "gsap";

export default function (fullpath, name) {
  gsap.to("#page-reveal", {
    duration: 0.5,
    opacity: 0,
    ease: "none",
    display: "none",
  });
  unfreezePage(".wrapper");
  const page_title = useState("page_title");
  page_title.value = name;
}
