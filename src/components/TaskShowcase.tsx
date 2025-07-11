import React from 'react';
import { Filter, Clock, Heart } from 'lucide-react';

const TaskShowcase = () => {
  const tasks = [
    {
      title: "Task 1: Product Filtering & Sorting",
      description: "Implemented comprehensive product filtering by category, price range, brand, and ratings. Added sorting options for price, popularity, and customer reviews with smooth animations.",
      icon: <Filter className="w-6 h-6 text-pink-500" />,
      image: "/screenshots/task1.png",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Task 2: Recently Viewed Carousel",
      description: "Created a dynamic carousel component that tracks user's recently viewed products with smooth horizontal scrolling and responsive design for better user experience.",
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      image: "/screenshots/task2.png",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Task 3: Save for Later Feature",
      description: "Developed a wishlist functionality allowing users to save products for later viewing. Includes local storage persistence and easy management of saved items.",
      icon: <Heart className="w-6 h-6 text-indigo-500" />,
      image: "/screenshots/task3.png",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            📸 Internship Task Showcase
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key features implemented during the NullClass internship program
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`h-48 bg-gradient-to-br ${task.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                      {task.icon}
                      <span className="text-white font-medium text-sm">Preview Available</span>
                    </div>
                  </div>
                  {/* Placeholder for actual screenshot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        {task.icon}
                      </div>
                      <p className="text-sm">Screenshot will be added</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {task.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskShowcase;