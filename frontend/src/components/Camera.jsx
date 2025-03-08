import React, { useRef, useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
 import "@tensorflow/tfjs";
import useFoodStore from "../store/Food.store";

  const Camera = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { foodName, setFoodName } = useFoodStore();


  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureAndDetectFood = async () => {
    setLoading(true);
    const model = await mobilenet.load();

    const video = videoRef.current;
    const imageCapture = new ImageCapture(video.srcObject.getVideoTracks()[0]);
    const blob = await imageCapture.takePhoto();
    
    const img = new Image();
    img.src = URL.createObjectURL(blob);

    img.onload = async () => {
      const prediction = await model.classify(img);
      if (prediction.length > 0) {
        const detectedFood = prediction[0].className; 
        setFoodName(detectedFood);
       
      }
      setLoading(false);
    };
  };

  return (
    <div className="p-2 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Food Detector</h2>
      <video ref={videoRef} autoPlay playsInline className="max-w-80 rounded-md"></video>
      <div className="flex gap-12"><button
        onClick={startCamera}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Start Camera
      </button>
      <button
        onClick={captureAndDetectFood}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Detect Food
      </button></div>
      

      {loading && <p className="text-gray-600">Detecting food...</p>}
      {foodName && <p className="text-xl font-bold">Detected: {foodName}</p>}
    </div>
  );
};
export default Camera;
