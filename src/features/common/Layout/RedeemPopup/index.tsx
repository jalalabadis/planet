import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '../../../../../public/assets/images/icons/CloseIcon';
import styles from './RedeemPopup.module.scss';
import { useTranslation } from 'next-i18next';
import tenantConfig from '../../../../../tenant.config';
import { useUserProps } from '../UserPropsContext';

export default function RedeemPopup() {
  const { t, ready } = useTranslation(['leaderboard']);
  const config = tenantConfig();

  const [showRedeemPopup, setShowRedeemPopup] = useState(false);

  const { user, contextLoaded, loginWithRedirect } = useUserProps();

  const sendUserToLogin = () => {
    loginWithRedirect({
      redirectUri: `${process.env.NEXTAUTH_URL}/login`,
      ui_locales: localStorage.getItem('language') || 'en',
    });
  };

  useEffect(() => {
    if (contextLoaded && user) {
      setShowRedeemPopup(false);
    }
  }, [contextLoaded && user]);

  const isMountedRef = useRef(false);

  useEffect(() => {
    // Check if the component has already mounted before updating state
    if (isMountedRef.current) {
      return;
    }
    if (config.showRedeemHint) {
      const prev = localStorage.getItem('redeemPopup');
      if (!prev) {
        setShowRedeemPopup(true);
      } else {
        setShowRedeemPopup(prev === 'true');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('redeemPopup', showRedeemPopup);
  }, [showRedeemPopup]);

  // useEffect to update the isMountedRef after the initial mount
  useEffect(() => {
    isMountedRef.current = true;
  }, []);

  return ready && showRedeemPopup ? (
    <div className={styles.cookieContainer}>
      <button
        id={'redeemCloseButton'}
        className={styles.closeButton}
        onClick={() => setShowRedeemPopup(false)}
      >
        <CloseIcon color={styles.primaryColor} />
      </button>
      <div className={styles.cookieContent}>
        {t('common:redeemPopup')}{' '}
        <a onClick={sendUserToLogin}>{t('common:login')}</a>
      </div>
    </div>
  ) : null;
}
