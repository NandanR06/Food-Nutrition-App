# Food Nutrition Detection App

## 📌 Overview
This is a MERN stack project that utilizes a camera to identify food items (e.g., a burger) and display their nutritional information. The app also classifies food as healthy or unhealthy, calculates the user's BMI, and suggests a healthy diet and exercises.

## 🚀 Features
- **Food Identification**: Uses a camera to detect food items.
- **Nutritional Info**: Fetches calorie and nutrition details.
- **BMI Calculation**: Computes the user's BMI based on input.
- **Diet & Exercise Suggestions**: Provides personalized health recommendations.
- **Multilingual Support**: Supports vernacular languages.
- 
![Project Screenshot](./home.png)

## 🛠️ Tech Stack
### Frontend
- React.js
- Tailwind CSS
- Zustand (for state management)

### Backend
- Node.js
- Express.js
- MongoDB

### Machine Learning
- TensorFlow.js (for image classification using MobileNet)
- CoinGecko API (for cryptocurrency tracking, if applicable)

## 🔧 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/NandanR06/food-nutrition-app.git
cd food-nutrition-app
```

### 2️⃣ Install Dependencies
#### Frontend
```sh
cd frontend
npm install
```

#### Backend
```sh
cd backend
npm install
```

### 3️⃣ Start the Application
#### Start Backend Server
```sh
cd backend
npm start
```

#### Start Frontend Server
```sh
cd frontend
npm run dev
```

## 📷 Food Detection Setup
- Ensure you have a webcam or mobile camera enabled.
- MobileNet is used for image classification.
- TensorFlow.js must be properly installed: `npm install @tensorflow/tfjs @tensorflow-models/mobilenet`.

## ⚠️ Common Issues & Fixes
- **Module Not Found (@tensorflow/tfjs & @tensorflow-models/mobilenet)**: Run `npm install` again.
- **Zustand Error in Vite**: Try clearing cache: `rm -rf node_modules/.vite && npm install`.
- **TensorFlow Model Import Error**: Ensure you are using the correct import path.

## 📜 License
This project is open-source under the MIT License.

## 🙌 Contributions
Feel free to fork this repository, submit pull requests, or report issues!

---
🚀 **Developed by Nandan R**
