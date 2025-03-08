import React, { useState } from "react";
import Camera from "./components/Camera";
import { FoodDetails } from "./components/FoodDetails";
import { Bmi } from "./components/Bmi";
import Chatbotinfo from "./components/Chatbotinfo";

export default function App() {
  const [capturedImage, setCapturedImage] = useState(null);
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100 ">
      <h1 className="text-2xl font-bold mb-4">Food Nutrition App</h1>
      <div className="flex justify-center gap-4  item-center p-4  rounded-lg shadow-md mx-auto">
        <div className="flex flex-col gap-4">
          <Camera onCapture={setCapturedImage} />
          <Chatbotinfo />
        </div>
        <div className="flex flex-col gap-4">
          <Bmi />
          <FoodDetails />
        </div>
      </div>
    </div>
  );
}
