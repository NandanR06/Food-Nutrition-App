import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { GoogleGenerativeAI } from "@google/generative-ai";



const Chatbotinfo = () => {

  const API_KEY = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY;
  const URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${API_KEY}`;


async function run() {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "What is AI?" }] }],
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
  
};

export default Chatbotinfo;







