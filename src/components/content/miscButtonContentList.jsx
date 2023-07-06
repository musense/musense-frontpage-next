import BtnMarketingWrapper from "../btnMarketingWrapper";
import BtnMarketing from "../btnMarketing";
import { allData } from '@assets/mockData'

export default function MiscButtonContentList({
  prevInfo,
  nextInfo
}) {


  return (
    <BtnMarketingWrapper position="content" >
      {prevInfo && <BtnMarketing to={`/contents/${prevInfo._id}`} name='上一頁' title={prevInfo.title} />}
      {nextInfo && <BtnMarketing to={`/contents/${nextInfo._id}`} name='下一頁' title={nextInfo.title} />}
    </BtnMarketingWrapper>
  );
}
