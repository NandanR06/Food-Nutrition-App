import React, { useState} from "react";

export const Bmi = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(null);
  
    const calculateBMI = () => {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
    };
  
    return (
      <div className="p-4  rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold">BMI Calculator</h2>
        <input
          type="number"
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Height (m)"
          onChange={(e) => setHeight(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <button
          onClick={calculateBMI}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer"
        >
          Calculate BMI
        </button>
        {bmi && <p className="mt-2">Your BMI: {bmi}</p>}
      </div>
    );
  };