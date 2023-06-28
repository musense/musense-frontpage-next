import Banner from '@components/marketing/banner';
import MarketingButtonList from '@components/marketing/marketingButtonList';
import MiscButtonList from '@components/marketing/miscButtonList';
import CardWrapper from '@components/marketing/cardWrapper';
import HotContent from '@components/marketing/hotContent';
import { upperUpperArray, lowerUpperArray } from '@assets/mockData';
import { Main } from '@components/Main/Main';
import { Meta } from '@layouts/Meta';

const Marketing = () => {
  return (
    <Main
      meta={
        <Meta
          title={process.env.NEXT_PUBLIC_TITLE || ''}
          description={process.env.NEXT_PUBLIC_DESCRIPTION || ''}
          keywords={process.env.NEXT_PUBLIC_KEYWORDS || ''}
          canonical={process.env.NEXT_PUBLIC_SITE}
        />
      }
    >
      {/* <Banner  />  */}
      <MarketingButtonList />
      <CardWrapper contents={[...upperUpperArray, ...lowerUpperArray]} />
      <MiscButtonList />
      <HotContent />
    </Main>
  );
};

export default Marketing;