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

//SCROLL 1
ScrollTrigger.matchMedia({                    
    // desktop
    "(min-width: 1025px)": function() {

        // 상단
        let topani = gsap.timeline({
            scrollTrigger: {
                trigger: "#section1", // 트리거 요소
                start: "top top", // 스크롤 시작 위치
                end: "bottom top", // 스크롤 종료 위치
                scrub: 4, // 스크롤에 따라 애니메이션 진행
                pin: true, // #section1을 고정
                // markers: true // 디버그용 마커 
                scroller: viewport, // Lenis의 scroller 적용                                
            }
        });

        topani.addLabel('a')                            
        topani.fromTo(".page_clipPathContainer", { clipPath: "inset(0% 0% 0% 0%)", }, { clipPath: "inset(0% 0% 0% 50%)", duration:3, ease: "linear",},'a');
        topani.fromTo(".page_clipPathContainer .page_masking", { opacity: 1, }, { opacity: 0, duration:2, ease: "linear",},'a');
        topani.fromTo(".stickWrap", { opacity: 1, }, { opacity: 0, duration:2, ease: "linear",},'a');

        topani.addLabel('b')                            
        topani.fromTo(".page_stickBox", { opacity: 0, transform: "translate(-50%, -40%)", }, { opacity: 1, transform: "translate(-50%, -50%)", duration:1, ease: "linear", delay:-0.5 },'b');
        topani.fromTo(".page_introductions", { opacity: 0, }, { opacity: 1, duration:1, ease: "linear", delay:-0.5 },'b');

        topani.fromTo(".page_introductions .page_productNameContainer", { y: 20, }, { y: 0, duration:1, ease: "linear", delay:-0.5 },'b');
        topani.fromTo(".page_introductions .page_productNameSubtitle", { y: 20, }, { y: 0, duration:1, ease: "linear", delay:-0.4 },'b');
        topani.fromTo(".page_introductions .page_productNameTitle", { y: 20, }, { y: 0, duration:1, ease: "linear", delay:-0.3 },'b');
        topani.fromTo(".page_introductions .page_productDescriptions", { y: 20, }, { y: 0, duration:1, ease: "linear", delay:-0.2 },'b');

        topani.fromTo(".page_blueBox", { opacity: 0, }, { opacity: 1, duration:0.1, ease: "linear", delay:-0.2 },'b');
        topani.fromTo(".page_clipPathContainer", { opacity: 1, }, { opacity: 0, duration:1, ease: "linear" },'b');

        topani.addLabel('c')  
        topani.fromTo(".page_stickBox", { opacity: 1, }, { opacity: 0, duration:4, ease: "linear", delay:0.5 },'c');
        topani.fromTo(".page_introductions", { opacity: 1, }, { opacity: 0, duration:4, ease: "linear", delay:0.5 },'c');
        topani.fromTo(".page_blueBox", { transform: "translate(0, -50%) scale(1, 1)", width:"50%", height:"100%" }, { transform: "translate(0, -50%) scale(0.9, 0.9)", width:"50vw", height:"50vw", duration:4, ease: "linear", delay:0.5 },'c');

        topani.addLabel('c2')  
        topani.fromTo(".page_blueBox", { transform: "translate(0, -50%) scale(0.9, 0.9)", borderRadius: "0" }, { transform: "translate(0, -50%) scale(0.8, 0.8)", borderRadius: "10%", duration:2, ease: "linear" },'c2');
        topani.fromTo(".page_blueBox", { transform: "translate(0, -50%) scale(0.8, 0.8)", borderRadius: "10%" }, { transform: "translate(0, -50%) scale(0.6, 0.6)", borderRadius: "100%", duration:4, delay:2, ease: "linear" },'c2');

        topani.addLabel('d')  
        topani.fromTo(".page_aboutBenefits", { opacity: 0, }, { opacity: 1, duration:2, ease: "linear", delay:-4 },'d');
        topani.fromTo(".stickWrap2", { opacity: 0, }, { opacity: 1, duration:2, ease: "linear", delay:-4 },'d');

        topani.addLabel('e')  
        topani.fromTo(".stickWrap2 .cover", { rotate: "0", opacity: 0, }, { rotate: "-20deg", opacity: 1, duration:3, ease: "linear" },'e');

        topani.addLabel('f')  
        topani.fromTo(".stickWrap2 .stick_01", { opacity: 1, }, { opacity: 0, duration:0.1, ease: "linear" },'f');
        topani.fromTo(".stickWrap2 .stick_cover", { opacity: 0, }, { opacity: 1, duration:0.1, ease: "linear" },'f');

        topani.addLabel('g')  
        topani.fromTo(".stickWrap2 .stick_in", { opacity: 0, height: "80%" }, { opacity: 1, height: "100%", duration:3, ease: "linear" },'g');
        topani.fromTo(".stickWrap2 .stick_top", { opacity: 0, rotate: 0 }, { opacity: 1, rotate: "45deg", duration:3, ease: "linear" },'g');

        topani.fromTo("#section1", 
            { opacity: 1, }, 
            { opacity: 0, duration: 2, delay: 5 }
        );

    }, 

    // mobile
    "(max-width: 1024px)": function() {
        // 상단
        let topani = gsap.timeline({
            scrollTrigger: {
                trigger: "#section1", // 트리거 요소
                start: "top top", // 스크롤 시작 위치
                end: "bottom top", // 스크롤 종료 위치
                scrub: 4, // 스크롤에 따라 애니메이션 진행
                pin: true, // #section1을 고정
                // markers: true // 디버그용 마커    
                scroller: viewport, // Lenis의 scroller 적용                             
            }
        });

        topani.addLabel('a')                            
        topani.fromTo(".page_clipPathContainer", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", }, { clipPath: "polygon(0% 68%, 100% 68%, 100% 100%, 0% 100%)", duration:5, ease: "linear",},'a');
        topani.fromTo(".page_clipPathContainer .page_masking", { opacity: 1, }, { opacity: 0, duration:5, ease: "linear",},'a');
        topani.fromTo(".stickWrap", { opacity: 1, }, { opacity: 0, duration:5, ease: "linear",},'a');

        topani.addLabel('b')                            
        topani.fromTo(".page_stickBox", { opacity: 0, transform: "translate(-50%, -40%)", }, { opacity: 1, transform: "translate(-50%, -50%)", duration:1, ease: "linear", delay:-0.5 },'b');
        topani.fromTo(".page_introductions", { opacity: 0, }, { opacity: 1, duration:1, ease: "linear", delay:-0.5 },'b');
        topani.fromTo(".page_blueBox", { opacity: 0, }, { opacity: 1, duration:0.1, ease: "linear", delay:-0.2 },'b');
        topani.fromTo(".page_clipPathContainer", { opacity: 1, }, { opacity: 0, duration:1, ease: "linear" },'b');

        topani.addLabel('b2')
        topani.fromTo(".page_stickBox", { opacity: 1, }, { opacity: 1, duration:5, ease: "linear", delay:1 },'b2');

        topani.addLabel('b3')
        topani.fromTo(".stickWrap", { opacity: 0, }, { opacity: 0, duration:5, ease: "linear", delay:1 },'b3');

        topani.addLabel('c')  
        topani.fromTo(".page_stickBox", { opacity: 1, }, { opacity: 0, duration:4, ease: "linear", delay:1 },'c');
        topani.fromTo(".page_introductions", { opacity: 1, }, { opacity: 0, duration:4, ease: "linear", delay:1 },'c');
        topani.fromTo(".page_blueBox", { transform: "translate(0, 0)", width:"130%", left: "-15%" }, { transform: "translate(0, 0)", width:"130%", left: "-15%", duration:4, ease: "linear", delay:1 },'c');

        topani.addLabel('c2')  
        topani.fromTo(".page_blueBox", { transform: "translate(0, 0) scale(1, 1)", borderRadius: "0" }, { transform: "translate(0, 0) scale(0.9, 0.9)", borderRadius: "70%", duration:4, ease: "linear" },'c2');

        topani.addLabel('d')  
        topani.fromTo(".page_aboutBenefits", { y: 50, opacity: 0, }, { y: 0, opacity: 1, duration:2, ease: "linear", delay:-4 },'d');
        topani.fromTo(".stickWrap2", { opacity: 0, }, { opacity: 1, duration:2, ease: "linear", delay:-4 },'d');

// 페이지 로드 시 page_benefitsWrap의 너비를 가져옴
const wrapWidth = document.querySelector(".page_benefitsWrap .benefit").offsetWidth;
console.log("Wrap Width:", wrapWidth);

        topani.addLabel('e')  
        // topani.fromTo(".page_benefitsWrap", { x: 0, }, { x: "-70vw", opacity: 1, duration:2, ease: "linear" },'e');
        topani.fromTo(".page_benefitsWrap", { x: 0 }, { x: `-${wrapWidth}px`, opacity: 1, duration: 5, ease: "linear" }, 'e');
        topani.fromTo(".stickWrap2 .cover", { rotate: "0", opacity: 0, }, { rotate: "-20deg", opacity: 5, duration:3, ease: "linear" },'e');

        topani.addLabel('f')  
        // topani.fromTo(".page_benefitsWrap", { x: "-70vw", }, { x: "-150vw", opacity: 1, duration:2, ease: "linear", delay:2 },'f');
        topani.fromTo(".page_benefitsWrap", { x: `-${wrapWidth}px` }, { x: `-${wrapWidth * 2 + 30}px`, opacity: 1, duration: 5, ease: "linear", delay: 2 }, 'f');
        topani.fromTo(".stickWrap2 .stick_01", { opacity: 1, }, { opacity: 0, duration:0.1, ease: "linear" },'f');
        topani.fromTo(".stickWrap2 .stick_cover", { opacity: 0, }, { opacity: 1, duration:0.1, ease: "linear" },'f');
        topani.fromTo(".stickWrap2 .stick_top", { opacity: 0, rotate: 0 }, { opacity: 1, rotate: "45deg", duration:0.1, ease: "linear" },'f');

        topani.addLabel('g')  
        topani.fromTo(".stickWrap2 .stick_in", { opacity: 0, height: "80%" }, { opacity: 1, height: "100%", duration:3, ease: "linear" },'g');
        

        topani.fromTo("#section1", 
            { opacity: 1, }, 
            { opacity: 0, duration: 10, delay: 3 }
        );

    }, 

    // all 
    "all": function() {
    }                
});


//SCROLL 2
ScrollTrigger.matchMedia({                    
    // desktop
    "(min-width: 1025px)": function() {
        
        gsap.fromTo(".page_horizontalItemTitle1", 
            {
                x: -500
            }, 
            {
                x: -50, 
                duration: 1,
                scrollTrigger: {
                trigger: ".page_horizontalItemTitle1", // 이 요소가 화면에 들어오면
                start: "top 80%", // 화면의 80% 위치에서 시작
                end: "top 0%", // 화면의 0% 위치까지
                scrub: true, // 스크롤에 맞춰 애니메이션이 진행되도록
                scroller: viewport, // Lenis의 scroller 적용
                }
            }
        );
        gsap.fromTo(".page_horizontalItemTitle2", 
            {
                x: 500
            }, 
            {
                x: 50, 
                duration: 1,
                scrollTrigger: {
                trigger: ".page_horizontalItemTitle1", // 이 요소가 화면에 들어오면
                start: "top 80%", // 화면의 80% 위치에서 시작
                end: "top 0%", // 화면의 0% 위치까지
                scrub: true, // 스크롤과 동기화
                scroller: viewport, // Lenis의 scroller 적용
                }
            }
        );
        
        let horiani = gsap.timeline({
            scrollTrigger: {
                trigger: ".page_horizontalItemWrap", // 트리거 요소
                start: "top top", // 스크롤 시작 위치
                //end:"+=300%",
                end: "bottom top", // 스크롤 종료 위치
                scrub: true, // 스크롤에 따라 애니메이션 진행
                pin: true, // 고정                  
                scroller: viewport, // Lenis의 scroller 적용   
                pinSpacing: true,
                //markers: true // 디버그용 마커                         
            }
        });

        horiani.addLabel('a')                            
        horiani.fromTo(".page_horizontalInner2", { x:0 }, { x:"-33.33%", duration:5, delay: 1, ease: "power4.inOut",},'a');
        horiani.fromTo(".zero", { x:0 }, { x:"-30rem", duration:5, ease: "power4.inOut",},'a');
        horiani.fromTo(".star", { x:0 }, { x:"-30rem", duration:5, ease: "power4.inOut",},'a');
        horiani.fromTo(".cloud", { x:0 }, { x:"-30rem", duration:5, ease: "power4.inOut",},'a');
        horiani.fromTo(".spring", { x:0 }, { x:"-30rem", duration:5, ease: "power4.inOut",},'a');

        horiani.fromTo(".spring2", { x: "30rem" }, { x:0, duration:5, delay: 1,  ease: "power4.inOut",},'a');
        horiani.fromTo(".star2", { x: "20rem" }, { x:0, duration:5, delay: 1, ease: "power4.inOut",},'a');
        horiani.fromTo(".bag", { x: "30rem" }, { x:0, duration:5, delay: 1, ease: "power4.inOut",},'a');
        horiani.fromTo(".sun", { x: "30rem" }, { x:0, duration:5, delay: 1, ease: "power4.inOut",},'a');

        horiani.addLabel('b')                            
        horiani.fromTo(".page_horizontalInner2", { x: "-33.33%" }, { x:"-66.66%", duration:5, delay: 1, ease: "power4.inOut",},'b');
        horiani.fromTo(".spring2", { x:0 }, { x:"-30rem", duration:5, ease: "power4.inOut",},'b');
        horiani.fromTo(".star2", { x:0 }, { x:"-20rem", duration:5, ease: "power4.inOut",},'b');
        horiani.fromTo(".bag", { x:0 }, { x:"-30rem", duration:5, ease: "power4.inOut",},'b');
        horiani.fromTo(".sun", { x:0 }, { x:"-20rem", duration:5, ease: "power4.inOut",},'b');

        horiani.fromTo(".spring3", { x: "30rem" }, { x:0, duration:5, delay: 1,  ease: "power4.inOut",},'b');
        horiani.fromTo(".mango", { x: "20rem" }, { x:0, duration:5, delay: 1, ease: "power4.inOut",},'b');
        horiani.fromTo(".smile", { x: "30rem" }, { x:0, duration:5, delay: 1, ease: "power4.inOut",},'b');

        let videoani = gsap.timeline({
            scrollTrigger: {
                trigger: ".videoWrap", // 트리거 요소
                start: "top top", // 스크롤 시작 위치
                //end:"+=300%",
                end: "bottom top", // 스크롤 종료 위치
                scrub: true, // 스크롤에 따라 애니메이션 진행
                //pin: true, // 고정                  
                scroller: viewport, // Lenis의 scroller 적용   
                pinSpacing: true,
                //markers: true // 디버그용 마커                         
            }
        });

        videoani.addLabel('a')                            
        videoani.fromTo(".videoWrap", { position:"absolute"}, { position:"fixed", duration:1, ease: "power4.inOut",},'a');
        videoani.fromTo(".imageWrapper .img1", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'a');
        videoani.fromTo(".imageWrapper .img2", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'a');

        videoani.addLabel('b')                            
        videoani.fromTo(".imageWrapper .img2", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'b');
        videoani.fromTo(".imageWrapper .img3", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'b');

        videoani.addLabel('c')                            
        videoani.fromTo(".imageWrapper .img3", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'c');
        videoani.fromTo(".imageWrapper .img4", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'c');

        videoani.addLabel('d')                            
        videoani.fromTo(".imageWrapper .img4", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'d');
        videoani.fromTo(".imageWrapper .img5", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'d');

        videoani.addLabel('e')                            
        videoani.fromTo(".imageWrapper .img5", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'e');
        videoani.fromTo(".imageWrapper .img6", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'e');

        videoani.addLabel('f')                            
        videoani.fromTo(".imageWrapper .img6", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'f');
        videoani.fromTo(".imageWrapper .img7", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'f');

        videoani.addLabel('g')                            
        videoani.fromTo(".imageWrapper .img7", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'g');
        videoani.fromTo(".imageWrapper .img8", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'g');

        videoani.addLabel('h')                            
        videoani.fromTo(".videoWrap", { x:0 }, { x:"10%", duration:1, ease: "none",},'h');

        gsap.fromTo(".videoWrap", 
            {
                y: 0, 
            }, 
            {
                y: "100%", 
                duration: 1,
                scrollTrigger: {
                trigger: ".page_ingredientsCtn", // 이 요소가 화면에 들어오면
                start: "top 100%", // 화면의 80% 위치에서 시작
                end: "top 0%", // 화면의 0% 위치까지
                scrub: true, // 스크롤에 맞춰 애니메이션이 진행되도록
                scroller: viewport, // Lenis의 scroller 적용   
                }
            }
        );

    }, 

    // mobile
    "(max-width: 1024px)": function() {
        
        let horiani = gsap.timeline({
            scrollTrigger: {
                trigger: ".page_horizontalItemWrap", // 트리거 요소
                start: "top top", // 스크롤 시작 위치
                //end:"+=300%",
                end: "bottom top", // 스크롤 종료 위치
                scrub: true, // 스크롤에 따라 애니메이션 진행
                pin: true, // 고정                  
                scroller: viewport, // Lenis의 scroller 적용   
                pinSpacing: true,
                //markers: true // 디버그용 마커                         
            }
        });

        horiani.addLabel('a')                            
        horiani.fromTo(".page_horizontalInner2", { y:0 }, { y:"-33.33%", duration:5, delay: 1, ease: "power4.inOut",},'a');
        horiani.fromTo(".zero", { y:0 }, { y:"-22rem", duration:5, ease: "power4.inOut",},'a');
        horiani.fromTo(".star", { y:0 }, { y:"-7rem", duration:5, ease: "power4.inOut",},'a');
        horiani.fromTo(".cloud", { y:0 }, { y:"-22rem", duration:5, ease: "power4.inOut",},'a');
        horiani.fromTo(".spring", { y:0 }, { y:"-7rem", duration:5, ease: "power4.inOut",},'a');

        horiani.fromTo(".spring2", { y: "22rem" }, { y:0, duration:5, delay: 1,  ease: "power4.inOut",},'a');
        horiani.fromTo(".star2", { y: "7rem" }, { y:0, duration:5, delay: 1, ease: "power4.inOut",},'a');
        horiani.fromTo(".bag", { y: "8rem" }, { y:0, duration:5, delay: 1, ease: "power4.inOut",},'a');
        horiani.fromTo(".sun", { y: "22rem" }, { y:0, duration:5, delay: 1, ease: "power4.inOut",},'a');

        horiani.addLabel('b')                            
        horiani.fromTo(".page_horizontalInner2", { y: "-33.33%" }, { y:"-66.66%", duration:5, delay: 1, ease: "power4.inOut",},'b');
        horiani.fromTo(".spring2", { y:0 }, { y:"-22rem", duration:5, ease: "power4.inOut",},'b');
        horiani.fromTo(".star2", { y:0 }, { y:"-7rem", duration:5, ease: "power4.inOut",},'b');
        horiani.fromTo(".bag", { y:0 }, { y:"-22rem", duration:5, ease: "power4.inOut",},'b');
        horiani.fromTo(".sun", { y:0 }, { y:"-8rem", duration:5, ease: "power4.inOut",},'b');

        horiani.fromTo(".spring3", { y: "22rem" }, { y:0, duration:5, delay: 1,  ease: "power4.inOut",},'b');
        horiani.fromTo(".mango", { y: "22rem" }, { y:0, duration:5, delay: 1, ease: "power4.inOut",},'b');
        horiani.fromTo(".smile", { y: "22rem" }, { y:0, duration:5, delay: 1, ease: "power4.inOut",},'b');
        
        let videoani = gsap.timeline({
            scrollTrigger: {
                trigger: ".videoWrap", // 트리거 요소
                start: "top top", // 스크롤 시작 위치
                //end:"+=300%",
                end: "bottom top", // 스크롤 종료 위치
                scrub: true, // 스크롤에 따라 애니메이션 진행
                //pin: true, // 고정                  
                scroller: viewport, // Lenis의 scroller 적용   
                pinSpacing: true,
                //markers: true // 디버그용 마커                         
            }
        });

        videoani.addLabel('a')                            
        videoani.fromTo(".videoWrap", { position:"absolute"}, { position:"fixed", duration:1, ease: "power4.inOut",},'a');
        videoani.fromTo(".imageWrapper .img1", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'a');
        videoani.fromTo(".imageWrapper .img2", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'a');

        videoani.addLabel('b')                            
        videoani.fromTo(".imageWrapper .img2", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'b');
        videoani.fromTo(".imageWrapper .img3", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'b');

        videoani.addLabel('c')                            
        videoani.fromTo(".imageWrapper .img3", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'c');
        videoani.fromTo(".imageWrapper .img4", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'c');

        videoani.addLabel('d')                            
        videoani.fromTo(".imageWrapper .img4", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'d');
        videoani.fromTo(".imageWrapper .img5", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'d');

        videoani.addLabel('e')                            
        videoani.fromTo(".imageWrapper .img5", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'e');
        videoani.fromTo(".imageWrapper .img6", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'e');

        videoani.addLabel('f')                            
        videoani.fromTo(".imageWrapper .img6", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'f');
        videoani.fromTo(".imageWrapper .img7", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'f');

        videoani.addLabel('g')                            
        videoani.fromTo(".imageWrapper .img7", { opacity:1 }, {opacity:0, duration:1, ease: "none",},'g');
        videoani.fromTo(".imageWrapper .img8", { opacity:0 }, {opacity:1, duration:1, ease: "none",},'g');

        gsap.fromTo(".videoWrap", 
            {
                y: 0, opacity: 1,
            }, 
            {
                y: "100%", opacity: 0,
                duration: 1,
                scrollTrigger: {
                trigger: ".page_ingredientsCtn", // 이 요소가 화면에 들어오면
                start: "top 100%", // 화면의 80% 위치에서 시작
                end: "top 0%", // 화면의 0% 위치까지
                scrub: true, // 스크롤에 맞춰 애니메이션이 진행되도록
                scroller: viewport, // Lenis의 scroller 적용   
                }
            }
        );
    }, 

    // all 
    "all": function() {
    }                
});

//SCROLL 3
ScrollTrigger.matchMedia({                    
    // desktop
    "(min-width: 1025px)": function() {         

        gsap.fromTo(".page_ingredientTextTitle", 
            {
                y: 100, opacity: 0,
            }, 
            {
                y: 0, opacity: 1,
                duration: .5,
                scrollTrigger: {
                trigger: ".page_ingredientTextTitle", // 이 요소가 화면에 들어오면
                start: "top 100%", // 화면의 80% 위치에서 시작
                end: "top 0%", // 화면의 0% 위치까지
                scrub: true, // 스크롤에 맞춰 애니메이션이 진행되도록
                scroller: viewport, // Lenis의 scroller 적용
                }
            }
        );

        gsap.fromTo(".page_ingredientDescription", 
            {
                y: 100, opacity: 0,
            }, 
            {
                y: 0, opacity: 1,
                duration: .5,
                scrollTrigger: {
                trigger: ".page_ingredientDescription", // 이 요소가 화면에 들어오면
                start: "top 100%", // 화면의 80% 위치에서 시작
                end: "top 0%", // 화면의 0% 위치까지
                scrub: true, // 스크롤에 맞춰 애니메이션이 진행되도록
                scroller: viewport, // Lenis의 scroller 적용
                }
            }
        );

        gsap.fromTo(".page_ingredients", 
            {
                y: 100, opacity: 0,
            }, 
            {
                y: 0, opacity: 1,
                duration: .5,
                delay: .5,
                scrollTrigger: {
                trigger: ".page_ingredientDescription", // 이 요소가 화면에 들어오면
                start: "top 100%", // 화면의 80% 위치에서 시작
                end: "top 0%", // 화면의 0% 위치까지
                scrub: true, // 스크롤에 맞춰 애니메이션이 진행되도록
                scroller: viewport, // Lenis의 scroller 적용
                }
            }
        );

    }, 

    // mobile
    "(max-width: 1024px)": function() {

        // 페이지 로드 시 너비를 가져옴
        const ingredientWidth = document.querySelector(".page_ingredients > div").offsetWidth;

            gsap.fromTo(".page_ingredients", 
                {
                    x: 0,
                }, 
                {
                    x: `-${ingredientWidth * 2 + 30}px`,
                    duration: 2,
                    scrollTrigger: {
                    trigger: ".page_ingredients", // 이 요소가 화면에 들어오면
                    start: "top 50%", // 화면의 80% 위치에서 시작
                    end: "top 0%", // 화면의 0% 위치까지
                    scrub: true, // 스크롤에 맞춰 애니메이션이 진행되도록
                    scroller: viewport, // Lenis의 scroller 적용
                    }
                }
            );

    }, 

    // all 
    "all": function() {            
        
        
    }                
});
