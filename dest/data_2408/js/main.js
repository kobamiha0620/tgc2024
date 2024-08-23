$(window).scroll(function () {
        var check = window.pageYOffset; //現在のスクロール位置を取得
        var docHeight = $(document).height(); //ページ全体の高さを取得
        var dispHeight = $(window).height(); //表示されている高さを取得
        if(check > docHeight-dispHeight-60){ //消えるときのフッターからの距離を数字で調整※サイトに合わせて変更
          $('.fixbtn').slideUp(100); //数字が大きいほどゆっくり消える
        }else{
          $('.fixbtn').slideDown(100); //数字が大きいほどゆっくり出る
        }
      });