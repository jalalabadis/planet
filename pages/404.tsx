import Custom404Image from '../public/assets/images/Custom404Image';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Footer from '../src/features/common/Layout/Footer';
import { GetStaticPropsContext } from 'next';

interface Props {
  initialized: Boolean;
}

export default function Custom404(initialized: Props) {
  const styles = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as const;
  const router = useRouter();

  return (
    <>
      {initialized ? (
        <div style={styles}>
          <h2>{router.query.error}</h2>
          <div style={{ width: '300px', height: '175px' }}>
            <Custom404Image />
          </div>
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale || 'en',
        [
          'bulkCodes',
          'common',
          'country',
          'donate',
          'donationLink',
          'editProfile',
          'giftfunds',
          'leaderboard',
          'managePayouts',
          'manageProjects',
          'maps',
          'me',
          'planet',
          'planetcash',
          'redeem',
          'registerTrees',
          'tenants',
          'treemapper',
        ],
        null,
        ['en', 'de', 'fr', 'es', 'it', 'pt-BR', 'cs']
      )),
    },
  };
}
