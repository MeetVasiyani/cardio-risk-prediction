import { motion } from 'framer-motion';
import './Disclaimer.css';

const MedicalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L12 22" />
        <path d="M4.93 4.93L19.07 19.07" />
        <path d="M19.07 4.93L4.93 19.07" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const ScienceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v8l4 9H5l4-9V3z" />
        <path d="M9 3h6" />
        <circle cx="10" cy="16" r="1" fill="currentColor" />
        <circle cx="14" cy="18" r="1" fill="currentColor" />
    </svg>
);

const LockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const DatabaseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

const ClipboardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const AlertTriangleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const SirenIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
        <path d="M5 21h14" />
        <path d="M12 2v2" />
        <path d="M4.22 7.22l1.42 1.42" />
        <path d="M18.36 8.64l1.42-1.42" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const disclaimerSections = [
    {
        title: 'Medical Disclaimer',
        IconComponent: MedicalIcon,
        content: [
            'This application is intended for educational and informational purposes only.',
            'The predictions made by this tool should NOT be used as a substitute for professional medical advice, diagnosis, or treatment.',
            'Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.',
            'Never disregard professional medical advice or delay in seeking it because of something you have read or received from this application.',
        ],
    },
    {
        title: 'Model Limitations',
        IconComponent: ScienceIcon,
        content: [
            'The Gradient Boosting model has an accuracy of approximately 74% - this means predictions may be incorrect in about 1 out of 4 cases.',
            'The model was trained on a specific dataset (Cardiovascular Disease dataset from Kaggle) which may not represent all populations equally.',
            'The prediction is based on limited input features and does not account for many other important cardiovascular risk factors.',
            'No machine learning model can perfectly predict complex medical outcomes.',
        ],
    },
    {
        title: 'Data Privacy',
        IconComponent: LockIcon,
        content: [
            'All predictions are made locally in your browser or on our server during your session.',
            'We do not store any of the health information you enter into the prediction form.',
            'No personally identifiable information is collected or retained.',
            'Your data is not shared with any third parties.',
        ],
    },
    {
        title: 'Data Source Attribution',
        IconComponent: DatabaseIcon,
        content: [
            'The model was trained using the "Cardiovascular Disease dataset" from Kaggle.',
            'Original dataset contains 70,000 patient records with 11 features.',
            'Features include age, gender, height, weight, blood pressure readings, cholesterol, glucose levels, and lifestyle factors.',
        ],
        datasetLink: 'https://www.kaggle.com/datasets/sulianova/cardiovascular-disease-dataset',
    },
    {
        title: 'Terms of Use',
        IconComponent: ClipboardIcon,
        content: [
            'By using this application, you acknowledge that you have read and understood this disclaimer.',
            'You agree to use this tool for educational purposes only and not as a basis for medical decisions.',
            'The developers of this application are not liable for any consequences resulting from the use of predictions made by this tool.',
            'This is an educational project created to demonstrate machine learning applications in healthcare analytics.',
        ],
    },
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

export default function Disclaimer() {
    return (
        <div className="disclaimer-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>
                        <span className="gradient-text">Disclaimer</span> & Terms
                    </h1>
                    <p>Important information about using this cardiovascular disease prediction tool</p>
                </motion.div>

                <motion.div
                    className="important-notice glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="notice-icon"><AlertTriangleIcon /></div>
                    <div className="notice-content">
                        <h2>Important Notice</h2>
                        <p>
                            This tool is <strong>NOT</strong> a medical device and should not be used to make
                            healthcare decisions. If you have concerns about your cardiovascular health,
                            please consult a qualified healthcare professional immediately.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="disclaimer-sections"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {disclaimerSections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="disclaimer-card glass-card"
                            variants={itemVariants}
                        >
                            <div className="card-header">
                                <span className="section-icon"><section.IconComponent /></span>
                                <h3>{section.title}</h3>
                            </div>
                            <ul className="card-content">
                                {section.content.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                                {section.datasetLink && (
                                    <li className="dataset-link-item">
                                        <a href={section.datasetLink} target="_blank" rel="noopener noreferrer" className="dataset-link">
                                            <span>View Dataset on Kaggle</span>
                                            <ExternalLinkIcon />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="emergency-notice glass-card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <h3><SirenIcon /> In Case of Emergency</h3>
                    <p>
                        If you are experiencing symptoms of a heart attack or stroke (chest pain,
                        shortness of breath, arm pain, sudden numbness, difficulty speaking),
                        <strong> call emergency services immediately</strong>.
                    </p>
                    <div className="emergency-numbers">
                        <span><PhoneIcon /> India: 112 / 108</span>
                        <span><PhoneIcon /> USA: 911</span>
                        <span><PhoneIcon /> UK: 999</span>
                        <span><PhoneIcon /> International: Local emergency number</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
