// script.js
gsap.registerPlugin(ScrollTrigger);

const reasons = [
  "أحبك لأنك تضيئين حياتي 💡",
  "أحبك لحنانك المتدفق 🥰",
  "أحبك لبسمتك الدائمة 😊",
  "أحبك لأنك تسمعينني 👂",
  "أحبك لأنك قوتي 💪",
  "أحبك لعفويتك البريئة 🧸",
  "أحبك لأنك صديقتي قبل حبيبتي 🫂",
  "أحبك لصبرك واحتوائك 🕊️",
  "أحبك لحكمتك في كل موقف 🧠",
  "أحبك لدعمك لي دومًا 🙌",
  "أحبك لاهتمامك الصادق 💌",
  "أحبك لأنك عالمي كله 🌍",
  "أحبك لأني لا أستطيع بدونك 💞",
  "أحبك لأنك تملئين قلبي ❤️",
  "أحبك... لأنك أنتِ 💙"
];

const reasonsContainer = document.getElementById("reasons-container");
const spacing = 3000 / (reasons.length + 1);

reasons.forEach((text, index) => {
  const y = (index + 1) * spacing;

  const dot = document.createElement("div");
  dot.className = "reason-dot";
  dot.style.top = `${y}px`;
  dot.style.left = "50%";
  reasonsContainer.appendChild(dot);

  const reason = document.createElement("div");
  reason.className = "reason-text";
  reason.innerText = text;
  reason.style.top = `${y - 10}px`;
  reason.style.left = (index % 2 === 0 ? "55%" : "10%");
  reasonsContainer.appendChild(reason);

  gsap.to(reason, {
    scrollTrigger: {
      trigger: reason,
      start: "top 80%",
      toggleClass: { targets: reason, className: "visible" }
    }
  });
});

ScrollTrigger.create({
  trigger: reasonsContainer.lastChild,
  start: "top 80%",
  onEnter: () => document.getElementById("choose-heart").classList.remove("hidden")
});

const showTree = () => {
  const tree = document.getElementById("tree-container");
  tree.style.display = "flex";

  const parts = document.querySelectorAll("#heart-tree path, #heart-tree text");

  gsap.to(parts, {
    opacity: 1,
    stagger: 0.25,
    duration: 1.2,
    ease: "power2.out"
  });

  gsap.to("#heart-name", {
    delay: parts.length * 0.25,
    opacity: 1,
    scale: 1.2,
    duration: 1,
    ease: "back.out(1.7)"
  });
};

document.getElementById("heart1").onclick =
document.getElementById("heart2").onclick = showTree;
