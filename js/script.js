$(function(){
  //アイコンをクリック
  $("button").click(function(){
  //ul要素を開閉
  $(".hamburgerMenu").slideToggle(200);
  });
});

// TOPへ戻る
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 300);
     return false;
  });
});
