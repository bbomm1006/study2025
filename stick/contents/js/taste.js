$(document).ready(function () {
    $(".page_tasteButton").on("click", function () {
        $(".page_tasteButton").removeClass("on"); // 모든 버튼에서 'on' 제거
        $(this).addClass("on"); // 클릭한 버튼에 'on' 추가

        let imgSrcset = "";
        let imgSrc = "";
        let pdText = "";

        let pdImg1 = "";
        let pdImg2 = "";
        let pdImg3 = "";
        let pdImg4 = "";

        if ($(this).hasClass("page_activeApple")) {
            $(".page_activeApple").addClass("on");
            imgSrcset = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fbox%2Fbox_apple.png&w=640&q=100 1x, https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fbox%2Fbox_apple.png&w=1080&q=100 2x";
            imgSrc = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fbox%2Fbox_apple.png&w=640&q=100";
            
            pdText = "상쾌환 스틱 ZERO 청사과맛";
            pdImg1 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_1.jpg&w=1920&q=75";
            pdImg2 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_2.jpg&w=1920&q=75";
            pdImg3 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_3.jpg&w=1920&q=75";
            pdImg4 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_apple_4.jpg&w=1920&q=75";

        } else if ($(this).hasClass("page_activePeach")) {
            $(".page_activePeach").addClass("on");
            imgSrcset = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fbox%2Fbox_peach.png&w=640&q=100 1x, https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fbox%2Fbox_peach.png&w=1080&q=100 2x";
            imgSrc = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fbox%2Fbox_peach.png&w=1080&q=100";
            pdText = "상쾌환 스틱 ZERO 납작복숭아맛";
            pdImg1 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_peach_1.jpg&w=1920&q=75";
            pdImg2 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_peach_2.jpg&w=1920&q=75";
            pdImg3 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_peach_3.jpg&w=1920&q=75";
            pdImg4 = "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fstick%2Fswiper_peach_4.jpg&w=1920&q=75";
        }

        $(".page_stickBox img").attr("srcset", imgSrcset).attr("src", imgSrc);
        $("#pdName").text(pdText);
        
        $("#pdimg1").attr("src", imgSrc);
        $("#pdimg2").attr("src", imgSrc);
        $("#pdimg3").attr("src", imgSrc);
        $("#pdimg4").attr("src", imgSrc);
    });
});