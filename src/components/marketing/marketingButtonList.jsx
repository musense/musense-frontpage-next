import BtnMarketing from '@components/btnMarketing';
import BtnMarketingWrapper from '@components/btnMarketingWrapper';
import MiscButtonList from './miscButtonList';

export default function MarketingButtonList() {
  return (
    <>
      <BtnMarketingWrapper position='upper'>
        <BtnMarketing title="數位廣告行銷" name='advertise' />
        <BtnMarketing title="ＳＥＯ網站優化" name='seo' />
        <BtnMarketing title="社群/口碑行銷" name='social-media' />
        <BtnMarketing title="數位/形象設計" name='cis' />
        {/* <BtnMarketing title="品牌/口碑行銷" name='brand' /> */}
      </BtnMarketingWrapper>
    </>
  );
}
