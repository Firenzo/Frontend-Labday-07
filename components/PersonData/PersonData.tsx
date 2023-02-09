import { useEffect, useState } from 'react';
import styles from './PersonData.module.scss';

export type PersonData = {
  dateOfBirth: string;
  dateOfEmployment: string;
  employedIn: string;
  grade: string;
  initials: string;
  name: string;
  nationality: string;
  residence: string;
};

export function PersonData() {
  const [personData, setPersonData] = useState<PersonData | null>(null);

  useEffect(() => {
    const fetchPersonData = async () => {
      const res = await fetch('/api/person', {
        method: 'GET',
      });
      const json = await res.json();

      if (json) {
        setPersonData(json);
      }
    };

    fetchPersonData();
  }, []);

  return (
    personData && (
      <div className={`${styles.personDataWrapper} wrapper`}>
        <div className={styles.photoWrapper}></div>
        <div className={styles.dataWrapper}>
          <p className={styles.name}>{personData.name}</p>
          <p>
            <span>Date of birth:</span> {personData.dateOfBirth}
          </p>
          <p>
            <span>Residence:</span>
            {personData.residence}
          </p>
          <p>
            <span>Nationality:</span>
            {personData.nationality}
          </p>
          <p>
            <span>Grade:</span>
            {personData.grade}
          </p>
        </div>
      </div>
    )
  );
}
