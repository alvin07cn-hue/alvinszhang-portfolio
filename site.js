const LANGUAGES = ['en', 'zh-Hans', 'zh-Hant'];
const UI = {
  en: {
    index: 'Index', about: 'About', works: 'Works', scroll: 'Scroll to explore ↓',
    view: 'View full image', read: 'Read about this work', back: 'Back to first work',
    themes: 'Index / Media', themeHint: 'Hover to preview · Select to filter',
    showAll: 'Show all works',
    closeIndex: 'Close index', closeInfo: 'Close information', closeViewer: 'Close viewer',
    zoomIn: 'Zoom in', zoomOut: 'Zoom out', fit: 'Fit', close: 'Close ×',
    previous: 'Previous image', next: 'Next image',
    viewerHint: 'Drag to move · Scroll to zoom · Esc to close',
    selected: 'Selected works', info: 'About the work', end: 'The work continues',
    language: 'Language', skipWorks: 'Skip to works', skipAbout: 'Skip to about',
    aboutOverline: 'Artist / About', aboutPracticeHeading: 'Practice',
    aboutEducationHeading: 'Education', aboutExperienceHeading: 'Curation, research & writing',
    aboutSelectedHeading: 'Exhibitions', aboutAwardsHeading:'Awards & recognition', contact: 'Contact',
    aboutLead: 'Shuchang (Alvin) Zhang is an artist and BFA student at Tufts University, based in Somerville, Massachusetts. Working across painting, installation, drawing, printmaking, and digital imagery, Zhang explores memory, place, material change, and belonging.',
    aboutPractice: 'Painting · Installation · Mixed media · Drawing · Printmaking · Digital work',
    aboutEducation: 'Bachelor of Fine Arts, Tufts University / School of the Museum of Fine Arts at Tufts University (2025–2029, expected).',
    aboutExperience: 'Art Curator, School of the Museum of Fine Arts at Tufts University (2026–present). Worked with UCCA Center for Contemporary Art, Beijing, on research and bilingual art writing (2026). His writing received a High Commendation in the John Locke Essay Competition.',
    aboutSelected: [
      'International Youth Art Exhibition “Salute to the Masters” — exhibitor and curator; MFA Boston and Vanke Plaza Shanghai (2024).',
      '“The Beauty of the Earth” — group exhibition, Vienna UNO Chinese Culture Club, Vienna (2024).'
    ],
    aboutAwards:[
      'Silver Medal — 2023 H.C. Andersen Art Awards.',
      'Diploma of Jadeite Jade Identification — China University of Geosciences.'
    ]
  },
  'zh-Hans': {
    index: '索引', about: '关于', works: '作品', scroll: '向下探索 ↓',
    view: '查看完整作品', read: '阅读作品说明', back: '回到第一件作品',
    themes: '索引 / 媒介', themeHint: '悬停预览 · 点击筛选',
    showAll: '查看全部作品',
    closeIndex: '关闭索引', closeInfo: '关闭说明', closeViewer: '关闭图片',
    zoomIn: '放大', zoomOut: '缩小', fit: '适合屏幕', close: '关闭 ×',
    previous: '上一张', next: '下一张',
    viewerHint: '拖动查看 · 滚动缩放 · 按 Esc 关闭',
    selected: '作品选集', info: '作品说明', end: '创作仍在继续',
    language: '语言', skipWorks: '跳转到作品', skipAbout: '跳转到关于',
    aboutOverline: '艺术家 / 关于', aboutPracticeHeading: '创作媒介',
    aboutEducationHeading: '教育背景', aboutExperienceHeading: '策展、研究与写作',
    aboutSelectedHeading: '展览', aboutAwardsHeading:'奖项与认证', contact: '联系',
    aboutLead: '张书畅（Alvin）是一位现居美国马萨诸塞州萨默维尔的艺术家，正在塔夫茨大学攻读艺术学士学位。他的创作横跨绘画、装置、素描、版画与数字图像，关注记忆、地方、材料变化与归属感。',
    aboutPractice: '绘画 · 装置 · 综合媒介 · 素描 · 版画 · 数字创作',
    aboutEducation: '塔夫茨大学／塔夫茨大学美术博物馆学院，艺术学士（2025–2029 年，预计毕业）。',
    aboutExperience: '2026 年起在塔夫茨大学美术博物馆学院参与展览策划与策展项目；曾与北京尤伦斯当代艺术中心合作，参与研究及中英双语艺术写作。写作获得 John Locke Essay Competition 的 High Commendation。',
    aboutSelected: [
      '国际青少年艺术展“致敬大师”——参展艺术家与策展人；波士顿美术馆及上海万科广场（2024）。',
      '“地球之美”——群展艺术家；Vienna UNO Chinese Culture Club，维也纳（2024）。'
    ],
    aboutAwards:[
      '银奖——2023 H.C. Andersen Art Awards。',
      '翡翠鉴定文凭——中国地质大学。'
    ]
  },
  'zh-Hant': {
    index: '索引', about: '關於', works: '作品', scroll: '向下探索 ↓',
    view: '檢視完整作品', read: '閱讀作品說明', back: '回到第一件作品',
    themes: '索引 / 媒材', themeHint: '懸停預覽 · 點擊篩選',
    showAll: '檢視全部作品',
    closeIndex: '關閉索引', closeInfo: '關閉說明', closeViewer: '關閉圖片',
    zoomIn: '放大', zoomOut: '縮小', fit: '符合螢幕', close: '關閉 ×',
    previous: '上一張', next: '下一張',
    viewerHint: '拖曳查看 · 捲動縮放 · 按 Esc 關閉',
    selected: '作品選集', info: '作品說明', end: '創作仍在繼續',
    language: '語言', skipWorks: '跳至作品', skipAbout: '跳至關於',
    aboutOverline: '藝術家 / 關於', aboutPracticeHeading: '創作媒材',
    aboutEducationHeading: '教育背景', aboutExperienceHeading: '策展、研究與寫作',
    aboutSelectedHeading: '展覽', aboutAwardsHeading:'獎項與認證', contact: '聯絡',
    aboutLead: '張書暢（Alvin）是一位現居美國麻薩諸塞州薩默維爾的藝術家，正在塔夫茨大學攻讀藝術學士學位。他的創作橫跨繪畫、裝置、素描、版畫與數位圖像，關注記憶、地方、材料變化與歸屬感。',
    aboutPractice: '繪畫 · 裝置 · 綜合媒材 · 素描 · 版畫 · 數位創作',
    aboutEducation: '塔夫茨大學／塔夫茨大學美術博物館學院，藝術學士（2025–2029 年，預計畢業）。',
    aboutExperience: '2026 年起在塔夫茨大學美術博物館學院參與展覽規劃與策展項目；曾與北京尤倫斯當代藝術中心合作，參與研究及中英雙語藝術寫作。寫作獲得 John Locke Essay Competition 的 High Commendation。',
    aboutSelected: [
      '國際青少年藝術展「致敬大師」——參展藝術家與策展人；波士頓美術館及上海萬科廣場（2024）。',
      '「地球之美」——群展藝術家；Vienna UNO Chinese Culture Club，維也納（2024）。'
    ],
    aboutAwards:[
      '銀獎——2023 H.C. Andersen Art Awards。',
      '翡翠鑑定文憑——中國地質大學。'
    ]
  }
};

const CATEGORIES = [
  {id:'all', label:{en:'All works','zh-Hans':'全部作品','zh-Hant':'全部作品'}, preview:'urban-main.jpg'},
  {id:'painting', label:{en:'Painting','zh-Hans':'绘画','zh-Hant':'繪畫'}, preview:'oil-4856.jpg'},
  {id:'drawing', label:{en:'Drawing & printmaking','zh-Hans':'素描与版画','zh-Hant':'素描與版畫'}, preview:'bonsai-main.jpg'},
  {id:'installation', label:{en:'Installation & mixed media','zh-Hans':'装置与综合媒介','zh-Hant':'裝置與綜合媒材'}, preview:'thread-main.jpg'},
  {id:'digital', label:{en:'Digital','zh-Hans':'数字作品','zh-Hant':'數位作品'}, preview:'digital-one.jpg'}
];

const WORKS = [
  {
    id:'urban-spirit', category:'installation', layout:'landscape', tone:'light', images:['urban-main.jpg'],
    title:{en:'Urban Spirit','zh-Hans':'城市精神','zh-Hant':'城市精神'},
    medium:{en:'Mixed media','zh-Hans':'综合媒介','zh-Hant':'綜合媒材'},
    statement:{
      en:'Inspired by the adventurous spirit of Wenzhou, this work reflects the pull of home and the idea of returning to one’s roots.',
      'zh-Hans':'作品以温州的开拓精神为起点，思考离乡之后仍然牵引着人的故土，以及最终回到根源的愿望。',
      'zh-Hant':'作品以溫州的開拓精神為起點，思考離鄉之後仍然牽引著人的故土，以及最終回到根源的願望。'
    }
  },
  {
    id:'bonsai', category:'drawing', layout:'portrait', tone:'light', images:['bonsai-main.jpg'],
    title:{en:'Bonsai','zh-Hans':'盆景','zh-Hant':'盆景'},
    medium:{en:'Colored pencil','zh-Hans':'彩色铅笔','zh-Hant':'彩色鉛筆'},
    statement:{
      en:'A landscape of courtyard architecture and boxwood becomes a way to hold the artist’s hometown close, even across distance and change.',
      'zh-Hans':'黄杨木与庭院建筑交织成一片风景，让家乡成为可以随身携带的记忆，也让人与故土的联系跨越距离与变化。',
      'zh-Hant':'黃楊木與庭院建築交織成一片風景，讓家鄉成為可以隨身攜帶的記憶，也讓人與故土的聯繫跨越距離與變化。'
    }
  },
  {
    id:'untitled-painting-series', category:'painting', layout:'portrait', imageLayouts:['portrait','landscape'], tone:'light', images:['oil-4856.jpg','oil-4854.jpg'],
    title:{en:'The Roots Remember','zh-Hans':'根仍记得','zh-Hant':'根仍記得'},
    medium:{en:'Oil painting series · 2 works','zh-Hans':'油画系列 · 两张','zh-Hant':'油畫系列 · 兩張'},
    statement:{
      en:`Everyone has a place that lives in memory. For me, it is an afternoon on my grandmother’s sofa. The carved green sofa and the mountains beyond her window are real; I knew that landscape only from that seat. Red connects family ties to the land, while its drips echo banyan roots reaching down toward the soil.

In the second painting, a Buddha’s head is both supported and entangled by banyan roots. Buddhism’s idea of impermanence reminds me that people, places, and memories change. Understanding that is one thing; letting go is another. The roots both bind and sustain me, reminding me where I come from.`,
      'zh-Hans':`每个人的记忆里都有一个特别的地方。对我而言，那是坐在奶奶沙发上的一个下午。画中的绿色沙发与窗外山野都是真实的；我只曾从那张沙发上看见那片风景。红色连接着家人与土地，滴落的线条像榕树气根，向下寻找土壤。

第二幅画中，佛像被榕树根支撑，也被它们缠绕。佛教的“无常”提醒我，人、地方与记忆都会改变；但理解无常，不等于能够放下。这些根是牵绊，也是支撑，让我始终记得自己从何而来。`,
      'zh-Hant':`每個人的記憶裡都有一個特別的地方。對我而言，那是坐在奶奶沙發上的一個下午。畫中的綠色沙發與窗外山野都是真實的；我只曾從那張沙發上看見那片風景。紅色連接著家人與土地，滴落的線條像榕樹氣根，向下尋找土壤。

第二幅畫中，佛像被榕樹根支撐，也被它們纏繞。佛教的「無常」提醒我，人、地方與記憶都會改變；但理解無常，不等於能夠放下。這些根是牽絆，也是支撐，讓我始終記得自己從何而來。`
    }
  },
  {
    id:'untitled-painting', category:'painting', layout:'portrait', tone:'light', images:['oil-6114.jpg'],
    title:{en:'Mountains in the Room','zh-Hans':'山在屋里','zh-Hant':'山在屋裡'},
    medium:{en:'Oil painting','zh-Hans':'油画','zh-Hant':'油畫'},
    statement:{
      en:`To me, mountains are a symbol of home. I remember leaning against my grandmother as we looked out at the landscape together. In my memory, the view beyond the window feels like a dream, much like the Chinese paintings through which I first encountered art.

In this painting, the mountains seem to float. The remembered landscape is no longer contained by the window or by physical space. It has entered the home, and it has entered my heart. I want to hold on not only to what I saw, but also to the feeling of being beside my grandmother.`,
      'zh-Hans':`在我眼中，山是“家”的象征。我一直记得小时候依偎在奶奶身边，一起看窗外风景的情景。如今再想起，那片风景像梦一样，也让我想到自己第一次接触艺术时看到的中国画。

画里的山仿佛悬浮着。记忆中的风景早已不再受窗户或物理空间的限制；它进入了家，也进入了我的心。我想留住的不只是当时看见的山，还有依偎在奶奶身边的感觉。`,
      'zh-Hant':`在我眼中，山是「家」的象徵。我一直記得小時候依偎在奶奶身邊，一起看窗外風景的情景。如今再想起，那片風景像夢一樣，也讓我想到自己第一次接觸藝術時看到的中國畫。

畫裡的山彷彿懸浮著。記憶中的風景早已不再受窗戶或物理空間的限制；它進入了家，也進入了我的心。我想留住的不只是當時看見的山，還有依偎在奶奶身邊的感覺。`
    }
  },
  {
    id:'flash-bulb-memory', category:'installation', layout:'portrait', tone:'dark', accent:true, images:['flash-main.jpg','flash-detail.jpg','flash-hanging.jpg'],
    title:{en:'Flash-bulb Memory','zh-Hans':'闪光灯记忆','zh-Hant':'閃光燈記憶'},
    medium:{en:'Installation · mixed media','zh-Hans':'装置 · 综合媒介','zh-Hant':'裝置 · 綜合媒材'},
    statement:{
      en:'Wax dissolves around a suspended form while light fixes a moment of exam anxiety like a photograph. The material makes a private tension visible.',
      'zh-Hans':'蜡在悬置的形体上缓慢消融，光线像闪光灯一样定格考试焦虑的瞬间。材料把难以言说的紧张感变得可见。',
      'zh-Hant':'蠟在懸置的形體上緩慢消融，光線像閃光燈一樣定格考試焦慮的瞬間。材料把難以言說的緊張感變得可見。'
    }
  },
  {
    id:'season-change', category:'drawing', layout:'portrait', tone:'light', images:['season-main.jpg','season-second.jpg'],
    title:{en:'Season Change','zh-Hans':'季节更迭','zh-Hant':'季節更迭'},
    medium:{en:'Pencil drawing','zh-Hans':'铅笔素描','zh-Hant':'鉛筆素描'},
    statement:{
      en:'Fallen leaves and bark return to the earth. This drawing considers change, decay, and the places that remain with us.',
      'zh-Hans':'落叶与枯木回到泥土。这件素描通过自然的纹理，思考变化、消逝，以及始终留在心中的地方。',
      'zh-Hant':'落葉與枯木回到泥土。這件素描透過自然的紋理，思考變化、消逝，以及始終留在心中的地方。'
    }
  },
  {
    id:'hands', category:'painting', layout:'portrait', tone:'light', images:['hands-main.jpg'],
    title:{en:'Hands','zh-Hans':'手','zh-Hant':'手'},
    medium:{en:'Oil on canvas','zh-Hans':'布面油画','zh-Hant':'布面油畫'},
    statement:{
      en:'Painted in reverence for the artist’s grandmother’s generation, this work links hands, ivy, and a distant city to the care that connects one generation to the next.',
      'zh-Hans':'这件作品向祖辈致敬。双手、常春藤与远处的城市，连起代际之间的照顾与生命力。',
      'zh-Hant':'這件作品向祖輩致敬。雙手、常春藤與遠處的城市，連起世代之間的照顧與生命力。'
    }
  },
  {
    id:'the-thread-of-fate', category:'installation', layout:'portrait', tone:'dark', accent:true, images:['thread-main.jpg','thread-detail.jpg','thread-process.jpg'],
    title:{en:'The Thread of Fate','zh-Hans':'命运之线','zh-Hant':'命運之線'},
    medium:{en:'Installation · mixed media','zh-Hans':'装置 · 综合媒介','zh-Hant':'裝置 · 綜合媒材'},
    statement:{
      en:'Books, light, resin, plants, and layered material evoke the water cycle and the marks that give a life its particular course.',
      'zh-Hans':'书页、光、树脂与植物构成层层叠叠的材料景观，借水的循环讲述人生经历留下的痕迹。',
      'zh-Hant':'書頁、光、樹脂與植物構成層層疊疊的材料景觀，藉水的循環講述人生經歷留下的痕跡。'
    }
  },
  {
    id:'manifest', category:'digital', layout:'landscape', tone:'dark', accent:true, images:['digital-one.jpg','digital-two.jpg'],
    title:{en:'Manifest','zh-Hans':'显现','zh-Hant':'顯現'},
    medium:{en:'Digital work','zh-Hans':'数字创作','zh-Hant':'數位創作'},
    statement:{
      en:'As time passes, my feelings for my hometown become memories. However real they once felt, those memories gradually take on a virtual quality. Scenes carrying elements of home become abstract and conceptual, yet the sentiment remains, shining in my mind as genuinely and beautifully as a fairy tale.',
      'zh-Hans':'随着时间流逝，我对故乡的感受渐渐成为记忆。无论它们曾经多么真实，回忆中的场景都会逐渐带上虚拟的质感。故乡的景象与元素变得抽象、观念化，但那份情感依然留在心中，明亮而真切，如童话般美好。',
      'zh-Hant':'隨著時間流逝，我對故鄉的感受漸漸成為記憶。無論它們曾經多麼真實，回憶中的場景都會逐漸帶上虛擬的質感。故鄉的景象與元素變得抽象、觀念化，但那份情感依然留在心中，明亮而真切，如童話般美好。'
    }
  }
];

const DISPLAY_ORDER = [
  'urban-spirit', 'bonsai', 'manifest', 'the-thread-of-fate',
  'untitled-painting', 'flash-bulb-memory', 'untitled-painting-series',
  'hands', 'season-change'
];
const ORDERED_WORKS = DISPLAY_ORDER.map(id => WORKS.find(work => work.id === id));

const byId = id => document.getElementById(id);
const page = document.body.dataset.page;
let locale = LANGUAGES.includes(localStorage.getItem('portfolio-language')) ? localStorage.getItem('portfolio-language') : 'en';
let activeWork = WORKS[0].id;
let activeCategory = 'all';
let scrollFrame;
let viewerWork = null;
let viewerImageIndex = 0;
const slideImageIndices = {};
let zoom = 1;
let pan = {x:0,y:0};
let pointerStart = null;

function t(key){ return UI[locale][key]; }
function categoryFor(id){ return CATEGORIES.find(category => category.id === id); }
function workFor(id){ return WORKS.find(work => work.id === id); }
function visibleWorks(){ return activeCategory==='all' ? ORDERED_WORKS : ORDERED_WORKS.filter(work => work.category===activeCategory); }
function setText(id, value){ const node=byId(id); if(node) node.textContent=value; }
function setLanguage(next){
  if(!LANGUAGES.includes(next)) return;
  locale=next;
  localStorage.setItem('portfolio-language',locale);
  document.documentElement.lang=locale;
  document.querySelectorAll('.language-switch button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang===locale)));
  document.querySelectorAll('.language-switch').forEach(group => group.setAttribute('aria-label',t('language')));
  setText('about-link',t('about'));
  setText('work-link',t('works'));
  setText('about-label',t('about'));
  const skip=document.querySelector('.skip-link'); if(skip) skip.textContent=t(page==='works'?'skipWorks':'skipAbout');
  if(page==='works') renderWorks(); else renderAbout();
}

function renderWorks(){
  const gallery=byId('gallery');
  const works=visibleWorks();
  if(!works.some(work=>work.id===activeWork))activeWork=works[0].id;
  gallery.setAttribute('aria-label',activeCategory==='all'?t('selected'):categoryFor(activeCategory).label[locale]);
  gallery.innerHTML=works.map((work,i)=>{
    const category=categoryFor(work.category);
    const currentImage=slideImageIndices[work.id] || 0;
    const image=work.images[currentImage];
    const currentLayout=work.imageLayouts?.[currentImage] || work.layout;
    const cls=`slide slide--${currentLayout} slide--${work.tone}${work.accent?' slide--accent':''}`;
    return `<section id="${work.id}" class="${cls}" data-id="${work.id}" aria-label="${work.title[locale]}">
      <button class="artwork-trigger" type="button" data-view="${work.id}" aria-label="${t('view')}: ${work.title[locale]}">
        <img class="artwork-image" src="./assets/${image}" alt="${work.title[locale]}" decoding="async" />
      </button>
      <div class="slide-panel">
        <p class="slide-kicker">${String(i+1).padStart(2,'0')} / ${String(works.length).padStart(2,'0')} &nbsp; ${category.label[locale]}</p>
        <span class="slide-accent" aria-hidden="true"></span>
        <h2 class="slide-title">${work.title[locale]}</h2>
        <p class="slide-medium">${work.medium[locale]}</p>
        ${work.images.length>1?`<div class="slide-carousel" aria-label="${work.title[locale]}"><button type="button" data-slide-prev="${work.id}" aria-label="${t('previous')}">←</button><span class="slide-image-count">${currentImage+1} / ${work.images.length}</span><button type="button" data-slide-next="${work.id}" aria-label="${t('next')}">→</button></div>`:''}
        <div class="slide-actions"><button type="button" data-view="${work.id}">${t('view')}</button>${work.statement?`<button type="button" data-info="${work.id}">${t('read')}</button>`:''}</div>
      </div>
      ${i===0?`<p class="slide-hint">${t('scroll')}</p>`:''}
    </section>`;
  }).join('')+`<section class="gallery-end" aria-label="${t('end')}"><p>${t('selected')} / Alvin S. Zhang</p><h2>${t('end')}</h2><button type="button" id="back-top">${t('back')}</button></section>`;
  gallery.querySelectorAll('[data-view]').forEach(node=>node.addEventListener('click',()=>openViewer(node.dataset.view)));
  gallery.querySelectorAll('[data-info]').forEach(node=>node.addEventListener('click',()=>openWorkInfo(node.dataset.info)));
  gallery.querySelectorAll('[data-slide-prev]').forEach(node=>node.addEventListener('click',()=>changeSlideImage(node.dataset.slidePrev,-1)));
  gallery.querySelectorAll('[data-slide-next]').forEach(node=>node.addEventListener('click',()=>changeSlideImage(node.dataset.slideNext,1)));
  byId('back-top').addEventListener('click',()=>gallery.scrollTo({top:0,behavior:'smooth'}));
  renderCategories();
  const filterStatus=byId('filter-status');
  filterStatus.hidden=activeCategory==='all';
  if(activeCategory!=='all')setText('filter-name',categoryFor(activeCategory).label[locale]);
  setText('show-all',t('showAll'));
  setText('index-button',t('index')+' +');
  setText('theme-heading',t('themes'));
  setText('theme-hint',t('themeHint'));
  byId('theme-close').setAttribute('aria-label',t('closeIndex'));
  byId('work-close').setAttribute('aria-label',t('closeInfo'));
  setText('work-kicker',t('info'));
  updateViewerText();
  const target=byId(activeWork);
  requestAnimationFrame(()=>{ if(target) gallery.scrollTop=target.offsetTop; updateActiveSlide(); });
}

function updateActiveSlide(){
  const gallery=byId('gallery');
  const midpoint=gallery.getBoundingClientRect().top+gallery.clientHeight/2;
  const slides=[...gallery.querySelectorAll('.slide,.gallery-end')];
  const visible=slides.find(slide=>{
    const rect=slide.getBoundingClientRect();
    return rect.top<=midpoint && rect.bottom>midpoint;
  });
  if(!visible) return;
  if(visible.dataset.id) activeWork=visible.dataset.id;
  byId('site-header').classList.toggle('is-dark',visible.classList.contains('slide--dark'));
}

function changeSlideImage(id,delta){
  const work=workFor(id);
  if(!work || work.images.length<2) return;
  slideImageIndices[id]=((slideImageIndices[id]||0)+delta+work.images.length)%work.images.length;
  const slide=byId(id);
  slide.querySelector('.artwork-image').src='./assets/'+work.images[slideImageIndices[id]];
  slide.querySelector('.slide-image-count').textContent=`${slideImageIndices[id]+1} / ${work.images.length}`;
  const layout=work.imageLayouts?.[slideImageIndices[id]] || work.layout;
  slide.classList.toggle('slide--landscape',layout==='landscape');
  slide.classList.toggle('slide--portrait',layout==='portrait');
}

function renderCategories(){
  const container=byId('theme-list');
  container.innerHTML=CATEGORIES.map((category,i)=>`<button type="button" class="theme-option" data-category="${category.id}" aria-pressed="${activeCategory===category.id}"><span class="theme-number">${String(i+1).padStart(2,'0')}</span><span>${category.label[locale]}</span><span class="theme-count">${String(category.id==='all'?WORKS.length:WORKS.filter(work=>work.category===category.id).length).padStart(2,'0')}</span></button>`).join('');
  container.querySelectorAll('.theme-option').forEach(option=>{
    option.addEventListener('pointerenter',()=>previewCategory(option.dataset.category));
    option.addEventListener('focus',()=>previewCategory(option.dataset.category));
    option.addEventListener('click',()=>applyCategory(option.dataset.category));
  });
  previewCategory(activeCategory);
}
function previewCategory(id){
  const category=categoryFor(id);
  const img=byId('theme-preview').querySelector('img');
  img.src='./assets/'+category.preview;
  setText('theme-preview-label',category.label[locale]);
  byId('theme-list').querySelectorAll('.theme-option').forEach(option=>option.classList.toggle('is-previewed',option.dataset.category===id));
}
function applyCategory(id){
  if(!categoryFor(id))return;
  activeCategory=id;
  activeWork=visibleWorks()[0].id;
  byId('theme-panel').close();
  byId('gallery').scrollTop=0;
  renderWorks();
}

function openWorkInfo(id){
  const work=workFor(id);
  setText('work-number',categoryFor(work.category).label[locale]);
  setText('work-heading',work.title[locale]);
  setText('work-medium',work.medium[locale]);
  const statement=byId('work-statement');
  const paragraphs=work.statement[locale].split(/\n\s*\n/).map(text=>{
    const paragraph=document.createElement('p');
    paragraph.textContent=text.trim();
    return paragraph;
  });
  statement.replaceChildren(...paragraphs);
  statement.classList.toggle('is-long',work.statement[locale].length>500);
  byId('work-panel').showModal();
  byId('work-panel').scrollTop=0;
}

function openViewer(id){
  viewerWork=workFor(id);
  viewerImageIndex=slideImageIndices[id]||0;
  byId('viewer').showModal();
  changeViewerImage();
}
function changeViewerImage(){
  if(!viewerWork) return;
  const img=byId('viewer-image');
  img.onload=fitViewer;
  img.src='./assets/'+viewerWork.images[viewerImageIndex];
  img.alt=viewerWork.title[locale];
  updateViewerText();
  if(img.complete && img.naturalWidth) fitViewer();
}
function fitViewer(){
  const img=byId('viewer-image'),stage=byId('viewer-stage');
  if(!img.naturalWidth) return;
  const scale=Math.min(stage.clientWidth/img.naturalWidth,stage.clientHeight/img.naturalHeight);
  img.style.width=(img.naturalWidth*scale)+'px';
  img.style.height=(img.naturalHeight*scale)+'px';
  zoom=1;pan={x:0,y:0};applyViewerTransform();
}
function applyViewerTransform(){
  const img=byId('viewer-image'),stage=byId('viewer-stage');
  const maxX=Math.max(0,(img.clientWidth*zoom-stage.clientWidth)/2);
  const maxY=Math.max(0,(img.clientHeight*zoom-stage.clientHeight)/2);
  pan.x=Math.max(-maxX,Math.min(maxX,pan.x));
  pan.y=Math.max(-maxY,Math.min(maxY,pan.y));
  img.style.transform=`translate(calc(-50% + ${pan.x}px), calc(-50% + ${pan.y}px)) scale(${zoom})`;
  setText('viewer-zoom-level',Math.round(zoom*100)+'%');
}
function changeZoom(factor){zoom=Math.max(1,Math.min(5,zoom*factor));if(zoom===1)pan={x:0,y:0};applyViewerTransform();}
function shiftViewerImage(delta){
  if(!viewerWork || viewerWork.images.length<2) return;
  viewerImageIndex=(viewerImageIndex+delta+viewerWork.images.length)%viewerWork.images.length;
  changeViewerImage();
}
function updateViewerText(){
  if(!byId('viewer')) return;
  setText('viewer-title',viewerWork?viewerWork.title[locale]:'');
  setText('viewer-fit',t('fit'));
  setText('viewer-close',t('close'));
  setText('viewer-hint',t('viewerHint'));
  byId('viewer').setAttribute('aria-label',viewerWork?viewerWork.title[locale]:t('view'));
  byId('viewer-zoom-in').setAttribute('aria-label',t('zoomIn'));
  byId('viewer-zoom-out').setAttribute('aria-label',t('zoomOut'));
  byId('viewer-close').setAttribute('aria-label',t('closeViewer'));
  byId('viewer-prev').setAttribute('aria-label',t('previous'));
  byId('viewer-next').setAttribute('aria-label',t('next'));
  setText('viewer-count',viewerWork?`${viewerImageIndex+1} / ${viewerWork.images.length}`:'');
  byId('viewer-prev').disabled=byId('viewer-next').disabled=!viewerWork || viewerWork.images.length<2;
}

const ABOUT_CV = {
  en: {
    lead: 'Shuchang Zhang is based in Somerville, Massachusetts. His practice spans art-making, exhibition curation, and art research. His work explores identity, memory, and home.',
    more: 'View experience ↓', selectedHeading: 'Exhibitions', experienceHeading: 'Curation & research', awardsHeading: 'Awards & certifications', educationHeading: 'Education',
    selected: [['2025','Reframing Campus Ecologies, Slater Concourse, Tufts University, Massachusetts, USA'],['2024','International Youth Art Exhibition “Salute to the Masters”, Museum of Fine Arts, Boston, Massachusetts, USA; Vanke Plaza, Shanghai, China'],['2024','“The Beauty of the Earth”, UNO Chinese Culture Club, Vienna, Austria']],
    experience: [['Fall 2026','Curator, Between Becoming, School of the Museum of Fine Arts at Tufts University, Massachusetts, USA'],['Summer 2026','Art Researcher (Chinese and English), UCCA Center for Contemporary Art, Beijing, China']],
    awards: [['2025','Diploma in Jadeite Jade Identification, China University of Geosciences'],['2024','High Commendation, John Locke Essay Competition'],['2023','Silver Medal, H.C. Andersen Art Awards']],
    education: [['2025–2029 (expected)','Bachelor of Fine Arts, Tufts University / School of the Museum of Fine Arts at Tufts University, Massachusetts, USA']]
  },
  'zh-Hans': {
    lead: '张书畅现居美国马萨诸塞州萨默维尔，从事艺术创作、展览策划与艺术研究。他的作品围绕身份、记忆与家乡展开。',
    more: '了解我的经历 ↓', selectedHeading: '展览', experienceHeading: '策展与研究', awardsHeading: '奖项与认证', educationHeading: '教育',
    selected: [['2025','Reframing Campus Ecologies，Slater Concourse，塔夫茨大学，马萨诸塞州，美国'],['2024','国际青少年艺术展“致敬大师”，波士顿美术馆，马萨诸塞州，美国；万科广场，上海，中国'],['2024','“地球之美”，UNO Chinese Culture Club，维也纳，奥地利']],
    experience: [['2026 年秋','策展人，Between Becoming，塔夫茨大学美术博物馆学院，马萨诸塞州，美国'],['2026 年夏','艺术研究员（中英文），尤伦斯当代艺术中心，北京，中国']],
    awards: [['2025','翡翠鉴定文凭，中国地质大学'],['2024','High Commendation，John Locke Essay Competition'],['2023','银奖，H.C. Andersen Art Awards']],
    education: [['2025–2029（预计）','艺术学士，塔夫茨大学 / 塔夫茨大学美术博物馆学院，马萨诸塞州，美国']]
  },
  'zh-Hant': {
    lead: '張書暢現居美國麻薩諸塞州薩默維爾，從事藝術創作、展覽策劃與藝術研究。他的作品圍繞身份、記憶與家鄉展開。',
    more: '了解我的經歷 ↓', selectedHeading: '展覽', experienceHeading: '策展與研究', awardsHeading: '獎項與認證', educationHeading: '教育',
    selected: [['2025','Reframing Campus Ecologies，Slater Concourse，塔夫茨大學，麻薩諸塞州，美國'],['2024','國際青少年藝術展「致敬大師」，波士頓美術館，麻薩諸塞州，美國；萬科廣場，上海，中國'],['2024','「地球之美」，UNO Chinese Culture Club，維也納，奧地利']],
    experience: [['2026 年秋','策展人，Between Becoming，塔夫茨大學美術博物館學院，麻薩諸塞州，美國'],['2026 年夏','藝術研究員（中英文），尤倫斯當代藝術中心，北京，中國']],
    awards: [['2025','翡翠鑑定文憑，中國地質大學'],['2024','High Commendation，John Locke Essay Competition'],['2023','銀獎，H.C. Andersen Art Awards']],
    education: [['2025–2029（預計）','藝術學士，塔夫茨大學 / 塔夫茨大學美術博物館學院，麻薩諸塞州，美國']]
  }
};
function renderAbout(){
  const content=ABOUT_CV[locale];
  setText('about-overline',t('aboutOverline'));
  setText('about-name',locale==='en'?'Shuchang\n(Alvin) Zhang':locale==='zh-Hans'?'张书畅\nAlvin Zhang':'張書暢\nAlvin Zhang');
  setText('about-lead',content.lead);
  setText('about-more',content.more);
  for(const key of ['selected','experience','awards','education']){
    setText(`about-${key}-heading`,content[`${key}Heading`]);
    byId(`about-${key}`).replaceChildren(...content[key].map(([year,description])=>{
      const li=document.createElement('li');
      const date=document.createElement('span'); date.className='cv-year'; date.textContent=year;
      const text=document.createElement('span'); text.className='cv-description'; text.textContent=description;
      li.append(date,text); return li;
    }));
  }
  setText('about-contact-heading',t('contact'));
  document.title=t('about')+' — Alvin S. Zhang';
}

document.querySelectorAll('.language-switch button').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
if(page==='works'){
  byId('gallery').addEventListener('scroll',()=>{
    cancelAnimationFrame(scrollFrame);
    scrollFrame=requestAnimationFrame(updateActiveSlide);
  },{passive:true});
  window.addEventListener('resize',updateActiveSlide);
  byId('index-button').addEventListener('click',()=>byId('theme-panel').showModal());
  byId('show-all').addEventListener('click',()=>applyCategory('all'));
  byId('brand').addEventListener('click',event=>{event.preventDefault();applyCategory('all');});
  byId('theme-close').addEventListener('click',()=>byId('theme-panel').close());
  byId('work-close').addEventListener('click',()=>byId('work-panel').close());
  byId('theme-panel').addEventListener('click',event=>{if(event.target===byId('theme-panel'))byId('theme-panel').close();});
  byId('work-panel').addEventListener('click',event=>{if(event.target===byId('work-panel'))byId('work-panel').close();});
  byId('viewer-close').addEventListener('click',()=>byId('viewer').close());
  byId('viewer-fit').addEventListener('click',fitViewer);
  byId('viewer-zoom-in').addEventListener('click',()=>changeZoom(1.25));
  byId('viewer-zoom-out').addEventListener('click',()=>changeZoom(.8));
  byId('viewer-prev').addEventListener('click',()=>shiftViewerImage(-1));
  byId('viewer-next').addEventListener('click',()=>shiftViewerImage(1));
  byId('viewer-stage').addEventListener('wheel',event=>{event.preventDefault();changeZoom(event.deltaY<0?1.15:.87);},{passive:false});
  byId('viewer-stage').addEventListener('pointerdown',event=>{
    if(zoom<=1) return;
    pointerStart={x:event.clientX,y:event.clientY,panX:pan.x,panY:pan.y};
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add('is-dragging');
  });
  byId('viewer-stage').addEventListener('pointermove',event=>{
    if(!pointerStart) return;
    pan.x=pointerStart.panX+event.clientX-pointerStart.x;
    pan.y=pointerStart.panY+event.clientY-pointerStart.y;
    applyViewerTransform();
  });
  const stopDrag=event=>{pointerStart=null;event.currentTarget.classList.remove('is-dragging');};
  byId('viewer-stage').addEventListener('pointerup',stopDrag);
  byId('viewer-stage').addEventListener('pointercancel',stopDrag);
  window.addEventListener('resize',()=>{if(byId('viewer').open)fitViewer();});
  window.addEventListener('keydown',event=>{
    if(!byId('viewer').open) return;
    if(event.key==='ArrowLeft')shiftViewerImage(-1);
    if(event.key==='ArrowRight')shiftViewerImage(1);
    if(event.key==='+' || event.key==='=')changeZoom(1.25);
    if(event.key==='-')changeZoom(.8);
  });
  const hash=decodeURIComponent(location.hash.slice(1));
  if(workFor(hash))activeWork=hash;
}
setLanguage(locale);
