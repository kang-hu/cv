<script setup>
import zhTw from "element-plus/lib/locale/lang/zh-tw";
import { ref } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {
  ElAvatar,
  ElIcon,
  ElImage,
  ElButton,
  ElDivider,
  ElConfigProvider,
  ElContainer,
  ElRow,
  ElCol,
  ElMain,
  ElFooter,
  ElDatePicker,
  ElImageViewer,
} from "element-plus";
import {
  Link,
  Location,
  Message,
  Iphone,
  Film,
  Coffee,
} from "@element-plus/icons-vue";
import rutenAd from "Assets/ruten_ad.png";
import rutenAdBoard from "Assets/ruten_ad_board.png";
import rutenLogistic from "Assets/ruten_logistic.png";
import rutenSeller from "Assets/ruten_seller.png";
import avatar from "Assets/chungkanghu-s.jpg";

let locale = zhTw;
let value1 = ref("");
let url = Link;
let isOpen = ref(false);
const srcList = [rutenAd, rutenAdBoard, rutenLogistic, rutenSeller];

const open = () => {
  isOpen.value = true;
};
const closeImgView = () => {
  isOpen.value = false;
};
</script>

<template>
  <el-config-provider :locale="locale">
    <div class="common-layout">
      <el-container>
        <el-main>
          <section>
            <el-row class="row-bg" justify="space-between" align="">
              <el-col :span="16">
                <el-row align="middle">
                  <el-col class="text-left">
                    <h1 class="text-3xl font-bold">胡 仲 康</h1>
                    <h1 class="text-2xl font-bold">CHUNG-KANG HU</h1>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8" class="">
                <div class="text-sm text-right">
                  <p>
                    <el-icon color="#000000" :size="14" class="mr-2"
                      ><Message /></el-icon
                    >s971611@gmail.com
                  </p>
                  <p>
                    <el-icon color="#000000" :size="14" class="mr-2"
                      ><Iphone /></el-icon
                    >+886912450189
                  </p>
                  <p>
                    <el-icon color="#000000" :size="14" class="mr-2"
                      ><Location /></el-icon
                    >New Taipei City, Taiwan
                  </p>
                </div>
              </el-col>
            </el-row>
          </section>
          <el-divider />
          <section>
            <el-row>
              <el-col :span="24" class="">
                <section class="">
                  <h3 class="text-xl font-bold">工作經歷</h3>
                  <article class="mb-1">
                    <p class="text-base font-bold">
                      <el-icon color="#000000" :size="12" class="mr-2"
                        ><Coffee /></el-icon
                      >露天市集國際資訊股份有限公司,<span class="ml-2 italic font-normal text-gray-500">08/2018 - 05/2022</span>
                    </p>
                    <p class="pl-5 font-bold">
                      廣告技術部, 主任<span class="ml-2 italic font-normal text-gray-500">2年+</span>
                      <a
                          href="javascript:void"
                          class="ml-1 align-middle"
                          @click.prevent="open()"
                          ><el-icon color="#000000" :size="14"
                            ><Link /></el-icon
                        ></a>
                    </p>
                    <ul class="pl-5 ml-5 text">
                      <li class="list-disc">規劃和實作獨立開發環境，實現前後分離與主站解耦，降低成員間開發環境差異性，不再發生主站專案合併衝突，時間減少80%+開發上線時間。</li>
                      <ul class="ml-5">
                        <li class="list-disc">
                          <p class="text-black">使用<span class="mx-1 font-bold">Docker</span>封裝<span class="mx-1 font-bold">Vite</span>配置<span class="mx-1 font-bold">Vue3</span>的開發及打包環境，減少90%+的編譯時間。</p>
                        </li>
                        <li class="list-disc">使用<span class="mx-1 font-bold">Tailwind、ElementUI</span>滿足露天樣式規則及廣告系統設計規則建立廣告team UI framework兼顧人力和開發速度。</li>
                        <li class="list-disc">使用<span class="mx-1 font-bold">Verdaccio</span>作為內部npm代理，存取專案間共用內部packages。</li>
                        <li class="list-disc">使用<span class="mx-1 font-bold">Node.js Mock-Server</span>模擬回應降低開發期api依賴，實驗Cypress驗證的可行性。</li>
                        <li class="list-disc">開發模式套用於露天廣告，關聯、關鍵字、代理google廣告、露天上架PChome...等系統。</li>
                      </ul>
                      <li class="list-disc">優化站上功能及提升廣告效益。</li>
                      <ul class="ml-5">
                        <li class="list-disc">優化記錄使用者行為的流程，提升、GA、內部kibana追蹤和廣告計價的準確度。</li>
                        <li class="list-disc">規劃聯播網廣告播放流程的全站 Mixin，和業務依頁面流量及收入成效進行調整版位。</li>
                        <li class="list-disc">主導商品頁重購，與UX 、企劃以Scrum型式依數據HeatMap搭配A/B Testing執行，效能方面遵循Core Web Vitals及<span class="mx-1 font-bold">lighthouse</span>驗證，通過CLS 0秒FCP 1秒內，整體效能80+。</li>
                        <li class="list-disc">開發行銷工具，站上RWD個人推薦關鍵字商品集合頁，並規劃<span class="mx-1 font-bold">jQuery Plugin</span>提供行銷部重複包裝行銷頁，帶來曝光、點擊、轉換，提升每月5萬+收益。</li>
                      </ul>
                      <li class="list-disc">負責評量兩位前端，<span class="mx-1 font-bold">Asana</span>任務分配，<span class="mx-1 font-bold">Miro、Figma</span>開發說明，協助<span class="mx-1 font-bold">Trello</span>回報議題釐清，發布前檢閱討論程式。</li>
                    </ul>
                    <div class="mx-5"><el-divider /></div>
                    <p class="pl-5 font-bold">
                      網頁工程部, 資深前端工程師<span class="ml-2 italic font-normal text-gray-500">1年+</span>
                    </p>
                    <ul class="pl-5 ml-5 text">
                      <li class="list-disc">能獨立負責專案，與設計師、專案企劃透過zeplin、Axure協作。分享幫助案內工程師。</li>
                      <ul class="ml-5">
                        <li class="list-disc">開發賣家AWD物流設定系統，整合6家物流設定保持增減彈性，元件化共用表單元素和vuelidate驗證。</li>
                        <li class="list-disc">開發行動版SPA賣場，<span class="font-bold">Vue Router</span>配置賣場功能，搜尋排序商品陳列，搭配session storage減少請求。</li>
                        <li class="list-disc">協助處理站上需改善議題，改寫仍使用 jQuery、mustache的功能為Vue</li>
                        <li class="list-disc">開發5+行銷活動，大富翁<a
                                href="https://kang-hu.github.io/monopoly/"
                                target="_blank"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon
                              ></a>、眼明手快<a
                                href="https://kang-hu.github.io/thefaster/"
                                target="_blank"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon></a>、轉盤、刮刮樂...等，為雙十一節等收益高峰期作出貢獻。</li>
                        <ul class="ml-5">
                          <li class="list-disc">使用Gsap、Canvas開發互動動畫。使用Gulp、Webpack為獨立專案配置開發環境。</li>
                        </ul>
                      </ul>
                    </ul>
                    <div class="mx-5"><el-divider /></div>
                  </article>
                  <article class="mb-1">
                    <p class="text-base font-bold">
                      <el-icon color="#000000" :size="12" class="mr-2"
                        ><Coffee /></el-icon
                      >春樹科技股份有限公司, 資深 前端工程師<span class="ml-2 italic font-normal text-gray-500">01/2015 - 03/2018</span>
                    </p>
                    <ul class="pl-5 ml-5 text">
                        <li class="list-disc">開發超過20+<span class="mx-1 font-bold">RWD</span>行銷網頁專案，負責UI和動畫開發、互動流程開發與api串接<br>
    主要開發技術有<span class="mx-1 font-bold">Pug、SCSS、GSAP、JQuery、Vue2、angular1、 ASP.Net</span></li>
                        <ul class="ml-5">
                          <li class="list-disc">構建重用模組，如Canvas具手勢調整的上傳圖片，解藕前後端流程及節省伺服器運算成本。<a
                            href="https://kang-hu.github.io/playImage/"
                            target="_blank"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a></li>
                          <li class="list-disc">優化縮短開發時程，維護配置<span class="mx-1 font-bold">gulp、babel、webpack</span>，整理Pug template，樣式遵循7-1pattern結構和BEM命名。</li>
                          <li class="list-disc"><span class="mx-1 font-bold">SEO</span>，整理meta 、og 和檢查項目，為內容添加Schema Orgs結構化資料，提交至google和facebook</li>
                          <li class="list-disc">使用facebook sdk完成請求資訊、分享、按讚 ，加入ga事件或安裝gtm協助公司觀察成效報告。</li>
                          <li class="list-disc">主要服務生活電子及金融品牌，家樂福、Ｐ＆Ｇ、華碩、晶碩、中信、台新...<br>代表專案華碩美景大對決<a
                            href="https://www.asus.com/tw/event/photopk/"
                            target="_blank"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>、晶碩舒適警告、中信四航卡、家樂福Brics聯名活動、Ｐ＆Ｇ新年賀卡</li>
                        </ul>
                        <li class="list-disc">代理開發主管一季，管理3+位前端，2+位後端，維持部門執行。</li>
                        <ul class="ml-5">
                          <li class="list-disc">使用Trello安排專案開發、技術研究、程式整理，舉行站會同步進度，專案問題協助排除。</li>
                          <li class="list-disc"><span class="mx-1 font-bold">Azure</span>協助管理發佈，清除已無必要但造成費用的資源。</li>
                          <li class="list-disc">參與啟動會議評估可行性，確認Axure prototype，協調開發上線時程。</li>
                        </ul>
                      </ul>
                      <div class="mx-5"><el-divider /></div>
                  </article>
                  <article class="mb-1">
                    <p class="text-base font-bold">
                      <el-icon color="#000000" :size="12" class="mr-2"
                        ><Coffee /></el-icon
                      >頗意多設計, 網頁工程師<span class="ml-2 italic font-normal text-gray-500">01/2015 - 03/2018</span>
                    </p>
                    <ul class="pl-5 ml-5 text">
                      <li class="list-disc">負責製作網站地圖及內容規劃，與設計師協作含素材協尋及使用<span class="mx-1 font-bold">photoshop</span>去背。</li>
                      <li class="list-disc">將設計稿製作成靜態網頁交付，幫助公司除視覺設計外可執行形象網頁及ＥＤＭ等程式業務。</li>
                    </ul>
                    <div class="mx-5"><el-divider /></div>
                  </article>
                  <article class="mb-1">
                    <p class="text-base font-bold">
                      <el-icon color="#000000" :size="12" class="mr-2"
                        ><Coffee /></el-icon
                      >自由工作經驗
                    </p>
                    <ul class="pl-5 ml-5 text">
                      <li class="list-disc">提供<span class="mx-1 font-bold">Worpress</span>服務，為<a
                            href="https://spacetimefilm.com"
                            target="_blank"
                            >時空號影像<el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>、嵐香堂架站安裝、網域設定、樣板調整。</li>
                      <li class="list-disc">提供設計稿切版含互動特效或串接流程的服務。<a
                            href="https://kang-hu.github.io/kksummer/index.html"
                            target="_blank"
                            >kkday的夏日促銷活動網頁<el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a></li>
                    </ul>
                    <div class="mx-5"><el-divider /></div>
                  </article>
                  <article>
                    <h3 class="text-xl font-bold">學歷</h3>
                    <p class="text-base font-bold">
                      <el-icon color="#000000" :size="12" class="mr-2"
                        ></el-icon
                      >元智大學 資訊管理學系 學士 09/08 - 06/12
                    </p>
                  </article>
                </section>
              </el-col>
            </el-row>
          </section>
          <el-image-viewer
            @close="closeImgView"
            :url-list="srcList"
            v-if="isOpen"
          />
        </el-main>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style>
body {
  margin: 0px;
}

.el-main {
  margin: 0 auto;
  padding: 10px 0 !important;
}

.el-container {
  max-width: 800px;
  margin: 0 auto;
}

.avatar {
  display: inline-block;
  width: 100px;
  height: 100px;
}

.el-divider--horizontal {
  margin: 4px 0 4px 0 !important;
}
</style>
