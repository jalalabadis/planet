import React, { ReactElement } from 'react';
import UserLayout from '../../../src/features/common/Layout/UserLayout/UserLayout';
import Head from 'next/head';
import ManagePayouts, {
  ManagePayoutTabs,
} from '../../../src/features/user/ManagePayouts';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useUserProps } from '../../../src/features/common/Layout/UserPropsContext';
import AccessDeniedLoader from '../../../src/features/common/ContentLoaders/Projects/AccessDeniedLoader';
import { GetStaticPropsContext } from 'next';
export default function PayoutSchedulePage(): ReactElement {
  const { t, ready } = useTranslation('me');
  const { user } = useUserProps();
  return (
    <UserLayout>
      <Head>
        <title>{ready ? t('managePayouts.titlePayoutSchedule') : ''}</title>
      </Head>
      {user?.type === 'tpo' ? (
        <ManagePayouts step={ManagePayoutTabs.PAYOUT_SCHEDULE} />
      ) : (
        <AccessDeniedLoader />
      )}
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
