import React from 'react';

const MedicalTrainingPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">資源總覽</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">介紹：</h3>
          <p className="text-lg leading-relaxed important-text">第一部分介紹了患者可以去哪裡找到治療師。</p>
          <p className="text-lg leading-relaxed important-text">第二部分介紹了患者可以去哪找到優惠的中醫診療服務。</p>
        </div>

        <ul className="list-disc list-inside text-lg leading-relaxed ml-4 space-y-1">
          <li>醫療&復康</li>
          <li>醫療器材租借</li>
          <li>醫療資源及復康訓練</li>
          <li>就業&培訓</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">所需文件申請流程：</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">(i) 醫生轉介信：</h3>
            <p className="text-lg leading-relaxed">轉介信須詳列病人罹患的疾病、診斷結果、需要接受何種治療等資訊，並註明簽發日期，以及有醫生簽署和蓋章方為有效。</p>
            <p className="text-lg leading-relaxed">有效期須為 3 個月內，若病人在轉介信發出後 3 個月內仍未到專科診所登記預約，須出示新的醫生轉介信方能重新預約診期。</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">(ii) 身份證明文件：</h3>
            <p className="text-lg leading-relaxed">香港身份證或護照。</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">(iii) 身份證明文件：</h3>
            <p className="text-lg leading-relaxed">香港身份證或護照。</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">(iv) 住址證明：</h3>
            <ul className="list-disc list-inside text-lg leading-relaxed ml-4 space-y-1">
              <li>水、電、煤費賬單</li>
              <li>稅單</li>
              <li>銀行、保險公司或強積金受托公司發出的結單或通知書</li>
              <li>電訊公司的月結單或收費單</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">(v) 備註：</h3>
            <p className="text-lg leading-relaxed">由公立醫院醫生簽發的轉介信，費用全免。私家醫院可能需要加錢。本地註冊醫生即可。</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">醫療資源及復康訓練</h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">HA 公營醫院：</h3>

            <div className="space-y-6 ml-4">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(i) 港島：</h4>

                <div className="space-y-4 ml-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">1. 職業治療，物理治療，言語治療，營養治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>東華東院 2162 6309</li>
                      <li>東區尤德夫人那打素醫院 2595 4187</li>
                      <li>律敦治醫院 2291 2401</li>
                      <li>大口環根德公爵夫人兒童醫院 2974 0302</li>
                      <li>瑪麗醫院 2255 4279</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">2. 職業治療，物理治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>戴麟趾康復中心 2517 8115</li>
                      <li>鄧肇堅醫院 3553 3500</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">3. 物理治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>贊育醫院 2589 2325</li>
                      <li>麥理浩復康院 2872 5485</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">4. 營養治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>葛量洪醫院 2518 2283</li>
                      <li>東華醫院 2589 8324</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(ii) 九龍：</h4>

                <div className="space-y-4 ml-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">1. 職業治療，物理治療，言語治療，營養治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>九龍醫院 3129 7117</li>
                      <li>瑪嘉烈醫院 2990 3840</li>
                      <li>伊利沙伯醫院 3506 6077</li>
                      <li>明愛醫院 3408 7719</li>
                      <li>基督教聯合醫院 3949 4675</li>
                      <li>廣華醫院 3517 5124</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">2. 職業治療，物理治療，營養治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>聖母醫院 2354 2468</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">3. 職業治療，物理治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>容鳳書紀念中心 2727 8306</li>
                      <li>香港佛教醫院 2339 6231</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(iii) 新界：</h4>

                <div className="space-y-4 ml-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">1. 職業治療，物理治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>威爾斯親王醫院 3505 3035</li>
                      <li>將軍澳醫院 2208 0405</li>
                      <li>仁濟醫院 2417 8220</li>
                      <li>雅麗氏何妙齡那打素醫院 2689 2426</li>
                      <li>北大嶼山醫院 2683 7864</li>
                      <li>博愛醫院 3467 7309</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">2. 職業治療，物理治療，言語治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>天水圍醫院 3513 5411</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">3. 職業治療，物理治療，營養治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>屯門醫院 2468 5235</li>
                      <li>北區醫院 2683 7864</li>
                      <li>博愛醫院 2486 8127</li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">4. 營養治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>葵涌醫院 2990 3842</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(iv) 離島：</h4>

                <div className="space-y-4 ml-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700">1. 物理治療：</p>
                    <ol className="list-decimal list-inside text-lg leading-relaxed space-y-1">
                      <li>長州醫院 2986 2157</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-800">(v) 備註：</h4>
                <p className="text-lg leading-relaxed">符合資格人士收費首次診症 135 元，其後每次診症 80 元，每種藥物收費 15 元；合資格人士是指持有香港身份證的人士；所需文件見上「所需文件申請流程」部。</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">非政府組織：</h3>

            <div className="space-y-6 ml-4">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(i) 港島：</h4>

                <div className="space-y-3 ml-4">
                  <p className="text-lg font-semibold text-gray-800">復康資源協會：</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg"><span className="font-semibold">1）治療服務：</span>職業治療，物理治療，言語治療。</p>
                    <div className="text-lg leading-relaxed whitespace-pre-line">
                      <span className="font-semibold">2）收費：</span>
                      {'\n'}每次診症及治療 $780
                      {'\n'}上門治療服務 $1500-2000（按地區而定）
                      {'\n'}言語治療 $850
                    </div>
                    <p className="text-lg"><span className="font-semibold">3）地址：</span>香港薄扶林沙灣徑 7 號地下。</p>
                    <p className="text-lg"><span className="font-semibold">電話：</span>2364 2345</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(ii) 九龍：</h4>

                <div className="space-y-6 ml-4">
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-gray-800">香港理工大學康復治療診所：</p>
                    <div className="space-y-2 ml-4">
                      <p className="text-lg"><span className="font-semibold">1）治療服務：</span>職業治療，物理治療，言語治療。</p>
                      <div className="text-lg leading-relaxed whitespace-pre-line">
                        <span className="font-semibold">2）收費：</span>
                        {'\n'}物理治療 $1800
                        {'\n'}職業治療 $580
                        {'\n'}言語治療 $850
                      </div>
                      <p className="text-lg"><span className="font-semibold">3）地址：</span>香港九龍紅磡香港理工大學 A 座地下 AG056 室。</p>
                      <p className="text-lg"><span className="font-semibold">電話：</span>2766 6734</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-gray-800">We Can：</p>
                    <div className="space-y-2 ml-4">
                      <p className="text-lg"><span className="font-semibold">1）治療服務：</span>職業治療，物理治療，言語治療。</p>
                      <p className="text-lg"><span className="font-semibold">2）收費：</span>詳情請致電詢問。</p>
                      <p className="text-lg"><span className="font-semibold">3）地址：</span>九龍觀塘興業街 19-21 號明生工業大廈 6 樓 R 室。</p>
                      <p className="text-lg"><span className="font-semibold">電話：</span>3916 7839</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(iii) 新界：</h4>

                <div className="space-y-3 ml-4">
                  <p className="text-lg font-semibold text-gray-800">香港中文大學運動醫學及康復中心：</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg"><span className="font-semibold">1）治療服務：</span>職業治療。</p>
                    <div className="text-lg leading-relaxed whitespace-pre-line">
                      <span className="font-semibold">2）收費：</span>
                      {'\n'}首次評估 $250
                      {'\n'}物理治療（三個或少於三個治療項目）$900
                      {'\n'}額外每個治療項目 $320
                    </div>
                    <p className="text-lg"><span className="font-semibold">3）地址：</span>香港新界沙田澤祥街 9 號。</p>
                    <p className="text-lg"><span className="font-semibold">電話：</span>3946 6588</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">(iv) 港島，九龍，新界：</h4>

                <div className="space-y-3 ml-4">
                  <p className="text-lg font-semibold text-gray-800">香港復康會適健中心：</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg"><span className="font-semibold">1）治療服務：</span>職業治療，營養治療。</p>
                    <div className="text-lg leading-relaxed whitespace-pre-line">
                      <span className="font-semibold">2）收費：</span>
                      {'\n'}營養治療：首節 60 分鐘及五節各 30 分鐘的覆診費用 $1400 / 6 節
                      {'\n'}物理治療：$640/1 個部位 $870/2 個部位
                    </div>
                    <p className="text-lg"><span className="font-semibold">3）地址：</span>香港九龍藍田復康徑 7 號地下 10 室。</p>
                    <p className="text-lg"><span className="font-semibold">電話：</span>2534 3533</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">中醫</h2>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">(i) 介紹：</h3>
            <p className="text-lg leading-relaxed">香港多家醫院及診所提供政府資助中醫門診服務配額，居民可以優惠價格使用中醫服務。香港居民（持身份證）每次診症費用為 120 元，綜合社會保障援助受惠人 / 75 歲或以上的長者生活津貼受惠人豁免收費。</p>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-700">資助範圍涵蓋：</p>
              <ol className="list-decimal list-inside text-lg leading-relaxed ml-4 space-y-1">
                <li>內科（包診金及按臨床需要處方不多於 5 劑中藥）</li>
                <li>針灸治療</li>
                <li>骨傷治療</li>
              </ol>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">(ii) 港島：</h3>
            <p className="text-lg leading-relaxed">治療服務：內科及針灸治療服務。</p>
            <p className="text-lg leading-relaxed">服務機構（以下機構已參與政府資助中醫服務）：</p>

            <div className="space-y-4 ml-4">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">1）東華三院 - 香港大學中醫診所暨教研中心（中西區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：香港上環普仁街 12 號東華醫院鶴堅士樓及楊國璋樓 1 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：3916 7839</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">2）香港防癆會 - 香港大學中醫診所暨教研中心（灣仔區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：香港灣仔皇后大道東 282 號，鄧肇堅醫院社區日間醫療中心二樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：3553 3238</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">3）東華三院 - 香港大學中醫診所暨教研中心（東區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：香港柴灣樂民道 3 號東區尤德夫人那打素醫院專科門診大樓地庫 4 樓西翼</p>
                <p className="text-lg leading-relaxed ml-4">電話：2194 9911</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">4）香港防癆會 - 香港大學中醫診所暨教研中心（南區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：香港香港仔水塘道 10 號賽馬會診療所 2 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2580 8158</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">(iii) 九龍：</h3>
            <p className="text-lg leading-relaxed">治療服務：內科、針灸治療及骨傷推拿服務。</p>
            <p className="text-lg leading-relaxed">服務機構（以下機構已參與政府資助中醫服務）：</p>

            <div className="space-y-4 ml-4">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">1）基督教家庭服務中心 - 香港中文大學中醫診所暨教研中心（觀塘區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：九龍牛頭角定安街 60 號牛頭角賽馬會診所 4 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：3107 4113</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">2）香港佛教聯合會 - 香港大學中醫診所暨教研中心（黃大仙區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：九龍樂富杏林街 10 號香港佛教醫院 C 座地下及閣樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2338 3103</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">3）仁濟醫院 - 香港浸會大學中醫診所暨教研中心（深水埗區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：九龍深水埗長沙灣道 303 號長沙灣政府合署 1 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2194 9911</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">4）博愛醫院 - 香港浸會大學中醫診所暨教研中心（九龍城區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：九龍何文田愛民邨保民樓 401-412 室</p>
                <p className="text-lg leading-relaxed ml-4">電話：2193 7000</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">5）博愛醫院 - 香港浸會大學中醫診所暨教研中心（油尖旺區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：九龍佐敦加士居道 30 號伊利沙伯醫院 R 座 9 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2618 7200</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">(iv) 新界：</h3>
            <p className="text-lg leading-relaxed">治療服務：內科、針灸治療及骨傷推拿服務。</p>
            <p className="text-lg leading-relaxed">服務機構（以下機構已參與政府資助中醫服務）：</p>

            <div className="space-y-4 ml-4">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">1）仁濟醫院 - 香港浸會大學中醫診所暨教研中心（荃灣區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：荃灣仁濟街 7 至 11 號仁濟醫院 C 座 4 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2416 0303</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">2）基督教聯合那打素社康服務 - 香港中文大學中醫診所暨教研中心（大埔區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界大埔全安路 11 號雅麗氏何妙齡那打素醫院 J 座員工中心地下</p>
                <p className="text-lg leading-relaxed ml-4">電話：2328 2621</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">3）靈實香港中文大學中醫診所暨教研中心（西貢區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界將軍澳坑口寶寧里 2 號將軍澳醫院日間醫療大樓 6 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2701 1020</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">4）博愛醫院 - 香港中文大學中醫診所暨教研中心（元朗區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界元朗西菁街 26 號容鳳書健康中心 3 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2478 5769</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">5）仁愛堂 - 香港中文大學中醫診所暨教研中心（屯門區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界屯門屯利街 6 號仁愛分科診所 5 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2430 1309</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">6）仁濟醫院 - 香港浸會大學中醫診所暨教研中心（葵青區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界葵涌麗祖路 77 號下葵涌分科診所及特殊教育服務中心地下</p>
                <p className="text-lg leading-relaxed ml-4">電話：2370 2216</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">7）工聯會工人醫療所 - 香港浸會大學中醫診所暨教研中心（北區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界粉嶺璧峰路 2 號粉嶺健康中心 7 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：2670 2130</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">8）博愛醫院 - 香港中文大學中醫診所暨教研中心（沙田區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界沙田大圍文禮路 2 號沙田（大圍）診所地下</p>
                <p className="text-lg leading-relaxed ml-4">電話：2430 1309</p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">9）仁愛堂 - 香港大學中醫診所暨教研中心（離島區）：</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界大嶼山東涌富東街 6 號東涌健康中心第 2 座 1 樓</p>
                <p className="text-lg leading-relaxed ml-4">電話：3188 5383</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">(v) 港島，九龍，新界（以下機構已參與政府資助中醫服務）：</h3>

            <div className="space-y-6 ml-4">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">保良局流動中醫診所（內科及針灸治療服務）：</p>
                <ul className="list-disc list-inside text-lg leading-relaxed ml-4 space-y-1">
                  <li>保良局香港中華基金會方劉小梅流動中醫診所：6515 8181</li>
                  <li>保良局蔡李惠莉流動中醫診所：6515 6262</li>
                  <li>保良局李樹福伉儷慈善基金流動中醫診所：6515 6363</li>
                  <li>保良局丙申年郭羅桂珍主席流動中醫診所：6515 6880</li>
                  <li>保良局中銀香港流動中醫診所（1 車）：6367 1735</li>
                  <li>保良局中銀香港流動中醫診所（2 車）：6367 1770</li>
                </ul>
                <div className="text-lg leading-relaxed whitespace-pre-line ml-4">
                  <span className="font-semibold">收費：</span>
                  {'\n'}針灸：$170/1 症
                  {'\n'}藥費：$60/1 劑（65 歲以上長者有優惠收費）
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">香港佛教聯合會張經泰伉儷紀念中醫流動診所（內科、針灸治療及骨傷推拿服務）：</p>
                <p className="text-lg leading-relaxed ml-4">服務時間及停泊點請致電：2574 9371</p>
                <div className="text-lg leading-relaxed whitespace-pre-line ml-4">
                  <span className="font-semibold">收費：</span>
                  {'\n'}一般人士收費：
                  {'\n'}內科 $130
                  {'\n'}針灸 $150
                  {'\n'}推拿 $200
                  {'\n'}
                  {'\n'}*獲資助人士收費：
                  {'\n'}內科 $30
                  {'\n'}針灸 $50
                  {'\n'}推拿 $100
                </div>
                <div className="text-lg leading-relaxed whitespace-pre-line ml-4">
                  <span className="font-semibold">*獲資助對象：</span>
                  {'\n'}由註冊社工轉介的長期病患人士，包括：未有接受綜援的低收入家庭成員、公屋家庭住戶成員、或政府資助安老院舍服務 / 床位的長者。
                  {'\n'}
                  {'\n'}未經合作單位推薦的長者病患人士長者，到診時必須出示有效的証明文件，如：長期病患覆診咭 / 紀錄 / 註冊醫生診斷証明 / 病人協會成員証明、公屋住戶証、長者咭。
                </div>
                <p className="text-lg leading-relaxed ml-4">電話：6806 0595</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">(vi) 港島，九龍，新界（以下機構未參與政府資助中醫服務）：</h3>

            <div className="space-y-6 ml-4">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">香港佛教聯合會紹根法師綜合中醫服務中心：</p>
                <p className="text-lg leading-relaxed ml-4">治療服務：內科、針灸治療及骨傷推拿服務。</p>
                <p className="text-lg leading-relaxed ml-4">地址：香港中環干諾道中 23 號香林大廈 5 樓</p>
                <div className="text-lg leading-relaxed whitespace-pre-line ml-4">
                  <span className="font-semibold">收費：</span>
                  {'\n'}內科 $100
                  {'\n'}針灸 $250
                  {'\n'}推拿 $400
                </div>
                <p className="text-lg leading-relaxed ml-4">電話：2110 3711</p>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">香港佛教聯合會慈濟中醫診所：</p>
                <p className="text-lg leading-relaxed ml-4">治療服務：內科、針灸治療及骨傷推拿服務。</p>
                <p className="text-lg leading-relaxed ml-4">地址：九龍新蒲崗衍慶街 53-55 號寶興大廈 201 室</p>
                <div className="text-lg leading-relaxed whitespace-pre-line ml-4">
                  <span className="font-semibold">收費：</span>
                  {'\n'}內科 $150
                  {'\n'}針灸 $180
                  {'\n'}推拿 $280
                </div>
                <p className="text-lg leading-relaxed ml-4">電話：2321 3573</p>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">教正行長者鄰舍中心：</p>
                <p className="text-lg leading-relaxed ml-4">治療服務：內科及針灸治療服務。</p>
                <p className="text-lg leading-relaxed ml-4">地址：九龍慈雲山慈正邨正暉樓地下</p>
                <p className="text-lg leading-relaxed ml-4">收費：詳情請致電：2321 1421</p>
                <p className="text-lg leading-relaxed ml-4">電話：2325 2122</p>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">香港佛教聯合會青山寺中醫服務中心：</p>
                <p className="text-lg leading-relaxed ml-4">治療服務：內科、針灸治療及骨傷推拿服務。</p>
                <p className="text-lg leading-relaxed ml-4">地址：新界屯門良田村 104 號地下</p>
                <div className="text-lg leading-relaxed whitespace-pre-line ml-4">
                  <span className="font-semibold">收費：</span>
                  {'\n'}內科 $150
                  {'\n'}針灸 $180
                  {'\n'}推拿 $300
                </div>
                <p className="text-lg leading-relaxed ml-4">電話：2359 9029</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalTrainingPage;
