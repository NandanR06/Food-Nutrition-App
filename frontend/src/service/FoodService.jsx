import axios from "axios";

const API_URL = "http://localhost:5000/api/food/detect-food";

export const FoodService = async (foodName) => {
  try {
    const response = await axios.get(API_URL, {
      params: { query: foodName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching food data:", error);
    return null;
  }
};
