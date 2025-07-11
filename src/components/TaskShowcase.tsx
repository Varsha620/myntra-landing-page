import React from 'react';
import { useState } from 'react';
import { Filter, Clock, Heart } from 'lucide-react';
import ImageModal from './ImageModal';

const TaskShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const tasks = [
    {
      title: "Task 1: Product Filtering & Sorting",
      description: "Implemented comprehensive product filtering by category, price range, brand, and ratings. Added sorting options for price, popularity, and customer reviews with smooth animations.",
      icon: <Filter className="w-6 h-6 text-pink-500" />,
      image: "/screenshots/Task1.1.png",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Task 2: Recently Viewed Carousel",
      description: "Created a dynamic carousel component that tracks user's recently viewed products with smooth horizontal scrolling and responsive design for better user experience.",
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      image: "/screenshots/Task2.png",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Task 3: Save for Later Feature",
      description: "Developed a wishlist functionality allowing users to save products for later viewing. Includes local storage persistence and easy management of saved items.",
      icon: <Heart className="w-6 h-6 text-indigo-500" />,
      image: "/screenshots/Task3.png",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const openModal = (imageSrc: string, title: string) => {
    setSelectedImage({
      src: imageSrc,
      alt: title,
      title: title
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 md:text-4xl">
            📸 Internship Task Showcase
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Key features implemented during the NullClass internship program
          </p>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${task.color} relative overflow-hidden`}>
                  <img 
                    src={task.image} 
                    alt={task.title}
                    className="object-cover w-full h-full transition-transform duration-300 cursor-pointer hover:scale-105"
                    onClick={() => openModal(task.image, task.title)}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-300 cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 hover:scale-105" 
                    style={{ display: 'none' }}
                    onClick={() => openModal(task.image, task.title)}
                  >
                    <div className="text-center text-gray-500">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full">
                        {React.cloneElement(task.icon, { className: "w-6 h-6 text-gray-600" })}
                      </div>
                      <p className="text-sm">Image not found</p>
                      <p className="mt-1 text-xs">Place image in /public{task.image}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-white/20 backdrop-blur-sm">
                      {task.icon}
                      <span className="text-sm font-medium text-white">Click to view full size</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    {task.title}
                  </h3>
                  
                  <p className="leading-relaxed text-gray-600">
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        title={selectedImage?.title || ''}
      />
    </>
  );
};

export default TaskShowcase;