import { motion } from 'framer-motion';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    ScatterChart,
    Scatter,
    Legend,
} from 'recharts';
import './EDA.css';

// SVG Icon Components
const ChartBarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
);

const GridIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
);

const ScaleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" /><path d="M5 6l-2 2 2 2" /><path d="M19 6l2 2-2 2" /><path d="m3 8 9-5 9 5" />
        <path d="M3 8v4c0 1.1.9 2 2 2h1" /><path d="M21 8v4c0 1.1-.9 2-2 2h-1" />
    </svg>
);

const TrendingUpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
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
        <path d="M9 3h6v8l4 9H5l4-9V3z" /><path d="M9 3h6" />
    </svg>
);

const BalanceIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2" /><path d="M12 6v14" />
        <path d="M4 10l8-2 8 2" /><path d="M2 16h4v4H2z" /><path d="M18 16h4v4h-4z" />
    </svg>
);

const ageDistribution = [
    { age: '30-35', count: 3500, cardio: 800 },
    { age: '36-40', count: 6200, cardio: 1800 },
    { age: '41-45', count: 9800, cardio: 3500 },
    { age: '46-50', count: 14500, cardio: 6200 },
    { age: '51-55', count: 18000, cardio: 9500 },
    { age: '56-60', count: 12500, cardio: 8200 },
    { age: '61-65', count: 5500, cardio: 4800 },
];

const cardioDistribution = [
    { name: 'No Disease', value: 35021, color: '#22c55e' },
    { name: 'Has Disease', value: 34979, color: '#ef4444' },
];

const featureImportance = [
    { feature: 'Age', importance: 0.35 },
    { feature: 'Systolic BP', importance: 0.18 },
    { feature: 'Cholesterol', importance: 0.14 },
    { feature: 'BMI', importance: 0.12 },
    { feature: 'Diastolic BP', importance: 0.08 },
    { feature: 'Glucose', importance: 0.05 },
    { feature: 'Smoking', importance: 0.03 },
    { feature: 'Alcohol', importance: 0.03 },
    { feature: 'Activity', importance: 0.02 },
];

const bpDistribution = [
    { systolic: 100, diastolic: 60, cardio: 0 },
    { systolic: 110, diastolic: 70, cardio: 0 },
    { systolic: 120, diastolic: 80, cardio: 0 },
    { systolic: 130, diastolic: 85, cardio: 0 },
    { systolic: 140, diastolic: 90, cardio: 1 },
    { systolic: 150, diastolic: 95, cardio: 1 },
    { systolic: 160, diastolic: 100, cardio: 1 },
    { systolic: 170, diastolic: 105, cardio: 1 },
];

const cholesterolData = [
    { level: 'Normal', healthy: 28500, diseased: 15200 },
    { level: 'Above Normal', healthy: 4300, diseased: 8200 },
    { level: 'Well Above Normal', healthy: 2200, diseased: 11600 },
];

const correlationData = [
    { feature: 'ap_hi', cardio: 0.42, age: 0.24, weight: 0.12 },
    { feature: 'ap_lo', cardio: 0.31, age: 0.20, weight: 0.10 },
    { feature: 'age', cardio: 0.24, age: 1.00, weight: 0.06 },
    { feature: 'cholesterol', cardio: 0.22, age: 0.15, weight: 0.03 },
    { feature: 'BMI', cardio: 0.16, age: 0.02, weight: 0.90 },
    { feature: 'gluc', cardio: 0.10, age: 0.12, weight: 0.02 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function EDA() {
    return (
        <div className="eda-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Exploratory Data <span className="gradient-text">Analysis</span></h1>
                    <p>Deep dive into the cardiovascular disease dataset with interactive visualizations</p>
                    <div className="dataset-info">
                        <span className="info-badge"><ChartBarIcon /> 70,000 Records</span>
                        <span className="info-badge"><GridIcon /> 13 Features</span>
                        <span className="info-badge"><ScaleIcon /> Balanced Classes</span>
                    </div>
                </motion.div>

                <motion.div
                    className="charts-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Class Distribution */}
                    <motion.div className="chart-card glass-card" variants={itemVariants}>
                        <h3>Target Class Distribution</h3>
                        <p className="chart-description">The dataset is nearly perfectly balanced between patients with and without cardiovascular disease.</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={cardioDistribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                                        labelLine={{ stroke: '#94a3b8', strokeWidth: 1 }}
                                    >
                                        {cardioDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f8fafc' }}
                                        itemStyle={{ color: '#f8fafc' }}
                                    />
                                    <Legend
                                        wrapperStyle={{ color: '#f8fafc' }}
                                        formatter={(value) => <span style={{ color: '#f8fafc' }}>{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Age Distribution */}
                    <motion.div className="chart-card glass-card" variants={itemVariants}>
                        <h3>Age Distribution & Disease Prevalence</h3>
                        <p className="chart-description">Cardiovascular disease risk increases significantly with age, especially after 45 years.</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={ageDistribution}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="age" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="count" name="Total Patients" fill="#6366f1" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="cardio" name="With CVD" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Feature Importance */}
                    <motion.div className="chart-card glass-card" variants={itemVariants}>
                        <h3>Feature Importance</h3>
                        <p className="chart-description">Age and blood pressure are the most significant predictors of cardiovascular disease.</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={featureImportance} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis type="number" stroke="#94a3b8" />
                                    <YAxis dataKey="feature" type="category" stroke="#94a3b8" width={100} />
                                    <Tooltip
                                        contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        formatter={(value) => [(value * 100).toFixed(1) + '%', 'Importance']}
                                    />
                                    <Bar dataKey="importance" fill="url(#importanceGradient)" radius={[0, 4, 4, 0]} />
                                    <defs>
                                        <linearGradient id="importanceGradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="100%" stopColor="#d946ef" />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Cholesterol Analysis */}
                    <motion.div className="chart-card glass-card" variants={itemVariants}>
                        <h3>Cholesterol Level Analysis</h3>
                        <p className="chart-description">Higher cholesterol levels show strong correlation with cardiovascular disease presence.</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={cholesterolData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="level" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                    />
                                    <Legend />
                                    <Bar dataKey="healthy" name="No Disease" fill="#22c55e" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="diseased" name="Has Disease" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Correlation Insights */}
                    <motion.div className="chart-card glass-card large" variants={itemVariants}>
                        <h3>Feature Correlations with CVD</h3>
                        <p className="chart-description">Blood pressure (systolic and diastolic) shows the strongest correlation with cardiovascular disease outcome.</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={correlationData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="feature" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                    />
                                    <Legend />
                                    <Line type="monotone" dataKey="cardio" name="CVD Correlation" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', strokeWidth: 2, r: 5 }} />
                                    <Line type="monotone" dataKey="age" name="Age Correlation" stroke="#6366f1" strokeWidth={2} dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Key Insights */}
                <motion.div
                    className="insights-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Key <span className="gradient-text">Insights</span></h2>
                    <div className="insights-grid">
                        <div className="insight-card glass-card">
                            <span className="insight-icon"><TrendingUpIcon /></span>
                            <h4>Age Factor</h4>
                            <p>Risk of cardiovascular disease increases significantly after age 45, with the highest prevalence in the 51-55 age group.</p>
                        </div>
                        <div className="insight-card glass-card">
                            <span className="insight-icon"><HeartPulseIcon /></span>
                            <h4>Blood Pressure</h4>
                            <p>Systolic and diastolic blood pressure are the strongest predictors, showing 0.42 and 0.31 correlation respectively.</p>
                        </div>
                        <div className="insight-card glass-card">
                            <span className="insight-icon"><FlaskIcon /></span>
                            <h4>Cholesterol</h4>
                            <p>Patients with &quot;Well Above Normal&quot; cholesterol are 5x more likely to have cardiovascular disease.</p>
                        </div>
                        <div className="insight-card glass-card">
                            <span className="insight-icon"><BalanceIcon /></span>
                            <h4>Balanced Dataset</h4>
                            <p>With 50.03% healthy and 49.97% diseased cases, the dataset requires no resampling techniques.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
