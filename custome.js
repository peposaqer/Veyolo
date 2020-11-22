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
    var item = $(this).attr("href");
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function () {
//   // Get container scroll position
//   var fromTop = $(this).scrollTop() + topMenuHeight;

//   // Get id of current scroll item
//   var cur = scrollItems.map(function () {
//     if ($(this).offset().top < fromTop) return this;
//   });
//   // Get the id of the current element
//   cur = cur[cur.length - 1];
//   var id = cur && cur.length ? cur[0].id : "";
//   // Set/remove active class
//   menuItems
//     .parent()
//     .removeClass("active")
//     .end()
//     .filter("[href='#" + id + "']")
//     .parent()
//     .addClass("active");
// });

// // hover on partners img
// $(document).ready(function () {
//   $(".partnres-img").hover(
//     function () {
//       $(this).css("box-shadow", "0px 3px 1px 1px #ff7600");
//       $(this).css("padding", "10");
//     },
//     function () {
//       $(this).css("box-shadow", "0px 0px 0px #888");
//       $(this).css("padding", "0");
//     }
//   );

//   $(".img-1").children("svg").find(".a").css("stroke", "#5f5f5f");
//   $(".img-1").children("svg").find(".b").css("fill", "#5f5f5f");

//   $(".img-3").children("svg").find(".a").css("stroke", "#5f5f5f");
//   $(".img-3").children("svg").find(".b").css("fill", "#5f5f5f");
  $(".navbar-brand").children("svg").find(".a").css("fill", "#fff");
  $(".navbar-brand").children("svg").find(".a").css("stroke", "none");
  $(".navbar-brand").children("svg").find(".b").css("fill", "#fff");
});

  $(".navbar-brand").children("svg").find(".a").css("fill", "#fff");
  $(".navbar-brand").children("svg").find(".a").css("stroke", "none");
  $(".navbar-brand").children("svg").find(".b").css("fill", "#fff");

// Active / Deactive arrows btns
$("a").on("click", function () {
  if (
    $(".img-1").hasClass("swiper-button-disabled") &&
    !$(".img-2").hasClass("swiper-button-disabled")
  ) {
    $(".img-1").children("svg").find(".a").css("stroke", "#5f5f5f");
    $(".img-1").children("svg").find(".b").css("fill", "#5f5f5f");
    $(".img-2").children("svg").find(".a").css("stroke", "#ff7600");
    $(".img-2").children("svg").find(".b").css("fill", "#ff7600");
  } else if (
    !$(".img-1").hasClass("swiper-button-disabled") &&
    $(".img-2").hasClass("swiper-button-disabled")
  ) {
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

$("a").on("click", function () {
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
  $(".Register").on("click", function () {});
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

$("#model_add_2").click(function () {
  $(".add2").prepend(
    `<div class="col-md-12 pad flex">
      <div class="col-md-4 pad">
          <select class="custom-select" id="validationCustom04" >
              <option selected disabled value="+02">+02</option>
              <option>+22</option>
              <option>+65</option>
              <option>+79</option>
          </select>
      </div>
      <div class="col-md-8 pad"><input id="model_input_32" type="phone" placeholder="Phone Number"></div>
  </div>`
  );
});


$("#model_add_1").click(function () {
  $(".add1").prepend(
    `<div class="col-md-12 pad flex">
      <div class="col-md-4 pad">
          <select class="custom-select" id="validationCustom04" >
              <option selected disabled value="+02">+02</option>
              <option>+22</option>
              <option>+65</option>
              <option>+79</option>
          </select>
      </div>
      <div class="col-md-8 pad"><input id="model_input_31" type="phone" placeholder="land Number"></div>
  </div>`
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

// Change Languages
var language;
// check langauge on loading page
function loadLang() {
  let lang_shor_name = localStorage.getItem("language");
  if (lang_shor_name === "ar") {
    arabicLang();
  } else {
    englishLang();
  }
}
// get Language
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "language/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });
}

// set Language
function setLanguage(lang) {
  localStorage.setItem("language", lang);
}
// set Language
function arabicLang(lang) {
  localStorage.setItem("language", lang);
}
// change to English
$(".en").on("click", englishLang);
// change to Arabic
$(".arbic").on("click", arabicLang);



function arabicLang() {
  $(".chang").addClass("right-dir");
  getLanguage();
  $("#nav_home").text(language.nav_home);
  $("#nav_about").text(language.nav_about);
  $("#nav_why").text(language.nav_why);
  $("#nav_pricing").text(language.nav_pricing);
  $("#nav_album").text(language.nav_album);
  $("#nav_testimonials").text(language.nav_testimonials);
  $("#nav_partners").text(language.nav_partners);
  $("#nav_contact").text(language.nav_contact);
  $("#header_span").text(language.header_span);
  $("#hesder_h2").text(language.hesder_h2);
  $("#header_a").text(language.header_a);
  $("#about_h1").text(language.about_h1);
  $("#about_h2").text(language.about_h2);
  $("#about_p").text(language.about_p);
  $("#why_h1").text(language.why_h1);
  $("#why_h2").text(language.why_h2);
  $("#why_h3").text(language.why_h3);
  $("#why_p1").text(language.why_p1);
  $("#why_h5_1").text(language.why_h5_1);
  $("#why_p2").text(language.why_p2);
  $("#why_h5_2").text(language.why_h5_2);
  $("#why_p3").text(language.why_p3);
  $("#why_p4").text(language.why_p3);
  $("#why_p5").text(language.why_p3);
  $("#why_h5_3").text(language.why_h5_3);
  $("#why_h5_4").text(language.why_h5_4);
  $("#pricing_h1").text(language.pricing_h1);
  $("#pricing_h2").text(language.pricing_h2);
  $("#pricing_h5_1").text(language.ر);
  $("#pricing_span").text(language.pricing_span);
  $("#pricing_p1").text(language.pricing_p1);
  $("#pricing_p2").text(language.pricing_p2);
  $("#pricing_p3").text(language.pricing_p3);
  $("#pricing_p4").text(language.pricing_p4);
  $("#pricing_p5").text(language.pricing_p5);
  $("#openModal").text(language.openModal);
  $("#openModal1").text(language.openModal1);
  $("#openModal2").text(language.openModal2);
  $("#openModal3").text(language.openModal3);
  $("#pricing_h5_2").text(language.pricing_h5_2 );
  $("#pricing_span_1").text(language.pricing_span_1);
  $("#pricing_p6").text(language.pricing_p6);
  $("#pricing_p7").text(language.pricing_p7);
  $("#pricing_p8").text(language.pricing_p8);
  $("#pricing_p9").text(language.pricing_p9);
  $("#pricing_p10").text(language.pricing_p10);
  $("#pricing_p11").text(language.pricing_p11);
  $("#pricing_h5_3").text(language.pricing_h5_3);
  $("#pricing_span_2").text(language.pricing_span_2);
  $("#pricing_p12").text(language.pricing_p12);
  $("#pricing_p13").text(language.pricing_p13);
  $("#pricing_p14").text(language.pricing_p14);
  $("#pricing_p15").text(language.pricing_p15);
  $("#pricing_p16").text(language.pricing_p16);
  $("#pricing_p17").text(language.pricing_p17);
  $("#pricing_p18").text(language.pricing_p18);
  $("#pricing_h5_4").text(language.pricing_h5_4);
  $("#pricing_p19").text(language.pricing_p19);
  $("#pricing_p20").text(language.pricing_p20);
  $("#pricing_p21").text(language.pricing_p21);
  $("#pricing_p22").text(language.pricing_p22);
  $("#pricing_p23").text(language.pricing_p23);
  $("#pricing_p24").text(language.pricing_p24);
  $("#pricing_p25").text(language.pricing_p25);
  $("#album_h1").text(language.album_h1);
  $("#album_h2").text(language.album_h2);
  $("#album_p").text(language.album_p);
  $("#testimonials_h1").text(language.testimonials_h1);
  $("#testimonials_h2").text(language.testimonials_h2);
  $("#testimonials_p").text(language.testimonials_p);
  $("#testimonials_h5").text(language.testimonials_h5);
  $("#testimonials_p1").text(language.testimonials_p1);
  $("#testimonials_h5_1").text(language.testimonials_h5_1);
  $("#testimonials_p2").text(language.testimonials_p2);
  $("#testimonials_h5_2").text(language.testimonials_h5_2);
  $("#testimonials_p3").text(language.testimonials_p3);
  $("#testimonials_h5_3").text(language.testimonials_h5_3);
  $("#testimonials_p4").text(language.testimonials_p4);
  $("#partners_h1").text(language.partners_h1);
  $("#partners_h2").text(language.partners_h2);
  $("#partners_p").text(language.partners_p);
  $("#Contact_h1").text(language.Contact_h1);
  $("#contact_p").text(language.contact_p);
  $("#contact_h3").text(language.contact_h3);
  $("#contact_copy").text(language.contact_copy);  
  $("#contact_email").attr("placeholder", language.contact_email);
  $("#contact_textarea").attr("placeholder", language.contact_textarea);
  $("#contact_send").attr("value", language.contact_send);
  $("#model_button_1").text(language.model_button_1);
  $("#model_button_2").text(language.model_button_2);
  $("#model_input_h5_1").text(language.model_input_h5_1);
  $("#model_input_1").attr("placeholder", language.model_input_1);
  $("#model_input_2").attr("placeholder", language.model_input_2);
  $("#model_input_3").attr("placeholder", language.model_input_3);
  $("#model_input_4").attr("placeholder", language.model_input_4);
  $("#model_input_h5_2").text(language.model_input_h5_2);
  $("#model_input_5").attr("placeholder", language.model_input_5);
  $("#model_input_6").attr("placeholder", language.model_input_6);
  $("#model_input_7").text(language.model_input_7);
  $("#model_input_8").text(language.model_input_8);
  $("#model_input_9").text(language.model_input_9);
  $("#model_input_10").attr("placeholder", language.model_input_10);
  $("#model_input_11").attr("placeholder", language.model_input_11);
  $("#model_input_12").attr("placeholder", language.model_input_12);
  $("#model_input_13").attr("placeholder", language.model_input_13);
  $("#model_input_14").attr("placeholder", language.model_input_14);
  $("#model_input_15").attr("placeholder", language.model_input_15);
  $("#model_input_31").attr("placeholder", language.model_input_31);
  $("#model_input_32").attr("placeholder", language.model_input_32);
  $("#model_add_1").text(language.model_add_1);
  $("#model_add_2").text(language.model_add_2);
  $("#model_h5_3").text(language.model_h5_3);
  $("#model_h4_1").text(language.model_h4_1);
  $("#model_h4_2").text(language.model_h4_2);
  $("#model_h4_3").text(language.model_h4_3);
  $("#model_p_1").text(language.model_p_1);
  $("#model_p_2").text(language.model_p_2);
  $("#model_p_3").text(language.model_p_3);
  $("#model_button_3").text(language.model_button_3);
  $("#model_button_4").text(language.model_button_4);
  $("#model_h5_4").text(language.model_h5_4);
  $("#model_h5_5").text(language.model_h5_5);
  $("#model_h5_6").text(language.model_h5_6);
  $("#model_input_16").text(language.model_input_16);
  $("#model_input_17").text(language.model_input_17);
  $("#model_input_18").attr("placeholder", language.model_input_18);
  $("#model_input_19").attr("placeholder", language.model_input_19);
  $("#model_input_20").text(language.model_input_20);
  $("#model_input_21").text(language.model_input_21);
  $("#model_input_22").attr("placeholder", language.model_input_22);
  $("#model_button_5").text(language.model_button_5);
  $("#model_button_6").text(language.model_button_6);
  $("#model_span").text(language.model_span);
  $("#model_thank").text(language.model_thank);
  $("#model_p").text(language.model_p);
  $("#pricing_span_5").text(language.pricing_span_5);
  $("#pricing_span_6").text(language.pricing_span_6);
  $("#pricing_span_7").text(language.pricing_span_7);
  $("#pricing_span_8").text(language.pricing_span_8);
  $("#profile_tab").text(language.profile_tab);
  $("#home_tab").text(language.home_tab);
  $("#contact_tab").text(language.contact_tab);
  $("#model_button_7").text(language.model_button_7);
  $(".Contact ul").css({ "margin-left": "5rem" });
  $(".why .porta").css({ "margin-right": "0px" });
  $(".pricing .porta .span").css({ "margin-right": "20%" });
  $(".pricing .porta .span").css({ "margin-left": "0%" });
  // $(".pricing .porta").css({ "margin-right": "2rem" });
  $("nav ul").css({ "direction": "ltr" });
  $(".pricing .icon img").css({ "margin-left": ".4rem"});
  $(".arbic").hide();
  $(".en").show();

  // Function To Dismiss Progress Ring
  // dismissProgress();
}

function englishLang() {
  $(".chang").removeClass("right-dir");
  getLanguage();
  $("#nav_home").text(language.nav_home);
  $("#nav_about").text(language.nav_about);
  $("#nav_why").text(language.nav_why);
  $("#nav_pricing").text(language.nav_pricing);
  $("#nav_album").text(language.nav_album);
  $("#nav_testimonials").text(language.nav_testimonials);
  $("#nav_partners").text(language.nav_partners);
  $("#nav_contact").text(language.nav_contact);
  $("#header_span").text(language.header_span);
  $("#hesder_h2").text(language.hesder_h2);
  $("#header_a").text(language.header_a);
  $("#about_h1").text(language.about_h1);
  $("#about_h2").text(language.about_h2);
  $("#about_p").text(language.about_p);
  $("#why_h1").text(language.why_h1);
  $("#why_h2").text(language.why_h2);
  $("#why_h3").text(language.why_h3);
  $("#why_p1").text(language.why_p1);
  $("#why_h5_1").text(language.why_h5_1);
  $("#why_p2").text(language.why_p2);
  $("#why_h5_2").text(language.why_h5_2);
  $("#why_p3").text(language.why_p3);
  $("#why_p4").text(language.why_p3);
  $("#why_p5").text(language.why_p3);
  $("#why_h5_3").text(language.why_h5_3);
  $("#why_h5_4").text(language.why_h5_4);
  $("#pricing_h1").text(language.pricing_h1);
  $("#pricing_h2").text(language.pricing_h2);
  $("#pricing_h5_1").text(language.ر);
  $("#pricing_span").text(language.pricing_span);
  $("#pricing_p1").text(language.pricing_p1);
  $("#pricing_p2").text(language.pricing_p2);
  $("#pricing_p3").text(language.pricing_p3);
  $("#pricing_p4").text(language.pricing_p4);
  $("#pricing_p5").text(language.pricing_p5);
  $("#openModal").text(language.openModal);
  $("#openModal1").text(language.openModal1);
  $("#openModal2").text(language.openModal2);
  $("#openModal3").text(language.openModal3);
  $("#pricing_h5_2").text(language.pricing_h5_2);
  $("#pricing_span_1").text(language.pricing_span_1);
  $("#pricing_p6").text(language.pricing_p6);
  $("#pricing_p7").text(language.pricing_p7);
  $("#pricing_p8").text(language.pricing_p8);
  $("#pricing_p9").text(language.pricing_p9);
  $("#pricing_p10").text(language.pricing_p10);
  $("#pricing_p11").text(language.pricing_p11);
  $("#pricing_h5_3").text(language.pricing_h5_3);
  $("#pricing_span_2").text(language.pricing_span_2);
  $("#pricing_p12").text(language.pricing_p12);
  $("#pricing_p13").text(language.pricing_p13);
  $("#pricing_p14").text(language.pricing_p14);
  $("#pricing_p15").text(language.pricing_p15);
  $("#pricing_p16").text(language.pricing_p16);
  $("#pricing_p17").text(language.pricing_p17);
  $("#pricing_p18").text(language.pricing_p18);
  $("#pricing_h5_4").text(language.pricing_h5_4);
  $("#pricing_p19").text(language.pricing_p19);
  $("#pricing_p20").text(language.pricing_p20);
  $("#pricing_p21").text(language.pricing_p21);
  $("#pricing_p22").text(language.pricing_p22);
  $("#pricing_p23").text(language.pricing_p23);
  $("#pricing_p24").text(language.pricing_p24);
  $("#pricing_p25").text(language.pricing_p25);
  $("#album_h1").text(language.album_h1);
  $("#album_h2").text(language.album_h2);
  $("#album_p").text(language.album_p);
  $("#home_tab").text(language.home_tab);
  $("#testimonials_h1").text(language.testimonials_h1);
  $("#testimonials_h2").text(language.testimonials_h2);
  $("#testimonials_p").text(language.testimonials_p);
  $("#testimonials_h5").text(language.testimonials_h5);
  $("#testimonials_p1").text(language.testimonials_p1);
  $("#testimonials_h5_1").text(language.testimonials_h5_1);
  $("#testimonials_p2").text(language.testimonials_p2);
  $("#testimonials_h5_2").text(language.testimonials_h5_2);
  $("#testimonials_p3").text(language.testimonials_p3);
  $("#testimonials_h5_3").text(language.testimonials_h5_3);
  $("#testimonials_p4").text(language.testimonials_p4);
  $("#partners_h1").text(language.partners_h1);
  $("#partners_h2").text(language.partners_h2);
  $("#partners_p").text(language.partners_p);
  $("#Contact_h1").text(language.Contact_h1);
  $("#contact_p").text(language.contact_p);
  $("#contact_h3").text(language.contact_h3);
  $("#contact_copy").text(language.contact_copy);
  $("#contact_email").attr("placeholder", language.contact_email);
  $("#contact_textarea").attr("placeholder", language.contact_textarea);
  $("#contact_send").attr("value", language.contact_send);
  $("#model_button_1").text(language.model_button_1);
  $("#model_button_2").text(language.model_button_2);
  $("#model_input_h5_1").text(language.model_input_h5_1);
  $("#model_input_1").attr("placeholder", language.model_input_1);
  $("#model_input_2").attr("placeholder", language.model_input_2);
  $("#model_input_3").attr("placeholder", language.model_input_3);
  $("#model_input_4").attr("placeholder", language.model_input_4);
  $("#model_input_h5_2").text(language.model_input_h5_2);
  $("#model_input_5").attr("placeholder", language.model_input_5);
  $("#model_input_6").attr("placeholder", language.model_input_6);
  $("#model_input_7").text(language.model_input_7);
  $("#model_input_8").text(language.model_input_8);
  $("#model_input_9").text(language.model_input_9);
  $("#model_input_10").attr("placeholder", language.model_input_10);
  $("#model_input_11").attr("placeholder", language.model_input_11);
  $("#model_input_12").attr("placeholder", language.model_input_12);
  $("#model_input_13").attr("placeholder", language.model_input_13);
  $("#model_input_14").attr("placeholder", language.model_input_14);
  $("#model_input_15").attr("placeholder", language.model_input_15);
  $("#model_input_31").attr("placeholder", language.model_input_31);
  $("#model_input_32").attr("placeholder", language.model_input_32);
  $("#model_add_1").text(language.model_add_1);
  $("#model_add_2").text(language.model_add_2);
  $("#model_h5_3").text(language.model_h5_3);
  $("#model_h4_1").text(language.model_h4_1);
  $("#model_h4_2").text(language.model_h4_2);
  $("#model_h4_3").text(language.model_h4_3);
  $("#model_p_1").text(language.model_p_1);
  $("#model_p_2").text(language.model_p_2);
  $("#model_p_3").text(language.model_p_3);
  $("#model_button_3").text(language.model_button_3);
  $("#model_button_4").text(language.model_button_4);
  $("#model_h5_4").text(language.model_h5_4);
  $("#model_h5_5").text(language.model_h5_5);
  $("#model_h5_6").text(language.model_h5_6);
  $("#model_input_16").text(language.model_input_16);
  $("#model_input_17").text(language.model_input_17);
  $("#model_input_18").attr("placeholder", language.model_input_18);
  $("#model_input_19").attr("placeholder", language.model_input_19);
  $("#model_input_20").attr("placeholder", language.model_input_20);
  $("#model_input_21").text(language.model_input_21);
  $("#model_input_22").text(language.model_input_22);
  $("#model_button_5").text(language.model_button_5);
  $("#model_button_6").text(language.model_button_6);
  $("#model_span").text(language.model_span);
  $("#model_thank").text(language.model_thank);
  $("#pricing_span_5").text(language.pricing_span_5);
  $("#pricing_span_6").text(language.pricing_span_6);
  $("#pricing_span_7").text(language.pricing_span_7);
  $("#pricing_span_8").text(language.pricing_span_8);
  $("#profile_tab").text(language.profile_tab);
  $("#model_p").text(language.model_p);
  $("#model_button_7").text(language.model_button_7);
  $(".pricing .porta .span").css({ "margin-right": "0%" });
  $(".pricing .porta .span").css({ "margin-left": "20%" });
  $(".en").hide();
  $(".arbic").show();

  // Function To Dismiss Progress Ring
  // dismissProgress();
}


