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
                    <h1 class="text-3xl font-bold mb-2">胡 仲 康</h1>
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
              <h3 class="text-xl font-bold mb-2">SUMMARY</h3>
              <p>
                My passion is to use code to create beautiful, easy-to-use interfaces. I have over 8+ years of experience working as a front-end developer in a digital advertising agency and the e-commerce industry. I've collaborated with diverse clients and stakeholders to solve problems, continuously seek better ways, and keep improving my skills. In my spare time, I love photography and travel, which inspires me to work on creating beautiful things and discover the world from a different perspective.
              </p>
            </section>
            <el-divider />
            <el-row>
              <el-col id="side" :span="5" :sm="7" :xs="24" class="pr-2">
                <section class="">
                  <h3 class="text-xl font-bold mb-2">SKILLS & TOOLS</h3>
                  <p class="text-sm italic text-gray-500 mb-2">// Front-End</p>
                  <ul class="text-sm mb-2 leading-relaxed">
                    <li>HTML/Canvas</li>
                    <li>CSS/sass/Less</li>
                    <li>Javascript/JQuery</li>
                    <li>GSAP</li>
                    <li>Vue3/Vue2/Vuex</li>
                    <li>Vite/Gulp/Webpack</li>
                  </ul>
                  <p class="text-sm italic text-gray-500 mb-2">// Back-End</p>
                  <ul class="text-sm mb-2 leading-relaxed">
                    <li>Wordpress</li>
                    <li>Asp.net/PHP</li>
                  </ul>
                  <p class="text-sm italic text-gray-500 mb-2">// Others</p>
                  <ul class="text-sm mb-2 leading-relaxed">
                    <li>Ga/Gtag/GTM</li>
                    <li>Git/Svn</li>
                    <li>lighthouse</li>
                    <li>Docker/Jenkins</li>
                  </ul>
                </section>
                <el-divider />
                <section>
                  <h3 class="text-xl font-bold mb-2">LANGUAGE</h3>
                  <p class="text-sm">
                    Chinese<span class="text-gray-500 ml-2 italic"
                      >// Native</span
                    >
                  </p>
                  <p class="text-sm">
                    English<span class="text-gray-500 ml-2 italic"
                      >// Fluent</span
                    >
                  </p>
                </section>
                <el-divider />
                <section>
                  <h3 class="text-xl font-bold mb-2">EDUCATION</h3>
                  <p class="">Information Management</p>
                  <p class="">Yuan Ze University</p>
                  <p class="text-sm mb-2">
                    <span class="italic text-gray-500"
                      >(Bachelor Degree<br />09/08 - 06/12)</span
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
                  <h3 class="text-xl font-bold mb-2">WORKING EXPERIENCE</h3>
                  <div class="mb-4">
                    <p class="font-bold">
                      <el-icon color="#000000" :size="14" class="mr-2"
                        ><Coffee /></el-icon
                      >Supervisor , SeniorFront-End Developer
                    </p>
                    <p class="font-bold pl-6">Ruten PChome eBay Co.,Ltd</p>
                    <p class="italic text-gray-500 mb-2 pl-6">
                      08/2018 - Present
                    </p>
                    <div class="pl-6">
                      <ul class="pl-6 mb-2">
                          <li class="list-disc">Responsible for the front-end of the ad & tech team, which includes tech survey, code review.</li>
                          <li class="list-disc">Collaborated with UI/UX designer, backend developer, and product owner to improve the shopping experience. </li>
                          <li class="list-disc">Conducted A/B testing and kept track of metrics(impress, event) via Google Analytics, elk.</li>
                        </ul>
                      <div>
                        <h3 class="font-bold mb-2">Achievements</h3>
                        <ul class="pl-6 mb-2">
                          <li class="list-disc">User focus pages seo reaching lighthouse 80+</li>
                          <li class="list-disc">Improve compile environment using vite, docker... decrease compile time 80%+</li>
                        </ul>
                      </div>
                      <h3 class="font-bold mb-2">Key Projects Includes</h3>
                      <ul class="pl-6">
                        <li class="list-disc mb-4">
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
                        <li class="list-disc mb-4">
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
                            <li>Use verdaccio as internal module package repository</li>
                            <li>Mock the api with mocks-server</li>
                          </ul>
                          <p class="italic text-gray-500 mt-1">
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
                          <p class="italic text-gray-500 mt-1">
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
                    <p class="font-bold pl-6">
                      SPRING TREES TECHNOLOGY CO., LTD.
                    </p>
                    <p class="italic text-gray-500 mb-2 pl-6">
                      01/2015 - 03/2018
                    </p>
                    <div class="pl-6">
                      <h3 class="font-bold mb-2">Key Projects Includes :</h3>
                      <ul class="pl-6">
                        <li class="list-disc mb-4">
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
                        <li class="list-disc mb-4">
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
                    <p class="italic text-gray-500 mb-2 pl-6">
                      08/2013 - 12/2014
                    </p>
                    <p class="pl-6">
                      Plan web content for designer then turn design to static
                      site.
                    </p>
                  </div>
                </section>
                                <section>
                  <div class="">
                    <h3 class="text-xl font-bold mb-2">FREELANCED WORKING EXPERIENCE</h3>
                    <p class="italic text-gray-500 mb-2 pl-6">
                      2015 - Present
                    </p>
                    <p class="mb-2 pl-6">Follow customers guideline make a template and wordpress installation...</p>
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
