import BtnMarketingWrapper from "../btnMarketingWrapper";
import BtnMarketing from "../btnMarketing";
import { allData } from '@assets/mockData'

export default function MiscButtonContentList({ id }) {

  let prevID, nextID
  const numID = parseInt(id)
  // const theIndex = allData.findIndex((item, index) => index === id);
  // const theContent = allData[theIndex];
  prevID = numID === 0 ? null : numID - 1;
  nextID = numID === allData.length - 1 ? null : numID + 1;
  // useEffect(() => {


  // }, [id]);

  return (
    <BtnMarketingWrapper position="content" >
      {prevID !== null && <BtnMarketing to={`/content/${prevID}`} name='last' title='上一頁' />}
      {nextID !== null && <BtnMarketing to={`/content/${nextID}`} name='next' title='下一頁' />}
    </BtnMarketingWrapper>
  );
}
