// 日語

// * a atg => 寫 cookie
// * 讀cookie 
// * 導致 alpine.js
// * 用 cookie 判讀當前語系

// == 達成共用模板的


// 移除 cookie
// 讀取 cookie

// 寫入 cookie
function createCookie(name,value,days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
      var expires = "; expires=" + date.toGMTString();
  } else {
      var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}



$(function(){

  $(document).on('click', '#lang_zhTW, #lang_japan', function(e){
    
    var self = $(e.target)
    var lang = self.attr('data-lang')
    
    console.log(' test', self)
    if ( lang && lang !== ''){
      localStorage.setItem('lang', lang)
      window.location.reload()
    }



  })
})


// 語言包
function language() {

    var lang = {
      zhTW: 'zhTW',
      japen: 'japen',
    }

  return {
    iszhTW: false,
    isJapen: false,
    // getLanguage_zhTW() { this.iszhTW = (localStorage['lang'] === undefined || localStorage['lang'] === lang.zhTW); return localStorage['lang'] === undefined || localStorage['lang'] === lang.zhTW },
    // getLanguage_japen() { this.japen = (localStorage['lang'] === lang.japen); return localStorage['lang'] === lang.japen },
    // zhTW: {},
    // japen: {
    //   about: '「食」は生きる基本。国に対しては、まずその国の「食」が頭の中に浮かぶと考えた。しかし、ご当地の「食」は海外観光客にとって知っているような、知らないような存在である。近年、日本の観光客が台湾に訪ねることが多く、台湾のグルメも日本では話題になっている。そのため、私たちは使いやすいWebサイトを用い、観光客があまり知らないグルメのことを詳しく紹介する。グルメの原材料、キーワードや何処で食べれるかなどの疑問を解決し、今まで見たことないグルメを挑戦してみたいという勇気を台湾に来た観光客に与える。',
    //   top100OfTaiwaneseFoods: '地域によってグルメの味や具材は少し違いがある。私たちは資料を集め、台湾の人々にアンケートを取った結果を用い、海外観光客におすすめしたい台湾グルメを100個を描いてWebサイトに載せた。ランキング・ジャンル・ランダムに使い分け、ユーザーは違う状況によって使える。紹介ページはインタラクティブを使用し、シンプルな文字を加えて紹介する。',
    //   howToUse: '食べたい台湾グルメがある？どう検索すればいいと迷った？台湾人がおすすめのグルメを知りたい？ここにすべて答えがあり、楽しみながら台湾のグルメを知ることができる。',
    //   howToUseStep01Title: 'グルメリストを見る',
    //   howToUseStep01: '100個のグルメリストの中で、食べてみたいグルメをクリックすると、紹介ページに移る。',
    //   howToUseStep02Title: 'グルメ紹介を読む',
    //   howToUseStep02: 'マウスカーソルを右に移動する（スマートフォンバージョンは右をタッチする）と、イラストは次々と開き、グルメの原材料が現れる。ページの左下に、アレルギー物質の表示や宗教による食のタブーなどの注意アイコンを設けたことにより、安心して台湾のグルメを満喫できる。',
    //   howToUseStep03Title: '検索と向かう',
    //   howToUseStep03: 'マップアイコンをクリックすると、Googleのキーワード検索ページに移り、GPS 測位による現在地を示される。それで、食べたいグルメの情報や評価を調べ、店にナビゲーションを使って向かう。',
    //   staff: '私たちは台湾生まれ、台中科技大学に通う商業デザイン科の四年生。海外旅行、台湾・日本文化、グルメ探しが好きなメンバーを集まった4人グループ。台湾のグルメを世界に広げられるように、今回の卒業制作を通し、食べたことないグルメを試したくなる勇気をみんなに与えられたら、という願いを込めて作った。',
    // }
  }
}

