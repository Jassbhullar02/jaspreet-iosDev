// export interface Project {
export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    title: 'Medical Diagnostics, Learning, and Education App',
    description: 'This mobile app is tailored for medical students to enhance their diagnostic and treatment skills through interactive digital cases and gamified learning. It provides real-time feedback and scoring to help users refine their clinical decision-making in a virtual environment. Key features include user authentication, chat functionality, personalized feedback, study cases, educational games, and seamless Firebase integration. Together, these elements create a comprehensive eLearning platform ideal for medical education and skill development.',
    image: '/assets/medicaled.mp4', // Make sure this file is in the public/assets folder
    category: 'Health & Education',
    technologies: ['Swift', 'UIKit', 'Webkit', 'Core Data', 'Firebase', 'In-App Purchases' ],
    // link: '#'
  },
  {
    title: 'AI Chat App',
    description: 'AI Chat App is a sleek and interactive iOS application that enables users to chat seamlessly with an AI assistant. Built with an intuitive interface, the app opens directly to a chat screen where users can ask questions, seek information, or have casual conversations. It includes features like theme customization, chat refresh, message editing, and easy text copying. Smooth animations enhance the user experience, making the interaction feel more natural and engaging. Ideal for quick information lookup, learning, or just having a friendly conversation powered by intelligent AI.',
    image: '/assets/AIchatapp.jpg', // Move this image to public/assets for consistency
    category: 'Communication',
    technologies: ['Swift', 'Firebase', 'UIKit', 'Core Data'],
    // link: '#'
  },
  {
    title: 'AR Edge detect & Measure',
    description: 'AR Edge Measure is a smart iOS app that uses ARKit and RealityKit to automatically detect the edges of real-world objects and measure them in real time. As soon as the app is launched, it opens directly into AR view with no manual setup required. It instantly highlights object boundaries—such as tables, boxes, or furniture—and displays accurate dimensions on the screen. Designed for simplicity and speed, the app features a clean, intuitive interface that makes taking quick measurements effortless using the power of augmented reality.',
    image: '/assets/arapp.jpg',
    category: 'Augmented Reality',
    technologies: ['ARKit', 'Swift', 'SceneKit', 'RealityKit' ],
    // link: '#'
  },
  {
    title: 'Authentication with Firebase',
    description: 'A simple yet complete iOS app showcasing user authentication using Firebase. It includes email/password sign-up, login, and password reset features. The app demonstrates secure Firebase integration for user management, real-time validation, and smooth navigation between auth states—perfect as a base for any login-enabled app.',
    image: '/assets/firebase.jpg', // Move this image to public/assets for consistency
    category: 'Authentication',
    technologies: ['Swift', 'Firebase', 'UIKit', 'Core Data'],
    // link: '#'
  },
  {
    title: 'Reminder App-ios',
    description: 'Developed a user-friendly reminder app using Swift and SwiftUI. Users can create, update, and delete reminders with time-based local notifications. Implemented smooth UI, simple task management, and data persistence using UserDefaults. This solo project helped sharpen my skills in SwiftUI, notification handling, and clean UI design.',
    image: '/assets/reminderapp.jpg', // Move this image to public/assets for consistency
    category: 'Productivity',
    technologies: ['SwiftUI', 'UiKit', 'Push notification', 'Xcode' ],
    // link: '#'
  },
  {
    title: 'Weather App-ios',
    description: 'A clean and responsive iOS weather app built with Swift and SwiftUI. It shows real-time weather data using API integration, supports location-based forecasts, and features smooth animations with a modern UI. Built using MVVM architecture for maintainability and performance.',
    image: '/assets/weatherapp.jpg', // Move this image to public/assets for consistency
    category: 'Forecasting',
    technologies: ['Swift', 'UIKit', 'API integration', 'weather map', 'core location'],
    // link: '#'
  },

//   {
//     title: 'Weather App-ios',
//     description: 'An enterprise retail management system with inventory tracking, sales analytics, and staff management features. Includes barcode scanning and POS integration.',
//     image: 'src/assets/weatherapp.jpeg',
//     category: 'Forecasting',
//     technologies: ['Swift', 'UIKit', 'API integration', 'weather map', 'core location'],
//     link: '#'
//   },
  // {
  //   title: 'CulinaryCompanion',
  //   description: 'A recipe and meal planning app with smart shopping lists, nutritional information, and cooking timers. Features offline mode and ingredient substitution suggestions.',
  //   image: 'https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'Food & Drink',
  //   technologies: ['SwiftUI', 'Core Data', 'Vision', 'Firebase', 'Alamofire'],
  //   link: '#'
  // },
  // {
  //   title: 'UrbanExplorer',
  //   description: 'A city guide app with location-based recommendations, interactive maps, and AR features for discovering points of interest. Includes offline maps and user reviews.',
  //   image: 'https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'Travel',
  //   technologies: ['Swift', 'MapKit', 'ARKit', 'Core Location', 'CloudKit'],
  //   link: '#'
  // },
  // {
  //   title: 'SecureMessenger',
  //   description: 'An end-to-end encrypted messaging app with self-destructing messages, authentication options, and media sharing. Features biometric authentication and privacy controls.',
  //   image: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'Communication',
  //   technologies: ['Swift', 'Realm', 'CryptoKit', 'Local Authentication', 'Push Notifications'],
  //   link: '#'
  // }
];