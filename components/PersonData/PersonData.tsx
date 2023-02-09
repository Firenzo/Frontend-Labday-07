import { useEffect, useState } from 'react';
import styles from './PersonData.module.scss';
import Image from 'next/image';

import profilePhoto from '../../public/Profile_Photo.jpg';

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

// export type PersonDataProps = {
//   title: string;
//   linkList: Array<{ text: string; value: string }>;
// };

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
      <div className={styles.linkSection}>
        <Image
          src={profilePhoto}
          alt="Mila's photo"
          width={300}
          className={styles.profilePhoto}
        />
        <p> {personData.name}</p>
        <p>Date of birth: {personData.dateOfBirth}</p>
        <p>Residence: {personData.residence}</p>
        <p>Nationality: {personData.nationality}</p>
        <p>Grade: {personData.grade}</p>
      </div>
    )
  );
}
