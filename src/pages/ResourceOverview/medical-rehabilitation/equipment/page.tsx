import React from 'react';

interface OrganizationCardProps {
  title: string;
  address?: string;
  services: string;
  price: React.ReactNode;
  period?: React.ReactNode;
  area?: React.ReactNode;
  additional?: React.ReactNode;
  contact: React.ReactNode;
  website?: string;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  title,
  address,
  services,
  price,
  period,
  area,
  additional,
  contact,
  website,
}) => {
  const additionalIndex = area ? '(vi)' : '(v)';
  const contactIndex = additional
    ? area
      ? '(vii)'
      : '(vi)'
    : area
      ? '(vi)'
      : '(v)';

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">{title}</h2>

      <div className="space-y-3">
        {address && (
          <div className="space-y-2 ml-4">
            <h3 className="text-lg font-semibold text-gray-800">(i) 地址：</h3>
            <p className="text-lg leading-relaxed">{address}</p>
          </div>
        )}

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(ii) 服務內容：</h3>
          <p className="text-lg leading-relaxed">{services}</p>
        </div>

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">(iii) 價錢參考：</h3>
          <div className="text-lg leading-relaxed whitespace-pre-line">{price}</div>
        </div>

        {period && (
          <div className="space-y-2 ml-4">
            <h3 className="text-lg font-semibold text-gray-800">(iv) 租借期限：</h3>
            <div className="text-lg leading-relaxed whitespace-pre-line">{period}</div>
          </div>
        )}

        {area && (
          <div className="space-y-2 ml-4">
            <h3 className="text-lg font-semibold text-gray-800">(v) 服務地區：</h3>
            <div className="text-lg leading-relaxed">{area}</div>
          </div>
        )}

        {additional && (
          <div className="space-y-2 ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{additionalIndex} 資料補充：</h3>
            <div className="text-lg leading-relaxed">{additional}</div>
          </div>
        )}

        <div className="space-y-2 ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{contactIndex} 申請及聯絡方式：</h3>
          <div className="text-lg leading-relaxed whitespace-pre-line">{contact}</div>
        </div>

        {website && (
          <div className="space-y-2 ml-4">
            <h3 className="text-lg font-semibold text-gray-800">網頁版本：</h3>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              {website}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

const MedicalEquipmentPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-lg leading-relaxed important-text">
          為患者及照顧者減輕財務負擔及增加選擇機會，收集市面上提供醫療器材租借服務的機構，供用者參考。
        </p>
      </section>

      <div className="space-y-12">
        {/* 1. 賽馬會「A家」樂齡科技教育及租賃服務 */}
        <OrganizationCard
          title="賽馬會「A家」樂齡科技教育及租賃服務"
          address="新界沙田小瀝源牛皮沙街2號愉翠商場M樓2號舖"
          services="基本輪椅，電動輪椅，步行架/助行器，便椅/浴椅，醫護床，床褥，移位機/吊機，坐墊"
          price={
            <>
              視乎申請人正接受的津貼，可參考：器材月租價目表<br/>
              <a
                href="https://ageathome.hk/resources-publication/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline break-all"
              >
                https://ageathome.hk/resources-publication/
              </a>
            </>
          }
          period="視乎需求溝通安排。"
          area={<span className="important-text">請致電查詢，有些輔具有地區限制。</span>}
          additional="本機構可提供付費職業治療師評估服務。"
          contact={
            <>
              3153 5252<br/>
              ersc@ageathome.hk
            </>
          }
          website="https://ageathome.hk/resources-publication/"
        />

        {/* 2. 香港輪椅輔助隊 */}
        <OrganizationCard
          title="香港輪椅輔助隊"
          address="香港九龍南昌邨昌遜樓地下1-4號"
          services="輪椅維修，基本輪椅，拐杖/手叉，步行架/助行器，便椅/浴椅。"
          price={
            <>
              手推輪椅、大便椅：首一個月免費，其後租金為$80/月；<br/>
              助行架、手杖：首一個月免費，其後租金為$20/月。
            </>
          }
          period="視乎需求溝通安排。"
          additional={<span className="important-text">如使用者體重 &gt;150磅，請先致電 2194 9600 查詢。</span>}
          contact={
            <>
              申請表見網頁。<br/>
              <span className="important-text">*須攜帶$400現金作登記借用之按金</span>
            </>
          }
          website="http://www.hkwheelchair.org.hk/services?pid=33"
        />

        {/* 3. 賽馬會復康座椅服務中心 */}
        <OrganizationCard
          title="賽馬會復康座椅服務中心"
          address="葵涌嘉慶中心"
          services="基本輪椅，電動輪椅，便椅/浴椅，醫護床，床褥，移位機/吊機，輪椅維修。"
          price={
            <>
              基本款輪椅 ：$70-200/星期<br/>
              電動輪椅 ：$220-350/星期<br/>
              可後傾座位浴椅 ：$140/星期<br/>
              醫療床 ：$400/星期（另收安裝費）<br/>
              泡棉/充氣減壓床墊 ：$60/星期<br/>
              移位機 ：$160/星期
            </>
          }
          period="視乎需求溝通安排。"
          additional="可提供免費職業治療師評估服務。"
          contact={
            <>
              2145 4968<br/>
              6259 5691 （WhatsApp申請）
            </>
          }
          website="https://seating.sahk1963.org.hk/b5_service.php?id=8"
        />

        {/* 4. 紅十字會 輔助行動器材租借服務 */}
        <OrganizationCard
          title="紅十字會 輔助行動器材租借服務"
          address="奧運站總部、社區交收中心及各醫院交收中心"
          services="基本輪椅，電動輪椅，拐杖/手叉，步行架/助行器，便椅/浴椅， 斜台。"
          price={
            <>
              基本款輪椅 ：$140/月 （按金$200）<br/>
              高背輪椅 ：$220-630/月（必須由醫護人員轉介）<br/>
              拐杖/四腳叉 ：$60/月（按金$100）<br/>
              步行架 ：$60-80/月（有轆步行架必須由醫護人員轉介）<br/>
              淋浴椅 ：$60/月（按金$100）<br/>
              便椅 ：$90/月（按金$100）<br/>
              可傾斜淋浴便椅 ：$430/月（按金$1000）（必須由醫護人員轉介）<br/>
              斜台 ：$280/月（按金$500）
            </>
          }
          period="最少租借一個月。"
          contact={
            <>
              點擊網頁中「網上查詢及預約服務」填寫申請表格。<br/>
              2610 0515
            </>
          }
          website="https://www.redcross.org.hk/tc/community_healthcare/mobility_equip/intro_me.html"
        />

        {/* 5. 香港復康咨詢協會 */}
        <OrganizationCard
          title="香港復康咨詢協會"
          address="深水埗樂年花園"
          services="基本輪椅，電動輪椅，拐杖/手叉，步行架/助行器，便椅/浴椅，床褥，坐墊，高背椅，床欄。"
          price={
            <>
              免費借用2-3個月，其後租金為：<br/>
              基本款輪椅 ：$90/月 （按金$500）<br/>
              電動輪椅 ：$120-220/月（按金$2000-3000）<br/>
              拐杖 ：$30-50/月（按金$100-180）<br/>
              助行架（無轆） ：$30/月（按金$250）<br/>
              助行架（有轆） ：$60/月（按金$400）<br/>
              沖涼椅（有扶手） ：$50/月（按金$250）<br/>
              沖涼便椅（重型） ：$60/月（按金$500）<br/>
              電動護理床 ：$800/月（按金$3000）<br/>
              電動氣墊床/防壓瘡床墊：$200/月(按金$1000-2000)<br/>
              坐墊 ：$80/月（按金$600）<br/>
              高背椅 ：$200/月（按金$3000）
            </>
          }
          period={
            <>
              六個月（不包括免費借用的期間）。<br/>
              * 通常可免費借用2-3個月
            </>
          }
          contact={
            <>
              點擊網頁中「復康器材借用申請表格」填寫申請表。<br/>
              2388 9915
            </>
          }
          website="https://www.hkrehabright.org/副本-復康器材-用品回收及租借服務"
        />

        {/* 6. 保良局一站照護 */}
        <OrganizationCard
          title="保良局一站照護"
          address="葵涌打磚砰街49-53號華基工業大廈第一期5樓B室"
          services="基本輪椅，醫護床，移位機/吊機，步行架/助行器。"
          price={
            <>
              基本輪椅 ：$120/星期<br/>
              步行架/助行器 ：只供二手出售助行架$100-150<br/>
              醫護床 ： $700/800 /月<br/>
              移位機/吊機 ： $800/月
            </>
          }
          period="最少租一個月，具體視乎需求作溝通及安排。"
          additional="全新/二手復康器材代購及租用、銷售護理用品護理諮詢服務、家居環境安全評估服務、回收二手復康器材。"
          contact={
            <>
              2422 1233、9126 9690（WhatsApp）<br/>
              wellnessone@poleungkuk.org.hk
            </>
          }
          website="https://www.poleungkuk.org.hk/support-us/social-entreprise-and-vocational-rehabilitation-services-centre/wellness-one"
        />

        {/* 7. 復康資源協會 */}
        <OrganizationCard
          title="復康資源協會"
          address="香港薄扶林沙灣徑7號地下"
          services="基本輪椅，電動輪椅，步行架/助行器，便椅/浴椅，醫護床，高背椅。"
          price={
            <>
              一般輪椅 ： $60/星期（按金 $500）<br/>
              特殊輪椅 ： $80/星期（按金$1500）<br/>
              電動輪椅 ： $200/星期（按金$5000）<br/>
              步行架 ： $20-40/星期（按金$200-400）<br/>
              便椅 ： $30/星期（按金$600）<br/>
              浴椅 ： $20起（按金$500起）<br/>
              電動床 ： $200/星期（按金$5000）<br/>
              高背椅 ： $80/星期（按金$2000）<br/>
              <br/>
              * 經濟有困難者可申請豁免或減費
            </>
          }
          period="8星期（續借期限為4星期）"
          contact={
            <>
              2364 2345<br/>
              租借時需要帶備身份證及三個月內的住址證明文件
            </>
          }
          website="http://www.rehabaidsociety.org.hk/zh/clinical-services/service-hours-and-charges"
        />

        {/* 8. 同理家護送服務公司 */}
        <OrganizationCard
          title="同理家護送服務公司"
          address="新蒲崗"
          services="基本輪椅，拐杖/手叉，步行架/助行器，便椅/浴椅，醫護床，床褥，移位機/吊機。"
          price={
            <>
              免費<br/>
              <br/>
              * 沒有運送服務；醫護床/其他大型物資的專業運送需要用者自費。
            </>
          }
          contact={
            <>
              8208 8374 （查詢）<br/>
              9730 8249 （查詢 / 申請物資）
            </>
          }
        />

        {/* 9. 路向四肢傷殘協會 */}
        <OrganizationCard
          title="路向四肢傷殘協會"
          address="將軍澳調景嶺健明邨商場(擴展部份)露天平台3室"
          services="輪椅維修，基本輪椅，電動輪椅，便椅/浴椅，醫護床，斜台，移位機/吊機。"
          price={
            <>
              手推輪椅 ：$200/月 （按金$1000）<br/>
              電動輪椅 ：$1000/月 （按金$1000）<br/>
              便椅 ：$200/月 （按金$1000）<br/>
              移位機 ：$1000/月 （按金$1000）
            </>
          }
          period="三個月"
          contact={
            <>
              1. 請先致電 2330 6308 向職員借用登記或預約歸還。<br/>
              2. 根據職員指引，填妥借用表格及辦理借用手續。<br/>
              3. 如委託他人代理，代理人需出示身份証以作記錄。<br/>
              4. 一般公眾借用，需提供身份証 / 旅遊證件登記。<br/>
              * 會員租借免費（可於網站申請入會）
            </>
          }
          website="https://4limb.org/簡介/服務/rehabilitationresources/"
        />

      </div>
    </div>
  );
};

export default MedicalEquipmentPage;
