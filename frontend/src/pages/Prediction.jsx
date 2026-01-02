import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Prediction.css';

// SVG Icon Components for better UI consistency
const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const HeartPulseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        <path d="M3 12h4l2 -3l4 6l2 -3h4" />
    </svg>
);

const FlaskIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v8l4 9H5l4-9V3z" />
        <path d="M9 3h6" />
    </svg>
);

const ActivityIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

const ChartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
    </svg>
);

const SparkleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const AlertTriangleIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const XCircleIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
);

const InfoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
);

const initialFormData = {
    age: 50,
    gender: 'Male',
    height: 168,
    weight: 70,
    ap_hi: 120,
    ap_lo: 80,
    cholesterol: 'Normal',
    gluc: 'Normal',
    smoke: 'No',
    alco: 'No',
    active: 'Yes',
};

export default function Prediction() {
    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateDerivedValues = () => {
        const heightM = Number(formData.height) / 100;
        const bmi = Number(formData.weight) / (heightM * heightM);
        const ap_hi = Number(formData.ap_hi);
        const ap_lo = Number(formData.ap_lo);
        // MAP = (Systolic BP + 2 * Diastolic BP) / 3
        const mapValue = (ap_hi + 2 * ap_lo) / 3;
        const pulsePressure = ap_hi - ap_lo;
        return { bmi, mapValue, pulsePressure };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setResult(null);

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        try {
            const response = await fetch(`${API_URL}/api/predict`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Prediction failed');
            }

            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError('Failed to get prediction. Please make sure the backend server is running.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const derivedValues = calculateDerivedValues();

    return (
        <div className="prediction-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Cardiovascular Disease <span className="gradient-text">Prediction</span></h1>
                    <p>Enter your health information to get an AI-powered risk assessment</p>
                </motion.div>

                <div className="prediction-content">
                    <motion.form
                        className="prediction-form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="form-section">
                            <h3><span className="section-icon"><UserIcon /></span> Personal Information</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Age (years): {formData.age}</label>
                                    <input
                                        type="range"
                                        name="age"
                                        min="20"
                                        max="90"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="range-slider"
                                    />
                                    <div className="range-labels">
                                        <span>20</span>
                                        <span>90</span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Height (cm)</label>
                                    <input
                                        type="number"
                                        name="height"
                                        min="100"
                                        max="220"
                                        value={formData.height}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Weight (kg)</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        min="30"
                                        max="200"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3><span className="section-icon"><HeartPulseIcon /></span> Blood Pressure</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Systolic BP (ap_hi)</label>
                                    <input
                                        type="number"
                                        name="ap_hi"
                                        min="50"
                                        max="250"
                                        value={formData.ap_hi}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                    <span className="input-hint">Normal: 90-120 mmHg</span>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Diastolic BP (ap_lo)</label>
                                    <input
                                        type="number"
                                        name="ap_lo"
                                        min="30"
                                        max="200"
                                        value={formData.ap_lo}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                    <span className="input-hint">Normal: 60-80 mmHg</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3><span className="section-icon"><FlaskIcon /></span> Medical Indicators</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Cholesterol Level</label>
                                    <select
                                        name="cholesterol"
                                        value={formData.cholesterol}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Normal">Normal</option>
                                        <option value="Above Normal">Above Normal</option>
                                        <option value="Well Above Normal">Well Above Normal</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Glucose Level</label>
                                    <select
                                        name="gluc"
                                        value={formData.gluc}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Normal">Normal</option>
                                        <option value="Above Normal">Above Normal</option>
                                        <option value="Well Above Normal">Well Above Normal</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3><span className="section-icon"><ActivityIcon /></span> Lifestyle Factors</h3>
                            <div className="form-grid three-cols">
                                <div className="form-group">
                                    <label className="form-label">Do you smoke?</label>
                                    <select
                                        name="smoke"
                                        value={formData.smoke}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Consume alcohol?</label>
                                    <select
                                        name="alco"
                                        value={formData.alco}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Physically active?</label>
                                    <select
                                        name="active"
                                        value={formData.active}
                                        onChange={handleChange}
                                        className="form-select"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isLoading ? (
                                <>
                                    <div className="spinner"></div>
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <span className="btn-icon"><SparkleIcon /></span>
                                    Get Prediction
                                </>
                            )}
                        </motion.button>
                    </motion.form>

                    <motion.div
                        className="result-panel"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Calculated Values */}
                        <div className="calculated-values glass-card">
                            <h3><span className="section-icon"><ChartIcon /></span> Calculated Values</h3>
                            <div className="values-grid">
                                <div className="value-item">
                                    <span className="value-label">BMI</span>
                                    <span className="value-number">{derivedValues.bmi.toFixed(2)}</span>
                                    <span className="value-status" data-status={derivedValues.bmi < 25 ? 'good' : derivedValues.bmi < 30 ? 'warning' : 'danger'}>
                                        {derivedValues.bmi < 18.5 ? 'Underweight' : derivedValues.bmi < 25 ? 'Normal' : derivedValues.bmi < 30 ? 'Overweight' : 'Obese'}
                                    </span>
                                </div>
                                <div className="value-item">
                                    <span className="value-label">Mean Arterial Pressure</span>
                                    <span className="value-number">{derivedValues.mapValue.toFixed(2)}</span>
                                    <span className="value-status" data-status={derivedValues.mapValue < 100 ? 'good' : 'warning'}>
                                        {derivedValues.mapValue < 70 ? 'Low' : derivedValues.mapValue < 100 ? 'Normal' : 'High'}
                                    </span>
                                </div>
                                <div className="value-item">
                                    <span className="value-label">Pulse Pressure</span>
                                    <span className="value-number">{derivedValues.pulsePressure}</span>
                                    <span className="value-status" data-status={derivedValues.pulsePressure >= 30 && derivedValues.pulsePressure <= 50 ? 'good' : 'warning'}>
                                        {derivedValues.pulsePressure < 30 ? 'Low' : derivedValues.pulsePressure <= 50 ? 'Normal' : 'High'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Prediction Result */}
                        <AnimatePresence mode="wait">
                            {result && (
                                <motion.div
                                    className={`prediction-result glass-card ${result.prediction === 1 ? 'high-risk' : 'low-risk'}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="result-icon">
                                        {result.prediction === 1 ? <AlertTriangleIcon /> : <CheckCircleIcon />}
                                    </div>
                                    <h2 className="result-title">
                                        {result.prediction === 1 ? 'High Risk Detected' : 'Low Risk'}
                                    </h2>
                                    <p className="result-message">
                                        {result.prediction === 1
                                            ? 'The model indicates a higher risk of cardiovascular disease. Please consult a healthcare professional.'
                                            : 'The model indicates a lower risk of cardiovascular disease. Keep maintaining a healthy lifestyle!'
                                        }
                                    </p>
                                    <div className="result-warning">
                                        <InfoIcon /> This is not a medical diagnosis. Consult a doctor for professional advice.
                                    </div>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    className="prediction-error glass-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                >
                                    <span className="error-icon"><XCircleIcon /></span>
                                    <p>{error}</p>
                                </motion.div>
                            )}

                            {!result && !error && (
                                <motion.div
                                    className="result-placeholder glass-card"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="placeholder-icon">🫀</div>
                                    <p>Fill in the form and click &quot;Get Prediction&quot; to see your cardiovascular disease risk assessment.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
