const LANGUAGES = ['en', 'zh-Hans', 'zh-Hant'];
const UI = {
  en: {
    index: 'Works', writing: 'Writing', about: 'About', works: 'Works', scroll: 'Scroll to explore ↓',
    view: 'View full image', read: 'Read about this work', back: 'Back to first work',
    themes: 'Index / Themes', themeHint: 'Hover to preview · Select to filter',
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
    index: '作品', writing: '写作', about: '关于', works: '作品', scroll: '向下探索 ↓',
    view: '查看完整作品', read: '阅读作品说明', back: '回到第一件作品',
    themes: '索引 / 主题', themeHint: '悬停预览 · 点击筛选',
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
    index: '作品', writing: '寫作', about: '關於', works: '作品', scroll: '向下探索 ↓',
    view: '檢視完整作品', read: '閱讀作品說明', back: '回到第一件作品',
    themes: '索引 / 主題', themeHint: '懸停預覽 · 點擊篩選',
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
  {id:'origin', label:{en:'The Gravity of Origin','zh-Hans':'原乡的引力','zh-Hant':'原鄉的引力'}, preview:'bonsai-main.jpg'},
  {id:'interiors', label:{en:'Inherited Interiors','zh-Hans':'承袭的内景','zh-Hant':'承襲的內景'}, preview:'oil-4856.jpg'},
  {id:'residue', label:{en:'Residue and Afterimage','zh-Hans':'残留与余像','zh-Hant':'殘留與餘像'}, preview:'flash-main.jpg'}
];

const WORKS = [
  {
    id:'urban-spirit', category:'origin', layout:'landscape', tone:'light', images:['urban-main.jpg'],
    title:{en:'Urban Spirit','zh-Hans':'城市精神','zh-Hant':'城市精神'},
    medium:{en:'Mixed media','zh-Hans':'综合媒介','zh-Hant':'綜合媒材'},
    statement:{
      en:"In China, Wenzhou people are known for their adventurous spirit. They possess the courage and unity akin to Capricorn, venturing worldwide for trade, but no matter how far they go, the belief in returning to their roots remains strong, and eventually, most Wenzhou people will return to their hometown.",
      'zh-Hans':"在中国，温州人以敢闯敢拼著称。他们拥有如摩羯座般的勇气和团结精神，走向世界各地经商。但无论走得多远，回归故土的信念始终坚定，最终大多数温州人都会回到家乡。",
      'zh-Hant':"在中國，溫州人以敢闖敢拼著稱。他們擁有如摩羯座般的勇氣和團結精神，走向世界各地經商。但無論走得多遠，回歸故土的信念始終堅定，最終大多數溫州人都會回到家鄉。"
    }
  },
  {
    id:'bonsai', category:'origin', layout:'portrait', tone:'light', images:['bonsai-main.jpg'],
    title:{en:'Bonsai','zh-Hans':'盆景','zh-Hant':'盆景'},
    medium:{en:'Colored pencil','zh-Hans':'彩色铅笔','zh-Hant':'彩色鉛筆'},
    statement:{
      en:"My artwork employs boxwood as a metaphor for my hometown, acting as the structural support for both the courtyard and the composition of the painting. Within the piece, the traditional Suzhou courtyards are interwoven with the modern architecture of my hometown, symbolizing the deep roots of my soul in the land of my birth. Regardless of the changes in the era or the place where one resides, the connection to one’s hometown remains unbreakably close. I am of the belief that, much like the bark of a deciduous tree, we all eventually return to the soil that nurtured us at the end of life’s journey. In the end, we all end our days on our native soil.",
      'zh-Hans':"我以黄杨木隐喻家乡，它既是庭院的结构支撑，也是画面构图的支柱。传统苏州庭院与家乡的现代建筑交织，象征我的灵魂深深扎根于出生的土地。无论时代如何变迁，身居何处，人与家乡的联系始终亲密而牢固。我相信，我们如同落叶树的树皮，在生命旅程的终点，最终都会回到滋养我们的土地，归于故土。",
      'zh-Hant':"我以黃楊木隱喻家鄉，它既是庭院的結構支撐，也是畫面構圖的支柱。傳統蘇州庭院與家鄉的現代建築交織，象徵我的靈魂深深扎根於出生的土地。無論時代如何變遷，身居何處，人與家鄉的聯繫始終親密而牢固。我相信，我們如同落葉樹的樹皮，在生命旅程的終點，最終都會回到滋養我們的土地，歸於故土。"
    }
  },
  {
    id:'untitled-painting-series', category:'interiors', layout:'portrait', imageLayouts:['portrait','landscape'], tone:'light', images:['oil-4856.jpg','oil-4854.jpg'],
    title:{en:'The Roots Remember','zh-Hans':'根仍记得','zh-Hant':'根仍記得'},
    medium:{en:'Oil painting series · 2 works','zh-Hans':'油画系列 · 两张','zh-Hant':'油畫系列 · 兩張'},
    statement:{
      en:"Everyone holds a special place in their mind—not a point on a map, but a feeling. For me, it is an afternoon on Grandma’s sofa. In the first painting, the green carved sofa and the mountains and fields behind it are real; I have only ever seen this view from that seat, so the sofa becomes a doorway to my hometown. Red, the color of blessing and of blood ties, frames the scene, and the red dripping from its edge recalls the aerial roots of a banyan tree, slowly growing back into the soil. In the second painting, a Buddha’s head rises from banyan roots. He is calm, as if he has accepted impermanence, yet the roots still hold him. Understanding impermanence is one thing; letting go is another. The Buddha is at peace, but I am not. The roots are both a constraint and a support: they keep me from leaving entirely, and remind me where I am from.",
      'zh-Hans':"每个人心中都有一个特别的地方——它不是地图上的一个点，而是一种感受。对我而言，那是奶奶沙发上的一个下午。第一幅画中，绿色雕花沙发和背后的山野都是真实的；我只曾从那个座位上看到这片风景，因此沙发成了一道通往家乡的门。红色象征祝福与血缘，环绕着画面；边缘滴落的红色使人想起榕树气根，缓缓伸回土壤。\n\n第二幅画中，佛首从榕树根中升起。佛像平静，仿佛已经接受无常，而根仍然紧紧缠绕。理解无常是一回事，真正放下又是另一回事。佛是平静的，但我不是。这些根既是束缚，也是支撑：它们让我无法彻底离开，也提醒我从何而来。",
      'zh-Hant':"每個人心中都有一個特別的地方——它不是地圖上的一個點，而是一種感受。對我而言，那是奶奶沙發上的一個下午。第一幅畫中，綠色雕花沙發和背後的山野都是真實的；我只曾從那個座位上看到這片風景，因此沙發成了一道通往家鄉的門。紅色象徵祝福與血緣，環繞著畫面；邊緣滴落的紅色使人想起榕樹氣根，緩緩伸回土壤。\n\n第二幅畫中，佛首從榕樹根中升起。佛像平靜，彷彿已經接受無常，而根仍然緊緊纏繞。理解無常是一回事，真正放下又是另一回事。佛是平靜的，但我不是。這些根既是束縛，也是支撐：它們讓我無法徹底離開，也提醒我從何而來。"
    }
  },
  {
    id:'untitled-painting', category:'interiors', layout:'portrait', tone:'light', images:['oil-6114.jpg'],
    title:{en:'Mountains in the Room','zh-Hans':'山在屋里','zh-Hant':'山在屋裡'},
    medium:{en:'Oil painting','zh-Hans':'油画','zh-Hant':'油畫'},
    statement:{
      en:"This work continues my thinking about hometown, family, and childhood memory. The mountains are not only the scenery of my hometown; they also remind me of the time I spent with my grandmother. Remembered landscape and domestic space intertwine, becoming my way of understanding home. Unlike my earlier sofa and banyan tree works, I removed the flowing forms and focused on the mountains themselves, borrowing from Chinese landscape painting so they become imagined and reconstructed, not just a view through a window. Yellowish green feels ancient and distant, while pink feels contemporary, representing my present. Together, they show a hometown that is not frozen in the past, but a memory I keep revisiting and reinterpreting from where I stand now.",
      'zh-Hans':"这件作品延续了我对家乡、家庭与童年记忆的思考。山不仅是家乡的风景，也让我想起与奶奶共度的时光。记忆中的风景与家庭空间交织，成为我理解家的方式。不同于早期的沙发与榕树作品，我去掉了流动的形态，将注意力集中在山本身，借鉴中国山水画的语言，让山成为想象和重构的景象，而不只是窗外的风景。黄绿色带着古老与遥远的感觉，粉色则更为当代，代表我所处的现在。两者共同呈现的家乡并非凝固于过去，而是我从当下不断回望和重新诠释的记忆。",
      'zh-Hant':"這件作品延續了我對家鄉、家庭與童年記憶的思考。山不僅是家鄉的風景，也讓我想起與奶奶共度的時光。記憶中的風景與家庭空間交織，成為我理解家的方式。不同於早期的沙發與榕樹作品，我去掉了流動的形態，將注意力集中在山本身，借鑑中國山水畫的語言，讓山成為想像和重構的景象，而不只是窗外的風景。黃綠色帶著古老與遙遠的感覺，粉色則更為當代，代表我所處的現在。兩者共同呈現的家鄉並非凝固於過去，而是我從當下不斷回望和重新詮釋的記憶。"
    }
  },
  {
    id:'flash-bulb-memory', category:'residue', layout:'portrait', tone:'dark', accent:true, images:['flash-main.jpg','flash-detail.jpg','flash-hanging.jpg'],
    title:{en:'Flash-bulb Memory','zh-Hans':'闪光灯记忆','zh-Hant':'閃光燈記憶'},
    medium:{en:'Installation · mixed media','zh-Hans':'装置 · 综合媒介','zh-Hant':'裝置 · 綜合媒材'},
    statement:{
      en:"At that moment, time stands still, and memories are etched onto photographic paper, transforming into unforgettable fragments of memory amidst the flicker of white light. I explored the scene of my entering the state of examination, where anxiety filled my entire body, and sweat and tears flowed across my skin without leaving any trace. The wax in the installation amplifies this trace, making anxiety visible. The ongoing dissolution of the wax ultimately exposes a wire within the brain region, serving as a metaphor for the heightened state of mental tension. The light illuminates the entire scene, metaphorically acting as a flashlight, capturing the moment of memory. This allows viewers to resonate with my past worries and tension about exams.",
      'zh-Hans':"那一刻，时间静止，记忆被刻在相纸上，在闪烁的白光中化为难忘的片段。我探索自己进入考试状态时的场景：焦虑充满全身，汗水与泪水流过皮肤，却不留下痕迹。装置中的蜡放大了这些痕迹，使焦虑变得可见。蜡不断消融，最终露出大脑区域内部的电线，隐喻高度紧张的精神状态。光照亮整个场景，如同闪光灯定格记忆的瞬间，让观众感受到我过去面对考试时的担忧与紧张。",
      'zh-Hant':"那一刻，時間靜止，記憶被刻在相紙上，在閃爍的白光中化為難忘的片段。我探索自己進入考試狀態時的場景：焦慮充滿全身，汗水與淚水流過皮膚，卻不留下痕跡。裝置中的蠟放大了這些痕跡，使焦慮變得可見。蠟不斷消融，最終露出大腦區域內部的電線，隱喻高度緊張的精神狀態。光照亮整個場景，如同閃光燈定格記憶的瞬間，讓觀眾感受到我過去面對考試時的擔憂與緊張。"
    }
  },
  {
    id:'season-change', category:'origin', layout:'portrait', tone:'light', images:['season-main.jpg','season-second.jpg'],
    title:{en:'Season Change','zh-Hans':'季节更迭','zh-Hant':'季節更迭'},
    medium:{en:'Pencil drawing','zh-Hans':'铅笔素描','zh-Hant':'鉛筆素描'},
    statement:{
      en:"By closely observing the textures and details of withered leaves and dried bark, I present the changes in my thoughts and emotions. Fallen leaves land on the ground, and dead tree trunks fall to the earth to decay and become the soil that nurtures us. Life is the same; people are like leaves that leave the ground. And in the end, they all return to their homeland, giving back through their actions and nourishing the land that gave them life.",
      'zh-Hans':"通过仔细观察枯叶和干树皮的纹理与细节，我呈现自己的思想和情感变化。落叶落到地面，枯树倒下，腐烂后成为滋养我们的土壤。生命亦是如此：人如同离开土地的叶子，最终都会回到故乡，通过自己的行动回馈并滋养孕育了我们的土地。",
      'zh-Hant':"透過仔細觀察枯葉和乾樹皮的紋理與細節，我呈現自己的思想和情感變化。落葉落到地面，枯樹倒下，腐爛後成為滋養我們的土壤。生命亦是如此：人如同離開土地的葉子，最終都會回到故鄉，透過自己的行動回饋並滋養孕育了我們的土地。"
    }
  },
  {
    id:'hands', category:'interiors', layout:'portrait', tone:'light', images:['hands-main.jpg'],
    title:{en:'Hands','zh-Hans':'手','zh-Hant':'手'},
    medium:{en:'Oil on canvas','zh-Hans':'布面油画','zh-Hant':'布面油畫'},
    statement:{
      en:"Through painting, I express my reverence for my grandmother’s generation. She wove the future with her hands. Distant buildings represent future pathways, emerging subtly in the sunrise. Ivy symbolizes vitality, and through her hands, my grandmother connected the present and the future, in the process of which our generation was born. We are protected within the vines.",
      'zh-Hans':"我通过绘画表达对奶奶那一代人的敬意。她用双手编织未来。远处的建筑象征未来的道路，在初升的阳光中隐约显现。常春藤象征生命力；奶奶用双手连接了现在与未来，并在这个过程中孕育了我们这一代。我们被藤蔓保护着。",
      'zh-Hant':"我透過繪畫表達對奶奶那一代人的敬意。她用雙手編織未來。遠處的建築象徵未來的道路，在初升的陽光中隱約顯現。常春藤象徵生命力；奶奶用雙手連接了現在與未來，並在這個過程中孕育了我們這一代。我們被藤蔓保護著。"
    }
  },
  {
    id:'the-thread-of-fate', category:'residue', layout:'portrait', tone:'dark', accent:true, images:['thread-main.jpg','thread-detail.jpg','thread-process.jpg'],
    title:{en:'The Thread of Fate','zh-Hans':'命运之线','zh-Hant':'命運之線'},
    medium:{en:'Installation · mixed media','zh-Hans':'装置 · 综合媒介','zh-Hant':'裝置 · 綜合媒材'},
    statement:{
      en:"Life is like the water cycle, going through various choices and trials to form our unique life trajectories. In the artwork, the pages of a book, a light tube, and decaying plants symbolize the cycle of life and its hardships, hinting at the inevitable difficulties and stains in life. Looking back, it is these people who have overcome hardships that give life its color and meaning.",
      'zh-Hans':"人生如同水循环，经历种种选择与考验，形成独特的人生轨迹。作品中的书页、灯管与腐朽的植物象征生命的循环与艰辛，暗示人生中不可避免的困难和污渍。回望过去，正是那些克服艰难困苦的人，赋予生命色彩与意义。",
      'zh-Hant':"人生如同水循環，經歷種種選擇與考驗，形成獨特的人生軌跡。作品中的書頁、燈管與腐朽的植物象徵生命的循環與艱辛，暗示人生中不可避免的困難和污漬。回望過去，正是那些克服艱難困苦的人，賦予生命色彩與意義。"
    }
  },
  {
    id:'manifest', category:'residue', layout:'landscape', tone:'dark', accent:true, images:['digital-one.jpg','digital-two.jpg'],
    title:{en:'Manifest','zh-Hans':'显现','zh-Hant':'顯現'},
    medium:{en:'Digital work','zh-Hans':'数字创作','zh-Hant':'數位創作'},
    statement:{
      en:"As time passes, the feelings for my hometown will eventually become memories, and no matter how real they are, they will turn into virtual situations. All scenes containing elements of my hometown will become abstract and conceptual, yet the sentiment remains, shining brightly in my mind, as genuine and beautiful as a fairy tale.",
      'zh-Hans':"随着时间流逝，我对家乡的感受终将成为记忆。无论它们曾经多么真实，最终都会变成虚拟的情境。所有包含家乡元素的场景都会变得抽象而观念化，但那份情感依然留在心中，明亮而真切，如童话般美好。",
      'zh-Hant':"隨著時間流逝，我對家鄉的感受終將成為記憶。無論它們曾經多麼真實，最終都會變成虛擬的情境。所有包含家鄉元素的場景都會變得抽象而觀念化，但那份情感依然留在心中，明亮而真切，如童話般美好。"
    }
  }
];

const DISPLAY_ORDER = ['urban-spirit','bonsai','season-change','hands','untitled-painting-series','untitled-painting','flash-bulb-memory','the-thread-of-fate','manifest'];
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
  setText('writing-link',t('writing'));
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

const SECTION_STATEMENTS = {"origin":{"en":"In Chinese migratory culture, to leave is already to plan a return. These works scale down from the migration of Wenzhou traders, to the cultural order of Suzhou courtyards, to the biological fact of decay, asking what binds a person to an origin they have long outgrown. Home appears here not as a fixed site but as a gravitational field—cultural, ancestral, and biological—that continues to act at a distance. Between the restless impulse to venture out and the quiet certainty of being absorbed back into the land, the works hold mobility and rootedness in the same frame, and question whether return is a choice or a form of inheritance.","zh-Hans":"在中国的迁徙文化中，离开本身就包含着归来的计划。这些作品从温州商人的迁徙，到苏州庭院的文化秩序，再到衰败这一生物事实，逐级收窄尺度，追问一个人为何仍被他早已走出的原点束缚。故乡在此不是固定的地点，而是一个跨越距离仍在起作用的引力场，兼具文化、血缘与生物的层面。作品把“向外闯荡的躁动”与“终将被土地收回的笃定”放在同一画框内，并质疑：归返究竟是一种选择，还是一种继承？","zh-Hant":"在中國的遷徙文化中，離開本身就包含著歸來的計畫。這些作品從溫州商人的遷徙，到蘇州庭院的文化秩序，再到衰敗這一生物事實，逐級收窄尺度，追問一個人為何仍被他早已走出的原點束縛。故鄉在此不是固定的地點，而是一個跨越距離仍在起作用的引力場，兼具文化、血緣與生物的層面。作品把「向外闖蕩的躁動」與「終將被土地收回的篤定」放在同一畫框內，並質疑：歸返究竟是一種選擇，還是一種繼承？"},"interiors":{"en":"This group treats family not as subject matter but as a spatial structure through which memory is organized. Domestic furniture, a grandmother's labor, and a view from a window become thresholds between interior and landscape, between what was lived and what is later reconstructed. Drawing on Buddhist impermanence and the visual language of Chinese shanshui, the works examine a persistent contradiction: to understand that every attachment dissolves is not the same as being able to release it. Past and present are held in tension through color, revealing the remembered home as something continually remade from where the artist now stands, sustained by the very ties that complicate leaving.","zh-Hans":"这组作品不把家庭当作题材，而是当作组织记忆的空间结构。家具、祖母的劳作、窗外的视野，成为内部与风景、亲历与事后重构之间的门槛。作品借助佛教的“无常”与中国山水的视觉语言，探讨一个始终存在的矛盾：理解一切依恋终将消散，并不等于能够放下它。过去与当下通过色彩形成张力，让被记住的家显现为一个从“我如今所站的位置”不断重塑的对象，并被那些让离开变得困难的纽带所维系。","zh-Hant":"這組作品不把家庭當作題材，而是當作組織記憶的空間結構。家具、祖母的勞作、窗外的視野，成為內部與風景、親歷與事後重構之間的門檻。作品借助佛教的「無常」與中國山水的視覺語言，探討一個始終存在的矛盾：理解一切依戀終將消散，並不等於能夠放下它。過去與當下透過色彩形成張力，讓被記住的家顯現為一個從「我如今所站的位置」不斷重塑的對象，並被那些讓離開變得困難的紐帶所維繫。"},"residue":{"en":"Memory is rarely a stable archive; it behaves more like a material—one that melts, oxidizes, and leaves stains. These works trace how experience converts into residue and afterimage, whether as an instant seared by light, a life accumulated as marks, or a homeland drifting toward abstraction. Rather than recovering the past, they stage the processes by which it is distorted, preserved, and made visible: anxiety rendered as dissolving form, hardship as sediment, nostalgia as growing conceptual distance. The tension lies between the vividness of what is remembered and its inevitable decay, between the body that records and the time that erases.","zh-Hans":"记忆很少是稳定的档案，它更像一种会融化、氧化并留下污渍的材料。这些作品追踪经验如何转化为残留与余像：可能是被光灼刻的一瞬，是一生累积的痕迹，也可能是正在滑向抽象的故乡。它们不试图找回过去，而是呈现过去被扭曲、保存与显影的过程：焦虑化为消融的形态，困苦成为沉积物，乡愁变成不断拉长的观念距离。张力在于被记住之物的鲜明与其必然的衰退之间，在于会记录的身体与会抹去的时间之间。","zh-Hant":"記憶很少是穩定的檔案，它更像一種會融化、氧化並留下污漬的材料。這些作品追蹤經驗如何轉化為殘留與餘像：可能是被光灼刻的一瞬，是一生累積的痕跡，也可能是正在滑向抽象的故鄉。它們不試圖找回過去，而是呈現過去被扭曲、保存與顯影的過程：焦慮化為消融的形態，困苦成為沉積物，鄉愁變成不斷拉長的觀念距離。張力在於被記住之物的鮮明與其必然的衰退之間，在於會記錄的身體與會抹去的時間之間。"}};
function renderCategories(){
  const container=byId('theme-list');
  container.innerHTML=CATEGORIES.map((category,i)=>`<div class="theme-entry"><button type="button" class="theme-option" data-category="${category.id}" aria-pressed="${activeCategory===category.id}"><span class="theme-number">${String(i+1).padStart(2,'0')}</span><span>${category.label[locale]}</span><span class="theme-count">${String(category.id==='all'?WORKS.length:WORKS.filter(work=>work.category===category.id).length).padStart(2,'0')}</span></button>${SECTION_STATEMENTS[category.id]?`<details class="theme-description"><summary>${locale==='en'?'Read section statement':locale==='zh-Hans'?'阅读主题说明':'閱讀主題說明'}</summary><p>${SECTION_STATEMENTS[category.id][locale]}</p></details>`:''}</div>`).join('');
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

