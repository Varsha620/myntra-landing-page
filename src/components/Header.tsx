import React from 'react';
import { Download, Smartphone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Myntra Clone Mobile App
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-pink-100">
              (Internship Project)
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-2xl mx-auto">
            A feature-rich React Native e-commerce app built during NullClass internship
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://expo.dev/accounts/varsha620/projects/bolt-expo-nativewind/builds/3c0dd331-f2bc-4a55-b11a-c8ee79263f80"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <Download size={24} />
              Download APK
            </a>
            
            <div className="flex items-center gap-2 text-pink-100">
              <Smartphone size={20} />
              <span className="text-sm">Works with Expo Go</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-pink-100 font-medium mb-2">📱 Quick Setup:</p>
            <p className="text-pink-100/90">
              Install Expo Go from the Play Store and open the app using this APK
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;