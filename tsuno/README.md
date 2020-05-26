# WebLayout_pratice

***
## Side project: Tsunomaki's rock-paper-scissors.
## 個人專案: 角卷棉芽猜拳
***

![image](https://github.com/JohnnyOfSnow/JohnnyOfSnow.github.io/blob/master/tsuno/image/demo.jpg)

**專案說明：經由撥放影片與角卷棉芽猜拳**

* **使用技術**
  * **前端(Html、Html5、CSS、CSS3、JavaScript)**
  	* Html: 定義網頁標籤
  	* Html5: video標籤
  	* CSS: 渲染網頁元素
  	* JavaScript: 控制影片撥放、控制時間倒數條
  	* BootStrap4: 桌機、平板、手機板畫面設計

* **功能**
  * 四種語言切換(繁體中文、簡體中文、英文、日文)
  * 播放猜拳影片與玩家互動(javascript控制video載入與播放)
  * 時間計時條(javascript控制css屬性)

* **猜拳亂數**
  	* tsuno: 真正角卷棉芽要出的拳
  	* oldTsuno: 角卷棉芽上次出過的拳
  	* repeated: 想出上次拳的想法
  	* repeated_judge: 決定要出同樣拳

* **猜拳演算法**
	* 先記錄角卷棉芽上次出過的拳(oldTsuno)，再亂數(Math.floor)取角卷棉芽這次想出的拳，接著，角卷棉芽心理會有出上次拳的想法(repeated)，但會有另一個想法是不要出同樣拳，因此，用(repeated_judge)是否決定出上次拳。