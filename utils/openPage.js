import gsap from "gsap";

export default function (fullpath, name) {
  gsap.fromTo(
    "#page-reveal",
    { opacity: 1 },
    { duration: 0.5, opacity: 0, ease: "none" },
  );
  unfreezePage(".wrapper");
  const page_title = useState("page_title");
  page_title.value = name;
}
