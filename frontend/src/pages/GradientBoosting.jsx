import { motion } from 'framer-motion';
import './GradientBoosting.css';

// SVG Icon Components
const TargetIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
);

const TrendingUpIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
);

const FlaskIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v8l4 9H5l4-9V3z" /><path d="M9 3h6" />
    </svg>
);

const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
);

const ChartBarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
);

const TreeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 3-7 2 4 2-5 3 8v2H2v-2l3-8 2 5 2-4 3 7Z" />
    </svg>
);

const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

const RepeatIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const AlertTriangleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const BigTreeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 3-7 2 4 2-5 3 8v2H2v-2l3-8 2 5 2-4 3 7Z" />
    </svg>
);

const BigChartBarIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
);

const BigTargetIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
);

const hyperparameters = [
    { name: 'n_estimators', value: '100', description: 'Number of boosting stages (decision trees) to build' },
    { name: 'learning_rate', value: '0.05', description: 'Shrinkage parameter that controls the contribution of each tree' },
    { name: 'max_depth', value: '5', description: 'Maximum depth of individual decision trees' },
    { name: 'subsample', value: '0.7', description: 'Fraction of samples used for fitting each tree' },
    { name: 'min_samples_split', value: '2', description: 'Minimum samples required to split an internal node' },
];

const metrics = [
    { name: 'Accuracy', value: '74%', icon: <TargetIcon />, color: '#6366f1' },
    { name: 'ROC-AUC', value: '79.8%', icon: <TrendingUpIcon />, color: '#22c55e' },
    { name: 'Precision (CVD)', value: '75%', icon: <FlaskIcon />, color: '#f59e0b' },
    { name: 'Recall (CVD)', value: '70%', icon: <SearchIcon />, color: '#ef4444' },
];

const steps = [
    {
        step: 1,
        title: 'Initialize',
        description: 'Start with a constant prediction (usually the mean or log-odds for classification)',
        icon: <PlayIcon />,
    },
    {
        step: 2,
        title: 'Calculate Residuals',
        description: 'Compute the difference (residuals) between actual values and current predictions',
        icon: <ChartBarIcon />,
    },
    {
        step: 3,
        title: 'Fit Decision Tree',
        description: 'Train a new decision tree to predict the residuals from the previous step',
        icon: <TreeIcon />,
    },
    {
        step: 4,
        title: 'Update Predictions',
        description: 'Add the new tree\'s predictions (scaled by learning rate) to the ensemble',
        icon: <PlusIcon />,
    },
    {
        step: 5,
        title: 'Repeat',
        description: 'Iterate steps 2-4 for n_estimators iterations to minimize the loss function',
        icon: <RepeatIcon />,
    },
];

const advantages = [
    'High predictive accuracy with proper tuning',
    'Handles mixed feature types (numerical & categorical)',
    'Built-in feature importance ranking',
    'Robust to outliers in target variable',
    'Flexible loss functions for different problems',
];

const limitations = [
    'Training can be computationally expensive',
    'Prone to overfitting with too many trees',
    'Sensitive to hyperparameter selection',
    'Sequential nature limits parallelization',
    'Less interpretable than simple models',
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GradientBoosting() {
    return (
        <div className="gb-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Gradient Boosting <span className="gradient-text">Classifier</span></h1>
                    <p>Understanding the powerful ensemble learning algorithm behind our predictions</p>
                </motion.div>

                {/* What is Gradient Boosting */}
                <motion.section
                    className="intro-section glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="intro-content">
                        <h2>What is Gradient Boosting?</h2>
                        <p>
                            Gradient Boosting is a powerful machine learning technique that builds an ensemble of
                            weak learners (typically decision trees) sequentially. Each new tree is trained to
                            correct the errors made by the previous trees, resulting in a strong predictive model.
                        </p>
                        <p>
                            Unlike Random Forest which builds trees independently, Gradient Boosting "boosts"
                            performance by focusing on the mistakes of the ensemble, learning from residuals
                            rather than the original targets.
                        </p>
                    </div>
                    <div className="intro-visual">
                        <div className="tree-diagram">
                            <div className="tree-node main"><BigChartBarIcon /></div>
                            <div className="tree-row">
                                <div className="tree-node"><BigTreeIcon /></div>
                                <div className="tree-node"><BigTreeIcon /></div>
                                <div className="tree-node"><BigTreeIcon /></div>
                            </div>
                            <div className="tree-arrows">
                                <span>→</span>
                                <span>→</span>
                                <span>→</span>
                            </div>
                            <div className="tree-result"><BigTargetIcon /></div>
                        </div>
                    </div>
                </motion.section>

                {/* How it Works */}
                <motion.section
                    className="how-section"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h2 variants={itemVariants}>
                        How It <span className="gradient-text">Works</span>
                    </motion.h2>
                    <div className="steps-container">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className="step-card glass-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="step-header">
                                    <span className="step-number">{step.step}</span>
                                    <span className="step-icon">{step.icon}</span>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                {index < steps.length - 1 && (
                                    <div className="step-connector">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Model Performance */}
                <motion.section
                    className="metrics-section"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h2 variants={itemVariants}>
                        Model <span className="gradient-text">Performance</span>
                    </motion.h2>
                    <div className="metrics-grid">
                        {metrics.map((metric) => (
                            <motion.div
                                key={metric.name}
                                className="metric-card glass-card"
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                            >
                                <span className="metric-icon">{metric.icon}</span>
                                <span className="metric-value" style={{ color: metric.color }}>{metric.value}</span>
                                <span className="metric-name">{metric.name}</span>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div className="confusion-matrix glass-card" variants={itemVariants}>
                        <h3>Confusion Matrix</h3>
                        <div className="matrix-container">
                            <div className="matrix-labels-y">
                                <span>Actual Positive</span>
                                <span>Actual Negative</span>
                            </div>
                            <div className="matrix-grid">
                                <div className="matrix-cell tp">
                                    <span className="cell-value">4765</span>
                                    <span className="cell-label">True Positive</span>
                                </div>
                                <div className="matrix-cell fn">
                                    <span className="cell-value">1997</span>
                                    <span className="cell-label">False Negative</span>
                                </div>
                                <div className="matrix-cell fp">
                                    <span className="cell-value">1556</span>
                                    <span className="cell-label">False Positive</span>
                                </div>
                                <div className="matrix-cell tn">
                                    <span className="cell-value">5363</span>
                                    <span className="cell-label">True Negative</span>
                                </div>
                            </div>
                            <div className="matrix-labels-x">
                                <span>Predicted Positive</span>
                                <span>Predicted Negative</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Hyperparameters */}
                <motion.section
                    className="params-section"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h2 variants={itemVariants}>
                        Tuned <span className="gradient-text">Hyperparameters</span>
                    </motion.h2>
                    <motion.p className="section-description" variants={itemVariants}>
                        These parameters were optimized using RandomizedSearchCV with 5-fold cross-validation
                    </motion.p>
                    <div className="params-grid">
                        {hyperparameters.map((param) => (
                            <motion.div
                                key={param.name}
                                className="param-card glass-card"
                                variants={itemVariants}
                                whileHover={{ y: -3 }}
                            >
                                <code className="param-name">{param.name}</code>
                                <span className="param-value">{param.value}</span>
                                <p className="param-desc">{param.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Pros and Cons */}
                <motion.section
                    className="pros-cons-section"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.h2 variants={itemVariants}>
                        Advantages & <span className="gradient-text">Limitations</span>
                    </motion.h2>
                    <div className="pros-cons-grid">
                        <motion.div className="pros-card glass-card" variants={itemVariants}>
                            <h3><CheckCircleIcon /> Advantages</h3>
                            <ul>
                                {advantages.map((adv, index) => (
                                    <li key={index}>{adv}</li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="cons-card glass-card" variants={itemVariants}>
                            <h3><AlertTriangleIcon /> Limitations</h3>
                            <ul>
                                {limitations.map((lim, index) => (
                                    <li key={index}>{lim}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
