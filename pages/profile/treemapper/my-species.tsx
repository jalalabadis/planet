import Head from 'next/head';
import React, { ReactElement } from 'react';
import UserLayout from '../../../src/features/common/Layout/UserLayout/UserLayout';
import MySpecies from '../../../src/features/user/TreeMapper/MySpecies';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useUserProps } from '../../../src/features/common/Layout/UserPropsContext';
import AccessDeniedLoader from '../../../src/features/common/ContentLoaders/Projects/AccessDeniedLoader';
import { GetStaticPropsContext } from 'next';

export default function MySpeciesPage(): ReactElement {
  const { t } = useTranslation('me');
  const { user } = useUserProps();
  return (
    <UserLayout>
      <Head>
        <title>{t('mySpecies')}</title>
      </Head>
      {user?.type === 'tpo' ? <MySpecies /> : <AccessDeniedLoader />}
    </UserLayout>
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
