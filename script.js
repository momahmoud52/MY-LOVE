gsap.registerPlugin(ScrollTrigger);

// ✅ العبارات النهائية (38 عبارة)
const reasons = [
  "✨ أحبك لأنك النور في عتمتي", "😊 أحبك لضحكتك التي تحيي قلبي", "🕊️ أحبك لصبرك واحتوائك",
  "💞 أحبك لأنك صديقتي قبل أن تكوني حبيبتي", "🔥 أحبك لدفء كلماتك في برد أيامي",
  "🎧 أحبك لأنك تهمسين في صمتي", "💗 أحبك لحنيتك التي لا تنتهي", "👀 أحبك لأنك تفهمينني دون كلام",
  "🌍 أحبك لعينيك اللتين تُغنياني عن العالم", "🌼 أحبك لجمالك الطبيعي والبساطة",
  "💧 أحبك لوجودك الذي يرويني", "🎈 أحبك لأنك سر سعادتي", "🎶 أحبك لصوتك الذي يطمئن قلبي",
  "🚀 أحبك لأنك تدفعينني للأفضل", "🍁 أحبك لأنك فصلي المفضل", "🌸 أحبك لأنك تجعلين عالمي أجمل",
  "❤️ أحبك لأنك الحنان كله", "🛡️ أحبك لأنك الأمان في خوفي", "💘 أحبك لحبك الكبير لي",
  "💍 أحبك لأنك معي، وهنا يكفي", "📷 أحبك لذكرياتنا الجميلة", "🫀 أحبك لأنك نبضي في كل نبضة",
  "🤪 أحبك لجنونك الذي أعشقه", "✨ أحبك لأنك الحلم الذي تحقق", "أحبك لأنك تضيئين حياتي 💡",
  "أحبك لحنانك المتدفق 🥰", "أحبك لبسمتك الدائمة 😊", "أحبك لأنك تسمعينني 👂",
  "أحبك لأنك قوتي 💪", "أحبك لعفويتك البريئة 🧸", "أحبك لأنك صديقتي قبل حبيبتي 🫂",
  "أحبك لصبرك واحتوائك 🕊️", "أحبك لحكمتك في كل موقف 🧠", "أحبك لدعمك لي دومًا 🙌",
  "أحبك لاهتمامك الصادق 💌", "أحبك لأنك عالمي كله 🌍", "أحبك لأني لا أستطيع بدونك 💞",
  "أحبك لأنك تملئين قلبي ❤️", "💙 أحبك فقط لأنك... أنتِ"
];

const reasonsContainer = document.getElementById("reasons-container");
const spacing = 4000 / (reasons.length + 1);

// رسم النقاط + النصوص
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
  reason.style.left = index % 2 === 0 ? "55%" : "10%";
  reasonsContainer.appendChild(reason);

  gsap.to(reason, {
    scrollTrigger: {
      trigger: reason,
      start: "top 80%",
      toggleClass: { targets: reason, className: "visible" },
    },
  });
});

ScrollTrigger.create({
  trigger: reasonsContainer.lastChild,
  start: "top 80%",
  onEnter: () =>
    document.getElementById("choose-heart").classList.remove("hidden"),
});

// ✅ القلوب
const heartNames = ["زوجتي", "كتكوتي", "بوسي", "بسبوستي", "بسكوتي", "بيسو"];
let clickCount = 0;
const shownNames = new Set();

heartNames.forEach((name) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💙";
  heart.onclick = () => showTree(name);
  document.querySelector(".hearts").appendChild(heart);
});

// ✅ عرض الشجرة
function showTree(name) {
  const treeContainer = document.getElementById("tree-container");
  const treeName = document.getElementById("tree-name");
  const lottieBox = document.getElementById("lottie-tree");

  treeContainer.style.display = "flex";
  treeContainer.scrollIntoView({ behavior: "smooth" });

  // الاسم
  treeName.innerText = name;
  clickCount++;
  shownNames.add(name);
  document.getElementById("count").innerText = clickCount;
  document.getElementById("names-list").innerText = Array.from(shownNames).join("، ");

  // إزالة القديم
  lottieBox.innerHTML = "";
  lottieBox.classList.add("music-pulse");

  // تحميل الشجرة
  lottie.loadAnimation({
    container: lottieBox,
    path: "https://assets7.lottiefiles.com/packages/lf20_pj6becjw.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  }).addEventListener("complete", () => {
    gsap.to(treeName, { opacity: 1, duration: 1 });
  });
}

// ✅ محاولة تشغيل الموسيقى تلقائيًا
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  if (music) {
    music.muted = false;
    music.play().catch(() => {
      console.log("🎵 تم كتم الموسيقى تلقائيًا بسبب سياسة المتصفح.");
    });
  }
});
