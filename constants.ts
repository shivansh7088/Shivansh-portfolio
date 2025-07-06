import type { Project } from './types';

export const PERSONAL_INFO = {
    name: "Shivansh Dhakare",
    title: "Full-Stack Developer",
    profilePicture: "/images/PHOTO.jpg", // Path updated for better organization
    resumeUrl: "/public/SHIVANSH-DHAKARE-Resume.pdf"
};

export const PROJECTS: Project[] = [
    {
        id: 'proj1',
        title: 'Face Recognition Attendance System',
        category: 'Web App',
        image: "/images/FaceRimage.jpeg", // Path updated for better organization',
        description: 'Real-time face recognition-based attendance system using Python and OpenCV (LBPH). The system captures webcam input, detects faces, and marks attendance automatically. Attendance data is stored and managed using a MySQL database for scalability and performance. Designed for educational and corporate use.',
        techStack: ['• Python', '• OpenCV', '• LBPH', '• MySql', '• Tkinter', '• Real-time Camera Feed', '• Image Dataset','Harcascade Classifier'],
        liveDemoUrl: '#',
        githubUrl: 'https://github.com/shivansh7088/face-recognition-attendance.git'
    },
    {
        id: 'proj2',
        title: ' Movie Recommendation System',
        category: 'Web App',
        image: '/images/movieRecc.jpeg',
        description: ' A personalized movie recommendation system built using Python and the K-Nearest Neighbors (KNN) algorithm. Based on user preferences and watch history, the system suggests relevant movies with high accuracy. It uses content-based filtering and similarity scoring to generate tailored recommendations. Ideal for learning ML concepts like cosine similarity, feature engineering, and data preprocessing.',
        techStack: ['Python','KNN', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask', 'tkinter', 'HTML', 'CSS'],
        liveDemoUrl: '#',
        githubUrl: 'https://github.com/shivansh7088/face-recognition-attendance.git'
    },
    {
        id: 'proj3',
        title: 'CampWheel',
        category: ' Mobility / Transport / Booking System / Web Application',
        image: '/images/cycle.png',
        description: 'A responsive web application that allows users to book, rent, and manage bicycles online. Designed with a user-friendly interface for selecting available bikes, viewing real-time status, and tracking rental history. Includes admin features for managing inventory, bookings, and maintenance records.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
        liveDemoUrl: '#',
        githubUrl: ''
    },
    {
        id: 'proj4',
        title: 'Personal Blog',
        category: 'Content Platform',
        image: 'https://picsum.photos/seed/project4/600/400',
        description: 'A developer blog built with a headless CMS for content management and Next.js for static site generation. Optimized for SEO and performance with features like syntax highlighting and markdown support.',
        techStack: ['Next.js', 'MDX', 'Sanity.io', 'GraphQL', 'Vercel'],
        liveDemoUrl: '#',
        githubUrl: '#'
    }
]; 