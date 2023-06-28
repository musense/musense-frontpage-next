import React from "react";
import BtnMarketing from "@components/btnMarketing";
import BtnMarketingWrapper from '@components/btnMarketingWrapper';

export default function MiscButtonList() {
  return  (
    <>
      <BtnMarketingWrapper position='lower'>
        <BtnMarketing title="回首頁" to="/" name='back-home' />
        <BtnMarketing title="看更多文章" name='see-more' />
      </BtnMarketingWrapper>
    </>
  );;
}
