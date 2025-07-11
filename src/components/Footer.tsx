import React from 'react';
import { Github, Mail, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold">Internship Project</h3>
            <p className="text-lg text-gray-400">
              Submitted to <span className="font-semibold text-pink-400">NullClass</span>
            </p>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Varsha</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">vars9815@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">github.com/varsha620</span>
              </div>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 Myntra Clone App. Built with React Native & Expo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;