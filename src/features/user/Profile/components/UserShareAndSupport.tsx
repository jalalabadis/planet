import React from 'react';
import { useRouter } from 'next/router';
import Share from '../../../../../public/assets/images/icons/userProfileIcons/Share';
import Support from '../../../../../public/assets/images/icons/userProfileIcons/Support';
import styles from '../styles/Profile.module.scss';
import tenantConfig from '../../../../../tenant.config';
import CancelIcon from '../../../../../public/assets/images/icons/CancelIcon';
import { useTranslation } from 'next-i18next';
import SocialShareContainer from './SocialShareContainer';
import { motion } from 'framer-motion';
import GlobeSelected from '../../../../../public/assets/images/navigation/GlobeSelected';
import { truncateString } from '../../../../utils/getTruncatedString';
import { User, UserPublicProfile } from '@planet-sdk/common';

const config = tenantConfig();

interface Props {
  userprofile: User | UserPublicProfile;
}

export default function UserShareAndSupport({ userprofile }: Props) {
  const { t, ready } = useTranslation(['donate', 'me']);
  const router = useRouter();
  const [showSocialBtn, setShowSocialBtn] = React.useState(false);
  const linkToShare = `${process.env.SCHEME}://${config.tenantURL}/t/${userprofile.slug}`;
  const textToShare = ready
    ? t('donate:textToShare', { name: userprofile.displayName })
    : '';
  const [screenWidth, setScreenWidth] = React.useState<number | null>(null);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: ready ? t('donate:shareTextTitle') : '',
          url: linkToShare,
          text: textToShare,
        })
        .then(() => {
          console.log('thanks for sharing');
        })
        .catch(() => {
          console.log('error in sharing');
        });
    } else {
      setShowSocialBtn(true);
    }
  };
  React.useEffect(() => {
    setScreenWidth(window.screen.width);
  });

  const profileURL = userprofile.url
    ? userprofile.url.includes('http') || userprofile.url.includes('https')
      ? userprofile.url
      : `http://${userprofile.url}`
    : '';

  return ready ? (
    <div style={{ position: 'relative' }}>
      {showSocialBtn && screenWidth !== null && screenWidth > 600 && (
        <motion.div
          animate={{
            x: 0,
            opacity: 1,
            position: 'absolute',
            top: '35px',
            right: userprofile.type !== 'tpo' ? '-180px' : '181px',
          }}
          transition={{ stiffness: 150, type: 'spring' }}
          initial={{
            x: -180,
            opacity: 0,
          }}
        >
          <SocialShareContainer userprofile={userprofile} type="private" />
        </motion.div>
      )}
      {showSocialBtn && screenWidth !== null && screenWidth < 600 && (
        <motion.div
          animate={{
            paddingLeft: userprofile.type === 'tpo' ? '191px' : 0,
            y: 0,
            opacity: 1,
          }}
          transition={{ stiffness: 150, type: 'spring' }}
          initial={{
            y: 100,
            opacity: 0,
          }}
        >
          <SocialShareContainer userprofile={userprofile} />
        </motion.div>
      )}

      <div className={styles.bottomIconsRow}>
        {userprofile.type !== 'tpo' && (
          <div
            className={styles.iconTextColumn}
            onClick={() => {
              router.push(`/s/${userprofile.slug}`);
            }}
          >
            <div className={styles.bottomIconBg}>
              <Support width="39px" />
            </div>
            <p className={styles.bottomRowText}>{t('me:support')}</p>
          </div>
        )}

        {profileURL && (
          <a
            className={styles.iconTextColumn}
            href={profileURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '12px' }}
          >
            <div className={styles.bottomIconBg}>
              <GlobeSelected color={'white'} width={'24px'} />
            </div>
            <p className={styles.bottomRowText}>
              {userprofile.urlText
                ? truncateString(userprofile.urlText, 20)
                : 'URL'}
            </p>
          </a>
        )}

        <div style={{ marginLeft: '12px' }} className={styles.iconTextColumn}>
          {showSocialBtn ? (
            <div
              className={styles.bottomIconBg}
              onClick={() => setShowSocialBtn(false)}
            >
              <CancelIcon color="white" width="25px" />
            </div>
          ) : (
            <div className={styles.bottomIconBg} onClick={handleShare}>
              <Share width="39px" color="white" solid />
            </div>
          )}
          {showSocialBtn ? (
            <p className={styles.bottomRowText}>{t('me:close')}</p>
          ) : (
            <p className={styles.bottomRowText}> {t('me:share')} </p>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
