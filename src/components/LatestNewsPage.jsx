import React from 'react';
import Container from '@material-ui/core/Container';
import LatestNewsTabs from "../../src/components/LatestNewsTabs";
import Breadcrumb from "../../src/components/Breadcrumb";
import Typography from "@material-ui/core/Typography";
const LatestNewsPage = () => {
  return (
    <>
      <Container maxWidth="md">

        <Breadcrumb/>
        <Typography variant="h5" color='primary' align='center' gutterBottom>SUUNTO 7 石墨灰 禮盒限量版</Typography>
        <Typography variant="subtitle1" color='primary' align='center' gutterBottom>新品上市活動</Typography>
        <img className='responsive-img' alt={`SUUNTO 7 石墨灰 禮盒限量版`} src='/images/news/B4F8440D-1811-4016-A7E8-D753460EC325.jpg' width='1500px' height='750px'/>
        <Typography variant="h6" color='primary' align='left' gutterBottom>一、活動期間</Typography>

        <Typography variant="body1" gutterBottom>
          即日起 ~ 2021 / 02 / 25
        </Typography>
        <Typography variant="h6" color='primary' align='left' gutterBottom>二、活動內容</Typography>

        <Typography variant="body1" gutterBottom>
          凡於鴻翔全省經銷通路購買 Suunto 7 石墨灰 禮盒限量版，並在期限內，在FB / IG分享 Suunto 7 的【一項功能】，就贈價值新台幣 2,800 元的 Suunto 原廠皮革錶帶乙條。
        </Typography>
        <Typography variant="h6" color='primary' align='left' gutterBottom>三、詳細贈品贈送辦法</Typography>

        <Typography variant="body1" gutterBottom>
          <ul className='noStyleList'>
            步驟 1. 註冊商品
            <li>(1.) 註冊成為鴻翔會員。</li>
            <li>(2.) 前往 [支援服務] > [產品註冊]，註冊您的 Suunto 7 石墨灰 禮盒限量版。</li>
          </ul>


          <ul className='noStyleList'>
            步驟 2. 貼文分享腕錶功能
            <li>(1.) 在 Facebook 或 Instagram 公開貼文，分享您最喜歡 Suunto 7 產品的【一項功能】，並標註 Suunto 粉絲專頁。

              FB ID：@SUUNTOTAIWAN
              IG ID：@suunto_tw</li>
            <li>(2.) 公開貼文至少需含２張清晰的手錶照片，以及20字以上的說明。以使用者個人所拍攝的照片為限。</li>
          </ul>

          <ul className='noStyleList'>
            步驟 3. 告知小編
            <li>(1.) 在2021 年 02 月 25 日前之前，將貼文公開發表，並私訊告知【＠SuuntoTaiwan 臉書官方粉絲專頁】小編，您的：(1)鴻翔會員帳號、(2)產品序號、(3)貼文連結。</li>
            <li>(2.) 經鴻翔國際審核，確認貼文內容及圖片，符合相關規定後，小編將私訊回覆，請您提供贈品寄件資訊，並於12個工作天內寄出贈品。</li>
          </ul>
        </Typography>
        <Typography variant="h6" color='primary' align='left' gutterBottom>六、注意事項</Typography>
        <Typography variant="body2" gutterBottom>
          <ul className='decimalList'>
            <li>本活動適用地區，與贈品寄送地點，限僅「台、澎、金、馬」地區。活動地區外之會員，恕無法參加活動及兌換贈品。</li>
            <li>本活動若有未盡之處，鴻翔國際電通股份有限公司（以下稱本公司）保留修改活動辦法、變更活動的權利，同時有權對此活動之所有事宜為最終之解釋與裁決。修改訊息將於本公司官網最新消息公佈，不另行通知。</li>
            <li>本活動僅限鴻翔國際全省經銷通路，售出之活動商品為限。</li>
            <li>參加本活動之消費者，如未在 2021 年 02 月 25 日前，於官網完成【產品註冊】，並將【使用心得貼文】連結，提供給本公司，將視同放棄參加本活動。</li>
            <li>本活動贈品獎項以實物為主，不得要求折現，或換貨。</li>
            <li>活動贈品，將於消費者提供寄件資訊後12個工作天內寄出。</li>
            <li>贈品寄送地址以消費者提供之資料為主。若提供不實、不清楚、不完整或不正確之資料，或不符合活動辦法規定，導致贈品無法寄送者，將視同放棄活動參與權益並請自負其責，且不得要求補寄贈品或兌換現金。</li>
            <li>本活動的文章分享內容及照片，若有嚴重誇大不實、惡意操作、描述與產品不符的功能，或違背善良風俗者，本公司有權取消其參加活動之資格。</li>
            <li>本活動如因不可抗力之特殊原因無法執行時，本公司有權決定取消、終止、修改或暫停本活動之權利。</li>
            <li>本活動由如有任何因電腦、網路、技術或不可歸責於本公司之事由，致參加者所登錄之資料有遲延、遺失、錯誤之情況，本公司不負任何法律責任，參加者亦同意不因此異議。</li>
            <li>如有違反本活動辦法及注意事項，或以其他明顯違反公平性之方式，意圖混淆、影響或破壞活動結果者，經本公司發現或第三人檢舉並查證屬實，本公司得立即取消其資格，並對於其行為保留法律追訴權。若該個人已兌換贈品，本公司除追回贈品外，並對其破壞本活動之行為保留法律追訴權。</li>
            <li>本活動結束後如有任何問題，請於一個月內向本公司申請查詢，超過活動結束後之案件將不予處理。</li>
            <li>依個人資料保護法，參加本活動者視為了解及同意本公司依贈品兌換及行銷活動之需要進行蒐集、處理及利用其個人資料（限電話、姓名及地址，以利通知獲獎資訊）。參加者如欲閱覽、變更、刪除個資或要求停止蒐集、處理及利用其個人資料，請通知本公司要求辦理。</li>
            <li>本活動恕不得與其他活動同時參加。</li>
          </ul>
        </Typography>
      </Container>
    </>
  );
};

export default LatestNewsPage;