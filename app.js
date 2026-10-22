const stories = [
  ["一座为动物建的桥", "A Bridge Built for Animals", 399, "环球", "Global"],
  ["乐事薯片的品牌故事", "The Brand Story of Lay's Potato Chips", 433, "环球", "Global"],
  ["火星上的无人机", "The Drone on Mars", 420, "科学", "Science"],
  ["把自然搬进建筑的大师", "The Master Who Brought Nature into Architecture", 400, "人物", "People"],
  ["吃掉代码的黑洞", "The Black Hole That Eats Code", 403, "生活", "Life"],
  ["花园城市新加坡", "Garden City Singapore", 420, "环球", "Global"],
  ["最长时间的科学实验", "The Longest Scientific Experiment", 468, "科学", "Science"],
  ["土豆是怎样流行起来的", "How Potatoes Became Popular", 388, "历史", "History"],
  ["收音机里的音乐最好听", "Music on the Radio Sounds the Best", 402, "生活", "Life"],
  ["失败的实验，成功的发现", "A Failed Experiment, A Successful Discovery", 421, "人物", "People"],
  ["校园里的小狗", "The Little Dog on Campus", 443, "生活", "Life"],
  ["卡森的诗句", "Carson's Verses", 950, "人物", "People"],
  ["《哈利波特》故事开始的地方", "Where the Harry Potter Story Began", 442, "人物", "People"],
  ["电影的发明历史", "The History of Film Invention", 565, "历史", "History"],
  ["挪威的蘑菇文化", "Norwegian Mushroom Culture", 410, "文化", "Culture"]
];

const grid = document.querySelector(".story-grid");
const categoryColors = { "环球": "#aca193", "科学": "#5f84a9", "文化": "#8d5877", "人物": "#d89fa4", "生活": "#aa94c2", "历史": "#a4be9a" };
grid.innerHTML = stories.map(([titleZh, titleEn, words, themeZh, themeEn], index) => {
  const number = String(index + 1).padStart(2, "0");
  const folderTitle = titleZh.replaceAll("/", "／");
  const color = categoryColors[themeZh];
  return `<a class="story-card" href="./${number}${folderTitle}/${number}.html" target="_blank" rel="noopener noreferrer">
    <img src="./PIC${number}.jpg" alt="${titleEn}" loading="lazy">
    <div class="card-caption" style="--category-color:${color}">
      <div class="category-badge">
        <span class="story-number">${number}</span>
        <span class="category-copy"><span class="category-name han">${themeZh}</span><span class="category-name-en">${themeEn}</span></span>
      </div>
      <div class="caption-copy">
        <span class="title-row"><span class="story-title han">${titleZh}</span><span class="word-count">${words}字</span></span>
        <span class="english-row"><span class="story-title-en">${titleEn}</span><span class="hsk-level">HSK3</span></span>
      </div>
    </div>
  </a>`;
}).join("");
