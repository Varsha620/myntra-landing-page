import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt, title }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute z-20 p-2 text-white transition-colors rounded-full top-4 right-4 hover:text-gray-300 bg-black/50"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        {/* Title */}
        <div className="absolute z-20 text-white top-4 left-4">
          <h3 className="px-3 py-1 text-lg font-semibold rounded bg-black/50">{title}</h3>
        </div>
        
        {/* Image container */}
        <div className="flex items-center justify-center flex-1 p-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          />
        </div>
        
        {/* Instructions */}
        <div className="absolute left-0 right-0 text-center bottom-4">
          <p className="inline-block px-3 py-1 mx-auto text-sm rounded text-white/70 bg-black/50">
            Click outside or press ESC to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;