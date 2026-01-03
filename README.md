# Cardiovascular Disease Risk Prediction

An AI-powered web application that predicts the risk of cardiovascular disease based on clinical and lifestyle data. The project uses a Gradient Boosting model for predictions and features a modern, responsive React frontend.

**🌐 Live Demo:** [CardioRisk Predictor](https://cardio-risk-prediction-1-7itm.onrender.com)


## 🚀 Features

- **Risk Assessment**: Real-time prediction based on 11 health parameters.
- **Interactive UI**: Clean, modern interface built with React and Framer Motion.
- **Data Insights**: Visual assessment of BMI, Mean Arterial Pressure, and Pulse Pressure.
- **Explainable AI**: Provides probability estimates and risk levels.
- **Responsive Design**: Works on desktops, tablets, and mobile devices.

## 📁 Repository Structure

```text
cardio-risk-prediction/
├── backend/                # Flask API
│   ├── app.py              # Main application logic
│   ├── cardio_gb_model.pkl # Trained Gradient Boosting model
│   └── requirements.txt    # Python dependencies
├── frontend/               # React + Vite application
│   ├── src/                # Frontend source code
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages (Home, Prediction, EDA, etc.)
│   │   └── api/            # API communication logic
│   └── package.json        # Node.js dependencies
└── README.md               # Project documentation
```

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, Framer Motion, Recharts
- **Backend**: Python, Flask, Flask-CORS
- **Machine Learning**: Scikit-Learn (Gradient Boosting), NumPy
- **Styling**: Vanilla CSS (Modern CSS features)

## 🚦 Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask server:
   ```bash
   python app.py
   ```
   The backend will start on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (optional, defaults to localhost):
   ```bash
   VITE_API_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will start on the port displayed in your terminal (usually `http://localhost:5173`).

## 🧠 Model Information

The application uses a **Gradient Boosting Classifier** trained on a Cardiovascular Disease dataset. It processes inputs such as:
- Age, Gender, Height, Weight
- Systolic & Diastolic Blood Pressure
- Cholesterol & Glucose levels
- Lifestyle factors (Smoking, Alcohol, Physical Activity)

Derived features like **BMI** and **Mean Arterial Pressure (MAP)** are calculated to improve prediction accuracy.

## 📄 License

This project is open-source. See the LICENSE file for details.

---
**Disclaimer**: This tool is for educational purposes only and does not provide medical advice. Always consult with a healthcare professional for clinical diagnosis.
