2026 H1 KPI Review 網站使用說明

1. index.html：主頁
2. styles.css：視覺樣式與互動效果
3. script.js：行銷頁資料、Banner資料、輪播、Lightbox、Scroll reveal
4. assets/images：目前放示意縮圖，可替換成你的實際截圖
5. assets/videos/travel-card.mp4：動態賀卡影片

替換上線網址：
打開 script.js，找到 landingPages 陣列，把 url:'#' 改成實際公司網址。

替換圖片：
將你的截圖放到 assets/images/pages 或 assets/images/banners，並在 script.js 修改 img 路徑。

考核 AI 使用備註建議：
使用 AI 協助架構整理、文字潤飾與語句檢查；成果內容、判斷依據與實際執行方式由本人確認。

v4 更新：
1. Banner 每一排的小箭頭改為直接綁定事件，左右切換可循環捲動。
2. Banner 點開後不再切到全部 Banner，而是只切換「同一個專案」的 Resize / 延伸尺寸圖。
3. 要新增同專案尺寸圖，請在 script.js 對應 Banner 的 variants 陣列加入圖片路徑。
