import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  size: string; // 'small' | 'medium' | 'large'
}

interface GallerySectionProps {
  images: GalleryImage[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Fallback if no images provided
  if (!images || images.length === 0) return null;

  return (
    <section id="gallery" className="section-padding bg-card relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card pointer-events-none" />

      <div className="container-custom relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-sm font-medium text-secondary uppercase tracking-[0.3em] mb-6">
              Visual Stories
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              Captured{' '}
              <span className="text-gradient italic">Moments</span>
            </h2>
          </div>
          <motion.a
            href="https://instagram.com/chinchapiro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-lg hover:glow-pink transition-all duration-300"
          >
            <Instagram size={20} />
            <span>@chinchapiro</span>
          </motion.a>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(image.src)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer break-inside-avoid group ${image.size === 'large' ? 'aspect-[4/5]' :
                  image.size === 'medium' ? 'aspect-[4/3]' : 'aspect-square'
                }`}
            >
              <motion.img
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0.5,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-xl flex items-center justify-center"
                >
                  <ZoomIn className="w-6 h-6 text-foreground" />
                </motion.div>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-foreground/20 group-hover:border-primary/60 transition-colors duration-300 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-foreground/20 group-hover:border-secondary/60 transition-colors duration-300 rounded-bl-lg" />
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 glass-card rounded-3xl p-8"
        >
          {[
            { value: '15K+', label: 'Followers' },
            { value: '2K+', label: 'Posts' },
            { value: '50K+', label: 'Likes' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
