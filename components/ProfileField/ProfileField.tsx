import { useEffect, useState } from "react";
import styles from "./ProfileField.module.scss";

import { TextField } from "@/components/textField/TextField";

import { SubjectSearch } from "@/components/SubjectSearch/SubjectSearch";

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
  const items = [
    { name: "Communication", id: 0 },
    { name: "Time Management", id: 1 },
    { name: "Teamwork", id: 2 },
    { name: "Leadership", id: 3 },
    { name: "Critical Thinking", id: 4 },
    { name: "Problem Solving", id: 5 },
    { name: "Decision Making", id: 6 },
    { name: "Creativity", id: 7 },
    { name: "Organization", id: 8 },
    { name: "Adaptability", id: 9 },
    { name: "Stress Management", id: 10 },
    { name: "Negotiation", id: 11 },
    { name: "Conflict Resolution", id: 12 },
    { name: "Collaboration", id: 13 },
    { name: "Customer Service", id: 14 },
    { name: "Interpersonal Skills", id: 15 },
    { name: "Emotional Intelligence", id: 16 },
    { name: "Goal Setting", id: 17 },
    { name: "Motivation", id: 18 },
    { name: "HTML", id: 19 },
    { name: "CSS", id: 20 },
    { name: "JavaScript", id: 21 },
    { name: "Vue", id: 22 },
    { name: "TypeScript", id: 23 },
    { name: "React", id: 24 },
    { name: "Angular", id: 25 },
  ];
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loadFromApi, setLoadFromApi] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      const res = await fetch("/api/cv", {
        method: "GET",
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

        <TextField
          rteData={"click here to activate the text editor"}
          field="profile"
          language="en"
        ></TextField>
        {profileData.competences?.en.length > 0 && (
          <div className={styles.fieldWrapper}>
            <p className={styles.title}>Competences</p>
            {loadFromApi && (
              <p className={styles.competences}>
                {profileData.competences.en.map((competence, index) => (
                  <div className={styles.competence} key={index}>
                    {competence}
                  </div>
                ))}
              </p>
            )}
          </div>
        )}
        <SubjectSearch
          items={items}
          subject="Compenteces"
          isOpen={true}
          field="competences"
          language="en"
          toggleLoad={() => {
            setLoadFromApi(false);
          }}
        />
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
