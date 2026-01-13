import React from 'react';
import TelephoneIcon from '../../../../components/Icons/Telephone';

const PsychologicalSupportPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">介紹：</h2>
        <p className="text-lg leading-relaxed important-text">
          以下服務計劃僅供參考，可按需要自行尋找相關服務。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">社區心理及社交小組服務：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 香港復康會社區復康網絡心理社交及照顧者支援：</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">介紹：</h4>
            <p className="text-lg leading-relaxed important-text ml-4">
              以具實證為本的手法設計不同的服務，回應長期病患者及照顧者心理情緒方面的需要。
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">服務對象：</h4>
            <p className="text-lg ml-4">長期病患者及照顧者。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">適用范圍：</h4>
            <p className="text-lg ml-4">全港5間社區復康網絡將提供服務。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">聯絡方式：</h4>
            <div className="ml-4 space-y-1">
              <p className="text-lg flex items-center">
                <span className="w-32">橫頭磡中心</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2794 3010
              </p>
              <p className="text-lg flex items-center">
                <span className="w-32">康山中心</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2549 7744
              </p>
              <p className="text-lg flex items-center">
                <span className="w-32">大興中心</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2775 4414
              </p>
              <p className="text-lg flex items-center">
                <span className="w-32">太平中心</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2639 9969
              </p>
              <p className="text-lg flex items-center">
                <span className="w-32">李鄭屋中心</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2361 2838
              </p>
              <p className="text-lg flex items-center">
                <span className="w-32">新界禾輋中心</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2636 0666
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">網頁版本：</h4>
            <a
              href="https://www.rehabsociety.org.hk/dccs/crn/zh-hant/psycho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
            >
              https://www.rehabsociety.org.hk/dccs/crn/zh-hant/psycho/
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 香港傷健協會 - 照顧者專線：</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">介紹：</h4>
            <p className="text-lg leading-relaxed important-text ml-4">
              為照顧者提供輔導及支援，透過上門探訪、支援小組及工作坊、舉辦社交康樂活動，協助照顧者提升照顧能力。
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">服務對象：</h4>
            <p className="text-lg ml-4">肢體傷殘人士的照顧者。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">適用范圍：</h4>
            <p className="text-lg ml-4">全港。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">聯絡方式：</h4>
            <p className="text-lg flex items-center ml-4">
              <TelephoneIcon className="w-5 h-5 mr-2" />
              2426 8338
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">網頁版本：</h4>
            <a
              href="https://phab.hk/照顧者同行連線/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
            >
              照顧者同行連線 – 香港傷健協會
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">面談輔導服務：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 香港傷殘青年協會 - 輔導服務：</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">介紹：</h4>
            <p className="text-lg leading-relaxed important-text ml-4">
              提供情緒及心理輔導服務，以引導服務對象處理個人成長、復康、情緒、人際關係、生活及照顧壓力等方面的問題。
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">服務對象：</h4>
            <p className="text-lg ml-4">肢體殘疾人士及其家人、照顧者。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">中心地址：</h4>
            <p className="text-lg ml-4">九龍橫頭磡邨宏基樓地下1-13號 - 香港傷殘青年協會賽馬會活動中心。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">聯絡方式：</h4>
            <p className="text-lg flex items-center ml-4">
              <TelephoneIcon className="w-5 h-5 mr-2" />
              2337 9311
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">網頁版本：</h4>
            <a
              href="https://www.hkfhy.org.hk/zh/service/main/5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
            >
              https://www.hkfhy.org.hk/zh/service/main/5/
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 撒瑪利亞防止自殺會 - 預約面談：</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">介紹：</h4>
            <p className="text-lg leading-relaxed important-text ml-4">
              與熱線義工面對面約談問題。
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">服務對象：</h4>
            <p className="text-lg ml-4">任何有情緒困擾人士。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">中心地址：</h4>
            <p className="text-lg ml-4">九龍彩虹邨金華樓地下126-127室。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">聯絡方式：</h4>
            <p className="text-lg flex items-center ml-4">
              <TelephoneIcon className="w-5 h-5 mr-2" />
              2790 8844（提前2個工作天預約）
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">網頁版本：</h4>
            <a
              href="https://sbhk.org.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
            >
              熱線中心 - 香港撒瑪利亞防止自殺會
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">情緒支援 熱線電話：</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(i) 撒瑪利亞防止自殺會 - 24小時情緒支援熱線：</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">介紹：</h4>
            <p className="text-lg leading-relaxed important-text ml-4">
              義工們會接聽來電，細心聆聽，陪伴求助者面對自己的困擾。
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">服務對象：</h4>
            <p className="text-lg ml-4">任何有情緒困擾人士。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">中心地址：</h4>
            <p className="text-lg ml-4">全港。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">聯絡方式：</h4>
            <p className="text-lg flex items-center ml-4">
              <TelephoneIcon className="w-5 h-5 mr-2" />
              2389 2222
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">網頁版本：</h4>
            <a
              href="https://sbhk.org.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
            >
              熱線中心 - 香港撒瑪利亞防止自殺會
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">(ii) 生命熱線：</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">介紹：</h4>
            <p className="text-lg leading-relaxed important-text ml-4">
              由受過專業培訓的義工接聽來電，理解來電者所面對的問題及感受，讓他們表達自己的困擾和情緒，陪伴他們度過難關。
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">服務對象：</h4>
            <p className="text-lg ml-4">任何有情緒困擾人士。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">中心地址：</h4>
            <p className="text-lg ml-4">全港。</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">聯絡方式：</h4>
            <div className="ml-4 space-y-1">
              <p className="text-lg flex items-center">
                <span className="w-56">24小時預防自殺熱線服務</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2382 0000
              </p>
              <p className="text-lg flex items-center">
                <span className="w-56">珍愛生命長者熱線</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2382 0881
              </p>
              <p className="text-lg flex items-center">
                <span className="w-56">青少年生命專線</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2382 0777
              </p>
              <p className="text-lg flex items-center">
                <span className="w-56">預防長者自殺服務</span>
                <TelephoneIcon className="w-5 h-5 mr-2" />
                2382 2007
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-700">網頁版本：</h4>
            <a
              href="https://www.sps.org.hk/?a=group&id=hotline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all ml-4"
            >
              https://www.sps.org.hk/?a=group&id=hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychologicalSupportPage;
