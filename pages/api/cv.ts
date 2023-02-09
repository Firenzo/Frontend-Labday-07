import type { NextApiRequest, NextApiResponse } from 'next'
import { initializeApp } from "firebase/app";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

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
        method: "GET",
  };

  fetch(
    `https://labday7-default-rtdb.europe-west1.firebasedatabase.app/cv.json`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
}
