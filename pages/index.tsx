import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { PersonData } from "@/components/PersonData/PersonData";
import { SubjectSearch } from "@/components/SubjectSearch/SubjectSearch";

import { TextField } from "@/components/textField/TextField";

const inter = Inter({ subsets: ["latin"] });
let rteData: string;

export default function Home() {
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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PersonData />

        <div className={styles.grid}></div>

        <TextField
          rteData={"click here to activate the text editor"}
          field="profile"
          language="en"
        ></TextField>
        <SubjectSearch
          items={items}
          subject="Compenteces"
          isOpen={true}
          field="competences"
          language="en"
        />
      </main>
    </>
  );
}
