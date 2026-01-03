from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import os

app = Flask(__name__)
CORS(app)

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), 'cardio_gb_model.pkl')
model = pickle.load(open(model_path, 'rb'))


def encode_inputs(data):
    """Encode categorical inputs and compute derived features"""
    # Extract values
    age = int(data.get('age', 50))
    gender = data.get('gender', 'Male')
    height = float(data.get('height', 168))
    weight = float(data.get('weight', 70))
    ap_hi = int(data.get('ap_hi', 120))
    ap_lo = int(data.get('ap_lo', 80))
    cholesterol = data.get('cholesterol', 'Normal')
    gluc = data.get('gluc', 'Normal')
    smoke = data.get('smoke', 'No')
    alco = data.get('alco', 'No')
    active = data.get('active', 'Yes')
    
    # Compute derived features
    bmi = weight / ((height / 100) ** 2)
    map_value = (2 * ap_lo + ap_hi) / 3
    pulse_pressure = ap_hi - ap_lo
    
    # Encode categorical variables
    gender_encoded = 1 if gender == "Female" else 2
    cholesterol_encoded = 1 if cholesterol == "Normal" else 2 if cholesterol == "Above Normal" else 3
    gluc_encoded = 1 if gluc == "Normal" else 2 if gluc == "Above Normal" else 3
    smoke_encoded = 1 if smoke == "Yes" else 0
    alco_encoded = 1 if alco == "Yes" else 0
    active_encoded = 1 if active == "Yes" else 0
    
    # Create feature array in the same order as training
    features = np.array([[
        gender_encoded,
        cholesterol_encoded,
        gluc_encoded,
        smoke_encoded,
        alco_encoded,
        active_encoded,
        age,
        bmi,
        map_value,
        pulse_pressure
    ]])
    
    return features, {
        'bmi': round(bmi, 2),
        'map': round(map_value, 2),
        'pulse_pressure': pulse_pressure
    }


@app.route('/')
def home():
    """Root endpoint for status check"""
    return jsonify({
        'message': 'Cardio Risk Prediction API is running!',
        'endpoints': {
            'predict': '/api/predict (POST)',
            'health': '/api/health (GET)'
        }
    })


@app.route('/api/predict', methods=['POST'])
def predict():
    """Handle prediction requests"""
    try:
        data = request.json
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Encode inputs and get derived values
        features, derived_values = encode_inputs(data)
        
        # Make prediction
        prediction = model.predict(features)
        
        # Get probability if available
        try:
            probability = model.predict_proba(features)
            prob_values = {
                'low_risk': round(float(probability[0][0]) * 100, 1),
                'high_risk': round(float(probability[0][1]) * 100, 1)
            }
        except AttributeError:
            prob_values = None
        
        return jsonify({
            'prediction': int(prediction[0]),
            'probability': prob_values,
            'derived_values': derived_values
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'model_loaded': model is not None})


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"Starting Flask server on http://0.0.0.0:{port}")
    print("Model loaded successfully!")
    app.run(host='0.0.0.0', port=port)
