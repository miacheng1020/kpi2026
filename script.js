'use strict';

const landingPages = [
  {title:'日本自由配行銷頁',date:'2026.01',type:'上線行銷頁',img:'assets/images/pages/日本自由配行銷頁.svg',url:'#'},
  {title:'賞花行銷頁 Part3 / Part4',date:'2026.01–04',type:'季節主題頁',img:'assets/images/pages/賞花行銷頁.svg',url:'#'},
  {title:'2026 週年慶',date:'2026.01–03',type:'大型活動頁',img:'assets/images/pages/2026週年慶.svg',url:'#'},
  {title:'VIP 出遊頁面',date:'2026.03',type:'會員活動頁',img:'assets/images/pages/VIP出遊頁面.svg',url:'#'},
  {title:'韓國節慶頁',date:'2026.04',type:'目的地主題頁',img:'assets/images/pages/韓國節慶頁.svg',url:'#'},
  {title:'生日禮頁面',date:'2026.03–04',type:'會員權益頁',img:'assets/images/pages/生日禮頁面.svg',url:'#'}
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
function resizeSet(baseImg, baseTitle){
  return [
    {title:`${baseTitle}｜主視覺`, img:baseImg},
    {title:`${baseTitle}｜Resize 600×320`, img:baseImg},
    {title:`${baseTitle}｜Resize 1080×1080`, img:baseImg},
    {title:`${baseTitle}｜Resize 1040×1040`, img:baseImg}
  ];
}

const bannerRows = [
  { title:'銀行合作 / 品牌活動', items:[
    {title:'玉山銀行自由行折扣碼',cat:'銀行合作 Banner｜2026.01',img:'assets/images/banners/銀行合作.svg'},
    {title:'國泰世華日本賞',cat:'銀行合作 Banner｜2026.01',img:'assets/images/banners/銀行合作.svg'},
    {title:'WBC 棒球活動',cat:'品牌活動 Banner｜2026.02',img:'assets/images/banners/WBC活動.svg'},
    {title:'WBC 應援優惠',cat:'品牌活動 Banner｜2026.03',img:'assets/images/banners/WBC活動.svg'},
    {title:'OneAD 週年慶',cat:'廣告延伸 Banner｜2026.03',img:'assets/images/banners/WBC活動.svg'},
    {title:'LINE 推播 MyCash',cat:'推播素材｜2026.04',img:'assets/images/banners/銀行合作.svg'}
  ]},
  { title:'日本 / 韓國季節旅遊', items:[
    {title:'九州豪斯登堡春日',cat:'日本主題 Banner｜2026.01',img:'assets/images/banners/日本賞櫻.svg'},
    {title:'韓國賞櫻',cat:'韓國季節 Banner｜2026.01',img:'assets/images/banners/韓國節慶.svg'},
    {title:'日本賞櫻 Resize',cat:'尺寸延伸｜2026.02',img:'assets/images/banners/日本賞櫻.svg'},
    {title:'迷你團紫藤花',cat:'日本季節 Banner｜2026.03',img:'assets/images/banners/日本賞櫻.svg'},
    {title:'JR 西日本觀光列車',cat:'日本交通主題｜2026.03',img:'assets/images/banners/日本賞櫻.svg'},
    {title:'韓國節慶',cat:'目的地活動 Banner｜2026.05',img:'assets/images/banners/韓國節慶.svg'}
  ]},
  { title:'海島 / 暑假 / 郵輪商品', items:[
    {title:'沖繩沁夏拾光',cat:'夏季旅遊 Banner｜2026.05',img:'assets/images/banners/沖繩夏拾光.svg'},
    {title:'LINE x 沖繩沁夏拾光',cat:'推播延伸素材｜2026.05',img:'assets/images/banners/沖繩夏拾光.svg'},
    {title:'石垣島渡輪',cat:'海島商品 Banner｜2026.05',img:'assets/images/banners/沖繩夏拾光.svg'},
    {title:'MSC 郵輪冬季',cat:'郵輪商品 Banner｜2026.05',img:'assets/images/banners/郵輪商品.svg'},
    {title:'旅展表格 / 商品延伸',cat:'活動資訊素材｜2026.05',img:'assets/images/banners/郵輪商品.svg'},
    {title:'高鐵假期送住宿',cat:'國旅商品 Banner｜2026.05',img:'assets/images/banners/沖繩夏拾光.svg'}
  ]},
  { title:'首頁 / 會員 / 活動延伸', items:[
    {title:'首頁 Banner',cat:'官網首頁素材｜2026.01',img:'assets/images/banners/銀行合作.svg'},
    {title:'生日禮',cat:'會員權益 Banner｜2026.01',img:'assets/images/pages/生日禮頁面.svg'},
    {title:'春節公告',cat:'節慶公告素材｜2026.02',img:'assets/images/banners/日本賞櫻.svg'},
    {title:'2026 週年慶宣圖',cat:'大型活動延伸｜2026.03',img:'assets/images/pages/2026週年慶.svg'},
    {title:'同業會員日',cat:'會員活動素材｜2026.04',img:'assets/images/pages/VIP出遊頁面.svg'},
    {title:'生日禮頁面甜人精',cat:'會員活動延伸｜2026.04',img:'assets/images/pages/生日禮頁面.svg'}
  ]}
];

bannerRows.forEach(row => row.items.forEach(item => {
  if(!item.variants) item.variants = resizeSet(item.img, item.title);
}));

let lightboxGallery = [];
let lightboxIndex = 0;
let carouselState = [];

document.addEventListener('DOMContentLoaded', init);

function init(){
  renderLandingPages();
  renderBannerRows();
  bindLightbox();
  bindReveal();
  bindCursor();
}

function renderLandingPages(){
  const pageGrid = document.querySelector('#pageGrid');
  if(!pageGrid) return;
  landingPages.forEach(p => {
    const a = document.createElement('a');
    a.className = 'project-card';
    a.href = p.url;
    a.target = p.url === '#' ? '_self' : '_blank';
    a.innerHTML = `<img src="${p.img}" alt="${p.title}"><div class="project-info"><span class="mini">${p.type}</span><h3>${p.title}</h3><p>${p.date}｜查看專案</p></div>`;
    pageGrid.appendChild(a);
  });
}

function renderBannerRows(){
  const wrap = document.querySelector('#bannerGalleryRows');
  if(!wrap) return;
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
    if(prev){ moveCarousel(Number(prev.dataset.carouselPrev), -1); return; }
    if(next){ moveCarousel(Number(next.dataset.carouselNext), 1); return; }
    if(card){ openBannerLightbox(Number(card.dataset.bannerRow), Number(card.dataset.bannerItem)); }
  });

  window.addEventListener('resize', () => bannerRows.forEach((_, i) => updateCarousel(i)));
}

function getStep(rowIndex){
  const track = document.querySelector(`[data-carousel-track="${rowIndex}"]`);
  const card = track?.querySelector('.banner-card');
  if(!track || !card) return 460;
  const gap = parseFloat(getComputedStyle(track).gap) || 20;
  return card.getBoundingClientRect().width + gap;
}

function getMaxIndex(rowIndex){
  const track = document.querySelector(`[data-carousel-track="${rowIndex}"]`);
  const viewport = track?.parentElement;
  if(!track || !viewport) return 0;
  const step = getStep(rowIndex);
  const overflow = Math.max(0, track.scrollWidth - viewport.clientWidth);
  return Math.ceil(overflow / step);
}

function moveCarousel(rowIndex, dir){
  const max = getMaxIndex(rowIndex);
  let next = (carouselState[rowIndex] || 0) + dir;
  if(next < 0) next = max;
  if(next > max) next = 0;
  carouselState[rowIndex] = next;
  updateCarousel(rowIndex);
}

function updateCarousel(rowIndex){
  const track = document.querySelector(`[data-carousel-track="${rowIndex}"]`);
  if(!track) return;
  const max = getMaxIndex(rowIndex);
  carouselState[rowIndex] = Math.min(carouselState[rowIndex] || 0, max);
  const step = getStep(rowIndex);
  track.style.transform = `translateX(${-carouselState[rowIndex] * step}px)`;
}

function bindLightbox(){
  document.addEventListener('click', e => {
    const single = e.target.closest('[data-lightbox-single]');
    if(single){
      openLightbox([{img: single.dataset.lightboxSingle, title: single.dataset.title || ''}], 0);
      return;
    }

    const oldSingle = e.target.closest('.open-lightbox');
    if(oldSingle && oldSingle.dataset.gallery !== 'banner-project'){
      openLightbox([{img: oldSingle.dataset.img, title: oldSingle.dataset.title || ''}], 0);
    }
  });

  document.querySelector('#lightboxPrev')?.addEventListener('click', e => { e.stopPropagation(); moveLightbox(-1); });
  document.querySelector('#lightboxNext')?.addEventListener('click', e => { e.stopPropagation(); moveLightbox(1); });
  document.querySelector('#lightboxClose')?.addEventListener('click', closeLightbox);
  document.querySelector('#lightbox')?.addEventListener('click', e => { if(e.target.id === 'lightbox') closeLightbox(); });
  document.addEventListener('keydown', e => {
    const lb = document.querySelector('#lightbox');
    if(!lb || !lb.classList.contains('active')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') moveLightbox(-1);
    if(e.key === 'ArrowRight') moveLightbox(1);
  });
}

function openBannerLightbox(rowIndex, itemIndex){
  const project = bannerRows[rowIndex]?.items[itemIndex];
  if(!project) return;
  const items = (project.variants || [{img: project.img, title: project.title}]).map((v, i) => ({
    img: v.img,
    title: v.title || `${project.title}｜版本 ${i + 1}`,
    cat: i === 0 ? project.cat : '同專案 Resize / 延伸尺寸'
  }));
  openLightbox(items, 0);
}

function openLightbox(items, index = 0){
  lightboxGallery = items || [];
  lightboxIndex = index;
  renderLightbox();
  const lb = document.querySelector('#lightbox');
  if(!lb) return;
  lb.classList.add('active');
  lb.setAttribute('aria-hidden', 'false');
}

function renderLightbox(){
  const item = lightboxGallery[lightboxIndex];
  if(!item) return;
  const img = document.querySelector('#lightboxImg');
  const title = document.querySelector('#lightboxTitle');
  if(img){
    img.src = item.img;
    img.alt = item.title || '';
  }
  if(title){
    title.textContent = item.cat ? `${item.title}｜${item.cat}` : (item.title || '');
  }
  const one = lightboxGallery.length <= 1;
  document.querySelector('#lightboxPrev')?.classList.toggle('is-hidden', one);
  document.querySelector('#lightboxNext')?.classList.toggle('is-hidden', one);
}

function moveLightbox(dir){
  if(lightboxGallery.length <= 1) return;
  lightboxIndex = (lightboxIndex + dir + lightboxGallery.length) % lightboxGallery.length;
  renderLightbox();
}

function closeLightbox(){
  const lb = document.querySelector('#lightbox');
  if(!lb) return;
  lb.classList.remove('active');
  lb.setAttribute('aria-hidden', 'true');
}

function bindReveal(){
  const targets = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    targets.forEach(el => el.classList.add('show'));
    return;
  }
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if(en.isIntersecting) en.target.classList.add('show');
  }), {threshold: .12});
  targets.forEach(el => io.observe(el));
}

function bindCursor(){
  const dot = document.querySelector('.cursor-dot');
  if(!dot) return;
  window.addEventListener('mousemove', e => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });
  document.addEventListener('mouseover', e => {
    if(e.target.closest('a,button,.project-card,.banner-card')){
      dot.style.width = '42px';
      dot.style.height = '42px';
    }
  });
  document.addEventListener('mouseout', e => {
    if(e.target.closest('a,button,.project-card,.banner-card')){
      dot.style.width = '18px';
      dot.style.height = '18px';
    }
  });
}
