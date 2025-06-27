gsap.registerPlugin(ScrollTrigger);

const reasons = [
  "✨ أحبك لأنك النور في عتمتي",
  "😊 أحبك لضحكتك التي تحيي قلبي",
  "🕊️ أحبك لصبرك واحتوائك",
  "💞 أحبك لأنك صديقتي قبل أن تكوني حبيبتي",
  "🔥 أحبك لدفء كلماتك في برد أيامي",
  "🎧 أحبك لأنك تهمسين في صمتي",
  "💗 أحبك لحنيتك التي لا تنتهي",
  "👀 أحبك لأنك تفهمينني دون كلام",
  "🌍 أحبك لعينيك اللتين تُغنياني عن العالم",
  "🌼 أحبك لجمالك الطبيعي والبساطة",
  "💧 أحبك لوجودك الذي يرويني",
  "🎈 أحبك لأنك سر سعادتي",
  "🎶 أحبك لصوتك الذي يطمئن قلبي",
  "🚀 أحبك لأنك تدفعينني للأفضل",
  "🍁 أحبك لأنك فصلي المفضل",
  "🌸 أحبك لأنك تجعلين عالمي أجمل",
  "❤️ أحبك لأنك الحنان كله",
  "🛡️ أحبك لأنك الأمان في خوفي",
  "💘 أحبك لحبك الكبير لي",
  "💍 أحبك لأنك معي، وهنا يكفي",
  "📷 أحبك لذكرياتنا الجميلة",
  "🫀 أحبك لأنك نبضي في كل نبضة",
  "🤪 أحبك لجنونك الذي أعشقه",
  "✨ أحبك لأنك الحلم الذي تحقق",
  "💙 أحبك فقط لأنك... أنتِ"
];

const reasonsContainer = document.getElementById("reasons-container");
const spacing = 4000 / (reasons.length + 1);

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

const heartNames = ["زوجتي", "كتكوتي", "بوسي", "بسبوستي", "بسكوتي", "بيسو"];
let clickCount = 0;
const shownNames = new Set();

heartNames.forEach(name => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💙";
  heart.onclick = () => showTree(name);
  document.querySelector(".hearts").appendChild(heart);
});

function showTree(name) {
  const treeContainer = document.getElementById("tree-container");
  const treeName = document.getElementById("tree-name");
  treeContainer.style.display = "flex";
  treeContainer.scrollIntoView({ behavior: "smooth" });

  treeName.innerText = name;
  clickCount++;
  shownNames.add(name);

  document.getElementById("count").innerText = clickCount;
  document.getElementById("names-list").innerText = Array.from(shownNames).join("، ");

  lottie.loadAnimation({
    container: document.getElementById("lottie-tree"),
    path: "https://assets7.lottiefiles.com/packages/lf20_pj6becjw.json",
    renderer: "svg",
    loop: false,
    autoplay: true
  }).addEventListener("complete", () => {
    gsap.to(treeName, { opacity: 1, duration: 1 });
  });
}
