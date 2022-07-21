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
                  <el-col :span="6">
                    <div class="avatar">
                      <el-avatar
                        :size="100"
                        :src="avatar"
                      />
                    </div>
                  </el-col>
                  <el-col :span="18">
                    <h1 class="text-3xl font-bold">CHUNG-KANG HU</h1>
                    <h1 class="mb-2 text-3xl font-bold">胡 仲 康</h1>
                    <p class="text-lg italic text-gray-500">
                      Front-End-Developer
                    </p>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8" class="">
                <div class="text-sm">
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
            <section>
              <h3 class="mb-2 text-xl font-bold">關於</h3>
              <!-- <p>
                My passion is to use code to create beautiful, easy-to-use interfaces. I have over 8+ years of experience working as a front-end developer in a digital advertising agency and the e-commerce industry. I've collaborated with diverse clients and stakeholders to solve problems, continuously seek better ways, and keep improving my skills. In my spare time, I love photography and travel, which inspires me to work on creating beautiful things and discover the world from a different perspective.
              </p> -->
              <p>對於探索世界抱持開放心態的前端工程師，
                先後於數位行銷及C2C電商累積超過8年經驗，
                負責專案及維運，前端開發部分擁有優化工具流程、團隊專案期程管理及主持程式碼覆核交流的經歷。
                旅行和攝影的興趣，成為我在體驗設計及觀察思考上的靈感來源。對於開發的願景，就如美好的青花瓷，是由白瓷和進口染料染上多元文化融合圖案組成，我相信在多元思維激盪下，能夠交織出好看且易用的產品
              </p>
            </section>
            <el-divider />
            <el-row>
              <el-col id="side" :span="5" :sm="7" :xs="24" class="pr-2">
                <section class="">
                  <h3 class="mb-2 text-xl font-bold">技能</h3>
                  <p class="mb-2 text-sm italic text-gray-500">// Front-End</p>
                  <ul class="mb-4 text-sm leading-relaxed">
                    <li>HTML/Canvas</li>
                    <li>CSS/sass/Less</li>
                    <li>Javascript/JQuery</li>
                    <li>GSAP</li>
                    <li>Vue3/Vue2/Vuex</li>
                    <li>Vite/Gulp/Webpack</li>
                  </ul>
                  <p class="mb-2 text-sm italic text-gray-500">// Back-End</p>
                  <ul class="mb-4 text-sm leading-relaxed">
                    <li>Wordpress</li>
                    <li>Asp.net/PHP</li>
                  </ul>
                  <p class="mb-2 text-sm italic text-gray-500">// Others</p>
                  <ul class="mb-2 text-sm leading-relaxed">
                    <li>Ga/Gtag/GTM</li>
                    <li>Git/Svn</li>
                    <li>lighthouse</li>
                    <li>Docker/Jenkins</li>
                  </ul>
                </section>
                <el-divider />
                <section>
                  <h3 class="mb-2 text-xl font-bold">語言</h3>
                  <p class="text-sm">
                    Chinese<span class="ml-2 italic text-gray-500"
                      >// Native</span
                    >
                  </p>
                  <p class="text-sm">
                    English<span class="ml-2 italic text-gray-500"
                      >// Fluent</span
                    >
                  </p>
                </section>
                <el-divider />
                <section>
                  <h3 class="mb-2 text-xl font-bold">教育</h3>
                  <p class="">元智大學</p>
                  <p>資訊管理學系</p>
                  <p class="mb-2 text-sm">
                    <span class="italic text-gray-500"
                      >(學士 09/08 - 06/12)</span
                    >
                  </p>
                  <p class="text-sm">
                    Computer science, Programming,<br />Data Structure,<br />SQL
                    Database,<br />ystem Analysis,<br />Basic Business Courses
                  </p>
                </section>
              </el-col>
              <el-col :span="19" :sm="17" :xs="24" class="">
                <section ref="" class="mb-4">
                  <h3 class="mb-2 text-xl font-bold">工作經歷</h3>
                  <div class="mb-4">
                    <p class="font-bold">
                      <el-icon color="#000000" :size="14" class="mr-2"
                        ><Coffee /></el-icon
                      >主任 , 資深前端工程師
                    </p>
                    <p class="pl-6 font-bold">露天市集國際資訊股份有限公司</p>
                    <p class="pl-6 mb-2 italic text-gray-500">
                      08/2018 - 05/2022
                    </p>
                    <div class="pl-6">
                      <p class="mb-2">負責廣告技術部前端管理，主要職責有維護和功能開發，專案執行管理，團隊成員開發建議和檢核。和專案管理者、UI/UX設計師、後端工程師合作等多角色，對產品開發或內部流程，透過內部數據工具和GA檢討進行優化。</p>
                      <!-- <div>
                        <h3 class="mb-2 font-bold">Achievements</h3>
                        <ul class="pl-6 mb-2">
                          <li class="list-disc">User focus pages seo reaching lighthouse 85+</li>
                          <li class="list-disc">Improve compile environment using vite, docker... decrease compile time 80%+</li>
                        </ul>
                      </div> -->
                      <h3 class="mb-2 font-bold">期間主要經歷 :</h3>
                      <ul class="pl-6">
                        <li class="mb-4 list-disc">
                          <p>
                            露天相關頁面
                            <a
                              href="javascript:void"
                              class="ml-1 align-middle"
                              @click.prevemt="open()"
                              ><el-icon color="#000000" :size="14"
                                ><Link /></el-icon
                            ></a>
                          </p>
                          <p class="mt-2">
                            負責站上廣告投放方面產品亦參與站上重要頁面如商品、賣場等頁面進行更新和維護。
                          </p>
                        </li>
                        <li class="mb-4 list-disc">
                          <p>
                            開發工具相關
                          </p>
                          <ul class="mt-2">
                            <li>
                              使用 Vue3 Vite ElementUI Tailwind 開發工具包。<a
                                href="https://github.com/kang-hu/vite-tailwind-elementplus-startkit"
                                class="ml-1 align-middle"
                                target="_blank"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon
                              ></a>
                            </li>
                            <li>
                              使用 Vue2 Gulp Wepack 開發工具包。<a
                                href="https://github.com/kang-hu/gulp-webpack-vue2-startkit"
                                class="ml-1 align-middle"
                                target="_blank"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon
                              ></a>
                            </li>
                            <li>使用 verdaccio 作爲內部模組存取倉庫。</li>
                            <li>使用 mocks-server 模擬api回應。</li>
                            <li>將相關開發工具docker化成image配合ci/cd流程。</li>
                          </ul>
                        </li>
                        <li class="list-disc">
                          <p class="mb-2">
                            行銷類專案 : 運用 Canvas, Gsap 製作活潑動畫加強互動。
                          </p>
                          <ul class="">
                            <li>
                              <span class="mr-2">
                                案例：The faster<a
                                href="https://kang-hu.github.io/thefaster/"
                                target="_blank"
                                class="ml-1 align-middle"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon></a>
                              </span>
                            </li>
                            <li>
                              案例：Monopoly<a
                                href="https://kang-hu.github.io/monopoly/"
                                target="_blank"
                                class="ml-1 align-middle"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon
                              ></a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mb-4">
                    <p class="font-bold">
                      <el-icon color="#000000" :size="14" class="mr-2"
                        ><Coffee /></el-icon
                      >資深前端工程師 前端工程師
                    </p>
                    <p class="pl-6 font-bold">
                      春樹科技股份有限公司
                    </p>
                    <p class="pl-6 mb-2 italic text-gray-500">
                      01/2015 - 03/2018
                    </p>
                    <p class="pl-6 mb-4">與團隊針對客戶行銷目的提出解決方案，為方案進行研究及實踐。
                    </p>
                    <div class="pl-6">
                      <h3 class="mb-2 font-bold">期間主要經歷 :</h3>
                      <ul class="pl-6">
                        <li class="list-disc">
                          製作重用性模組：canvas裁切調整圖片
                          <a
                            href="https://kang-hu.github.io/playImage/"
                            target="_blank"
                            class="ml-1 align-middle"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>
                        </li>
                        <li class="list-disc">
                          使用與維護 gulp webpack 為主體的編譯任務開發工具包
                        </li>
                        <li class="list-disc">
                          行銷活動類案例：Asus Zenfone<a
                            href="https://www.asus.com/tw/event/photopk/"
                            target="_blank"
                            class="ml-1 align-middle"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>
                          Carrefour and Brics<a
                            href="https://showcase.friendo.com.tw/carrefourBrics"
                            target="_blank"
                            class="ml-1 align-middle"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>          
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mb-4">
                    <p class="font-bold">
                      <el-icon color="#000000" :size="14" class="mr-2"
                        ><Coffee /></el-icon
                      >網頁工程師 企劃 • 頗意多視覺設計
                    </p>
                    <p class="pl-6 mb-2 italic text-gray-500">
                      08/2013 - 12/2014
                    </p>
                    <p class="pl-6 mb-4">規劃頁面內容規劃並將設計稿實踐成靜態網頁。
                    </p>
                  </div>
                </section>
                <section>
                  <div class="">
                    <h3 class="mb-2 text-xl font-bold">自由工作經歷</h3>
                    <p class="pl-6 mb-2">行銷類網頁專案和wordpress形象網站架設</p>
                    <div class="pl-6">
                      <ul class="pl-6">
                        <li class="list-disc">
                          Wordpress site : Rankodo<a
                            href="http://rankodo.com/"
                            target="_blank"
                            class="ml-1 align-middle"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>
                        </li>
                        <li class="list-disc">
                          Wordpress site : Spacetimefilm<a
                            href="https://spacetimefilm.com/"
                            target="_blank"
                            class="ml-1 align-middle"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>
                        </li>
                        <li class="list-disc">
                          Marketing Campaign : KKday 2019 summer<a
                            href="https://kang-hu.github.io/kksummer/index.html"
                            target="_blank"
                            class="ml-1 align-middle"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
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
}

.el-container {
  max-width: 760px;
  margin: 0 auto;
}

.common-layout {
  padding: 20px 0 0 0;
}

.avatar {
  display: inline-block;
  width: 100px;
  height: 100px;
}
</style>
