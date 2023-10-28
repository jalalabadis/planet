import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { getRequest } from '../../src/utils/apiRequests/api';
import { ErrorHandlingContext } from '../../src/features/common/Layout/ErrorHandlingContext';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { handleError, APIError, UserPublicProfile } from '@planet-sdk/common';

export default function DirectGift(): ReactElement {
  const router = useRouter();
  const { redirect, setErrors } = React.useContext(ErrorHandlingContext);

  async function loadPublicUserData() {
    try {
      const newProfile = await getRequest<UserPublicProfile>(
        `/app/profiles/${router.query.id}`
      );
      if (newProfile.type !== 'tpo') {
        localStorage.setItem(
          'directGift',
          JSON.stringify({
            id: newProfile.slug,
            displayName: newProfile.displayName,
            type: newProfile.type,
            show: true,
          })
        );
      }
      router.push('/', undefined, {
        shallow: true,
      });
    } catch (err) {
      setErrors(handleError(err as APIError));
      redirect('/');
    }
  }

  React.useEffect(() => {
    if (router.isReady && router.query.id) {
      loadPublicUserData();
    }
  }, [router]);
  return <div></div>;
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

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
