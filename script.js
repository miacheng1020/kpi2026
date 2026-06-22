'use strict';

const landingPages = [
  {
    title: '2026週年慶',
    date: '2026.03',
    type: '大型活動頁',
    img: 'assets/images/pages/2026週年慶（盲盒版）_1200x800.jpg',
    url: 'https://www.settour.com.tw/act/mkt/anniversary/index.html'
  },
  {
    title: '生日禮',
    date: '2026.01',
    type: '會員活動頁',
    img: 'assets/images/pages/生日禮_1200x800.jpg',
    url: 'https://www.settour.com.tw/act/mkt/member_event/birthday/'
  },
  {
    title: '成都號',
    date: '2026.03',
    type: '地方主題頁',
    img: 'assets/images/pages/成都號_1200x800.jpg',
    url: 'https://www.settour.com.tw/act/gfg/chinatrain/chengdu.html'
  },
  {
    title: '賞花行銷頁',
    date: '2026.02',
    type: '季節主題頁',
    img: 'assets/images/pages/日本百花_1200x800.jpg',
    url: 'https://www.settour.com.tw/act/mkt/flower/jp_mossphlox.html'
  },
  {
    title: '韓國節慶頁',
    date: '2026.04',
    type: '地方主題頁',
    img: 'assets/images/pages/韓國節慶_1200x800.jpg',
    url: 'https://www.settour.com.tw/act/gfg/korea/seoul/festival.html'
  }
];

/*
  Banner 資料說明：
  - img：畫廊卡片縮圖，也會作為此專案第一張放大圖。
  - variants：同一個專案的 resize / 延伸尺寸圖，點開 Lightbox 後會只在該專案內左右切換。
  你之後可以把真實圖片放到 assets/images/banners/，再把路徑改成：
  variants:[
    {title:'1200x450', img:'assets/images/banners/xxx_1200x450.jpg'},
    {title:'600x320', img:'assets/images/banners/xxx_600x320.jpg'},
    {title:'1080x1080', img:'assets/images/banners/xxx_1080x1080.jpg'}
  ]
*/
function resizeSet(baseImg, baseTitle) {
  return [
    { title: `${baseTitle}｜主視覺`, img: baseImg },
    { title: `${baseTitle}｜Resize 600×320`, img: baseImg },
    { title: `${baseTitle}｜Resize 1080×1080`, img: baseImg },
    { title: `${baseTitle}｜Resize 1040×1040`, img: baseImg }
  ];
}

const bannerRows = [
  {
    title: '活動宣傳', items: [
      {
        title: '2026週年慶',
        cat: '週年慶 Banner｜2026.03',
        img: 'assets/images/banners/20260311_2026週年慶_海外團旅_1200x628.jpg',
        variants: [
          { title: '2026週年慶_海外團旅｜1200×628', img: 'assets/images/banners/20260311_2026週年慶_海外團旅_1200x628.jpg' },
          { title: '2026週年慶_盲盒版｜1200×628', img: 'assets/images/banners/20260306_2026週年慶_盲盒版_1200x628.jpg' },
          { title: '2026週年慶_北海道商品｜1920x600', img: 'assets/images/banners/20260306_2026周年慶_北海道_1920x600.jpg' },
          { title: '2026週年慶_北海道商品｜1040x1040', img: 'assets/images/banners/20260306_2026周年慶_北海道_1040x1040.jpg' },
          { title: '2026週年慶_北海道商品｜600x400', img: 'assets/images/banners/20260306_2026周年慶_北海道_600x400.jpg' },
          { title: '2026週年慶_窗貼｜895x290cm', img: 'assets/images/banners/2026周年慶窗貼-2.jpg' },
        ]
      },

      {
        title: 'LINE推播x送MyCash',
        cat: '會員推廣 Banner｜2026.04',
        img: 'assets/images/banners/20260422_LINE推播x送MyCash_960x500.jpg',
        variants: [
          { title: 'LINE推播x送MyCash｜960x500', img: 'assets/images/banners/20260422_LINE推播x送MyCash_960x500.jpg' },
          { title: 'LINE推播x送MyCash｜1040x1040', img: 'assets/images/banners/20260422_LINE推播x送MyCash_1040x1040.jpg' },
        ]
      },

      {
        title: 'LINEx轉屬你的哞寶楓光',
        cat: '會員推廣 Banner｜2026.05',
        img: 'assets/images/banners/20260505_LINEx轉屬你的哞寶楓光_960x500.jpg',
        variants: [
          { title: 'LINEx轉屬你的哞寶楓光｜960x500', img: 'assets/images/banners/20260505_LINEx轉屬你的哞寶楓光_960x500.jpg' },
          { title: 'LINEx轉屬你的哞寶楓光｜1080x1920', img: 'assets/images/banners/20260603_LINEx轉屬你的哞寶楓光_1080x1920_demo.jpg' },
          { title: 'LINEx轉屬你的哞寶楓光｜960x500', img: 'assets/images/banners/20260511_LINEx轉屬你的哞寶楓光_960x500_01.jpg' },
          { title: 'LINEx轉屬你的哞寶楓光｜960x500', img: 'assets/images/banners/20260511_LINEx轉屬你的哞寶楓光_960x500_02.jpg' },
          { title: 'LINEx轉屬你的哞寶楓光｜960x500', img: 'assets/images/banners/20260511_LINEx轉屬你的哞寶楓光_960x500_03.jpg' },
          { title: 'LINEx轉屬你的哞寶楓光｜960x500', img: 'assets/images/banners/20260511_LINEx轉屬你的哞寶楓光_960x500_04.jpg' },
          { title: 'LINEx轉屬你的哞寶楓光｜960x500', img: 'assets/images/banners/20260511_LINEx轉屬你的哞寶楓光_960x500_05.jpg' },
          { title: 'LINEx轉屬你的哞寶楓光｜2500x1686', img: 'assets/images/banners/20260605_LINE選單_轉屬你的哞寶楓光_2500x1686.jpg' },

        ]
      },

      {
        title: 'dcard徵文抽獎 ',
        cat: '品牌推廣 Banner｜2026.06',
        img: 'assets/images/banners/20260610_dcard抽獎_1200x800.jpg',
        variants: [
          { title: 'dcard抽獎｜1040x1040', img: 'assets/images/banners/20260610_dcard抽獎_1040x1040.jpg' },
          { title: 'dcard抽獎贈品圖｜1040x1040', img: 'assets/images/banners/20260610_dcard徵文贈品圖_1040x1040.jpg' },
          { title: 'dcard抽獎贈品圖｜1040x1040', img: 'assets/images/banners/20260610_dcard徵文贈品圖_頸枕_1040x1040.jpg' },
          { title: 'dcard徵文｜1040x1040', img: 'assets/images/banners/20260608_dcard徵文_1040x1040.jpg' },
          { title: 'dcard投稿流程｜1040x1040', img: 'assets/images/banners/20260610_dcard投稿流程_1040x1040.jpg' },

        ]
      },

    ]
  },





  {
    title: '地區行銷', items: [

      {
        title: '日本x預約夏個東北',
        cat: '日本 Banner｜2026.03',
        img: 'assets/images/banners/20260421_日本x預約夏個東北_1200x628.jpg',
        variants: [
          { title: '日本x預約夏個東北｜1200×628', img: 'assets/images/banners/20260421_日本x預約夏個東北_1200x628.jpg' },
          { title: '日本x預約夏個東北｜1920x600', img: 'assets/images/banners/20260330_日本x預約夏個東北_版頭_1920x600.jpg' },
          { title: '日本x預約夏個東北｜1040x1040', img: 'assets/images/banners/20260330_日本x預約夏個東北_1040x1040.jpg' },
          { title: '日本x預約夏個東北｜1080x1920', img: 'assets/images/banners/20260330_日本x預約夏個東北_1080x1920.jpg' },
        ]
      },

      {
        title: 'WBC棒球',
        cat: '日本 Banner｜2026.02',
        img: 'assets/images/banners/20260306_WBC加碼應援_1200x628.jpg',
        variants: [
          { title: 'WBC棒球｜1200×628', img: 'assets/images/banners/20260306_WBC加碼應援_1200x628.jpg' },
          { title: 'WBC棒球｜1040x1040', img: 'assets/images/banners/20260306_WBC加碼應援_1040x1040.jpg' },
          { title: 'WBC棒球｜1920x600', img: 'assets/images/banners/20260226_WBC棒球_1920x600.jpg' },
          { title: 'WBC棒球｜600x400', img: 'assets/images/banners/20260226_WBC棒球_600x400(純文字).jpg' },
        ]
      },

      {
        title: '美加東賞楓',
        cat: '美加 Banner｜2026.04',
        img: 'assets/images/banners/20260430_美加東賞楓_1200x628.jpg',
        variants: [
          { title: '美加東賞楓｜1200×628', img: 'assets/images/banners/20260430_美加東賞楓_1200x628.jpg' },
          { title: '美加東賞楓｜1040x1040', img: 'assets/images/banners/20260430_美加東賞楓_1040x1040.jpg' },
          { title: '美加東賞楓｜1920x600', img: 'assets/images/banners/20260416_美加東賞楓_1920x600.jpg' },
          { title: '美加東賞楓｜1080x1920', img: 'assets/images/banners/20260430_美加東賞楓_1080x1920.jpg' },
          { title: '美加東賞楓｜600x400', img: 'assets/images/banners/20260430_美加東賞楓_600x400(純文字).jpg' },
        ]
      },



      {
        title: '首頁大看板',
        cat: '綜合地區 Banner｜2026.01-06',
        img: 'assets/images/banners/20260416_黃金海陸空_1200x628.jpg',
        variants: [
          { title: '黃金海陸空｜1920x600', img: 'assets/images/banners/20260416_黃金海陸空_1920x600.jpg' },
          { title: '澳洲｜1920x600', img: 'assets/images/banners/20260604_澳洲_1920x600.jpg' },
          { title: '雪梨｜1920x600', img: 'assets/images/banners/20260604_雪梨_1920x600.jpg' },
          { title: '迷你團x母親節｜1920x600', img: 'assets/images/banners/20260413_迷你團x母親節_1920x600.jpg' },
          { title: '黃金海岸｜1920x600', img: 'assets/images/banners/20260416_黃金海岸_1920x600.jpg' },
          { title: '紐西蘭｜1920x600', img: 'assets/images/banners/20260318_紐西蘭_1920x600.jpg' },
          { title: '幸福獨旅｜1920x600', img: 'assets/images/banners/20260312_幸福獨旅_1920x600.jpg' },
          { title: '紫藤花季｜1920x600', img: 'assets/images/banners/20260327_紫藤花季_1920x600.jpg' },
          { title: '日本x暑假清倉｜1920x600', img: 'assets/images/banners/20260608_日本x暑假清倉_1920x600.jpg' },
          { title: '優惠延長｜1920x600', img: 'assets/images/banners/20260327_優惠延長_1920x600.jpg' },

        ]
      },

      {
        title: '韓國好康',
        cat: '韓國 Banner｜2026.04',
        img: 'assets/images/banners/20260421_韓國好康_1200x628.jpg',
        variants: [
          { title: '韓國好康｜1200×628', img: 'assets/images/banners/20260421_韓國好康_1200x628.jpg' },
          { title: '韓國好康｜960x1200', img: 'assets/images/banners/20260421_韓國好康_960x1200.jpg' },
          { title: '韓國好康｜600x400', img: 'assets/images/banners/20260421_韓國好康_600x400(純文字).jpg' },
        ]
      },

      {
        title: '沖繩沁夏拾光',
        cat: '日本 Banner｜2026.05',
        img: 'assets/images/banners/20260504_沖繩沁夏拾光_1200x628.jpg',
        variants: [
          { title: '沖繩沁夏拾光｜1200×628', img: 'assets/images/banners/20260504_沖繩沁夏拾光_1200x628.jpg' },
          { title: '沖繩沁夏拾光｜1040x1040', img: 'assets/images/banners/20260504_沖繩沁夏拾光_1200x1200.jpg' },
        ]
      },

    ]
  },







  {
    title: '商品推廣', items: [

      {
        title: '石垣島渡輪',
        cat: '郵輪 Banner｜2026.05',
        img: 'assets/images/banners/20260518_石垣島渡輪_1200x628.jpg',
        variants: [
          { title: '石垣島渡輪｜1200×628', img: 'assets/images/banners/20260518_石垣島渡輪_1200x628.jpg' },
          { title: '石垣島渡輪｜1920x600', img: 'assets/images/banners/20260518_石垣島渡輪_1920x600.jpg' },
          { title: '石垣島渡輪｜1200x1200', img: 'assets/images/banners/20260518_石垣島渡輪_1200x1200.jpg' },
          { title: '石垣島渡輪｜600x400', img: 'assets/images/banners/20260518_石垣島渡輪_600x400.jpg' },
        ]
      },


      {
        title: 'MSC郵輪冬季',
        cat: '郵輪 Banner｜2026.05',
        img: 'assets/images/banners/20260519_MSC郵輪冬季_1200x628.jpg',
        variants: [
          { title: 'MSC郵輪冬季｜1200×628', img: 'assets/images/banners/20260519_MSC郵輪冬季_1200x628.jpg' },
          { title: 'MSC郵輪冬季｜1920x600', img: 'assets/images/banners/20260519_MSC郵輪冬季_1920x600.jpg' },
          { title: 'MSC郵輪冬季｜960x1200', img: 'assets/images/banners/20260519_MSC郵輪冬季_960x1200.jpg' },
        ]
      },



      {
        title: 'JR西日本觀光列車',
        cat: '火車 Banner｜2026.03',
        img: 'assets/images/banners/20260324_JR西日本觀光列車_1200x628.jpg',
        variants: [
          { title: 'JR西日本觀光列車｜1200×628', img: 'assets/images/banners/20260324_JR西日本觀光列車_1200x628.jpg' },
          { title: 'JR西日本觀光列車｜1080x1920', img: 'assets/images/banners/20260324_JR西日本觀光列車_1080x1920.jpg' },
          { title: 'JR西日本觀光列車｜900x600', img: 'assets/images/banners/20260324_JR西日本觀光列車_900x600.jpg' },
        ]
      },

      {
        title: '國泰世華',
        cat: '信用卡 Banner｜2026.02',
        img: 'assets/images/banners/國泰世華_1200x628.jpg',
        variants: [
          { title: '國泰世華｜1200×628', img: 'assets/images/banners/國泰世華_1200x628.jpg' },
          { title: '國泰世華｜1920x600', img: 'assets/images/banners/國泰世華_1040x1040.jpg' },
          { title: '國泰世華｜1080x1920', img: 'assets/images/banners/國泰世華_1080x1920_new.jpg' },
        ]
      },


    ]
  },





  {
    title: '異業合作 / 其他', items: [

      {
        title: '料理狂人',
        cat: '韓國 Banner｜2026.05',
        img: 'assets/images/banners/20260512_料理狂人_1200x628.jpg',
        variants: [
          { title: '料理狂人｜1200×628', img: 'assets/images/banners/20260512_料理狂人_1200x628.jpg' },
          { title: '料理狂人｜1080x1080', img: 'assets/images/banners/20260512_料理狂人_1080x1080.jpg' },
        ]
      },

      {
        title: '韓國節慶',
        cat: '韓國 Banner｜2026.05',
        img: 'assets/images/banners/20260504_韓國節慶_1200x628.jpg',
        variants: [
          { title: '韓國節慶｜1200×628', img: 'assets/images/banners/20260504_韓國節慶_1200x628.jpg' },
          { title: '韓國節慶｜1080x1080', img: 'assets/images/banners/20260504_韓國節慶_1080x1080.jpg' },
          { title: '韓國節慶｜1080x1920', img: 'assets/images/banners/20260504_韓國節慶_1080x1920.jpg' },
        ]
      },

      {
        title: 'YT封面x越南',
        cat: '影片封面 Banner｜2026.04',
        img: 'assets/images/banners/20260409_YT封面x越南_2500x1440.jpg',
        variants: [
          { title: 'YT封面x越南｜2500x1440', img: 'assets/images/banners/20260409_YT封面x越南_2500x1440.jpg' },
          { title: 'YT封面x越南｜1080x1920', img: 'assets/images/banners/20260409_YT封面x越南_1080x1920.jpg' },
        ]
      },

            {
        title: 'YT封面x韓國',
        cat: '影片封面 Banner｜2026.04',
        img: 'assets/images/banners/20260409_YT封面x韓國慶洲_2500x1440.jpg',
        variants: [
          { title: 'YT封面x韓國慶洲｜2500x1440', img: 'assets/images/banners/20260409_YT封面x韓國慶洲_2500x1440.jpg' },
          { title: 'YT封面x韓國釜山網美景點｜2500x1440', img: 'assets/images/banners/20260409_YT封面x韓國釜山網美景點_2500x1440.jpg' },
          { title: 'YT封面x韓國釜山美食清單｜2500x1440', img: 'assets/images/banners/20260409_YT封面x韓國釜山美食清單_2500x1440.jpg' },
          { title: 'YT封面x韓國巨濟島｜2500x1440', img: 'assets/images/banners/20260409_YT封面x韓國巨濟島_2500x1440.jpg' },
        ]
      },

    ]
  }
];

bannerRows.forEach(row => row.items.forEach(item => {
  if (!item.variants) item.variants = resizeSet(item.img, item.title);
}));

let lightboxGallery = [];
let lightboxIndex = 0;
let carouselState = [];

document.addEventListener('DOMContentLoaded', init);

function init() {
  renderLandingPages();
  renderBannerRows();
  bindLightbox();
  bindReveal();
  bindCursor();
}

function renderLandingPages() {
  const pageGrid = document.querySelector('#pageGrid');
  if (!pageGrid) return;
  landingPages.forEach(p => {
    const a = document.createElement('a');
    a.className = 'project-card';
    a.href = p.url;
    a.target = p.url === '#' ? '_self' : '_blank';
    a.innerHTML = `<img src="${p.img}" alt="${p.title}"><div class="project-info"><span class="mini">${p.type}</span><h3>${p.title}</h3><p>${p.date}｜查看專案</p></div>`;
    pageGrid.appendChild(a);
  });
}

function renderBannerRows() {
  const wrap = document.querySelector('#bannerGalleryRows');
  if (!wrap) return;
  wrap.innerHTML = '';
  carouselState = bannerRows.map(() => 0);

  bannerRows.forEach((row, rowIndex) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'banner-row';
    rowEl.innerHTML = `
      <div class="banner-row-head">
        <h3 class="banner-row-title">${row.title}</h3>
        <div class="banner-row-controls">
          <button type="button" data-carousel-prev="${rowIndex}" aria-label="${row.title} 上一組">←</button>
          <button type="button" data-carousel-next="${rowIndex}" aria-label="${row.title} 下一組">→</button>
        </div>
      </div>
      <div class="carousel-viewport">
        <div class="carousel-track" data-carousel-track="${rowIndex}"></div>
      </div>`;

    const track = rowEl.querySelector('.carousel-track');
    row.items.forEach((item, itemIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'banner-card';
      btn.dataset.bannerRow = String(rowIndex);
      btn.dataset.bannerItem = String(itemIndex);
      btn.innerHTML = `<img src="${item.img}" alt="${item.title}"><div><h3>${item.title}</h3><p>${item.cat}</p></div>`;
      track.appendChild(btn);
    });
    wrap.appendChild(rowEl);
  });

  wrap.addEventListener('click', e => {
    const prev = e.target.closest('[data-carousel-prev]');
    const next = e.target.closest('[data-carousel-next]');
    const card = e.target.closest('.banner-card');
    if (prev) { moveCarousel(Number(prev.dataset.carouselPrev), -1); return; }
    if (next) { moveCarousel(Number(next.dataset.carouselNext), 1); return; }
    if (card) { openBannerLightbox(Number(card.dataset.bannerRow), Number(card.dataset.bannerItem)); }
  });

  window.addEventListener('resize', () => bannerRows.forEach((_, i) => updateCarousel(i)));
}

function getStep(rowIndex) {
  const track = document.querySelector(`[data-carousel-track="${rowIndex}"]`);
  const card = track?.querySelector('.banner-card');
  if (!track || !card) return 460;
  const gap = parseFloat(getComputedStyle(track).gap) || 20;
  return card.getBoundingClientRect().width + gap;
}

function getMaxIndex(rowIndex) {
  const track = document.querySelector(`[data-carousel-track="${rowIndex}"]`);
  const viewport = track?.parentElement;
  if (!track || !viewport) return 0;
  const step = getStep(rowIndex);
  const overflow = Math.max(0, track.scrollWidth - viewport.clientWidth);
  return Math.ceil(overflow / step);
}

function moveCarousel(rowIndex, dir) {
  const max = getMaxIndex(rowIndex);
  let next = (carouselState[rowIndex] || 0) + dir;
  if (next < 0) next = max;
  if (next > max) next = 0;
  carouselState[rowIndex] = next;
  updateCarousel(rowIndex);
}

function updateCarousel(rowIndex) {
  const track = document.querySelector(`[data-carousel-track="${rowIndex}"]`);
  if (!track) return;
  const max = getMaxIndex(rowIndex);
  carouselState[rowIndex] = Math.min(carouselState[rowIndex] || 0, max);
  const step = getStep(rowIndex);
  track.style.transform = `translateX(${-carouselState[rowIndex] * step}px)`;
}

function bindLightbox() {
  document.addEventListener('click', e => {
    const single = e.target.closest('[data-lightbox-single]');
    if (single) {
      openLightbox([{ img: single.dataset.lightboxSingle, title: single.dataset.title || '' }], 0);
      return;
    }

    const oldSingle = e.target.closest('.open-lightbox');
    if (oldSingle && oldSingle.dataset.gallery !== 'banner-project') {
      openLightbox([{ img: oldSingle.dataset.img, title: oldSingle.dataset.title || '' }], 0);
    }
  });

  document.querySelector('#lightboxPrev')?.addEventListener('click', e => { e.stopPropagation(); moveLightbox(-1); });
  document.querySelector('#lightboxNext')?.addEventListener('click', e => { e.stopPropagation(); moveLightbox(1); });
  document.querySelector('#lightboxClose')?.addEventListener('click', closeLightbox);
  document.querySelector('#lightbox')?.addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });
  document.addEventListener('keydown', e => {
    const lb = document.querySelector('#lightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') moveLightbox(-1);
    if (e.key === 'ArrowRight') moveLightbox(1);
  });
}

function openBannerLightbox(rowIndex, itemIndex) {
  const project = bannerRows[rowIndex]?.items[itemIndex];
  if (!project) return;
  const items = (project.variants || [{ img: project.img, title: project.title }]).map((v, i) => ({
    img: v.img,
    title: v.title || `${project.title}｜版本 ${i + 1}`,
    cat: i === 0 ? project.cat : '同專案 視覺延伸 / Resize'
  }));
  openLightbox(items, 0);
}

function openLightbox(items, index = 0) {
  lightboxGallery = items || [];
  lightboxIndex = index;
  renderLightbox();
  const lb = document.querySelector('#lightbox');
  if (!lb) return;
  lb.classList.add('active');
  lb.setAttribute('aria-hidden', 'false');
}

function renderLightbox() {
  const item = lightboxGallery[lightboxIndex];
  if (!item) return;
  const img = document.querySelector('#lightboxImg');
  const title = document.querySelector('#lightboxTitle');
  if (img) {
    img.src = item.img;
    img.alt = item.title || '';
  }
  if (title) {
    title.textContent = item.cat ? `${item.title}｜${item.cat}` : (item.title || '');
  }
  const one = lightboxGallery.length <= 1;
  document.querySelector('#lightboxPrev')?.classList.toggle('is-hidden', one);
  document.querySelector('#lightboxNext')?.classList.toggle('is-hidden', one);
}

function moveLightbox(dir) {
  if (lightboxGallery.length <= 1) return;
  lightboxIndex = (lightboxIndex + dir + lightboxGallery.length) % lightboxGallery.length;
  renderLightbox();
}

function closeLightbox() {
  const lb = document.querySelector('#lightbox');
  if (!lb) return;
  lb.classList.remove('active');
  lb.setAttribute('aria-hidden', 'true');
}

function bindReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('show'));
    return;
  }
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) en.target.classList.add('show');
  }), { threshold: .12 });
  targets.forEach(el => io.observe(el));
}

function bindCursor() {
  const dot = document.querySelector('.cursor-dot');
  if (!dot) return;
  window.addEventListener('mousemove', e => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a,button,.project-card,.banner-card')) {
      dot.style.width = '42px';
      dot.style.height = '42px';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a,button,.project-card,.banner-card')) {
      dot.style.width = '18px';
      dot.style.height = '18px';
    }
  });
}
