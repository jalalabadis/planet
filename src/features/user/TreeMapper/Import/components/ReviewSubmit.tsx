import React, { ReactElement } from 'react';
import styles from '../Import.module.scss';
import { useTranslation } from 'next-i18next';
import formatDate from '../../../../../utils/countryCurrency/getFormattedDate';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { PlantLocation } from '../../Treemapper';

interface Props {
  plantLocation: PlantLocation;
  handleBack: () => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

export default function ReviewSubmit({
  plantLocation,
  handleBack,
}: Props): ReactElement {
  const router = useRouter();
  const { t } = useTranslation(['treemapper', 'common']);
  const [isUploadingData, setIsUploadingData] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(true);

  const handleSubmit = () => {
    setIsUploadingData(true);
    setSubmitted(true);
    setIsUploadingData(false);
  };

  return (
    <div className={styles.stepWrapper}>
      {submitted ? (
        <>
          <div className={styles.successContainer}>
            <h2>{t('treemapper:submittedSuccess')}</h2>
            <p>{t('treemapper:submittedSuccessDescription')}</p>
            <Button
              onClick={() => router.push('/profile/treemapper')}
              variant="contained"
              color="primary"
            >
              {t('myPlantLocations')}
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.stepTitle}>{t('summary')}</div>
          <div className={styles.stepDescription}>
            {t('reviewSubmitDescription')}
          </div>
          {plantLocation ? (
            <div className={styles.stepContent}>
              <div className={styles.grid}>
                <div className={styles.gridItem}>
                  <div className={styles.gridItemTitle}>{t('captureMode')}</div>
                  <div className={styles.gridItemValue}>
                    {plantLocation.captureMode}
                  </div>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridItemTitle}>{t('plantDate')}</div>
                  <div className={styles.gridItemValue}>
                    {formatDate(plantLocation.plantDate)}
                  </div>
                </div>
                <div className={styles.gridItem}>
                  <div className={styles.gridItemTitle}>
                    {t('registrationDate')}
                  </div>
                  <div className={styles.gridItemValue}>
                    {formatDate(plantLocation.registrationDate)}
                  </div>
                </div>
              </div>
              <p className={styles.gridItemTitle}>{t('species')}</p>
              <div className={styles.gridItemValue}>
                <span>
                  {plantLocation.plantedSpecies
                    ? plantLocation.plantedSpecies.map((species) => {
                        return (
                          <p key={species.id}>
                            {species.treeCount}{' '}
                            {species.scientificName
                              ? species.scientificName
                              : species.otherSpecies &&
                                species.otherSpecies !== 'Unknown'
                              ? species.otherSpecies
                              : t('maps:unknown')}
                          </p>
                        );
                      })
                    : []}
                </span>
              </div>
              {plantLocation.type === 'multi' &&
              plantLocation.captureMode === 'external' ? (
                <>
                  <p className={styles.gridItemTitle}>{t('sampleTrees')}</p>
                  <div className={styles.gridItemValue}>
                    {plantLocation.samplePlantLocations &&
                      plantLocation.samplePlantLocations.map((spl, index) => {
                        return (
                          <div key={index} className={styles.value}>
                            {index + 1}.{' '}
                            <span className={styles.link}>
                              {'otherSpecies' in spl && spl.otherSpecies}
                            </span>
                            <br />
                            {spl.tag ? `${t('maps:tag')} #${spl.tag} • ` : null}
                            {spl?.measurements?.height}
                            {t('maps:meterHigh')} • {spl?.measurements?.width}
                            {t('maps:cmWide')}
                          </div>
                        );
                      })}
                  </div>
                </>
              ) : (
                []
              )}
              <div className={`${styles.formField}`}>
                <div className={styles.formFieldHalf}>
                  <Button
                    onClick={handleBack}
                    variant="contained"
                    color="inherit"
                  >
                    {isUploadingData ? (
                      <div className={styles.spinner}></div>
                    ) : (
                      t('treemapper:back')
                    )}
                  </Button>
                </div>
                <div className={styles.formFieldHalf}>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                  >
                    {isUploadingData ? (
                      <div className={styles.spinner}></div>
                    ) : (
                      t('treemapper:submit')
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            []
          )}
        </>
      )}
    </div>
  );
}
