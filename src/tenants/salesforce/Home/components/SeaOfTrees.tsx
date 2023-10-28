import gridStyles from './../styles/Grid.module.scss';
import styles from './../styles/SeaOfTrees.module.scss';

export default function SeaOfTrees() {
  return (
    <div>
      <div className={`${styles.seaOfTreesContainer}`}>
        <div className={`${gridStyles.fluidContainer} ${styles.seaOfTrees}`}>
          <div
            className={`${gridStyles.gridRow} ${gridStyles.justifyContentCenter} ${gridStyles.mb65100}`}
          >
            <div className={`${gridStyles.colMd8} ${gridStyles.col12}`}>
              <h3>Blue Carbon Ocean Sustainability Program</h3>
              <p className={styles.contentSectionSubhead}>
                Where Ocean Sustainability meets Trees.
              </p>
              <p>
                Bold Ocean-Climate Action is necessary to create a just and
                sustainable future where everyone can thrive. We strive for
                Ocean Action for all, by all.
              </p>
              <p>
                The Salesforce Ocean Sustainability Program taps into the full
                power of Salesforce to protect, restore, and invest in
                mangroves, kelp, corals, salt marshes, sea grass, and oyster
                reefs.
              </p>
              <p>
                The improved protection and restoration of these ocean
                ecosystems will grow global carbon sequestration capacity,
                increase resilience, enhance food security, and help secure
                livelihoods.
              </p>
              <a href="https://trees.salesforce.com/restoring-guatemala">
                <button>Donate to Blue Carbon Projects</button>
              </a>
            </div>
          </div>
          <div
            className={`${gridStyles.gridRow} ${gridStyles.justifyContentCenter} ${gridStyles.mb65100} ${styles.seaOfTreesImagesContainer}`}
          >
            <div className={`${gridStyles.colMd3} ${gridStyles.col12}`}>
              <img
                src="/tenants/salesforce/images/madagascar.png"
                className={gridStyles.illustration1}
                alt=""
              />
            </div>
            <div className={`${gridStyles.colMd3} ${gridStyles.col12}`}>
              <img
                src="/tenants/salesforce/images/costa-rica.png"
                className={gridStyles.illustration1}
                alt=""
              />
            </div>
            <div className={`${gridStyles.colMd3} ${gridStyles.col12}`}>
              <img
                src="/tenants/salesforce/images/kenya.png"
                className={gridStyles.illustration1}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${gridStyles.gridRow} ${gridStyles.justifyContentCenter} ${gridStyles.mb65100}`}
          >
            <div className={`${gridStyles.colMd8} ${gridStyles.col12}`}>
              <hr />
            </div>
          </div>
          <div
            className={`${gridStyles.gridRow} ${gridStyles.justifyContentCenter} ${gridStyles.mb65100}`}
          >
            <div className={`${gridStyles.colMd8} ${gridStyles.col12}`}>
              <h3>How can you help?</h3>
              <p>
                Just <a href="/">click here</a> to see what tree project you’d
                like to support today. Then look for your donation on the
                Donation Tracker below and spread the word to your family,
                friends, colleagues, and network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
