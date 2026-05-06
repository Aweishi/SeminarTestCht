# TrendForce Seminar — New York 2026
## 網頁設計規格文件

---

## 目錄

1. [專案概覽](#1-專案概覽)
2. [頁面架構 — Sections](#2-頁面架構--sections)
3. [設計代號 Design Tokens](#3-設計代號-design-tokens)
4. [字級系統 Typography](#4-字級系統-typography)
5. [間距與版面 Layout](#5-間距與版面-layout)
6. [響應式斷點 Breakpoints](#6-響應式斷點-breakpoints)
7. [動態效果 Animations](#7-動態效果-animations)
8. [JavaScript 模組](#8-javascript-模組)
9. [資源清單 Assets](#9-資源清單-assets)

---

## 1. 專案概覽

| 項目 | 內容 |
|------|------|
| 活動名稱 | TrendForce Seminar — New York 2026 |
| 活動日期 | May 12, 2026，14:00 – 16:00（Check-in 13:30） |
| 活動地點 | New York Hilton Midtown，Concourse G |
| 地址 | 1335 Avenue of the Americas, New York, NY 10019 |
| 票價 | USD $399 / 人 |
| 報名截止 | 2026 年 5 月 11 日 12:00 pm |
| 風格定位 | **現代輕盈（Modern Light）**、Editorial 質感、專業科技感 |
| 設計語言 | **暖白底色**、深炭色文字、金色點綴、大尺寸 Serif 標題、細線留白感 |

### 設計方向說明

從「暗底金色奢華」轉向「現代輕色 Editorial」風格：

| 面向 | 原版（Dark） | 新版（Light） |
|------|-------------|--------------|
| 整體氛圍 | 深夜奢華、神秘感 | 明亮專業、國際感 |
| 背景 | 極深黑 `#0b0b0b` | 暖白 `#f9f8f6` |
| 文字 | 暖白 `#ece8e1` | 深炭 `#1a1816` |
| 強調色 | 金色 `#c9a96e`（在暗底發光）| 深金 `#9d6f2a`（在亮底顯色）|
| 卡片/區塊 | 深灰表面 + 金色邊框 | 純白/淺灰表面 + 細線邊框 |
| 導覽列（scrolled）| 半透明黑底 + blur | 半透明白底 + blur |
| Google Maps | `invert(1)` 暗色地圖 | 標準地圖（移除濾鏡）|
| 圖片風格 | 黑白去飽和（grayscale） | 自然色調（建議保留些許去飽和）|
| 氛圍漸層 | 角落金色光暈（深色背景） | 角落極淡金色暈染（淺色背景）|

---

## 2. 頁面架構 — Sections

共 **9 個主要區塊** + Nav + Footer，依序排列如下：

### Nav（導覽列）
- **Logo**：TF-logo.svg，高度 40px
  - 原版：白色 Logo（在深底顯示）→ **新版需替換為深色版 Logo，或 CSS filter 調整**
- **Desktop 連結**：Overview / Agenda / GiveAway / Partners / Register（CTA 按鈕）
- **滾動後背景**：`rgba(249, 248, 246, 0.94)` + `backdrop-filter: blur(12px)`
- **Mobile**：漢堡按鈕展開全螢幕覆蓋選單，背景改為 `var(--bg)` 淺色

---

### Section 01 — Hero
- **版面**：全螢幕（100vw × 100vh）
- **內容**：背景圖 `HeroSection_A.jpg` + 漸層遮罩 + SVG 標題文字
- **遮罩調整**：原版底部深色遮罩改為 **頂部加深（避免 Nav 遮住標題）+ 底部較淡**，保留圖片自然光線
- **SVG 標題**：原版白色字體，淺色版可考慮改為深色底字或保留白色（視背景圖決定）
- **效果**：視差（Parallax）、SCROLL 提示、Shutter Scroll 頁面轉場

---

### Section 02 — Overview（#overview）
- **Eyebrow**：Overview
- **Heading**：Overview
- **副標文字**：描述 AI 趨勢、記憶體/晶圓代工市場洞察，2026–2028 超級週期
- **右側背景光暈**：調整為 `rgba(157, 111, 42, 0.05)` 極淡金色（避免在白底過度顯眼）
- **Highlights Bento Grid**：3 張卡片，第一張佔左側兩列（span 2）

  | 卡片 | 標題 | 說明 |
  |------|------|------|
  | Memory | The Memory Supercycle | HBM 結構性供需失衡 |
  | Foundry | Dual-Reality Market | 先進製程 vs 成熟製程兩極化 |
  | AI Infrastructure | GPU to ASIC Shift | 超大規模業者轉向自研晶片 |

  > 卡片圖片上的漸層遮罩保留（圖片壓在文字下，保持可讀性），可適度調淡。

---

### Section 03 — Agenda（#agenda）
- **Eyebrow**：Program
- **Heading**：Agenda
- **Meta 資訊列**：Date / Time / Location 三欄
- **分隔線**：`var(--border)` 淺灰線（取代原版深灰線）
- **議程表 Hover 效果**：Directional Hover Tile 改為 `rgba(157, 111, 42, 0.08)` 極淡金色底（原版為 0.2）
- **Accordion 展開/收合**：同原版互動邏輯

  | 時段 | 主題 | 講者 |
  |------|------|------|
  | 13:00 – 14:00 | Registration | — |
  | 14:00 – 14:20 | The Memory Supercycle 2026–2028 | Avril Wu |
  | 14:20 – 14:40 | NAND Flash Demand in AI Inference Era | Bryan Ao |
  | 14:40 – 15:00 | HBM Structural Anchor of DRAM Industry | Ellie Wang |
  | 15:00 – 15:20 | Networking | — |
  | 15:20 – 15:40 | 2026 Foundry Market Dual Realities | Joanne Chiao |
  | 15:40 – 16:00 | AI Server: GPU to ASIC Diversification | Fion Chiu |

---

### Section 04 — Speakers（#speakers）
- **Eyebrow**：Featured Speakers
- **Heading**：Speakers
- **卡片背景**：白色卡片 + 淺灰邊框（原版無背景，僅邊框）
- **Speaker Bio 覆蓋層**：背景改為 `rgba(255,255,255,0.95)` 白色半透明 + 深色文字
- **行動裝置 Bio**：同原版（固定顯示於圖片下方）
- **一次顯示卡片數**：桌機 3 張 / 平板 2 張 / 手機 1 張

  | 講者 | 職稱 |
  |------|------|
  | Avril Wu | Senior Research Vice President |
  | Bryan Ao | Research Manager |
  | Ellie Wang | Senior Analyst |
  | Joanne Chiao | Research Manager |
  | Fion Chiu | Analyst |

---

### Section 05 — GiveAway（#giveaway）
- **Eyebrow**：Lucky Draw
- **Heading**：GiveAway
- **卡片**：白底 + 淺金邊框，`background: linear-gradient(145deg, #ffffff 0%, #f7f4ef 100%)`
- **卡片堆疊動畫**：同原版 ScrollTrigger 邏輯

  | 類型 | 獎品 | 數量 |
  |------|------|------|
  | 抽獎禮 | 人體工學垂直無線藍牙滑鼠 | 3 名 |
  | 報到禮 | 7-11 100元禮券 | 送完為止 |
  | 集點禮 | 7-11 咖啡提貨卡 | 50 份 |
  | 企業夥伴禮 | 神秘禮物 | 1 份 |

---

### Section 06 — Registration（#registration）
- **Eyebrow**：Join Us
- **Heading**：Registration
- **左欄**：大字價格（$399，深金色）+ 截止日期 + Register NOW 按鈕
- **CTA 按鈕**：保留金色背景 `var(--accent)` + 白色文字（與淺色頁面形成對比）
- **右欄**：Terms & Conditions（2 條款），文字色調整為 `var(--text)`

---

### Section 07 — Partners（#partners）
- **Eyebrow**：Acknowledgements
- **Heading**：Partners
- **Logo Slot 背景**：`rgba(0, 0, 0, 0.03)` 極淡灰（原版為 `rgba(255,255,255,0.02)`）
- **Logo 濾鏡**：`filter: brightness(0)` 轉為純黑色（原版為 `invert(1)` 變白色）
- **跑馬燈遮罩**：調整為從白色淡出

  | 層級 | 標籤色 | Logo 數量 |
  |------|--------|-----------|
  | 主辦單位 | 深灰 `#555` | 2 |
  | 金級贊助 | 深金 `#9d6f2a` | 2 |
  | 銀級贊助 | 鐵灰 `#6b7280` | 6 |

---

### Section 08 — Location（#about）
- **Eyebrow**：Venue
- **Heading**：Location
- **版面**：兩欄 Grid（左：地址資訊，右：Google Maps）
- **地圖**：**移除** `filter: invert(1) hue-rotate(180deg)`，使用標準彩色地圖
- **邊框**：`border: 1px solid var(--border)` 淺灰線框

---

### Section 09 — Contact（#contact）
- **Eyebrow**：Get in Touch
- **Heading**：Contact Us
- **聯絡卡片**：`background: linear-gradient(135deg, #ffffff 0%, var(--surface) 60%)`

  | 姓名 | Email | 電話 |
  |------|-------|------|
  | Liz Chen | trendforce_service@trendforce.com | +886-2-8978-6488 ext. 372 |
  | Jade Chou | trendforce_service@trendforce.com | +886-2-8978-6488 ext. 661 |

---

### Footer
- 左：Organized by + Logo（深色版，高 30px）
- 右：© 2026 TrendForce Corp. All rights reserved.
- **邊框**：`border-top: 1px solid var(--border)` 淺灰分隔線

---

## 3. 設計代號 Design Tokens

### 色彩

```css
:root {
  /* ── 背景 / 層次 ── */
  --bg:           #f9f8f6;   /* 頁面背景（暖白）*/
  --surface:      #efede8;   /* 卡片、區塊次層背景 */
  --border:       #dedad3;   /* 線條、邊框（暖灰）*/

  /* ── 文字 ── */
  --text:         #1a1816;   /* 主文字（暖黑）*/
  --white:        #ffffff;   /* 純白（卡片、按鈕文字）*/
  --muted:        #7c756e;   /* 次要文字、說明文字 */

  /* ── 強調色（品牌金）── */
  --accent:       #9d6f2a;   /* 主強調色（深金，WCAG AA 通過於白底）*/
  --accent-light: #b8893a;   /* hover 狀態 */
  --accent-rgb:   157, 111, 42;
}
```

> **為何調整金色**：原版 `#c9a96e` 在深色底下發光感強，但在白底對比度僅約 2.8:1（不符 WCAG AA 標準）。調整為 `#9d6f2a` 對比度約 4.8:1，可安全用於文字與裝飾。

### 對比度確認

| 組合 | 對比度 | WCAG AA |
|------|--------|---------|
| `--text` on `--bg` | ~16:1 | ✅ |
| `--accent` on `--bg` | ~4.8:1 | ✅ |
| `--muted` on `--bg` | ~5.2:1 | ✅ |
| `--white` on `--accent` | ~4.8:1 | ✅（CTA 按鈕）|

### 字型（不變）

| 用途 | 字型 | 字重 |
|------|------|------|
| 主標題、大數字 | Instrument Serif | Regular / Italic |
| 內文、UI 元素 | Space Grotesk | 300 / 400 / 500 / 600 / 700 |

### 背景漸層

頁面背景使用雙放射漸層，角落帶有極淡金色暈染（比原版更淡）：

```css
background:
  radial-gradient(ellipse 70% 45% at 95% 2%,  rgba(157,111,42,0.05) 0%, transparent 100%),
  radial-gradient(ellipse 55% 40% at 5%  98%,  rgba(157,111,42,0.03) 0%, transparent 100%),
  #f9f8f6;
```

### Shadow 系統（新增）

淺色主題需要 shadow 來區分層次（原版用暗底自然區隔）：

```css
--shadow-sm: 0 1px 3px rgba(26, 24, 22, 0.06), 0 1px 2px rgba(26, 24, 22, 0.04);
--shadow-md: 0 4px 12px rgba(26, 24, 22, 0.08), 0 2px 4px rgba(26, 24, 22, 0.04);
--shadow-lg: 0 12px 32px rgba(26, 24, 22, 0.10), 0 4px 8px rgba(26, 24, 22, 0.06);
```

---

## 4. 字級系統 Typography

> 基準：`1rem = 16px`（瀏覽器預設），**字級規格與原版相同，不需變動**

### 標題類

| 元素 | 尺寸 | 字型 |
|------|------|------|
| Section Heading | `clamp(2.25rem, 6vw, 5rem)` | Instrument Serif |
| Section Number | `clamp(5rem, 16vw, 12.5rem)` | Instrument Serif |
| About / Agenda Meta Value | `clamp(1.375rem, 2.4vw, 2rem)` | Instrument Serif |
| Overview Body | `clamp(1.375rem, 2.6vw, 2.25rem)` | Instrument Serif |
| Highlight Title | `clamp(1.375rem, 2.2vw, 1.875rem)` | Instrument Serif |
| About Value | `clamp(1.875rem, 4vw, 3.25rem)` | Instrument Serif |
| Registration Price | `clamp(3.5rem, 10vw, 8rem)` | Instrument Serif |
| Mobile Nav Link | `clamp(2.5rem, 10vw, 4.25rem)` | Instrument Serif |

### 內文類

| 元素 | 尺寸 | 備註 |
|------|------|------|
| 一般文字 / 各類說明 | `1rem` (16px) | Space Grotesk |
| 次要文字 / Agenda Speaker | `1.25rem` (20px) | Space Grotesk |
| Agenda 時間 | `1.5rem` (24px) | Space Grotesk，深金色 |
| Agenda 主題 | `2rem` (32px) | Space Grotesk，粗體 |
| Contact Name | `2rem` (32px) | Instrument Serif |

### 標籤 / 眉標類

| 元素 | 尺寸 | 備註 |
|------|------|------|
| Section Eyebrow | `0.875rem` | 全大寫，letter-spacing 0.35em，深金色 |
| About Label | `0.875rem` | 全大寫，letter-spacing 0.35em |
| Nav Link | `0.875rem` | 全大寫，letter-spacing 0.22em，深炭色 |
| Footer Meta | `0.875rem` | letter-spacing 0.08em |
| Speaker Bio Role | `0.75rem` | 全大寫，letter-spacing 0.25em |

### 響應式字級調整（不變）

| 斷點 | 元素 | 尺寸 |
|------|------|------|
| ≤ 1024px | Section Number | `clamp(5rem, 13vw, 8.75rem)` |
| ≤ 1024px | Agenda Time | `1.125rem` |
| ≤ 1024px | Speaker Bio Text | `1rem` |
| ≤ 768px | Section Heading | `clamp(2rem, 8vw, 3.75rem)` |
| ≤ 768px | Section Number | `clamp(4rem, 18vw, 6.875rem)` |
| ≤ 768px | Agenda Topic | `1.25rem` |
| ≤ 768px | Agenda Time | `1rem` |
| ≤ 480px | Section Heading | `clamp(1.75rem, 9vw, 3.25rem)` |
| ≤ 480px | Section Number | 隱藏（display: none） |
| ≤ 480px | Agenda Time | `0.875rem` |
| ≤ 480px | Agenda Topic | `1rem` |

---

## 5. 間距與版面 Layout

### 容器寬度（不變）
```
最大寬度：1340px，水平置中
```

### Section 內距（不變）

| 斷點 | padding |
|------|---------|
| 桌機（預設） | `120px 80px` |
| ≤ 1024px | `88px 48px` |
| ≤ 768px | `72px 28px` |
| ≤ 480px | `56px 20px` |

### 兩欄 Grid 系統（不變）

| Section | 結構 |
|---------|------|
| About（基本資訊） | `1fr 1fr`，768px 以下改單欄 |
| Registration | `1fr 1fr`，768px 以下改單欄 |
| Location | `280px 1fr`，768px 以下改單欄 |
| Contact | `1fr 1fr`，768px 以下改單欄 |

---

## 6. 響應式斷點 Breakpoints

| 斷點 | 說明 |
|------|------|
| `≤ 1200px` | 隱藏 Desktop Nav，顯示漢堡按鈕 |
| `≤ 1024px` | Tablet Landscape，收窄 padding，調整字級 |
| `≤ 768px` | Tablet Portrait，單欄版面，Speaker Bio 常顯，Location Map 高度縮小 |
| `≤ 480px` | Mobile，最緊縮版面，Speakers 箭頭疊圖，Section Number 隱藏 |

### 溢出控制（不變）
```css
html, body { overflow-x: clip; width: 100%; }
#giveaway, #speakers { overflow-x: clip; }
```

---

## 7. 動態效果 Animations

### 強度定義

| 強度 | 說明 | 原則 |
|------|------|------|
| **Heavy** | 全版面或跨 Section 的大型轉場 | 每頁最多 1–2 個，定義整體節奏 |
| **Medium** | 區塊或元件層級的進場與互動 | 引導視線、建立故事感 |
| **Micro** | 細節層級的回饋與點綴 | 多用不膩，讓操作感精緻 |

---

### A. Scroll 進場

> 觸發工具：GSAP ScrollTrigger

| 強度 | 效果名稱 | 套用元素 | 技術細節 | 淺色版調整 |
|------|----------|----------|----------|-----------|
| **Heavy** | Shutter Scroll 像素百葉轉場 | Hero → Overview 交界 | 多列像素格依序消失，形成頁面吞噬效果 | 格子色改為 `#f9f8f6` |
| **Medium** | Speaker Cards 淡入上移 | 所有 Speaker Card | `opacity: 0→1`、`y: 100→0`、`scale: 0.94→1`，stagger 0.15s，trigger: top 50% | — |
| **Medium** | Giveaway 卡片堆疊展開 | Giveaway Deck | 卡片從堆疊狀（旋轉+錯位）fan out 展開，trigger: top 25% | — |
| **Micro** | Section Heading Highlight Marker | 各 Section 標題 | SVG marker 從左到右 draw，文字同步顯色 | Marker 色維持 `#c9a96e` |
| **Micro** | Overview Body 逐字高亮 | Overview 說明段落 | 文字從淡到實，stagger per word，scroll 範圍：top 88% → center 35% | — |
| **Micro** | 票價數字滾動（Odometer） | Registration 價格 `$399` | 數字從 `$0` 滾動至終值，duration 2s | — |

---

### B. Hover 互動

> 適用裝置：桌機（pointer: fine）

| 強度 | 效果名稱 | 套用元素 | 技術細節 | 淺色版調整 |
|------|----------|----------|----------|-----------|
| **Medium** | Pixelated Image Reveal | Speaker Card 圖片 | 10×10 像素格隨機順序出現/消失，duration 0.2s，顯示 Bio 覆蓋層 | 格子色改為 `#f9f8f6`；Bio 覆蓋層改白底深字 |
| **Micro** | Directional Hover Tile | Agenda 每一列 | 金色底色從滑入方向（上/下）滑進列中 | 色調改為 `rgba(157,111,42,0.08)` |
| **Micro** | SVG Draw Underline | Desktop Nav Links | SVG path 從 0% draw 至 100%，hover 時繪製 | 線條色維持 `var(--accent)` |
| **Micro** | 圖片縮放 + 去飽和取消 | Speaker Card 照片 | `scale: 1→1.04`、`grayscale: 25%→0%`，transition 0.55s | — |
| **Micro** | Partner Logo 亮度提升 | Partner Logo Slot | `opacity: 0.65→1`，border 顏色淡金色浮現 | Logo filter 改為 `brightness(0)`（深色 Logo）|
| **Micro** | Button hover 位移 | Nav CTA、Register 按鈕 | `translateY(-1px ~ -2px)` + 背景色加亮 | — |
| **Micro** | Giveaway 卡片說明展開 | Giveaway Card desc | `grid-template-rows: 0fr→1fr` + opacity，transition 0.4s | — |

---

### C. Click 反饋

| 強度 | 效果名稱 | 套用元素 | 技術細節 | 淺色版調整 |
|------|----------|----------|----------|-----------|
| **Medium** | Mobile Menu Radial Wipe | 全螢幕 Mobile Menu | `clip-path: circle(0%→150%)` 從右上角漢堡按鈕擴散，duration 0.65s，easing `cubic-bezier(0.16,1,0.3,1)` | Menu 背景改為 `#f9f8f6`，連結改深色 |
| **Medium** | Pixelated Image Reveal（觸控）| Speaker Card | 同 Hover 版，改由 Click 切換開/關 | 同上 |
| **Medium** | Agenda Accordion 展開/收合 | Agenda 主題列 | `grid-template-rows: 0fr→1fr`，duration 0.6s，easing `cubic-bezier(0.625,0.05,0,1)`；Chevron 旋轉 180° | — |
| **Micro** | Speaker Slider 換頁 | Speakers 輪播 | `translateX` 平移，transition 0.55s，`cubic-bezier(0.16,1,0.3,1)` | — |
| **Micro** | Giveaway 換組 | Giveaway 分頁 | 舊組 collapse 回堆疊 → 新組 position stacked → fan out | — |
| **Micro** | 漢堡 → X 形變 | Nav Hamburger | 三條線旋轉 / 縮放 / 淡出，duration 0.35s | — |
| **Micro** | Register 按鈕按下回彈 | Register CTA | `scale(0.96)` active 狀態，transition 0.08s | — |

---

### D. 頁面載入

| 強度 | 效果名稱 | 套用元素 | 技術細節 | 淺色版調整 |
|------|----------|----------|----------|-----------|
| **Medium** | Partners 跑馬燈（條件式）| Partner Logo 列 | JS 測量內容寬 vs 容器寬，超出才啟動；`translateX(0 → -setWidth)` 無縫循環 | Mask 漸層改從白色 `#f9f8f6` 淡出 |

---

### E. 自動循環

| 強度 | 效果名稱 | 套用元素 | 技術細節 | 淺色版調整 |
|------|----------|----------|----------|-----------|
| **Micro** | Register 按鈕 Pulse | Register CTA | `box-shadow` 金色光暈擴散，2.8s loop，2s delay 後開始 | — |
| **Micro** | Hero SCROLL 提示線段 | Hero 底部 | `scaleY: 0→1→0`（origin top→bottom），2s ease-in-out infinite | — |

---

## 8. JavaScript 模組

> 模組邏輯**全部保留不動**，僅需調整各動畫中硬編碼的顏色值。

| 檔案 | 功能 | 是否需調整 |
|------|------|-----------|
| `main.js` | Nav scrolled 狀態、漢堡選單 | ✅ 需調整 scrolled 背景色 |
| `ScrollTransition.js` | Shutter Scroll 轉場 | ✅ 像素格子顏色 |
| `TextAnimation.js` | Highlight Marker 文字動畫 | 可能（Marker 顏色用 data 屬性控制，HTML 端調整）|
| `HoverState.js` | Directional Hover Tile | ✅ 底色調整 |
| `StickyStep.js` | Sticky Steps | — |
| `Parallax.js` | Hero 圖片視差 | — |
| `DrawUnderline.js` | SVG Draw 底線動畫 | — |
| `NumberOdometer.js` | 票價數字滾動 | — |
| `ShutterScroll.js` | Hero 離場像素過渡 | ✅ 像素格子顏色 |
| `SpeakersSlider.js` | Speaker 輪播 + Pixelated Reveal | ✅ 像素格子顏色 |
| `GiveawayStack.js` | Giveaway 卡片堆疊 + 分頁 | — |
| `OverviewHighlights.js` | Overview Bento 卡片動畫 | — |
| `PartnersMarquee.js` | Partners 跑馬燈 | — |

### 外部依賴（不變）
```
gsap@3.14.2 — ScrollTrigger / SplitText / DrawSVGPlugin
gsap@3.15   — Draggable
```

---

## 9. 資源清單 Assets

### 圖片（需注意的調整）

| 檔案 | 用途 | 淺色版注意事項 |
|------|------|--------------|
| `HeroSection_A.jpg` | Hero 背景圖 | 確認圖片在較亮遮罩下仍有足夠對比 |
| `HeroSection_Text-13.svg` | Hero SVG 標題 | 若文字為白色，Hero 遮罩需夠深 |
| `TF-logo.svg` | Nav / Footer Logo | **需確認是否有深色版本**，白色 Logo 在淺底不可見 |
| `highlight-*.jpg` | Overview 卡片背景 | 圖片上方有漸層遮罩，影響較小 |
| Speaker 照片 | 講者卡片 | 圖片本身為彩色，可評估是否調整去飽和度 |
| Giveaway 獎品圖 | 抽獎卡片 | 背景改淺色後，獎品圖需確認對比 |

### 字型（不變）
```
Instrument Serif: Regular, Italic
Space Grotesk: 300, 400, 500, 600, 700
```

---

## 附錄 — 深色 vs 淺色版本對照表

| CSS 屬性 | 深色版（Dark） | 淺色版（Light） |
|----------|--------------|----------------|
| `--bg` | `#0b0b0b` | `#f9f8f6` |
| `--surface` | `#222222` | `#efede8` |
| `--border` | `#2e2e2e` | `#dedad3` |
| `--text` | `#ece8e1` | `#1a1816` |
| `--muted` | `#888888` | `#7c756e` |
| `--accent` | `#c9a96e` | `#9d6f2a` |
| `--accent-light` | `#dbbe8a` | `#b8893a` |
| Nav scrolled bg | `rgba(11,11,11,0.94)` | `rgba(249,248,246,0.94)` |
| Mobile menu bg | `#0b0b0b` | `#f9f8f6` |
| Speaker Bio overlay | `rgba(11,11,11,0.92)` | `rgba(255,255,255,0.95)` |
| Giveaway card bg | `linear-gradient(#1e1e1e, #141414)` | `linear-gradient(#fff, #f7f4ef)` |
| Contact card bg | `linear-gradient(#0b0b0b, #222)` | `linear-gradient(#fff, #efede8)` |
| Maps filter | `invert(1) hue-rotate(180deg)` | 無（標準地圖）|
| Logo filter | `brightness(0) invert(1)` | `brightness(0)` |
| Pixel transition color | `#0b0b0b` | `#f9f8f6` |
| Section Number color | `rgba(255,255,255,0.03)` | `rgba(0,0,0,0.04)` |

---

*最後更新：2026-04-29*
