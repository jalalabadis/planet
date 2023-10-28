import React, { ReactElement } from 'react';
import Footer from '../src/features/common/Layout/Footer';
import LandingSection from '../src/features/common/Layout/LandingSection';
import VerifyEmailComponent from './../src/features/common/VerifyEmail/VerifyEmail';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';

function VerifyEmail(): ReactElement {
  return (
    <div>
      <LandingSection>
        <VerifyEmailComponent />
      </LandingSection>

      <Footer />
    </div>
  );
}

export default VerifyEmail;

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
