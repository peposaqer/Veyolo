var swiper = new Swiper(".swiper-1", {
  slidesPerView: 4,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 15,
  //   cssMode: true,
  navigation: {
    nextEl: ".button .img-2",
    prevEl: ".button .img-1",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    426: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  //   mousewheel: true,
  //   keyboard: true,
  // grabCursor: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

var swiper = new Swiper(".swiper-2", {
  slidesPerView: 2,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  spaceBetween: 15,
  //   cssMode: true,
  navigation: {
    nextEl: ".buttom .img-4",
    prevEl: ".buttom .img-3",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    426: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  //   mousewheel: true,
  //   keyboard: true,
  // grabCursor: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

// Cache selectors
var topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  // Set/remove active class
  menuItems
    .parent()
    .removeClass("active")
    .end()
    .filter("[href='#" + id + "']")
    .parent()
    .addClass("active");
});

// hover on partners img
$(document).ready(function () {
  $(".partnres-img").hover(
    function () {
      $(this).css("box-shadow", "0px 3px 1px 1px #ff7600");
      $(this).css("padding", "10");
    },
    function () {
      $(this).css("box-shadow", "0px 0px 0px #888");
      $(this).css("padding", "0");
    }
  );

  $(".img-1").children("svg").find(".a").css("stroke", "#5f5f5f");
  $(".img-1").children("svg").find(".b").css("fill", "#5f5f5f");

  $(".img-3").children("svg").find(".a").css("stroke", "#5f5f5f");
  $(".img-3").children("svg").find(".b").css("fill", "#5f5f5f");
  $(".navbar-brand").children("svg").find(".a").css("fill", "#fff");
  $(".navbar-brand").children("svg").find(".a").css("stroke", "none");
  $(".navbar-brand").children("svg").find(".b").css("fill", "#fff");
});

// Active / Deactive arrows btns
$("a").on("click", function () {
  if ($(".img-1").hasClass("swiper-button-disabled") && !$(".img-2").hasClass("swiper-button-disabled")) {
    $(".img-1").children("svg").find(".a").css("stroke", "#5f5f5f");
    $(".img-1").children("svg").find(".b").css("fill", "#5f5f5f");
    $(".img-2").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-2").children("svg").find(".b").css("fill", "#ff7600");
  }
  else if(!$(".img-1").hasClass("swiper-button-disabled") && $(".img-2").hasClass("swiper-button-disabled")){
    $(".img-2").children("svg").find(".a").css("stroke", "#5f5f5f");
    $(".img-2").children("svg").find(".b").css("fill", "#5f5f5f");
    $(".img-1").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-1").children("svg").find(".b").css("fill", "#ff7600");
  } else {
    $(".img-2").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-2").children("svg").find(".b").css("fill", "#ff7600");
    $(".img-1").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-1").children("svg").find(".b").css("fill", "#ff7600");
  }
});

$("a").on('click', function(){
  if (
    $(".img-3").hasClass("swiper-button-disabled") &&
    !$(".img-4").hasClass("swiper-button-disabled")
  ) {
    $(".img-3").children("svg").find(".a").css("stroke", "#5f5f5f");
    $(".img-3").children("svg").find(".b").css("fill", "#5f5f5f");
    $(".img-4").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-4").children("svg").find(".b").css("fill", "#ff7600");
  } else if (
    !$(".img-3").hasClass("swiper-button-disabled") &&
    $(".img-4").hasClass("swiper-button-disabled")
  ) {
    $(".img-4").children("svg").find(".a").css("stroke", "#5f5f5f");
    $(".img-4").children("svg").find(".b").css("fill", "#5f5f5f");
    $(".img-3").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-3").children("svg").find(".b").css("fill", "#ff7600");
  } else {
    $(".img-4").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-4").children("svg").find(".b").css("fill", "#ff7600");
    $(".img-3").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-3").children("svg").find(".b").css("fill", "#ff7600");
  }
});

$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});


// $(".Register").on("click", function () {
//   console.log("sdlgnlsfgnlds");
//   $(".reg-model").show();
//   // $("html, body").css({ overflow: "hidden" });
//   // $("body").css({ "background-color": "rgba(0,0,0,0.5)" });
// });



$(document).ready(function () {
  $(".Register").on("click", function () {
  });
});


$(document).ready(function () {
  $(".radio").on("click", function () {
    $(".hide1").hide();
  });
});


$(document).ready(function () {
  $(".show").on("click", function () {
    $(".hide1").show();
  });
});

  $(".block2").click(function () {
    $("form").append(
      '<div class="col-md-2 pad"><select class="custom-select" id="validationCustom04" ><option selected disabled value="+02">+02</option><option>+22</option><option>+65</option><option>+79</option></select></div><div class="col-md-4 pad"><input type="phone" placeholder="Phone Number"></div>'
    );
  });

$(".active2").click(function () {
  $(".active2").removeClass("active");
});


$(".active3").click(function () {
  $(".active3").removeClass("active");
});


$(".tab").click(function () {
  $(".tab").removeClass("active");
});