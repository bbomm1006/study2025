//TOP

gsap.set(".animatedDiv", { y: "100%", opacity: 0 }); // 초기 상태 확실히 적용
gsap.timeline()
    .to(".animatedDiv", { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }) // 첫 번째 단계
    .to(".animatedDiv", { opacity: 1, duration: 0.3 }) // 두 번째 단계 (유지)
    .to(".animatedDiv", { opacity: 0, duration: 0.2, ease: "power2.in" }); // 세 번째 단계

gsap.set(".page_clipPathContainer", { clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)" }); // 초기 상태 확실히 적용
gsap.timeline()
    .to(".page_clipPathContainer", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5, ease: "power2.out", delay:0.5, }) // 첫 번째 단계

gsap.set(".stickWrap", { y: "100%", opacity: 0 }); // 초기 상태 확실히 적용
gsap.timeline()
    .to(".stickWrap", { y: "0%", opacity: 1, duration: 1, ease: "power2.out", delay:0.7, }) // 첫 번째 단계

gsap.set(".stickWrap .stick_01", { opacity: 0, rotate: "0" }); // 초기 상태 확실히 적용
gsap.timeline()
    .to(".stickWrap .stick_01", { opacity: 1, rotate: "-20deg", duration: 0.5, ease: "power2.out", delay:1.6, }) // 첫 번째 단계

gsap.set(".stickWrap .stick_03", { opacity: 0, rotate: "0" }); // 초기 상태 확실히 적용
gsap.timeline()
    .to(".stickWrap .stick_03", { opacity: 1, rotate: "20deg", duration: 0.5, ease: "power2.out", delay:1.6, }) // 첫 번째 단계
    

