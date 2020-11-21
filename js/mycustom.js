jQuery(document).ready(function(e) {

	$ = jQuery;

  console.log("mycustom.js file loaded");

  $('.header-wrapper header').html(
    `
    <div class="container">


            <div class="logo-container">

                    <a href="index.html" style="color:white;font-size:24px;font-weigth:bold;">
                            Voice Finishing
                    </a>

                    <span class="tag-line">보이스 피니싱</span>
            </div>


            <!-- Start of Main Navigation -->
            <nav class="main-nav">
                    <div class="menu-top-menu-container">
                            <ul id="menu-top-menu" class="clearfix">
                                    <li  class="current-menu-item"><a href="index.html">홈</a></li>
                                    <li><a href="#">게시판</a>
                                      <ul class="sub-menu">
                                              <li><a href="articles-list-custom1.html">피해 사례</a></li>
                                              <li><a href="articles-list-custom2.html">자유 게시판</a></li>
                                              <li><a href="articles-list-custom3.html">예방 및 대응법</a></li>
                                              <li><a href="articles-list-custom4.html">고마워요</a></li>



                                              <!-- <li><a href="blue-skin.html">Blue Skin</a></li>
                                              <li><a href="green-skin.html">Green Skin</a></li>
                                              <li><a href="red-skin.html">Red Skin</a></li>
                                              <li><a href="index.html">Default Skin</a></li>
                                              <li><a href="full-width.html">Full Width</a></li>
                                              <li><a href="elements.html">Elements</a></li>
                                              <li><a href="page.html">Sample Page</a></li> -->
                                      </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                            </ul>
                    </div>
            </nav>
            <!-- End of Main Navigation -->

    </div>
    `
  );

  $('.search-area-wrapper').html(
    `
    <div class="search-area container">
            <h3 class="search-header">보이스피싱 피해사례 검색</h3>
            <!-- <p class="search-tag-line">보이스 피싱 최신 사례를 통해 피해를 예방해보세요~ 미정</p> -->

            <form id="search-form" class="search-form clearfix" method="get" action="#" autocomplete="off">
                    <input class="search-term required" type="text" id="s" name="s" placeholder="Type your search terms here" title="* Please enter a search term!" />
                    <input class="search-btn" type="submit" value="Search" />
                    <div id="search-error-container"></div>
            </form>
            <div class="hello" style="text-align: center;margin-top: 5px;">
              <div class="tagcloud">
                      <a href="#" class="btn btn-mini">#스미싱</a>
                      <a href="#" class="btn btn-mini">#금융감독원</a>
                      <a href="#" class="btn btn-mini">#문화상품권</a>
                      <a href="#" class="btn btn-mini">#중고나라</a>
                      <a href="#" class="btn btn-mini">#대구경창청</a>


              </div>
            </div>
    </div>
    `
  );

  $('.page-sidebar').html(
    `
    <section class="widget">
            <div class="support-widget" style="padding: 10px 10px 10px 20px;">
                    <h3 class="title">이용 가이드</h3>
                    <p class="intro">
                      <!-- 보이스 피싱이 의심되면 키워드를 이용하여 유사 사례들을 바로 검색해보세요! -->
                      <p>
                        1. 보이스 피싱 의심전화를 받는다 <br>
                        2. 전화 내용의 키워드로 유사 사례를 검색한다 <br>
                        3. 보이스 피싱 확인 후 통화를 종료한다
                      </p>
                    </p>
            </div>
    </section>


    <section class="widget">
            <div class="support-widget" style="padding:0;background: transparent;">
              <img src="images/screenshot.jpeg" alt="screenshot">
            </div>
    </section>




    <section class="widget">
            <div class="quick-links-widget">
                    <h3 class="title">Quick Links</h3>
                    <ul id="menu-quick-links" class="menu clearfix">
                            <li><a href="https://phishing-keeper.fss.or.kr/fss/vstop/main.jsp">보이스피싱 지킴이</a></li>
                            <li><a href="https://fss.or.kr">금융감독원</a></li>
                            <li><a href="https://minwon.police.go.kr/#requestMinwon/report/STT-113">경찰청민원포털</a></li>
                    </ul>
            </div>
    </section>
    `
  );

  $('#footer-wrapper').html(
    `
    <div id="footer" class="container">
            <div class="row">

                    <div class="span6">
                            <section class="widget">
                                    <h3 class="title">About us</h3>
                                    <div class="textwidget">
                                            <p>'보이스 피니싱'은 보이스피싱 피해 사례를 자유롭게 공유할 수 있는 커뮤니티입니다. 보이스피싱으로 의심되는 전화가 걸려온다면 먼저 검색해보세요. 그리고 당신의 경험을 공유해주세요.</p>

                                    </div>
                            </section>
                    </div>

                    <div class="span6">
                            <section class="widget">
                              <h3 class="title">History</h3>
                              <div class="textwidget">
                                      <p>연세대학교 <지역사회를위한창의적문제해결> 수업의 일환으로 시작되었으며, 웹상의 각종 사례를 모아 보이스 피싱을 효과적으로 예방할 수 있도록 노력하고있습니다.</p>

                              </div>
                            </section>
                    </div>

            </div>
    </div>

    <div id="footer-bottom-wrapper">
            <div id="footer-bottom" class="container">
                    <div class="row">
                            <div class="span6">
                                    <p class="copyright">
                                            Copyright © 2013. All Rights Reserved by KnowledgeBase.
                                    </p>
                            </div>
                            <div class="span6">
                                    <!-- Social Navigation -->
                                    <ul class="social-nav clearfix">
                                            <li class="linkedin"><a target="_blank" href="#"></a></li>
                                            <li class="stumble"><a target="_blank" href="#"></a></li>
                                            <li class="google"><a target="_blank" href="#"></a></li>
                                            <li class="deviantart"><a target="_blank" href="#"></a></li>
                                            <li class="flickr"><a target="_blank" href="#"></a></li>
                                            <li class="skype"><a target="_blank" href="skype:#?call"></a></li>
                                            <li class="rss"><a target="_blank" href="#"></a></li>
                                            <li class="twitter"><a target="_blank" href="#"></a></li>
                                            <li class="facebook"><a target="_blank" href="#"></a></li>
                                    </ul>
                            </div>
                    </div>
            </div>
    </div>
    `
  );


});

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

// set datas

var article_short_list_items = [
`<li class="article-entry standard">
  <h4><a href="article.html?article=0">읽어보세요) 보이스피싱땜에 열받네요.</a></h4>
  <span class="article-meta">25 Feb, 2013</span>
  <span class="like-count">66</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=1">보이스 피싱 문자 점점 정교해지네</a></h4>
  <span class="article-meta">25 Feb, 2013</span>
  <span class="like-count">66</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=2">갈수록 지능적으로 되어가는 보이스피싱</a></h4>
  <span class="article-meta">25 Feb, 2013</span>
  <span class="like-count">66</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=3">보이스피싱 사기꾼과의 통화내용 (녹음있음)</a></h4>
  <span class="article-meta">2020.02.15</span>
  <span class="like-count">382</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=4">보이스피싱 사기범 핸폰 땄습니다. 001-86-13858-9673-14</a></h4>
  <span class="article-meta">2020.03.24</span>
  <span class="like-count">52</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=5">보이스피싱으로 800만원 잃었어요</a></h4>
  <span class="article-meta">2020.02.01</span>
  <span class="like-count">72</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=6">어제 바보같이 보이스피싱 당했어요..</a></h4>
  <span class="article-meta">2020.06.11</span>
  <span class="like-count">12</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=7">레전드 보이스피싱 당했음 다들 조심 ㅠ</a></h4>
  <span class="article-meta">2020.06.29</span>
  <span class="like-count">5</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=8">어머니의 사망보험금을 보이스피싱에 날렸습니다.</a></h4>
  <span class="article-meta">2020.09.15</span>
  <span class="like-count">3</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=9">엄마가 은행 사기대출 보이스피싱 당하셨어요..</a></h4>
  <span class="article-meta">25 Feb, 2013</span>
  <span class="like-count">9</span>
</li>`,
`<li class="article-entry standard">
  <h4><a href="article.html?article=10">인터넷에서만 보는 얘긴줄 알았는데 보이스피싱이 진짜 있네요;;</a></h4>
  <span class="article-meta">2020.10.06</span>
  <span class="like-count">1</span>
</li>`,
];


var article_list_items = [
`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=0">
        읽어보세요) 보이스피싱땜에 열받네요.
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">25 Feb, 2013</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">태그</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 댓글</a></span>
      <span class="like-count">66</span>
    </div>

  </header>

  <p>서울지방경찰청 이동훈 경이라고 연락옴<br>전라남도 광주 최용씨와 무슨관계나고 하더니 저의 명의로 대포통장이 만들어져서 6천만원이 빠져나가고 제가 용의자라고 함
    <a class="readmore-link" href="article-1.html?article=0">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
    <a href="article.html?article=1">
        보이스 피싱 문자 점점 정교해지네
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">25 Feb, 2013</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">태그</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 댓글</a></span>
      <span class="like-count">66</span>
    </div>

  </header>

  <p>나도 순간 낚일뻔함 <br>요새 넘 불경기라 이런 문자에 낚이는 사람 많겠는데...
    <a class="readmore-link" href="article.html?article=1">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=2">
        갈수록 지능적으로 되어가는 보이스피싱
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">25 Feb, 2013</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">검찰청</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 댓글</a></span>
      <span class="like-count">66</span>
    </div>

  </header>

  <p>검사 사칭 보이스피싱에 당할뻔한 피해자가 보이스피싱범들이 보낸 사진을 올리며 주의하라고 경고함.
    <a class="readmore-link" href="article.html?article=2">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=3">
        <p>보이스피싱 사기꾼과의 통화내용 (녹음있음)</p>
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">15 Jan, 2020</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">9 댓글</a></span>
      <span class="like-count">382</span>
    </div>

  </header>

  <p>엊그제 어떤분이 전화로 펜션 예약을 문의하시고, 예약을 하시더라구요
    <a class="readmore-link" href="article.html?article=3">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=4">
        보이스피싱 사기범 핸폰 땄습니다. 001-86-13858-9673-14
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">24 Mar, 2020</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">5 댓글</a></span>
      <span class="like-count">52</span>
    </div>

  </header>

  <p>저번 목요일 sk텔레콤이라고 사칭한 어눌한 말씨의 중국 아줌마를 더 어눌한척 속이고나니, 경상도 말씨를 쓰는 남자가 전화 왔습니다.
    <a class="readmore-link" href="article.html?article=4">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=5">
        보이스피싱으로 800만원 잃었어요
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">01 Feb, 2020</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">4 댓글</a></span>
      <span class="like-count">72</span>
    </div>

  </header>

  <p>뉴스에서만 보던 일을 제가당해버렸네요.
어제 보이스피싱 당해서 800만원가량 잃었습니다.

    <a class="readmore-link" href="article.html?article=5">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=6">
        어제 바보같이 보이스피싱 당했어요..
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">11 Jun, 2020</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">2 댓글</a></span>
      <span class="like-count">12</span>
    </div>

  </header>

  <p>어제 너무 황당하게 보이스피싱 당했어요....
방탈 너무 죄송합니다.
    <a class="readmore-link" href="article.html?article=6">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=7">
        레전드 보이스피싱 당했음 다들 조심 ㅠ
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">2020.06.29 22:24</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판/문화상품권/대구/검찰청</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">4 댓글</a></span>
      <span class="like-count">5</span>
    </div>

  </header>

  <p>난 그냥 돈없는 대학생이고 여유롭게 뒹굴뒹굴거리는 도중에 모르는 010개인번호로 전화가옴. 난 당연히 아는사람인줄알고 그냥 친구처럼 여보세요. 하면서 받음. 근데 자기가 대구경찰서 뭐 검사라면서 00년00월00일생 000씨 맞냬 목소리는 평범한 2-30대 남자 목소리였음 . . .
    <a class="readmore-link" href="article.html?article=7">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=8">
        어머니의 사망보험금을 보이스피싱에 날렸습니다.
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">2020.09.15 10:51</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트 판</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">2 댓글</a></span>
      <span class="like-count">3</span>
    </div>

  </header>

  <p>일간에 걸쳐 검찰 및 금감원 합동 수사 관련 보이스피싱 사기와 대출 사기에 당해 전재산 약 1억 5천여만원을 잃었습니다.
이 돈은 친구가 7년 넘게 모아온 청약과 적금 그리고 친구의 어머니의 사망 보험금 입니다.
 . . .
    <a class="readmore-link" href="article.html?article=8">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=9">
        엄마가 은행 사기대출 보이스피싱 당하셨어요..
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">25 Feb, 2013</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
      <span class="like-count">9</span>
    </div>

  </header>

  <p>엄마가 30일, 31일 이틀에 걸쳐 보이스피싱 당하셨네요..
2672만원..
본문내용
엄마가 30일, 31일 이틀에 걸쳐 보이스피싱 당하셨네요..
2672만원..
 . . .
    <a class="readmore-link" href="article.html?article=9">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?article=10">
        인터넷에서만 보는 얘긴줄 알았는데 보이스피싱이 진짜 있네요;;
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">2020.10.06 12:56</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판/스미싱</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">2 댓글</a></span>
      <span class="like-count">1</span>
    </div>

  </header>

  <p>엄마랑 같은 사무실에서 일하는데
오전에 이런 문자가 왔다면서 보여주시는거에요
 . . .
    <a class="readmore-link" href="article.html?article=10">더보기</a>
  </p>

</article>`,
];



var article_contents = [
`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">피해 사례 </a> <span class="divider">/</span></li>
    <li class="active">읽어보세요) 보이스피싱땜에 열받네요.</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">읽어보세요) 보이스피싱땜에 열받네요.</a></h1>

  <div class="post-meta clearfix">
    <span class="date">25 Feb, 2013</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">태그</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 댓글</a></span>
    <span class="like-count">66</span>
  </div>

  <p>서울지방경찰청 이동훈 경이라고 연락옴<br />전라남도 광주 최용씨와 무슨관계나고 하더니 저의 명의로 대포통장이 만들어져서 6천만원이 빠져나가고 제가 용의자라고 함<br />제가 말함 : 네? 아 뭔 개소리야 당신 지금 보이스피싱하는거 아니냐?<br /> 당신 소속이랑 경찰청 전화번호 줘바요<br />피싱 : 서울지방경찰청 (무슨 전담과라고함)김동훈 경이구요. 02-1566-0165 에요<br /> 그리고 그전에 뭐라하셧죠? (제가 개소리라 했던거에 사과받으려고 집요하게 뭐라하셧죠만함)<br />제가 말함 : 내가 다시 전화해볼테니까 기다려라 당신 번호 010-2905-6117 여기 찍혀있는거 맞죠? 기다려봐라</p>
  <p>이후에 02-1566-0165전화함<br />서울지방경찰청이라함. 1566에서 다시 의심 장난하나 궤쉐끠들이<br />그리고 김동훈 찾는다니까 바로 바꿔줌 ㅋㅋㅋ</p>
  <p>어디 은행에서 내 통장이 만들어진것도 알고있음 하지만 계좌번호나 비밀번호 신용카드번호 이런건 물어보진않음<br />물어봐도 안알려주는 성격임.</p>
  <p>그리고 112에 신고해서 상담센터 연결받은후 118에 개인정보 문의하고 피싱한 쉐끠가 말했던 은행들에 전화해서<br />확인해보고 피싱이라고 확신함. OTP발급 다시 받음<br />피싱 : 전화하거나 주소로 찾아오세요.<br />제가 : 주소알려줘바요<br />피싱 : 서울시 종로구 사진동 8-31번지입니다.<br />제가 : 일단 지금 전화 바쁘니까 끊고 이따 전화할게요.</p>
  <p>112 다시 신고<br />경찰에게 주소,번호 다 알려줫고 다시 기다려봐라 하고 경찰 끊음<br />파출소에서 연락이옴.<br />그거 보이스피싱 맞다. 경찰청,국세청 해킹해서 보이스피싱 해대서 어떻게 잡기도 힘들다고함.<br />일단 그런 전화오면 받지말고 아무것도 알려주지말고 끈으라고 하네요.<br />그리고 사진동은 없고 사직동이라네요.<br />피싱하는 쉐끠가 말투가 어눌함</p>
  <p>이 글 보신분들 서울지방경찰청,국세청 보이스피싱 전화 오면 걍 무시하세요.<br />지금 다시 전화해서 욕하려했는데 은행직원이 욕도 하면 더 위험하다고 하지말라네요.<br />정보를 어디로 딴데다 팔아서 위험해질수도있다네요.</p>
  <p>이상입니다.</p>
  <p>링크<br />http://www.inven.co.kr/board/heroes/2046/935645</p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">66</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(3) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>내용</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">피해 사례 </a> <span class="divider">/</span></li>
    <li class="active">보이스 피싱 문자 점점 정교해지네</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">보이스 피싱 문자 점점 정교해지네</a></h1>

  <div class="post-meta clearfix">
    <span class="date">25 Feb, 2013</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">태그</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 댓글</a></span>
    <span class="like-count">66</span>
  </div>

  <p class="article-image-wrapper"><img src="images/case_images/case_1_1.png" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_1_2.png" alt="img"></p>
  <p>나도 순간 낚일뻔함<br />요새 넘 불경기라 이런 문자에 낚이는 사람 많겠는데...<br />이거 외에도 전화 문자 징하게 옴.<br />어제는 어머니 폰에 페이코 결제 문자 날아왔는데 어머니 이름까지 언급한거 보고 깜짝 놀랐음.</p>
  <p>링크 : https://gall.dcinside.com/board/view/?id=aigis&amp;no=301247</p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">66</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(3) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>내용</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">피해 사례 </a> <span class="divider">/</span></li>
    <li class="active">갈수록 지능적으로 되어가는 보이스피싱</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">보이스 피싱 문자 점점 정교해지네</a></h1>

  <div class="post-meta clearfix">
    <span class="date">25 Feb, 2013</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">태그</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 댓글</a></span>
    <span class="like-count">66</span>
  </div>

  <p class="article-image-wrapper"><img src="images/case_images/case_2_1.png" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_2_2.png" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_2_3.png" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_2_4.png" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_2_5.png" alt="img"></p>

  <p>검사 사칭 보이스피싱에 당할뻔한 피해자가 보이스피싱범들이 보낸 사진을 올리며 주의하라고 경고함.<br />이미 피해자의 이름과 주민등록번호를 토대로 가짜 서류를 만들어서피해자에게 카카오톡 등을 통해 보낸다고(피해자는 본인의 신상은 가리고 사진을 올림)<br />절대 국가기관이 개인에게 카톡을 보내지 않는다는 사실을 명심하는 것이 가장 중요하고 저런 사진들을 받는다고 해도 철저하게 무시하는 것이 중요함.<br />조심 또 조심합시다<br />링크 : http://www.inven.co.kr/board/webzine/2097/1531199</p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">66</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(3) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>내용</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,


`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">제목</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">제목</a></h1>

  <div class="post-meta clearfix">
    <span class="date">15 Jan, 2020</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database"><p><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";'>네이트판</span></p></a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">9 댓글</a></span>
    <span class="like-count">382</span>
  </div>

  <p class="article-image-wrapper"><img src="images/case_images/case_3_1.jpg" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_3_2.jpg" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_3_3.jpg" alt="img"></p>

  <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>안녕하세요~&nbsp;저는 목포에서 작은 펜션을 운영하고 있습니다.</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>엊그제 어떤분이 전화로 펜션 예약을 문의하시고,&nbsp;예약을 하시더라구요</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>예약을 하게되면 저한테 아래와같은 핸드폰 문자가 옵니다.</span></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_3_4.jpg" alt="img"></p>

  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>몇분 지나지 않아서 농협 입금알림 문자가 아래와같이 오더군요</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>입출금 변동사항이 있으면 문자로 보내주는 서비스입니다.</span></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_3_5.jpg" alt="img"></p>

  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>예약금 22만원이 들어왔으니 아래와같이 홈페이지에 예약완료 처리를 했습니다.</span></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_3_6.jpg" alt="img"></p>

  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>그런데 입금내역을 보니 뭔가 이상하더라구요..</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>잔액란이 없는..ㅎ</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>보이스피싱 이구나..생각하고 녹음준비하고 전화를 기다렸습니다.</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>사실 이때의 의도는 좀 놀려주다가 계좌&nbsp;알아내고 소액 입금후</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>계좌지급 정지를 신청하고 사기피해로 경찰에&nbsp;신고하려고 했습니다.</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>통화는 총&nbsp;7분가량 됩니다.</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>첫번째 통화는 일부러 모른척하며 입금 잘 확인됐다라며..</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>피싱남을 안심시키려고 그랬구요</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>두번째 통화 중간에 웃음소리는 소리끔을 누르고 한것이라 상대방은 못듣습니다.&nbsp;의도치않게 피싱남이 어리숙하여 장난치는걸 인식하지</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>못하기에 더 재밌더라구요ㅎ</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>사실&nbsp;3탄을 넘어서&nbsp;10탄까지 가면서 한국 국무총리 세분과 식사하고 있다..라든지 서울특별시 이장님들 모여있다..등등 멘트를 생각하고 있었는데&nbsp;갑자기 장례식장 갈일이 생기는 바람에&nbsp;장난할 생각이 안들더라구요..</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>그리고 문자로 계좌를 알려주길래 이체를 진행해봤는데 잘못된 계좌를</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>알려주더라구요.&nbsp;그래서 계좌 다시 보내달라고 하니 공범용의 실제 계좌를 보내주더군요.&nbsp;이건,&nbsp;상대방이 계좌이체를 진짜 하려는건지 장난하는건지 판단하기 위한 방법 같습니다.</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>그래서 그만하고&nbsp;112에 신고해서 계좌 등등을 알려줬는데 해당계좌는 금새 신고계좌로 나오더라구요 ㅎ</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>시간 있으실때 순서대로 한번씩 들어보세요</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>-----------------------------------------------------------</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>음성파일을 바로 올릴 수 없어서 동영상으로 편집하느라 저희 한옥사진을 이용했습니다.광고라는 분들 많으신데ㅠㅠ 저희 펜션 오시기 힘드세요.&nbsp;너무 멀어요.&nbsp;목포에서 배타고 한참 들어가야 하구요ㅋ 제가 올린 글과 통화내용으로 저희 펜션 어딘지 찾을 수 있으시겠어요?.ㅠㅠ&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>재밌게 들으시고 이런 수법에 걸리지 않게 주변에도 많이 알려주세요</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>이번에 개인정보 유출건과 저의 보이스피싱을 조합해보면</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>일반인들 에게도 이름,&nbsp;계좌,&nbsp;전화번호만 있으면 충분히 만들수 있는</span></p>
  <p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>수법같아요~</span></p></p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">382</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">흠</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15:12:44</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;'>이렇게 사기도 치는군 사기수법알려줬고 자기펜션홍보는 어디에도 없는데 자꾸 홍보라고 깍아내리네</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">11</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15:13:14</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;'>저 통화내용을 들어보면 22만원인데 사기치는사람이 원래 22만원보내야하는데 모르고 220만원을 보냈으니 나머지 198만원을 돌려달라 그런얘기임!!</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;'>ㅎㄱ</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15. 14:00</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;'>아~ 웃겨~ ㅋㅋㅋ 주인장 센스가 굿~~~!!! 영관급들 회의중이래~ ㅋㅋㅋ 게다가 직원은 외국인노동자~ ㅋㅋㅋ</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;'>아기자기</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15. 14:44</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>오래전껀데..잼있게보구가요..외달도..결혼직후에 많이갔었는데 ...한옥민박 자리없어서 근처 민박집에서 잤었는데..그래도 둘러보고 했던 기억이 나네요 ㅎ 나중에 울 깐난이 더 크믄 한번 놀러갈게요..여긴 목포에요 ㅋ</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">외달도홀릭</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15. 15:11</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#333333;background:white;'>지난 9월에 어머니랑 좋은 추억을 만들고 온곳이에요. 좀 멀긴 했지만 정말 다시 가고 싶을만큼.. 잘 대응하셔서 피해가 없으시니 다행이네요. 요즘 나쁜사람 너무 많네요...ㅠㅠ</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">머니머니</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15. 15:33</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#333333;background:white;'>센스굿!재치굿!</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">레몬</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15. 16:14</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#333333;background:white;'>센스굿!재치굿!</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#333333;background:white;'>키</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15. 21:01</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#333333;background:white;'>진짜 단순한사람들 많다... 홍보가아니라구? 저기 문자에 뻔히보이는 삼학정 이란건 자기네 한옥집이름아닌가?... 보는관점이 다를수도있겟지만 이렇게라도 알리려는거같은데</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <section id="comments">

  <h3 id="comments-title">(9) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#333333;background:white;'>이또한지나..</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-01-15. 22:38</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#333333;background:white;'>마지막 피싱용 이름이 웃김...&quot;공범용&quot;</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">제목</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#"><p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;text-align:justify;line-height:107%;font-size:13px;font-family:"맑은 고딕";'><strong>보이스피싱 사기범 핸폰 땄습니다. 001-86-13858-9673-14</strong></p></a></h1>

  <div class="post-meta clearfix">
    <span class="date">24 Mar, 2020</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">9 댓글</a></span>
    <span class="like-count">52</span>
  </div>

  <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>저번 목요일&nbsp;sk텔레콤이라고 사칭한 어눌한 말씨의 중국 아줌마를 더 어눌한척 속이고나니,</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>경상도 말씨를 쓰는 남자가 전화 왔습니다.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>형사계 소속이라며 내가 대포폰을 만들어서&nbsp;684,000이 미납되었다며 명의를 도용당하지않았냐고 하더군요.&nbsp;저는 그래서 계속 그사람이 하는 말에 따라 응대했고,&nbsp;빨리 통장 비번을 바꿔야하니&nbsp;ATM(자동인출기) &nbsp;앞에가라는 겁니다.&nbsp;그래서 배터리가 없으니&nbsp;5분 후에 전화를 해달라고 했습니다.&nbsp;그런데&nbsp;이놈이&nbsp;5분에 전화 한다며 정말로 전화했더군요.&nbsp;지 핸드폰으로요...하하하하..</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>그래서 번호를 땄습니다.&nbsp;번호 올립니다. &nbsp; &nbsp; &nbsp; 001-86-13858-9673-14&nbsp;</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&nbsp;</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>사실 계좌번호까지 딸려고 했는데 제가 직접은행을 가지않고 사무실</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>베란다에서 은행간척하며 전화를 받으니 주위의 소리가 이상했었나 봅니다.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>여러가지 질문을 하면서&nbsp;ATM기의 화면을 이야기하는데 순간 당황스럽더군요...저는 사무실이라서....&nbsp;그러더니 눈치를 채고 갑자기&nbsp;욕을 하더니 끊더라고요..</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>저는 화가 나서 발신된 전화로&nbsp;전화 했더니 중국발음의 녹음된 소리로......왕서방..나 병신...나 짱꺠...통화중..&nbsp;하더군요.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>그래서 통화중은 알아듣겠던데..&quot;설마 이놈들이 사기 칠떄 지 핸드폰으로 했을까&quot;&nbsp;하는 의심이들어 끊었는데..&nbsp;조금 있다가 이멍청한 자식이 다시 지 핸드폰으로 전화를 해서 한국말로&nbsp;&quot;전화하지말아 강아지야&quot;&nbsp;하면서 끊더군요.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>저는 화가나서&nbsp;다시 전화를 했는데 정말 받더군요.&nbsp;그래서&nbsp;20분동안 서로 욕하면서 아주 지랄을 했습니다.&nbsp;전화끊고 경찰서에 신고를 했는데 별 반응이 없었어요.&nbsp;경찰은&nbsp;&quot;네..알았습니다&quot;끝.......이런&nbsp;.....</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>번호 올립니다.&nbsp;사기당하신분들...&nbsp;전화해서 욕한마디 합시다.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>001-86-13858-9673-14&nbsp;</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>정확히 어떤숫자가 통신회사 번호이고 어떤숫자가 나머지 뒷번호인지 모르지만 햇갈리실까봐&nbsp;&quot;-&quot;을 넣었습니다.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>이런 쓰레기 새끼들은 잡아서 껍질을 벗겨야합니다.&nbsp;제가 너무 흥분했습니다,미안합니다.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>하던이야기를 기억해보면</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&quot;</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>혹시&nbsp;010-xxxx-xxxx번을 연체하신적 있습니까&quot; &quot;아니오&quot;</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&quot;</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>죄송하지만 성함이 어떻게되시죠?&quot; &quot;네. xxx&nbsp;입니다&quot; &nbsp;---&gt;&nbsp;이때부터 이상했죠.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&quot;xxx</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>씨의 이름으로&nbsp;684,000이 연체되어 있는데 혹시 타인에게 명의도용당하신것 같네요&quot;</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&quot;</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>곧 경찰서 형사들이 전화를 할것이니 답변잘 해주세요&quot; &quot;네&quot;&nbsp;잠시후</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&quot; xx</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>경찰서 형사 입니다.&nbsp;도용당하셨죠.이것은 국가적인 중대사가 아닐수 없습니다....중얼중얼....중얼..중얼....&quot;&nbsp;-----&gt;말씨는 경상도,중국말투없슴,&nbsp;목소리는 쫙 깔고 말함.찌저지는 목소리</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>&quot;</span><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>그래서 지금 당장 전화끊지말고 은행으로 가세요..빨리&nbsp;2분안에 처리해야합니다&quot; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;속으로&nbsp;&quot;쓰벌놈,&nbsp;별것 다시키네&quot; 5분후 전화왔는데 다른놈입니다.&nbsp;이놈은&nbsp;지가 형사 계장이랍니다..&nbsp;속으로...&quot;별미친놈....니가 형사계장이면 나는 중국공안 계장이다&quot;.....그리고 사무실에서 말하는데로 따라하다가&nbsp;의심받고&nbsp;.....싸웠습니다.&nbsp;그날 열받아서 술한잔 먹고 집에 갔습니다.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>여러분이 만약에 전화를 하셔서&nbsp;&quot;니가&nbsp;사기친놈이지&quot;&nbsp;하시면&nbsp;경상도 사투리&nbsp;쓰는 놈이&nbsp; &quot;나는 그&nbsp;놈이 아니다&quot;라고 할겁니다.&nbsp;그래도 속지 마시고 욕몇마디 하세요.&nbsp;저인것처럼&nbsp;&quot;그떄 싸웠던 형님이다&quot;&nbsp;해보세요.&nbsp;그러면 저를 알기때문에 같이 맞짱뜰겁니다.</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>오해하지마세요.&nbsp;장난으로 전화하지 마시고 정말 사기당하신분 분을 푸시라고 전화번호 올립니다.&nbsp;그리고 이 전화번호로 추적가능하신분,&nbsp;추적하셔서 잡으실수 있으신분,&nbsp;가뜩이나 백두산,&nbsp;고구려..등등 지네것이라고 우기는데,&nbsp;이제는 선량한 사람의 돈까지 뺏는 이런 개 쓰레기새끼만도 못한 강아지를 잡아주길 바랍니다.&nbsp;참으로 안타까운것은 우리나라경찰도 여러방면으로 확인한다지만&nbsp;잘안잡히는것 같습니다. &nbsp;</span></p>
<p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;font-family:"맑은 고딕";color:#111111;'>001-86-13858-9673-14 &nbsp;// &nbsp; 001-86-13858-9673-14 &nbsp;// 001-86-13858-9673-14</span></p></p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">52</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(5) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>유유</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-03-24 10:01:25</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>와 ㅋㅋ 보이스피싱이 나날로 발전하네요. 그러나 전 어차피 ㅋ 돌려줄 돈이 없어서 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 보내줄 돈이없어안걸릴듯 ㅋㅋㅋㅋ</span></p></p>
              </div>

            </article>
          </li>
          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>ㅁㅁㅁ1</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-03-24 10:15:24</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ… 아 웃겨</span></p></p>
              </div>

            </article>
          </li>
          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>하하</span></p>유유</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-03-24 16:21:25</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>와 대박..ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 나한테는 안걸려 오나!??! 급 궁금해지네..ㅋㅋ</span></p></p>
              </div>

            </article>
          </li>
          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>ㅡ</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-03-24 21:05:11</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>머야..별별 사기가 다 있구만</span></p></p>
              </div>

            </article>
          </li>
          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url"><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>여자사람</span></p></a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-03-24 23:55:22</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p style='margin-right:0cm;margin-left:0cm;font-size:13px;font-family:"맑은 고딕";margin-top:0cm;margin-bottom:8.0pt;text-align:justify;line-height:107%;margin:0cm;background:white;'><span style='font-size:13px;line-height:107%;font-family:"맑은 고딕";color:#333333;background:white;'>말투보니 멀쩡한 한국인같은데 남의 등 쳐먹고 사는 낮짝 좀 보고싶다 미친놈들..왜 글케 사니?ㅉㅉ돈이 빨리 입금안되서 직원들 다 퇴근을 못하고 있다며 빨리 입금재촉하는거 보아하니 엄청 안달나 보이는구나ㅋㅋㅋㅋ나이 지긋하신분들은 물론이고 젊은사람들까지도 주의깊게 확인안하면 당할수도 있겠네요..글쓴이님의 재치?에 재밌게봤어요~!</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">제목</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#"><p><strong>보이스피싱으로 800만원 잃었어요</strong></p></a></h1>

  <div class="post-meta clearfix">
    <span class="date">10 Dec, 2019</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">4 댓글</a></span>
    <span class="like-count">72</span>
  </div>

  <p><p>뉴스에서만 보던 일을 제가당해버렸네요.<br /> 어제 보이스피싱 당해서 800만원가량 잃었습니다.<br /> <br /> 처음에는 경찰서라고 제가 사기 관련해서 고소를 당했다고 하더라고요. 처음에는 어이가 없어서 이게뭐지 했는데 그 사기꾼들이 불러준 검찰청 사이트에 들어가서 주민등록조회로 확인해 봤는데 정말 고소장이 있더라고요. 그러면서 하는말이 지금 이사건이 비밀리에 진행되고 있다고 어디가서 말하면 업무집행죄로 고소당할수 있다고 하더라고요. 경찰이나 법 관련해선 무지해서 아그런가보다 했죠. 그랬더니 제 통장에 사기횡령한돈이입금되었는지 확인해봐야한다는겁니다. 그래서제가 아그럼 비밀번호도필요하나요 떠봤죠. 그런데 그 사기꾼들이 비밀번호나 보안카드 묻는건 보이스피싱이나 하는거라고 했습니다.<br /> <br /> 그때부터 어디에 홀린듯이 믿었습니다. 무슨무슨통장이 있냐고 묻더라고요. 지금 적금통장 하나빼고 나머진 다 몇백원밖에 남아있지않다고 말했더니 우선 적금통장을깨서 제가자주쓰는통장에 넣으라네요. 그리고 금강원을 들먹이면서 가상계좌로 부쳐야한다고 해서 그걸 믿어버렸습니다. 제가 인터넷뱅킹을못해서 은행에서 업무봐야한다했더니 은행 내부에서 사기가일어나는거라고 전화기를 숨겨야한다고 그러더라고요. 그래서 그렇게했죠. 중간에 제가 질문들을 엄청했어요. 이거보이스피싱아닌거 입증해보라고부터시작해서 금강원이 왜개입하냐고 그럼 금강원이 직접하면되지않냐고 막 물어봤어요. 정신이 없어서 잘 기억은 안나지만 바로바로 대답을 잘 하더라고요. 그래서 더 진짜였던것 같아요. 계좌이체를 하고 원상복구시켜준다는데 전화가 안오더라고요. 전화했더니 조금만기다려달라길래 아 내가 보이스피싱당했구나 그제서야 깨달아서 바로 112에신고하고 은행도 지급정지신청했지만 돈은 다 빠져나갔다네요.<br /> <br /> 부모님께선 괜찮다고 그런일도 있을수 있는거라고 말씀하시는데 전 괜찮지 않아요. 지금 그돈이 중요한게 아니라 사기당한게 너무 쪽팔려요.<br /> <br /> 경찰서에서 약 3개월정도 걸릴것같고 보통 조폭이 관련돼서 돈은 못 찾을것같다고 하네요. 빨리잡혔으면 좋겠어요. 법에 대해서 잘 모르지만 잡히면 제가 따로 고소해도 되는거죠? 돈 찾는건 포기했고 그사기꾼들 남은 인생을 밟아버리고 싶네요.<br /> <br /> 제가 지금 할수있는 일이 없을까요?<br /> 사이트 아이피를 추적했는데 대만이더라고요. 대만에 친구도있고해서 개강하기전에 대만 한번가서 여기저기 알아볼까도 고민중이에요.<br /> <br /> 아직 24살 여자인 대학생입니다.<br /> 현실성 없더라도 제가 그 사기꾼들 잡을수 있는 아이디어 좀 공유해주세요. 부탁드려요.</p></p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">72</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(4) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">ㅇㅇ</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2019-12-10 15:14:12</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span>세상에 ㅠㅠ</span></p></p>
              </div>

            </article>
          </li>
  </ol>

<section id="comments">

  <h3 id="comments-title">(4) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">ㅇㅢ</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2019-12-10 16:21:12</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span><p>안녕하세요, MBC 제작진입니다. 저희가 도움 드릴 부분이 있을지 이야기 나누고 싶어서 댓글 남깁니다. 편한 시간에 연락 주시면 감사하겠습니다. 010-6838-7721 / 카카오톡 플러스친구 '실화탐사대'</p></span></p></p>
              </div>

            </article>
          </li>
  </ol>

<section id="comments">

  <h3 id="comments-title">(4) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">오즈</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2019-12-10 21:57:12</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span><p>보이스피싱 사기꾼 놈들이 돈만 800만원 가져간게 다행이자나요 잘못하면 당신 건강까지 가져갈수 있어요 그러니 지금부터 당신은 정신 똑바로 차리고 사세요 사기꾼 놈들한테 당신 건강까지 뺏기지 말고...</p></span></p></p>
              </div>

            </article>
          </li>
  </ol>

<section id="comments">

  <h3 id="comments-title">(4) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">오메</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2019-12-10 23:23:11</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p><span><p><span>에구 힘내세요<span lang="EN-US">,,,</span>토닥토닥<span lang="EN-US">,,,</span></span></p></span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">제목</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#"><p><strong>어제 바보같이 보이스피싱 당했어요..</strong></p></a></h1>

  <div class="post-meta clearfix">
    <span class="date">11 Jun, 2020</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">2 댓글</a></span>
    <span class="like-count">12</span>
  </div>

  <p><p class="a">어제 너무 황당하게 보이스피싱 당했어요....</p>
<p class="a">방탈 너무 죄송합니다.</p>
<p class="a">&nbsp;</p>
<p class="a">&nbsp;</p>
<p class="a">기존에 대출을 쓰고 있는데</p>
<p class="a">전화가 와서 KB캐.. 이라고 하면서 나라에서 운영하는</p>
<p class="a">저금리 상품으로 신용보증기금에서 보증보험 발급하면 저렴한 이자로 대환대출이 가능하다 해서 신청함.(한 달에 8만 원 정도 이자 줄어듦-금액에 크게 차이가 없어 별의심 안 함)</p>
<p class="a">30분후 전화 와서 신용보증기금 보증서 발급 가능하다며</p>
<p class="a">&nbsp;</p>
<p class="a">신용보증기금으로 전화하라고 해서 함. (남자가 컴퓨터 치면 확인해줌)</p>
<p class="a">신용보증기금 전화 하니 보증보험 일시 납부하면 대환 대출 된다고 함</p>
<p class="a">(대출연체 없으면 보증금 3개월 후에 반환된다고 친절하게 알려줌)</p>
<p class="a">&nbsp;</p>
<p class="a">점심시간에 걸려 급하게 보증보험금 465,000원 입금 요청하기에 인터넷 뱅킹으로 입금함</p>
<p class="a">(여기에 의심을 했어야 했는데... 바보처럼 점심식사에 정신이 팔려...ㅠㅠ)</p>
<p class="a">점심 먹고 들어오니 대출회사에서 연락와서 전화 받으니</p>
<p class="a">대출이 더 된다면서 보증보험을 더 송금하라고 함.</p>
<p class="a">(이때 뭔가 아닌 듯...)</p>
<p class="a">&nbsp;</p>
<p class="a">홈페이지에 가서 대출처 신용보증 기금은 연락처 확인해보니 아주 미묘하게 전화번호 틀림</p>
<p class="a">연락해보니 각각 자기네 지점에는 그런 번호가 없다고 함</p>
<p class="a">일단 바로 송금은행에 연락 보이스 피싱 신고하고 상대편(신협)에 지급정지 시켜놓고</p>
<p class="a">직장 가까운 경찰서에 전화해서 신고방법 물어보니 여기에 신고해도 되지만 주소지로 신고 이관해서 일주일 정도 시간 소요되니 빨리 신고하려면 주소지 관할 경찰서로 가라함.</p>
<p class="a">급한 마음에 회사 조퇴하고 인터넷 이체확인서 가지고</p>
<p class="a">주소지 관할 경찰서 지능 팀으로 신고하러감.</p>
<p class="a">(여기서 또 한 번 열 받음... 직장근처 경찰서는 주소지로 가라하고 주소지 경찰서는 인터넷 뱅킹이 아닌 은행에서 확인된 이체확인서를 가져와야 접수 할 수 있다고 신고도 못하고 돌아옴)</p>
<p class="a">&nbsp;</p>
<p class="a">신고하러 가는 중간에 대출회사에 전화를 해보니 5시까지는 여자상담원들이 전화를 받더니 5시30분 넘어서는 아까 신용보증기금이라고 상담하던 남자 직원이 전화를 받음...</p>
<p class="a">(확실한 보이스 피싱.... 이런 내용을 다 해도 경찰서에 보이스 피싱 신고 안됨)</p>
<p class="a">&nbsp;</p>
<p class="a">오늘 아침 대출회사에 전화해보니 아직도 대출가능하고 뻥치고 영업하고 있음...</p>
<p class="a">(1566-3409- KB캐..대출&nbsp; 02-6931-6855-가짜신용보증기금번호)</p>
<p class="a">지금도 다른 피해자들이 보이스피싱 당할 거 알면서도 아무것도 해줄 수 없다는 경찰에게도 회사 빠지면서 서류며 신고 해야 하는 저 자신에게도 정말 화가 납니다.</p></p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">12</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(2) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">ㅇㅇ</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-06-11 17:50</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p class="a"><span>경험담 공유 감사합니다<span lang="EN-US">. </span>사기는 영혼 살인이라고 생각합니다<span lang="EN-US">. </span>끊임없이 속은 자기를 탓하게되고 우울감에 빠지게 만드니까요<span lang="EN-US">. </span>피해자는 잘못이없습니다<span lang="EN-US">. </span>힘드시겠지만 어머니 마음이 잘 추스러지기를 바라겠습니다<span lang="EN-US">.</span></span></p></p>
              </div>

            </article>
          </li>
  </ol>

  </article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">4</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(2) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">뱀</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">2020-06-11 19:07</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p><p class="a"><span>힘내세요<span lang="EN-US">.. </span>진짜 미친것들</span></p></p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">레전드 보이스피싱 당했음 다들 조심 ㅠ</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">레전드 보이스피싱 당했음 다들 조심 ㅠ</a></h1>

  <div class="post-meta clearfix">
    <span class="date">25 Feb, 2013</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판/문화상품권/대구/검찰청</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">4 댓글</a></span>
    <span class="like-count">5</span>
  </div>

  <p>내가방금 ㅈㄴ 말도안되게 준비성개쩌는 미친 보이스피싱을 당할뻔함<br /> <br /> 난 그냥 돈없는 대학생이고 여유롭게 뒹굴뒹굴거리는 도중에 모르는 010개인번호로 전화가옴. 난 당연히 아는사람인줄알고 그냥 친구처럼 여보세요. 하면서 받음. 근데 자기가 대구경찰서 뭐 검사라면서 00년00월00일생 000씨 맞냬 목소리는 평범한 2-30대 남자 목소리였음 경찰한테 전화온거 첨이라서 벌벌떨면서 ㅅㅂ 내가뭔잘못했지 ㄷ ㄷ하면서 맞다함 그거알지 잘못한거없어도 샹 뭐지ㅠㅠ 나뭐잘못했지 하면서 막 긴장되는거ㅠ <br /> <br /> 경찰이 광주에사는 28세 김민지씨를 아냬 모른다했지 그사람이 중고나라에서 158명의 명의를 도용해서 대포통장만들어서 중고나라에서 사기를 치고다녔는데 그중에 한명이나라는거야 근데이게 ㅈㄴ 믿을싸했던게 최근에 내주변 2명이 진짜 중고나라 해킹당해서 2-300만원짜리 코지마 안마기 등록되어있고 그래서 와미친 나도 ㅅㅂ 해킹당햇구나하고 ㅈㄴ 믿엇지. 내가만약 그사람한테 불법 자금을 받고 내 명의를 팔았으면 뭐 뭐위반해서 3년이하징역 3천만원 벌금형을 받을 수 있대 그리고 조사결과 피해자신분이되면 그걸 피해당한걸 신고할 수있대. 그리고 막 진짜경찰처럼 하나하나 질문을하고 이제 녹취록 남겨야된다고 아까 대답했던거처럼 사실만 대답하라 함 예를들면 김민지씨를 아십니까? 아니요 모릅니다. 김민지씨에게 돈을주고 명의를 판적 없습니까? 없습니다 ㅇㅈㄹ하면서 ㄹㅇ경찰서에서 수사받눈거처럼 물어봄 나는 선량한 시민^^ 졸라 협조 잘해 ㅇㅈㄹ하면서 열심히 대답함. <br /> <br /> ㅈㄴ 신뢰가 갔던게 요즘 보이스피싱같은게 많아서 수사할때 계좌번호나 비밀번호를 못물어보게되어있다고 그런거 물어보면 보이스피싱이라고 하면서 신뢰를 ㅈㄴ팍팍줘 그래서 아이사람은 진짜 검사구나 ㅇㅈㄹ하면서 안심하고 수사받고있었음 자기가 진짜 검사라는걸 증명하기위해서 네이버에 로앤비를 쳐보래 거기서 김대성을쳐보래 자기가 수사한내역들 다논문으로 있다고 확인시켜줌 그리고 카톡 아이디 알려주면서대구지검민원실 이름으로되어있는걸로 안녕하세요랑 내가확인한거 카톡으로 캡쳐해서 보내야된대 ㅈㄴ 착실하게 다따랐어 그러고 무슨 서류 3개를 보냈는데 하나하나 같이보쟤 <br /> <br /> 거기에 사건 요지같은거 써있고 4항을 소리내서 읽어야된대 ㅈㄴ 열심히 읽음 와 이거 읽는거 들으면서 얼마나 웃겼을까 그 __럼 수치스럽다 쨋든 대충 가족이나 친구한테 이 조사를받고있는걸 통화하는내에 말하면안된다는 조항이었음 피해자인게 밝혀지면 그땐 말해도된대 이것도 지금당시에보면 개병신같은데 그사람이 말하기를 가해자김민지는 체포했는데 그 일당들을 못 잡아서 만약 친구가족들한테 말하면 퍼져서 그사람들귀에 들어갈 수있으니 조사 끝날때까지는 말하면안된대 만약 그걸 어기면 뭐 집행방해죄로 고소먹을 수 있대 그래사 ㅅㅂ 입 근질근질 지금당장 야__얘들아 나 경찰서에서 조사받고있어 ㅈㄴ신기하지 라고 떠벌리고싶었는데 난 선량한 시민이니 말하고싶어도 참겠다고 속으로 다짐하고있었음 <br /> <br /> 그러고 다음 문서로넘어가서 가해자가 쓴 진술서를 사건이해를 위해 또 소리내서 읽어야된대 읽었음ㅋ 대충 은행에서 일하다가 고객 개인정보 유출하고 발각돼서 잘리고 너무힘들어서 사기치고 다녔다는 조카 그럴싸한 내용이었음 이__련이? 하면서 속으로 욕하면서 다읽음 여기서 웃긴건 자칭검사님이 하나하나 이해하기쉽게 ㅈㄴ친절하게 설명해줌 <br /> <br /> 그리고이제 3번째 문서인데 강압수사를 할건지 협조수사를 할건지 내가 골라야됨 강압수사를 선택하면 내가 시간안내도되지만 나뿐만아니라 가족들까지 1년에서 1년6개월까지 은행 거래를 못한대 ㅅㅂ 이게 말이야방구야 그리고 협조수사는 내가 감독하에 용의자 일당으로부터 받은 불법자금이 있는지옶는지 확인하눈데 그걸 어케하냐면 내가직접 합법적인 업체에 내 돈을 맡기고 검사를 받는거래 근데 그 합법적인업체에는 토스 카뱅 쿠팡 인터파크 뭐 다알만한데랑 협약을 맺었다면서 신뢰를줌 이건 수사끝나고 바로 결제취소되고 원상복구된대 ㅈㄴ 생각해보니 말도안되는게 내계좌를 보는개아니라 내돈을 봐서 뭐가 나와 __ ㅠ 근데 여기서 당연히 협조수사를하지 1년6개월이 뭔말이야 근데 이제부터 전화가 1분이상 끊기면 강압수사로 강제로 돌아갈수 밖에없다면서 다른사람이랑 연락 못하게하는 수법을 씀 ㅅㅂ 똑똑한새끼들;<br /> <br /> 이제 내가 사용하는 카드사, 각각에있는 잔액을 다말하래 만약 내가 말한 카드사 말고 다른거 가입된게 발견되면 경찰한테 확인전화가 올 수있다면서 계속 모든계좌를 말하도록 유도함 근데내가 신한카드에 돈 18000원밖에없고 카카오뱅크에 내명의로된 동아리 카드14만원이랑 내카드 600원 정도? 있었음 ㅋㅋㅋㅋ ㅅㅂ 근데 신한카드에 돈 만팔천원밖에 없다니까 그새끼 비웃었던거같음 샹련이? <br /> <br /> 카카오뱅크 카드가 있냐는데 자취방이라서 지금 없다니까 그럼 신한카드로 다옮기래 여기서ㅈㄴ웃긴건 카뱅에있는 6백원도 옮겨요..?ㅋㅋㅋㅋ 이랬는데 그건 필요없대 __럼이. 얘들도 600원따위는 필요없다눈거지,, ㅋ ㅋ 아 네.. 하고 동아리돈 14만원만 옮겨서 16만원이됐음 그걸이제 협약맺은 업체로 돈을 보내야된는데 페이앱같은거있냐는데 카카오페이밖에 안써서 ㅈㄴ 무안할정도로 말하는거마다 다 없다햇음 그러다가 토스가입돼있냬 가입은되어있는데 안쓴다고 깔아야된다했더니 앱스토에 들어가서 토스를 깔으래 깔았음 거기에 신한카드가 연결이돼있냬 모든돈을 토스머니로 옮기래 뭔가 이때부터 ㅅㅂ 조카이상한거야 의심은 조카가는데 앞에서 밑밥깔아둔게 졸라 완벽하다생각해서 긴가민가하면서 속으론 ㅅㅂ 이거 보이스피싱이면 ㄹㅇ_되는데 하면서 내성격이 개 찐따병따년이라 아저씨 보이스피싱이죠! 이 샤발련아! 이런 말도못하고 그냥 진행했음 근데이걸 ㅅㅂ 문화상품권으로 바꾸라는거야 이때 부터 와 이건진짜 아닌거같은데라는 생각이듦 왜냐면 며칠전에 우리아빠도 상품권으로 바꿔서 보내라는 보이스피싱에 당할뻔해서 이건 아니다 생각하면서도 난 짠따병따니까 아무말못하고있었음 상품권 9만원으로 바꾸라는데 이게 만약 안되면 내 계좌 거래역중에 불법거래가 걸리는게있어서 그러는거다라고 밑밥을 깜 근데 다행이도 토스에서 뭔가 위험을 감지했는지 내 계정을 막아버렸음 ㅠㅠㅠㅠ 쉬이발 토스만세ㅠㅠㅠ 지금까지 진행을 잘하고있는지 확인차에 간간히 화면을 캡쳐해서 보냈었는데 안바꿔진다니까 캡쳐해서 보내래 보더니 뭔가 불법거래내역이 감지돼서 그런거라고 토스 소장님이랑 연락을 하고오겠다 끊지말고있어봐라 하는시간에 ㅈㄴ 몰래 가족톡에 대구경찰서에서 전화왓는데 이거 사긴지진짠지 모르겠다ㅠㅠㅠ어떡하냐ㅠㅠㅠ 이지랄하면서 아 이거진짜면 가족한테도 말하지말라했는데 진짜면 어떡하지ㅅㅂ ㅠㅠ 이 쓸데없는 버러지같은 걱정하면서 손발발떨면서있었는데 거기서 먼저 전화를 끊어버렸음 그리고 그후로 전화가없으니까 그때서야 이건진짜다 티비뉴스에서만 듣던 먼나라얘기로만 알았던 보이스피싱이 진짜 나한테서 일어난것이다 그때서야 깨닫고 손가락 발발떨면서 토스에 돈 잘있나 확인하려고 들어갔는데 안들어가져서 아거진짜 _됐다 그자칭 검사년이 해킹해서 돈빼가고 계정 막아둔거다. 하고 멘탈터져서 어버버하면서 토스고객센터에서 바로 상담걸고 보이스피싱당한거같다 어버버버 ㅇㅈㄹ했더니 다행이도 해킹은 아니고 그냥 계정보호상태로 전환돼서 안들어가졌던거였음 무엇보다 중요한 내 16만원 잘있냐고 물어보고 잘있다는말 듣고 ㅈㄴ 안심하고 계정막힌거 풀어주자마자 토스머니 바로 내계좌에입금하고 다시 계정 막아버렸음<br /> <br /> 만약 내가 ㅈㄹ 돈많아서 몇백몇천만원 있어봐 근데 토스도 안막히고 보냈어봐 와 상상만 해도 끔찍해 <br /> 근데 ㅈㄴ 너무하지않냐ㅠ 통장에 돈이만원도없는 학생을 갖다가 ㅠㅠㅠㅠ __럼들 죽었으면좋겠어<br /> <br /> 근데진짜 다른사람들은 바보냐고 그걸 믿냐고하는데 당신들도 나였으면 상품권말하기전까지는 90프로는 믿었을거임 ㅠㅠㅠㅠ ㅈㄴ 지금보면 말도안되지만 일단 경찰서라는말에 심리적 압박감 쩌는 상태니까 당황해서 정신없고 믿을 수 밖에없음 ㅠ 막 얼마보내라 당신사기당했다 계좌번호불러라 이런보이스피싱이면 나도 의심할텐데 ㅈㄴ 철저하게 문서 3개까지 준비하면서 밑밥을 1-2개도아니고 5792개정도를 까니까 신뢰가 조카가고 나진짜 경찰한테 수사받은거처럼 말도안되게 리얼했음 어느정도냐면 정말 김민지씨모르세요?? 이말도 ㅈㄹ여러번하고 정말 김민지씨와 불법거래한적 없단 말씀이시죠? 이런식으로 말 한마디 한마디에 디테일이 끝내주고 158명중 나는 74번째 수사받는 사람이고 앞에서 19명이 불법거래한것을 걸렸다면서 진짜 작정하고 엄청난 시나리오를 짜놨음 ㄹㅇ작가랑 배우 둘다하세요 보이스피싱님 ㅠㅠㅠㅠㅠㅠ 샹련아ㅠㅠㅠㅠ 동아리돈 14만원 내돈으로 채울생각에 아찔했네 씨이발^^<br /> <br /> 그래도 다행히 토스덕분에 내16만원은 사수했지만 다시 생각해도 아찔하고 배신감 쩐다진짜... 한시간동안 통화하면서 정이 생겼다해야되나 그랬는데 이 생ㄴ련이진짜,,ㅎㅎ<br /> 잠만 타임 와 16만원뺏으려고 한시간동안 밑밥을 깐다고? ㅋㅋㅋ진짜 미친새끼다<br /> <br /> 경찰한테는 신고 해둔 상태이고 010으로 전화온거면은 보이스피싱이래.. 당연하지 빡대가리련아... 누가경찰이 개인전화로 수사를해ㅠㅠ 하,,,나란년,,^^<br /> <br /> 다들 나같은 병따찐따처럼 낚이지말고...조심해.........ㅠ<br /> 보통년놈들이아니야 아주...<br /> <br /> (사진아래에도 글있음)</p>
  <p class="article-image-wrapper"><img src="images/case_images/case_7_1.jpg" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_7_2.png" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_7_3.png" alt="img"></p>
  <p class="article-image-wrapper"><img src="images/case_images/case_7_4.png" alt="img"></p>
  <p>이건 아까내가말했던 내 목소리로 직접^^읽었던 문서 세개인데 그 상황에선 진짜 믿을만하지않냐고ㅠㅠㅠ 말도안돼진짜...<br /> 어떻게 읽으라고 할 생각을하지??? 진짜 미쳤어 ㄹㅇ 보이스피싱학과 나온거아니냐 이정도면???? 당신은 보이스피싱을하기위해 태어난사람입니다. 축하드립니다. 하지만 뒤지세요 그냥</p>
  <p class="article-image-wrapper"><img src="images/case_images/case_7_5.png" alt="img"></p>
  <p>이건 걔 카톡프로필인데 ㅅㅂ 이거에 낚인내가 ㅈㄴ 한심하다,,,^^<br /> 그땐 그냥 정신없어서 우와 진짠가보네 ㅅㅂ ㅠㅠㅠ 이지랄했다고.... 정신차리고 보니까 진짜 장난하냐 ㅋㅋㅋㅋㅋㅋㅋㅋ</p>
</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">5</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(4) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>전화를 받은 이가 진짜 누군지 알고 그런 걸 진행하는지... 신분 확인이 필요한 것은 절대로 전화로 얘기 안 하고 본인 확인하기 위해서도 경찰서나 검찰에 출석하라고 합니다. 은행이나 공공기관은 모두 그럽니다. 저도 저런 전화를 받고 직접 출석해서 응하겠다 하니까 알았다 하고 끊던데요. 서울 남부지검이라고 하더니...ㅋㅋㅋ 그 뒤로 전화 안 옴.</p>
              </div>

            </article>
          </li>

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>저 이거에 댓글 달려고 방금 가입했어요.. 2시간 전에 같은 수법으로 휴대폰 소액결제 58만원 사기 당해서 경찰 처음 만나봤고요...손 아직도 벌벌 떨려요... 전화 끊지 말래서 못끊고 검색만 하다가 이거 보고 끊었어요ㅠㅠㅠ 진짜... ㅠㅠㅠㅜㅜㅠㅜ</p>
              </div>

            </article>
          </li>

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>방금 제 동생도 글쓴이님이랑 똑같은 수법으로 전화왔었요..! 돈을 못 뽑아서 내일 다시 전화준다고 하고 끊고 난 후에도 진짜인 줄 알았는데 우연히 이 글 보고 너어어어엉무누우우ㅜ우 똑같아서 보이스피싱인걸 확신했습니다 이 글 남겨주셔서 감사해요 글쓴이님 아니였으면 속았을 뻔 했어요 사진내용도 카톡프사도 너무 똑같아요</p>
              </div>

            </article>
          </li>

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>필력 ㄹㅈㄷ ㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">어머니의 사망보험금을 보이스피싱에 날렸습니다.</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">어머니의 사망보험금을 보이스피싱에 날렸습니다.</a></h1>

  <div class="post-meta clearfix">
    <span class="date">2020.09.15 10:51</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트 판</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">2 댓글</a></span>
    <span class="like-count">3</span>
  </div>

  <p>안녕하세요.</p>
  <p>&nbsp;</p>
  <p>제 친구가 보이스피싱을 당했습니다..</p>
  <p>&nbsp;</p>
  <p>일간에 걸쳐 검찰 및 금감원 합동 수사 관련 보이스피싱 사기와 대출 사기에 당해 전재산 약 1억 5천여만원을 잃었습니다.&nbsp;</p>
  <p>이 돈은 친구가 7년 넘게 모아온 청약과 적금 그리고 친구의 어머니의 사망 보험금 입니다.</p>
  <p>&nbsp;</p>
  <p>친구는 자신과 같은 피해자 발생을 방지하고 사건의 해결을 위해 청원을 올렸으며, 해당 사건에 대해 블로그에 상세히 작성하였습니다.</p>
  <p>부디 시간내시어 청원 동의와 널리 공유 부탁드립니다.</p>
  <p>&nbsp;</p>
  <p>청원글:&nbsp;<a href="https://www1.president.go.kr/petitions/592770">https://www1.president.go.kr/petitions/592770</a></p>
  <p>블로그글:&nbsp;<a href="https://blog.naver.com/iceintear/222088219532">https://blog.naver.com/iceintear/222088219532</a></p>
  <p>&nbsp;</p>
  <p>해당 사건의 전말은 아래와 같습니다.</p>
  <p>&nbsp;</p>
  <p>지난 점심때쯤&nbsp;전화가 걸려오고 받은 것은 친구 명의로 대포통장과 불법대출 건이 발견되었고 그로 인해 큰 금액의 피해와 피눈물을 흘리는 피해자가 발생했다는 내용이었습니다. 처음에 친구는 긴가민가했지만 그들은 예상보다 너무나 치밀했습니다.&nbsp;</p>
  <p>그들이 수집한 친구의 개인 정보를 토대로, 각종 미사어구와 법조항을 들먹이며, 친구를 점점 세뇌시켰습니다.</p>
  <p>&nbsp;</p>
  <p>사건번호와 실제로 근무 중이신 검사, 수사관 정보, 증명서 등을 통해 사칭하며 자신들이 정말 검찰청 및 금융감독원이라는 것을 각종 방법을 동원해 증명하였습니다.&nbsp;</p>
  <p>또한 실제로 메일을 통해 직인이 찍힌 사건에 대한 공문과 조사명령서 등을 친구에게 보내오며, 코로나 이슈로 인한 사전 약식 녹취 조사라는 명목 하에 친구에게 실제로 사건임을 믿게 하였습니다.&nbsp;</p>
  <p>&nbsp;</p>
  <p>또한 친구의 핸드폰으로 원격 접속 등을 통해 악성 프로그램을 설치하고 해킹하여 각종 정보를 탈취하였습니다.&nbsp;</p>
  <p>&nbsp;</p>
  <p>'깡통계좌' 등의 허구의 그럴듯한 이야기를 지어내어 현금을 인출하게 하고, 실시간으로 친구에게 지시를 내리며, 모든 과정에서 친구에게 전화를 끊지 못하게 하고 핸드폰 데이터를 사용하지 못하도록 하여 완전한 고립상태를 만들었습니다.&nbsp;</p>
  <p>그리고 은행에서 CCTV로 지켜보고 있다는 명목 하에 특이 행동을 할 경우 즉시 전화가 와 지켜보고 있으니 함부로 행동하지말라며 협박을 하였습니다.</p>
  <p>&nbsp;</p>
  <p>친구는 이들의 협박과 지시로 인해 실제로 10군데 이상의 은행을 돌아다니며 현금 인출을 해야만 했고, 중간에 친구가 이상함을 감지하고 은행 보안직원의 전화기를 빌려 경찰과 금융감독원에 신고하려는 순간, 바로 친구의 전화로 전화를 하여 협박을 하였습니다.&nbsp;</p>
  <p>&nbsp;</p>
  <p>이 모든 과정에서 실제로 친구가 실시간 스토킹을 당하고 있다는 사실을 뒤늦게 깨달았으며, 총 3일에 걸쳐 약 10명 이상의 보이스피싱사기조직은 친구를 심리적으로 철저하게 고립시키고, 실시간으로 감시 및 스토킹하였습니다.&nbsp;</p>
  <p>친구는 해킹 당한 핸드폰으로 112와 1301(검찰청), 1302(금감원)에 전화를 걸었지만 사실은 모두 보이스피싱범들에게 연결되고 있는 것이었으며, 친구는 그대로 속아넘어갔습니다.&nbsp;</p>
  <p>&nbsp;</p>
  <p>친구가 은행을 가거나 집에 가거나 출근을 할 때, 그들에게 보고하지 않고 다른 곳을 갈 경우 바로 연락이 와 각종 협박을 하였으며, 핸드폰에 빼간 정보들을 토대로 친구의 가족 정보, 친구, 회사 등을 언급하며 제대로 지시대로 하지않을 경우 그들에게 피해가 간다는 식의 여러가지 협박을 하였습니다.&nbsp;</p>
  <p>또한 가해자가 아니라고 증명하기 위해 본인 명의로 발생된 불법대출 피해금액 및 대출 건을 상쇄시켜주겠다는 명목 하에 친구에게 삼백여만원의 대출까지 받게 하였습니다.</p>
  <p>&nbsp;</p>
  <p>보이스피싱을 당하는 3일 동안 친구는 혼자 고립되어 금전적인 피해뿐 아니라 정신적인 피해까지 당하고 있었습니다..&nbsp;</p>
  <p>친구는 3일째가 되던 날 몰래 창문으로 빠져나와 다른 층의 세입자에게 신고해달라는 내용을 종이에 써 보여주며, 감사하게도 도와주신 이웃 덕분에 경찰서에 갈 수 있었습니다.&nbsp;</p>
  <p>하지만 경찰서에 신고하고 다음날이 되어서도 보이스피싱범들은 태연하게 친구에게 카카오톡을 보내며, 경찰에 신고한거 다 안다 라는 둥, 너가 신고한 것 때문에 조사 전면 무효니까 검찰청에 가보라고 정말 친절하게도 주소까지 써주는 등 각종 기만행위를 하였습니다.</p>
  <p>&nbsp;</p>
  <p>이 골든타임에 카톡이나 전화 추적 등의 타기관 협조가 바로 가능했다면 범인을 속히 잡을 수 있지 않았을까 하는 생각이 듭니다.</p>
  <p>&nbsp;</p>
  <p>부디 시간내시어 청원 동의와 널리 공유 부탁드립니다.</p>
  <p>&nbsp;</p>
  <p>긴글 읽어주셔서 감사합니다.</p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">3</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(2) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">실화탐사대</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>안녕하세요. mbc 실화탐사대 제작진입니다. 내용 관련해서 조금 더 듣고 싶은데 혹시 연락해주실 수 있을까요? 취재를 통해 작은 도움이라도 되고 싶어 댓글남깁니다. 02-789-1521 / 010-7421-9220으로 연락주세요! 감사합니다.</p>
              </div>

            </article>
          </li>

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">--</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>내명의로 대포통장이랑 불법대출이 발견됫다면 당사자도 피해자인건데 그럼 경찰에 신고를해야지 무슨생각으로 돈을왜보낸거죠? 3일동안 따라다니면서 감시한것도 당사자가 어디있는지어뜨케알고 스토킹감시하는걸까요 보이스피싱 외국에서 하는건데?? 진짜너무 말이안됨</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">엄마가 은행 사기대출 보이스피싱 당하셨어요..</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">엄마가 은행 사기대출 보이스피싱 당하셨어요..</a></h1>

  <div class="post-meta clearfix">
    <span class="date">25 Feb, 2013</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
    <span class="like-count">9</span>
  </div>

  <p>엄마가 30일, 31일 이틀에 걸쳐 보이스피싱 당하셨네요..<br /> 2672만원..</p>
  <p><br /> 핸드폰에 어플 두가지를 깔으라고 해서 국민은행 마이너스통장 승인내준다고 사기를 쳤다네요..<br /> 지난달에 삼촌이 빚 때문에 힘들어하다가 돌아가셨는데 저도 몸이 아파 일을 쉬고 있어 너무 힘든 상황인데 이러다 저희엄마도 돌아가실까봐 겁이 나요..<br /> 아직 50대초반이신데 오랜만에 들른 본가엔 영정사진까지 미리 찍어놓으셨네요..<br /> 어떻게 살아야 할지 정말 막막합니다..</p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">9</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(0) Comments</h3>

  <ol class="commentlist">

  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">인터넷에서만 보는 얘긴줄 알았는데 보이스피싱이 진짜 있네요;;</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#">인터넷에서만 보는 얘긴줄 알았는데 보이스피싱이 진짜 있네요;;</a></h1>

  <div class="post-meta clearfix">
    <span class="date">25 Feb, 2013</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">네이트판/스미싱</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">2 댓글</a></span>
    <span class="like-count">1</span>
  </div>

  <p class="article-image-wrapper"><img src="images/case_images/case_10_1.png" alt="img"></p>
  <p>엄마랑 같은 사무실에서 일하는데<br /> 오전에 이런 문자가 왔다면서 보여주시는거에요</p>
  <p><br /> 알고보니 보이스피싱이었어요</p>
  <p><a href="https://m.pann.nate.com/common/imageView?area=pann&amp;source_url=https%3A%2F%2Ffimg5.pann.com%2Fnew%2Fdownload.jsp%3FFileID%3D56439065&amp;cate_cd=20001"><strong>&lt;</strong><strong>사진</strong></a><strong> 4-1&gt;</strong></p>
  <p>&nbsp;</p>
  <p>보이스피싱이니 답장도 하지말고 차단시키라고 말씀드렸어요</p>
  <p>&nbsp;</p>
  <p>그리고 잠시 뒤 또 온 문자;;&nbsp;</p>
  <p>&nbsp;</p>
  <p class="article-image-wrapper"><img src="images/case_images/case_10_2.png" alt="img"></p>

  <p><strong>&nbsp;</strong></p>
  <p>&nbsp;</p>
  <p>이번엔 다른 번호로 보내네요&nbsp;</p>
  <p>&nbsp;</p>
  <p>추석 전엔 도로명 주소가 잘못되었다고 홈페이지주소포함된 문자를 보내더니</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>인터넷에서만 보던 문자내용이 엄마한테까지 온걸 보니 소름돋기도 하고</p>
  <p>&nbsp;</p>
  <p>자식 가진 부모님들 놀라서 답장하시고 저 놈들한테 속으실것 생각하니</p>
  <p>&nbsp;</p>
  <p>열받기도 하고 그러네요</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>열심히 하루하루 일해서 돈 버는 사람들 틈에</p>
  <p>&nbsp;</p>
  <p>바퀴벌레마냥 어떻게해서든 쉽게 속여서 먹고사려는 사람들 모두 처벌받았으면 좋겠어요</p>
  <p>&nbsp;</p>
  <p>다들 부모님들께 꼭 한번씩 더 주의하시라고 전해주세요</p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">1</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(2) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">종달새</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>후...아 보이스피싱 사기범개색기들 진짜 때려죽여야하는데 내가다열받네요,, 아는사람도 보이스피싱당한사람 몇명있어요. 그리고 제가족한테도 보이스피싱관련 전화도 몇통오기도했었고;; 진짜 내가다안타깝다;; </p>
              </div>

            </article>
          </li>

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">부엉이</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>아... 보이스피싱은진짜 잡혀서 그돈다뱉서내지않는이상 사형이답인데...</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,
];


var prevent_list_items = [
`
<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?prevent=0">
        보이스피싱 피해 예방 십계명
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">02 Nov, 2020</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">우리은행</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
      <span class="like-count">172</span>
    </div>

  </header>

  <p>1. 전화로 정부기관이라며 자금이체를 요구하면, 일단 보이스피싱 의심하세요<br>
2. 전화 문자로 대출 권유 받는 경우, 무대응 또는 금융회사 여부를 확인하세요

    <a class="readmore-link" href="article.html?prevent=0">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?prevent=1">
        보이스피싱예방 10계명
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">25 Sep, 2020</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">국민은행</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
      <span class="like-count">42</span>
    </div>

  </header>

  <p>01. 전화로 정부기관이라며 자금이체를 요구하면 일단 보이스피싱 의심 <br>
검찰·경찰·금감원 등 정부기관은 어떠한 경우에도...
    <a class="readmore-link" href="article.html?prevent=1">더보기</a>
  </p>

</article>`,

`<article class="format-standard type-post hentry clearfix">

  <header class="clearfix">

    <h3 class="post-title">
      <a href="article.html?prevent=2">
        보이스피싱 예방 5가지 필수 체크사항
      </a>
    </h3>

    <div class="post-meta clearfix">
      <span class="date">30 Aug, 2020</span>
      <span class="category"><a href="#" title="View all posts in Server &amp; Database">티스토리</a></span>
      <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
      <span class="like-count">11</span>
    </div>

  </header>

  <p>첫째, 경찰, 금융감독원이라며 송금을 요구하면 무조건 거절해야 합니다. <br>
둘째, 카카오톡, 문자를 통해 송금을 부탁하면 유선 확인 전까지 무조건 거절해야 합니다.

    <a class="readmore-link" href="article.html?prevent=2">더보기</a>
  </p>

</article>`,
]

var prevent_contents = [
`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">제목</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#"><p class="a"><strong>보이스피싱 피해 예방 십계명</strong></p></a></h1>

  <div class="post-meta clearfix">
    <span class="date">02 Nov, 2020</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">우리은행</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
    <span class="like-count">172</span>
  </div>

  <p><ol>
<li>전화로 정부기관이라며 자금이체를 요구하면, 일단 보이스피싱 의심하세요</li>
<li>전화 문자로 대출 권유 받는 경우, 무대응 또는 금융회사 여부를 확인하세요</li>
<li>대출 처리비용 등을 이유로 선입금 요구시, 보이스피싱을 의심하세요</li>
<li>고금리 대출 먼저 받아 상환하면 신용등급이 올라 저금리 대출이 가능하다는 말은 보이스피싱입니다.</li>
<li>납치 협박 전화를 받는 경우 자녀 안전부터 확인하세요</li>
<li>채용을 이유로 계좌 비밀번호 등 요구 시 보이스피싱입니다.</li>
<li>가족 등 사칭 금전 요구시 먼저 본인인지 확인하세요</li>
<li>출처 불명 파일 이메일 문자는 클릭하지 말고 삭제하세요</li>
<li>금감원 팝업창 뜨고 금융거래정보 입력 요구시 100% 보이스피싱입니다</li>
<li>보이스피싱 피해발생시 즉시 신고 후 피해금 환급 신청으로 추가 피해를 방지하세요</li>
</ol></p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it "></span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(0) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>내용</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">제목</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#"><ol>
<li>
<p class="a"><strong>보이스피싱예방 10계명</strong></p>
</li>
</ol></a></h1>

  <div class="post-meta clearfix">
    <span class="date">25 Sep, 2020</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">국민은행</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
    <span class="like-count">42</span>
  </div>

  <p><p align="left"><strong>01.</strong><strong>&nbsp;</strong><strong>전화로 정부기관이라며 자금이체를 요구하면 일단 보이스피싱 의심</strong></p>
<p>검찰&middot;경찰&middot;금감원 등 정부기관은 어떠한 경우에도 전화로 자금의 이체 또는 개인의 금융거래정보를 요구하지 않습니다. 정부기관을 사칭, 범죄에 연루되었다며 금융거래 정보를 요구하거나 안전조치 등을 명목으로 자금의 이체 등을 요구하는 경우는 100% 보이스피싱이므로 이러한 전화를 받는 경우 전화를 끊고 해당 기관의 대표전화*로 전화하여 사실여부를 반드시 확인 하시기 바랍니다.</p>
<p align="left">* 대검찰청(☎02-3480-2000), 경찰(☎112), 금감원(☎1332)</p>
<p class="a">&nbsp;</p>
<p><strong>02.</strong><strong>&nbsp;</strong><strong>전화&middot;문자로 대출 권유받는 경우 무대응 또는 금융회사 여부 확인</strong></p>
<p>전화 또는 문자를 통한 대출광고는 대출빙자형 보이스피싱일 가능성이 높으므로 이러한 연락을 받은 경우 반드시 금융회사의 실제 존재여부를 우선 확인한 후, 대출을 권유하는 자가 금융회사 직원인지 또는 정식 등록된 대출모집인인지 여부를 확인하시기 바랍니다.</p>
<p>* 제도권 금융회사 조회(<a title="새창 열림" href="http://www.fss.or.kr/" target="_blank">http://www.fss.or.kr</a>) 대출모집인 등록 조회(<a title="새창 열림" href="http://www.loanconsultant.or.kr/" target="_blank">http://www.loanconsultant.or.kr</a>)</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>03.</strong><strong>&nbsp;</strong><strong>대출 처리비용 등을 이유로 선입금 요구시 보이스피싱을 의심</strong></p>
<p>정상적인 금융회사는 전산비용, 보증료, 저금리 전환 예치금, 선이자 등 어떠한 명목으로도 대출과 관련하여 선입금하라고 요구하지 않으므로, 이러한 요구에 절대로 응해서는 안됩니다.</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>04.</strong><strong>&nbsp;</strong><strong>저금리 대출 위한 고금리 대출 권유는 100% 보이스피싱</strong></p>
<p align="left">정상적인 금융회사는 저금리 대출을 받기 위해서 고금리 대출을 먼저 받으라고 요구하지 않습니다. 저금리 대출을 받기 위해서는 거래실적을 쌓아야 한다며 고금리대출을 먼저 받으라고 하는 경우는 100% 보이스피싱 입니다. 또한 대출금 상환시에는 해당 금융회사의 계좌가 맞는지 여부를 반드시 확인하시기 바랍니다.</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>05.</strong><strong>&nbsp;</strong><strong>납치&middot;협박 전화를 받는 경우 자녀 안전부터 확인</strong></p>
<p align="left">자녀가 다쳤다거나 납치되었다는 전화를 받았을 때에는 침착하게 대처해야합니다. 사기범의 요구대로 급하게 금전을 입금하기 보다는 먼저 준비해 둔 지인들의 연락처를 이용하여 자녀가 안전한지 여부부터 확인하시기 바랍니다.</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>&nbsp;</strong></p>
<p align="left"><strong>&nbsp;</strong></p>
<p align="left"><strong>06.</strong><strong>&nbsp;</strong><strong>채용을 이유로 계좌 비밀번호 등 요구시 보이스피싱 의심</strong></p>
<p align="left">정상적인 기업의 정식 채용절차에서는 급여계좌 개설 또는 보안관련 출입증 등에 필요하다면서 체크카드 및 금융거래정보(비밀번호, 공인인증서,OTP 등)를 절대 요구하지 않습니다. 급여계좌 등록은 실제로 취업된 후에 이루어지는 것으로, 본인 명의 계좌번호만 알려주면 됩니다.</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>07.</strong><strong>&nbsp;</strong><strong>가족 등 사칭 금전 요구시 먼저 본인 확인</strong></p>
<p align="left">가족 및 지인 등이 메신저로 금전을 요구하는 경우 반드시 유선으로 한번 더 본인임을 확인하시기 바랍니다. 만약 상대방이 통화할 수 없는 상황 등을 들어 본인 확인을 회피하고자 하는 경우 직접 신분을 확인할 때까지는 금전요구에 응하지 말아야 합니다.</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>08.</strong><strong>&nbsp;</strong><strong>출처 불명 파일&middot;이메일&middot;문자는 클릭하지 말고 삭제</strong></p>
<p align="left">출처가 불분명한 파일을 다운받거나 의심스러운 인터넷 주소가 포함된 문자를 클릭하면 악성 코드에 감염되어 개인정보가 유출될 수 있습니다.악성코드 감염은 금융거래 시 파밍 등을 일으키는 주요 원인이므로 이러한 파일이나 문자는 즉시 삭제하시기 바랍니다.</p>
<p align="left">* 악성코드 치료 방법 : 한국인터넷진흥원(KISA)의 &ldquo;보호나라&rdquo;사이트&gt;&ldquo;알림마당&rdquo;메뉴&gt;</p>
<p align="left">공지사항 108번 게시글 참고</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>09.</strong><strong>&nbsp;</strong><strong>금감원 팝업창 뜨고 금융거래정보 입력 요구시 100% 보이스피싱</strong></p>
<p align="left">인터넷 포털사이트에 접속시, 보안관련 인증절차를 진행한다는 내용의 금감원 팝업창이 뜨며, 이를 클릭하면 보안승급을 위해서라며 계좌번호,비밀번호, 보안카드번호 등 금융거래정보를 입력하라고 요구하면 보이스피싱(파밍)이니 절대 응해서는 안됩니다.</p>
<p class="a">&nbsp;</p>
<p align="left"><strong>10.</strong><strong>&nbsp;</strong><strong>보이스피싱 피해발생시 즉시 신고 후 피해금 환급 신청</strong></p>
<p>사기범에게 속아 자금을 이체한 경우, 사기범이 예금을 인출하지 못하도록 신속히 경찰 또는 해당 금융회사에 전화하여 계좌에 대한 지급정지 조치를 하시기 바랍니다. 지급정지 조치 후 경찰서에 방문하여 피해 신고를 하고, 금융회사에 피해금 환급을 신청하시기 바랍니다. 해당 계좌에 피해금이 인출되지 않고 남아 있는 경우 피해금 환급제도에 따라 별도의 소송절차 없이 피해금을 되찾을 수 있습니다</p></p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">42</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(0) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>내용</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,

`<ul class="breadcrumb">
    <li><a href="#">보이스피니싱</a><span class="divider">/</span></li>
    <li><a href="#">게시판명</a> <span class="divider">/</span></li>
    <li class="active">제목</li>
</ul>

<article class=" type-post format-standard hentry clearfix">

  <h1 class="post-title"><a href="#"><p class="a"><strong>보이스피싱 예방 5가지 필수 체크사항</strong></p></a></h1>

  <div class="post-meta clearfix">
    <span class="date">30 Aug, 2020</span>
    <span class="category"><a href="#" title="View all posts in Server &amp; Database">티스토리</a></span>
    <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">0 댓글</a></span>
    <span class="like-count">11</span>
  </div>

  <p><p class="a"><strong>첫째,</strong> 경찰, 금융감독원이라며 송금을 요구하면 무조건 거절해야 합니다.</p>
<p class="a"><strong>둘째,</strong> 카카오톡, 문자를 통해 송금을 부탁하면 유선 확인 전까지 무조건 거절해야 합니다.</p>
<p class="a"><strong>셋째,</strong> 신용등급 상향, 저금리 전환, 대출 수수료 명목으로 송금을 요구하면 무조건 거절해야 합니다.</p>
<p class="a"><strong>넷째,</strong> 출처 불분명한 앱, URL주소는 무조건 클릭 금지해야 합니다.</p>
<p class="a"><strong>다섯째,</strong> 사용하지 않은 결제 문자는 업체가 아닌 해당 카드사에 확인해야 합니다.</p></p>

</article>

<div class="like-btn">
  <form id="like-it-form" action="#" method="post">
    <span class="like-it ">11</span>
    <input type="hidden" name="post_id" value="99">
    <input type="hidden" name="action" value="like_it">
  </form>
</div>

<section id="comments">

  <h3 id="comments-title">(0) Comments</h3>

  <ol class="commentlist">

          <li class="comment even thread-even depth-1" id="li-comment-2">
            <article id="comment-2">

              <a href="#">
                <img alt="" src="http://1.gravatar.com/avatar/50a7625001317a58444a20ece817aeca?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G" class="avatar avatar-60 photo" height="60" width="60">
              </a>

              <div class="comment-meta">
                  <h5 class="author">
                    <cite class="fn">
                      <a href="#" rel="external nofollow" class="url">이름</a>
                    </cite>
                  </h5>
                  <p class="date">
                    <a href="#">
                        <time datetime="2013-02-26T13:18:47+00:00">시간</time>
                    </a>
                  </p>
              </div>

              <div class="comment-body">
                <p>내용</p>
              </div>

            </article>
          </li>
  </ol>

  <div id="respond">
          <h3>답변을 남기세요</h3>

          <form action="#" method="post" id="commentform">
                  <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required">*</span></p> -->
                  <div>
                    <label for="comment">Comment</label>
                    <textarea class="span8" name="comment" id="comment" cols="58" rows="10"></textarea>
                  </div>
                  <div>
                    <input class="btn" name="submit" type="submit" id="submit"  value="Submit Comment">
                  </div>
          </form>
  </div>

</section>`,
]
