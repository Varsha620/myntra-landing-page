import React from 'react';
import { Download, Smartphone, Rocket } from 'lucide-react';

const Instructions = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8 text-pink-500" />,
      title: "📥 How to download APK",
      description: "Click the download button above to get the APK file. The file will be downloaded to your device."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: "📱 How to install Expo Go",
      description: "Search for 'Expo Go' in the Google Play Store and install it on your Android device."
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-500" />,
      title: "🚀 How to launch the app",
      description: "Open the downloaded APK file and follow the installation prompts. Launch through Expo Go."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Getting Started
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-6 mx-auto">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructions;