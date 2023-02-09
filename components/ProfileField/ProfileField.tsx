import { useEffect, useState } from 'react';
import styles from './ProfileField.module.scss';

export type ProfileData = {
  competences: {
    en: string;
    nl: string;
  };
  lastUpdated: string;
  profile: {
    en: string;
    nl: string;
  };
  workExperience: {
    en: string;
    nl: string;
  };
};

export function ProfileField() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const res = await fetch('/api/cv', {
        method: 'GET',
      });
      const json = await res.json();

      if (json) {
        setProfileData(json);
      }
    };

    fetchProfileData();
  }, []);

  return (
    profileData && (
      <div className={`${styles.profileWrapper} wrapper`}>
        {profileData.profile.en && (
          <div className={styles.fieldWrapper}>
            <p className={styles.title}>Profile</p>
            <p className={styles.profile}>{profileData.profile.en}</p>
          </div>
        )}
        {profileData.competences?.en.length > 0 && (
          <div className={styles.fieldWrapper}>
            <p className={styles.title}>Competences</p>
            <p className={styles.competences}>
              {profileData.competences.en.map((competence, index) => (
                <div className={styles.competence} key={index}>
                  {competence}
                </div>
              ))}
            </p>
          </div>
        )}
        {profileData.workExperience.en && (
          <div className={styles.fieldWrapper}>
            <p className={styles.title}>Work experience</p>
            <p className={styles.workExperience}>
              {profileData.workExperience.nl}
            </p>
          </div>
        )}
        {profileData.lastUpdated && (
          <p>
            <span>Last updated: </span>
            {profileData.lastUpdated}
          </p>
        )}
      </div>
    )
  );
}
