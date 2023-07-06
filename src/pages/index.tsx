import { Main } from '@components/Main/Main';
import { Meta } from '@layouts/Meta';
import Index from '@components/index/index';

const Home = () => {
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
      <Index apiUrl={process.env.NEXT_PUBLIC_SERVER_URL} />
    </Main>
  );
};

export default Home;


