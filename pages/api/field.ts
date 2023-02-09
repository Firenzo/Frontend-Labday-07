// Import the functions you need from the SDKs you need
import type { NextApiRequest, NextApiResponse } from 'next'
import { initializeApp } from "firebase/app";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  const requestBody = JSON.parse(req.body);

  if (requestBody.fieldName && requestBody.language) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBPoFZ3C7k6MjYqr72JVLqPZddARxe9Zas",
        authDomain: "labday7.firebaseapp.com",
        projectId: "labday7",
        storageBucket: "labday7.appspot.com",
        messagingSenderId: "308925116206",
        appId: "1:308925116206:web:b748a17fa7c6b9effc54bf"
      };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody.value),
      };
      fetch(
        `https://labday7-default-rtdb.europe-west1.firebasedatabase.app/cv/${requestBody.fieldName}/${requestBody.language}.json`,
        requestOptions
      ).then((response) =>
        res.status(200).json({
          message: "Succesvol opgeslagen!",
        })
      );

      const updateDateRequestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(new Date()),
      };
      fetch(
        `https://labday7-default-rtdb.europe-west1.firebasedatabase.app/cv/lastUpdated.json`,
        updateDateRequestOptions
      ).then((response) =>
        res.status(200).json({
          message: "datum geupdate",
        })
      );
  } else {
    res.status(200).json({
      message: "Kon niet opslaan!",
    });
  }
}
