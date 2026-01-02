import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

// SVG Icon Components
const ChartBarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
);

const TargetIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
);

const TrendingUpIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
);

const GridIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
);

const CpuIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
);

const PieChartIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
);

const ZapIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const ShieldIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
);

const stats = [
    { value: '70,000+', label: 'Patient Records', icon: <ChartBarIcon /> },
    { value: '74%', label: 'Model Accuracy', icon: <TargetIcon /> },
    { value: '79.8%', label: 'ROC-AUC Score', icon: <TrendingUpIcon /> },
    { value: '10', label: 'Input Features', icon: <GridIcon /> },
];

const features = [
    {
        icon: <CpuIcon />,
        title: 'Advanced ML Model',
        description: 'Powered by Gradient Boosting Classifier with hyperparameter tuning for optimal performance.',
    },
    {
        icon: <PieChartIcon />,
        title: 'Comprehensive EDA',
        description: 'Explore detailed visualizations including correlation heatmaps, distributions, and feature analysis.',
    },
    {
        icon: <ZapIcon />,
        title: 'Instant Predictions',
        description: 'Get real-time cardiovascular disease risk assessment based on your health metrics.',
    },
    {
        icon: <ShieldIcon />,
        title: 'Privacy First',
        description: 'All predictions are made locally. Your health data is never stored or transmitted.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export default function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-gradient"></div>
                    <div className="hero-particles"></div>
                </div>

                <div className="container hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            className="hero-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="badge-icon">🫀</span>
                            <span>AI-Powered Health Assessment</span>
                        </motion.div>

                        <h1 className="hero-title">
                            Predict <span className="gradient-text">Cardiovascular</span>
                            <br />Disease Risk
                        </h1>

                        <p className="hero-description">
                            Leverage the power of machine learning to assess your heart health.
                            Our Gradient Boosting model analyzes multiple health factors to provide
                            accurate risk predictions.
                        </p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link to="/predict" className="btn btn-primary">
                                <span>Start Prediction</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/eda" className="btn btn-secondary">
                                Explore Data
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="heart-container">
                            <span className="heart-icon animate-heartbeat">🫀</span>
                            <div className="pulse-ring pulse-ring-1"></div>
                            <div className="pulse-ring pulse-ring-2"></div>
                            <div className="pulse-ring pulse-ring-3"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <motion.section
                className="stats section"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card glass-card"
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <span className="stat-icon">{stat.icon}</span>
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                className="features section"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container">
                    <motion.div className="section-header" variants={itemVariants}>
                        <h2>Why <span className="gradient-text">CardioPredict</span>?</h2>
                        <p>Advanced machine learning meets healthcare analytics</p>
                    </motion.div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card glass-card"
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                            >
                                <span className="feature-icon">{feature.icon}</span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="cta section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="cta-card glass-card">
                        <div className="cta-content">
                            <h2>Ready to Check Your Heart Health?</h2>
                            <p>
                                Get an instant AI-powered assessment of your cardiovascular disease risk.
                                Quick, private, and based on real medical data.
                            </p>
                            <Link to="/predict" className="btn btn-primary">
                                Make a Prediction
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="cta-visual">
                            <div className="cta-heart animate-float">🫀</div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
