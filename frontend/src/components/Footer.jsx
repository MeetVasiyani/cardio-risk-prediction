import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-watermark">CardioPredict</div>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    fill="url(#footer-heart-gradient)"
                                />
                                <defs>
                                    <linearGradient id="footer-heart-gradient" x1="2" y1="3" x2="22" y2="21">
                                        <stop stopColor="#6366f1" />
                                        <stop offset="0.5" stopColor="#8b5cf6" />
                                        <stop offset="1" stopColor="#d946ef" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>CardioPredict</span>
                        </div>
                        <p className="footer-description">
                            Predicting cardiovascular disease risk using machine learning. Built with Gradient Boosting Classifier for accurate health insights.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Navigation</h4>
                            <Link to="/">Home</Link>
                            <Link to="/eda">EDA & Graphs</Link>
                            <Link to="/gradient-boosting">About Model</Link>
                            <Link to="/predict">Make Prediction</Link>
                        </div>

                        <div className="footer-section">
                            <h4>Resources</h4>
                            <Link to="/disclaimer">Disclaimer</Link>
                            <a href="https://www.kaggle.com/datasets/sulianova/cardiovascular-disease-dataset" target="_blank" rel="noopener noreferrer">Dataset Source</a>
                            <a href="https://scikit-learn.org/stable/modules/ensemble.html#gradient-boosting" target="_blank" rel="noopener noreferrer">Scikit-Learn Docs</a>
                        </div>

                        <div className="footer-section">
                            <h4>Model Info</h4>
                            <p>Accuracy: 74%</p>
                            <p>ROC-AUC: 79.8%</p>
                            <p>Dataset: 70,000 records</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 CardioPredict. Educational Project.</p>
                    <p className="footer-warning">Not for medical diagnosis. Consult a healthcare professional.</p>
                </div>
            </div>
        </footer>
    );
}
