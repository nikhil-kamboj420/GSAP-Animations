const runFun = () => {
  let allSpan = document.querySelectorAll("span");
  let animateBox = document.getElementById("animateBox");
  setTimeout(() => {
    allSpan.forEach((span) => {
      span.style.display = "none";
    });
    animateBox.style.display = "grid";
    animateBox.style.placeContent = "center";
  }, 1);
};
let tl = gsap.timeline();

tl.from("span", {
  opacity: -1,
  delay: 0.5,
  stagger: 0.1,
  ease: "power4.out",
  color: "#fff",
});
tl.to("span", {
  opacity: -1,
  stagger: 0.1,
  ease: "power4.out",
  color: "#fff",
});

tl.to("#animateBox", {
  onComplete: runFun,
  ease: "power2.out",
});

tl.to("#animateBox", {
  content: "",
  margin: "auto",
  maxWidth: "50vw",
  height: "50vh",
  borderRadius: "3rem",
  position: "relative",
  top: "20%",
  ease: "power2.out",
  duration: 1,
});

gsap.from("#page1 .box", {
  duration: 1,
  rotation: 360,
  scale: 0,
  y: 100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page1 .box",
    scroller: "body",
    start: "top 130%",
    scrub: 1,
  },
});
gsap.to("#page2 h2", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
gsap.from("#page3 .box", {
  duration: 1.5,
  rotation: 360,
  scale: 0,
  y: -200,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page3 .box",
    scroller: "body",
    start: "top 60%",
    scrub: 2,
  },
});

let extraDiv = document.querySelector(".extraDiv");
let cursor = document.querySelector("#cursor");
let cursor2 = document.querySelector("#cursor2");
let cursor3 = document.querySelector("#cursor3");
let cursor4 = document.querySelector("#cursor4");

// console.log(extraDiv,cursor)

extraDiv.addEventListener("mousemove", (e) => {
  let tl = gsap.timeline({ defaults: { duration: 0.5 } });
  tl.to("#cursor", {
    duration: 0.1,
    x: e.x,
    y: e.y,
  });
  tl.to("#cursor2", {
    duration: 0.1,
    x: e.x,
    y: e.y,
  });
  tl.to("#cursor3", {
    duration: 0.1,
    x: e.x,
    y: e.y,
  });
  tl.to("#cursor4", {
    duration: 0.1,
    x: e.x,
    y: e.y,
  });
});

const breakText = () => {
  let h1 = document.querySelector("#main h1");
  let text = document.querySelector("#main h1").textContent;
  let splittedText = text.split("");
  let halflength = splittedText.length / 2;

  let clutter = "";
  splittedText.forEach((elem, indx) => {
    if (indx < halflength) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

breakText();

gsap.from(".a", {
  duration: 0.7,
  opacity: 0,
  delay: 0.2,
  y: 50,
  stagger: 0.2,
  ease: "steps(12)",
  scrollTrigger: {
    trigger: ".a",
    start: "top 90%",
    end: "top 30%",
    scroller: "body",
    markers : true
  },
});
gsap.from(".b", {
  duration: 0.7,
  delay: 0.2,
  opacity: 0,
  y: 50,
  stagger: -0.2,
  ease: "steps(12)",
  scrollTrigger: {
    trigger: ".b",
    start: "top 90%",
    end: "top 30%",
    scroller: "body",
  },
});
