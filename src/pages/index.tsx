import Layout from '../components/Navbar/Layout.jsx';
import About from '@components/index/about';
import OurService from '@components/index/ourService';
import ContactUs from '@components/index/contactUs';
import { Main } from '@components/Main/Main';
import { Meta } from '@layouts/Meta';

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
      <About />
      <OurService apiUrl={process.env.NEXT_PUBLIC_SERVER_URL} />
      <ContactUs />
    </Main>
  );
};

export default Home;
