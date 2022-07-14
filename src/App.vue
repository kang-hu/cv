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
              <p>喜歡探索世界的前端工程師，先後於數位行銷及C2C電商產業累積八年以上相關經驗，
                期間完成專案外也擁有維運升級工具及管理和指導方面的經歷。
                平常興趣是旅行和攝影，讓我重視觀察思考及體驗。
                關於對開發的想法舉美好的青花瓷為例，白瓷搭配進口的染料搭配多元文化融合的圖案，以上使我總是期待參與製作好看易用的產品。
              </p>
            </section>
            <el-divider />
            <el-row>
              <el-col id="side" :span="5" :sm="7" :xs="24" class="pr-2">
                <section class="">
                  <h3 class="mb-2 text-xl font-bold">技能</h3>
                  <p class="mb-2 text-sm italic text-gray-500">// Front-End</p>
                  <ul class="mb-2 text-sm font-bold leading-relaxed">
                    <li>HTML/Canvas</li>
                    <li>CSS/sass/Less</li>
                    <li>Javascript/JQuery</li>
                    <li>GSAP</li>
                    <li>Vue3/Vue2/Vuex</li>
                    <li>Vite/Gulp/Webpack</li>
                  </ul>
                  <p class="mb-2 text-sm italic text-gray-500">// Back-End</p>
                  <ul class="mb-2 text-sm font-bold leading-relaxed">
                    <li>Wordpress</li>
                    <li>MVC/Asp.net/PHP</li>
                    <li>Jenkins/Azure</li>
                  </ul>
                  <p class="mb-2 text-sm italic text-gray-500">// Others</p>
                  <ul class="mb-2 text-sm font-bold leading-relaxed">
                    <li>Ga/Gtag/GTM</li>
                    <li>lighthouse</li>
                    <li>Docker</li>
                    <li>Git/Svn</li>
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
                <section class="mb-4">
                  <div class="">
                    <h3 class="mb-2 text-xl font-bold">FREELANCED WORKING EXPERIENCE</h3>
                    <p class="pl-6 mb-2 italic text-gray-500">
                      2015 - Present
                    </p>
                    <p class="pl-6 mb-2">Follow customers guideline make a template and wordpress installation...</p>
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
                <section>
                  <h3 class="mb-2 text-xl font-bold">WORKING EXPERIENCE</h3>
                  <div class="mb-4">
                    <p class="font-bold">
                      <el-icon color="#000000" :size="14" class="mr-2"
                        ><Coffee /></el-icon
                      >Consultant , SeniorFront-End Developer
                    </p>
                    <p class="pl-6 font-bold">Ruten PChome eBay Co.,Ltd</p>
                    <p class="pl-6 mb-2 italic text-gray-500">
                      08/2018 - Present
                    </p>
                    <div class="pl-6">
                      <ul class="pl-6 mb-2">
                          <li class="list-disc">Responsible for the front-end of the ad & tech team, which includes tech survey, code review.</li>
                          <li class="list-disc">Collaborated with UI/UX designer, backend developer, and product owner to improve the shopping experience. </li>
                          <li class="list-disc">Conducted A/B testing and kept track of metrics(impress, event) via Google Analytics, elk.</li>
                        </ul>
                      <div>
                        <h3 class="mb-2 font-bold">Achievements</h3>
                        <ul class="pl-6 mb-2">
                          <li class="list-disc">User focus pages seo reaching lighthouse 85+</li>
                          <li class="list-disc">Improve compile environment using vite, docker... decrease compile time 80%+</li>
                        </ul>
                      </div>
                      <h3 class="mb-2 font-bold">Key Projects Includes</h3>
                      <ul class="pl-6">
                        <li class="mb-4 list-disc">
                          <p>
                            Ruten's pages
                            <span class="italic">(vue2, vue3, php)</span
                            ><a
                              href="javascript:void"
                              class="ml-1 align-middle"
                              @click.prevemt="open()"
                              ><el-icon color="#000000" :size="14"
                                ><Link /></el-icon
                            ></a>
                          </p>
                          <p class="italic text-gray-500">
                            // Mainly responsible for the AD system also
                            participated in site revisions (product, seller
                            page...).Concerned about realizing the design draft with the componentized concept, integrate the service API with the backend.
                          </p>
                        </li>
                        <li class="mb-4 list-disc">
                          <p>
                            Front-End Infra
                            <span class="italic">(vite, gulp, webpack)</span>
                          </p>
                          <ul class="mt-2">
                            <li>
                              Vue3 Vite use ElementUI Tailwind startkit<a
                                href="https://github.com/kang-hu/vite-tailwind-elementplus-startkit"
                                class="ml-1 align-middle"
                                target="_blank"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon
                              ></a>
                            </li>
                            <li>
                              Vue2 Gulp Wepack frontend template startkit<a
                                href="https://github.com/kang-hu/gulp-webpack-vue2-startkit"
                                class="ml-1 align-middle"
                                target="_blank"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon
                              ></a>
                            </li>
                          </ul>
                          <p class="mt-1 italic text-gray-500">
                            // Have a tool-building mindset, continuously
                            improve the develope environment. For example
                            dockerize bundle tool in CI/CD and created
                            additional services to help with development and
                            testing.
                          </p>
                        </li>
                        <li class="list-disc">
                          <p>
                            Marketing Campaign :
                            <span class="italic">(Canvas, Gsap)</span>
                          </p>
                          <ul class="">
                            <li>
                              <span class="mr-2">
                                The faster<a
                                href="https://kang-hu.github.io/thefaster/"
                                target="_blank"
                                class="ml-1 align-middle"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon></a>
                              </span>
                              Monopoly<a
                                href="https://kang-hu.github.io/monopoly/"
                                target="_blank"
                                class="ml-1 align-middle"
                                ><el-icon color="#000000" :size="14"
                                  ><Link /></el-icon
                              ></a>
                            </li>
                          </ul>
                          <p class="mt-1 italic text-gray-500">
                            // Responsible for website development and then publishing via CMS.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mb-4">
                    <p class="font-bold">
                      <el-icon color="#000000" :size="14" class="mr-2"
                        ><Coffee /></el-icon
                      >Senior, Junior Front-End Developer
                    </p>
                    <p class="pl-6 font-bold">
                      SPRING TREES TECHNOLOGY CO., LTD.
                    </p>
                    <p class="pl-6 mb-2 italic text-gray-500">
                      01/2015 - 03/2018
                    </p>
                    <div class="pl-6">
                      <h3 class="mb-2 font-bold">Key Projects Includes :</h3>
                      <ul class="pl-6">
                        <li class="mb-4 list-disc">
                          Reusable Module : Adjust images with canvas
                          <a
                            href="https://kang-hu.github.io/playImage/"
                            target="_blank"
                            class="ml-1 align-middle"
                            ><el-icon color="#000000" :size="14"
                              ><Link /></el-icon
                          ></a>
                          <br /><span class="italic text-gray-500"
                            >// Develop reusable web features to provide
                            marketing packaging for projects.</span
                          >
                        </li>
                        <li class="mb-4 list-disc">
                          Marketing Campaign : Asus Zenfone<a
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
                          <br />
                          <span class="italic text-gray-500"
                            >// Focus on improving start kit and code management and implementing design drafts to templates.</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mb-4">
                    <p class="font-bold">
                      <el-icon color="#000000" :size="14" class="mr-2"
                        ><Coffee /></el-icon
                      >Engineer, Planner • POINT Design
                    </p>
                    <p class="pl-6 mb-2 italic text-gray-500">
                      08/2013 - 12/2014
                    </p>
                    <p class="pl-6">
                      Plan web content for designer then turn design to static
                      site.
                    </p>
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
