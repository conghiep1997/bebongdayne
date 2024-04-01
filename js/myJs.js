const textConfig = {
  text1: "Hế luu Elm!",
  text2: "Anh có điều này muốn hỏi Elm nhớ phải trả lời thật lòng nhaaa.",
  text3: "Elm làm ngiu anh nhaaa ._.",
  text4: "Nếu Elm ko trả lời mà thoát ra tức là muốn làm ngiu anh rùi đó nha :v",
  text5: "Anh mơ à???",
  text6: "Yêu ơi là yêu <3",
  text7: "lí do Elm thích anh đi :vvvv",
  text8: "Gửi cho Anh <3",
  text9: "Vì anh đẹp try nhứt",
  text10: "Anh biết mà ^^ Yêu Elm 3000",
  text11:
    "Tối nay Anh qua đón Elm đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho Anh đi nàooo",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#no1").html(textConfig.text5);
  $("#no2").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }
  // move random button póition
  function moveButton1() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no1").css("left", left);
    $("#no1").css("top", top);
  }
  // move random button póition
  function moveButton2() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no2").css("left", left);
    $("#no2").css("top", top);
  }
  // move random button póition
  function moveButton3() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no3").css("left", left);
    $("#no3").css("top", top);
  }
  // move random button póition
  function moveButton4() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no4").css("left", left);
    $("#no4").css("top", top);
  }
  // move random button póition
  function moveButton5() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no5").css("left", left);
    $("#no5").css("top", top);
  }
  // move random button póition
  function moveButton6() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no6").css("left", left);
    $("#no6").css("top", top);
  }
  // move random button póition
  function moveButton7() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no7").css("left", left);
    $("#no7").css("top", top);
  }
  // move random button póition
  function moveButton8() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no8").css("left", left);
    $("#no8").css("top", top);
  }
  // move random button póition
  function moveButton9() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no9").css("left", left);
    $("#no9").css("top", top);
  }
  // move random button póition
  function moveButton10() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    let x = xxx();
    let y = yyy();
    var left = x + "px";
    var top = y + "px";
    $("#no10").css("left", left);
    $("#no10").css("top", top);
  }
  
  function xxx() {
    let x = 0;
    if (screen.width <= 600) {
      x = Math.random() * 300;
    } else {
      x = Math.random() * 900;
    }
    return x;
  }
  
  function yyy() {
    let y = 0;
    if (screen.width <= 600) {
      y = Math.random() * 500;
    } else {
      y = Math.random() * 900;
    }
    return y;
  }

  $("#no").mousemove(function () {
    moveButton();
  });
  $("#no1").mousemove(function () {
    moveButton1();
  });
  $("#no2").mousemove(function () {
    moveButton2();
  });
  $("#no3").mousemove(function () {
    moveButton3();
  });
  $("#no4").mousemove(function () {
    moveButton4();
  });
  $("#no5").mousemove(function () {
    moveButton5();
  });
  $("#no6").mousemove(function () {
    moveButton6();
  });
  $("#no7").mousemove(function () {
    moveButton7();
  });
  $("#no8").mousemove(function () {
    moveButton8();
  });
  $("#no9").mousemove(function () {
    moveButton9();
  });
  $("#no10").mousemove(function () {
    moveButton10();
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.youtube.com/watch?v=M4zX6mPCHJI";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
