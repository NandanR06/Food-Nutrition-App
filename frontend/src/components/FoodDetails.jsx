import React, { useState } from "react";
import { FoodService } from "../service/FoodService";
import useFoodStore from "../store/Food.store.jsx";

export const FoodDetails = () => {
  const [nutrition, setNutrition] = useState(null);
  const { foodName, setFoodName } = useFoodStore();
  const handleSearch = async () => {
    console.log(foodName);
    const data = await FoodService(foodName);
    setNutrition(data);
  };
  let food = foodName.split(" ")[0];

  return (
    <div className="p-6 w-full mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Food Nutrition Checker</h2>
      <input
      value={food}
        className="border w-full rounded "
        onChange={(e) => {
          setFoodName(e.target.value);
        }}
      />
      {nutrition && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          {nutrition.items ? (
            nutrition.items.map((item, index) => (
              <div key={index} className="border-b pb-2 mb-2">
                <p className="font-bold">{item.name}</p>
                <p>Calories: {item.calories} kcal</p>
                <p>Protein: {item.protein_g} g</p>
                <p>Carbs: {item.carbohydrates_total_g} g</p>
                <p>Fats: {item.fat_total_g} g</p>
              </div>
            ))
          ) : (
            <p>No nutrition data found.</p>
          )}
        </div>
      )}
      <button
        className="border p-2 text-white rounded-xl bg-blue-500"
        onClick={handleSearch}
      >
        Check
      </button>
    </div>
  );
};
