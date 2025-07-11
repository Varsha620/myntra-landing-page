import React from 'react';
import { Github, Mail, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Internship Project</h3>
            <p className="text-gray-400 text-lg">
              Submitted to <span className="text-pink-400 font-semibold">NullClass</span>
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Varsha</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">varsha620@example.com</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">github.com/varsha620</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Myntra Clone App. Built with React Native & Expo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;