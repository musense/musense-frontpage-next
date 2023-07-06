import BtnMarketing from '@components/btnMarketing';
import BtnMarketingWrapper from '@components/btnMarketingWrapper';
import MiscButtonList from './miscButtonList';
import { useAppContext } from "@store/context";
import React from "react";


export default function MarketingButtonList() {
  const { state, dispatch } = useAppContext();

  return (
    <>
      <BtnMarketingWrapper position='upper'>
        <BtnMarketing title="廣告投放代理" name='advertise'
          type="button"
          active={state.filteredActive.advertise}
          callback={() => {
            dispatch({
              type: "FILTER_ADVERTISE",
              payload: {
                active: !state.filteredActive.advertise,
              }
            });
          }}
        />
        <BtnMarketing title="ＳＥＯ網站優化" name='seo'
          type="button"
          active={state.filteredActive.seo}
          callback={() => {
            dispatch({
              type: "FILTER_SEO",
              payload: {
                active: !state.filteredActive.seo,
              }
            });
          }}
        />
        <BtnMarketing title="社群/口碑行銷" name='social-media'
          type="button" 
          active={state.filteredActive.socialMedia}
          callback={() => {
            dispatch({
              type: "FILTER_SOCIAL_MEDIA",
              payload: {
                active: !state.filteredActive.socialMedia,
              }
            });
          }}
        />
        <BtnMarketing title="數位/形象設計" name='cis'
          type="button" 
          active={state.filteredActive.cis}
          callback={() => {
            dispatch({
              type: "FILTER_CIS",
              payload: {
                active: !state.filteredActive.cis,
              }
            });
          }}
        />
        {/* <BtnMarketing title="品牌/口碑行銷" name='brand' /> */}
      </BtnMarketingWrapper>
    </>
  );
}
