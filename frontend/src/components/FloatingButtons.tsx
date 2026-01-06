import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    {
      icon: Phone,
      label: 'Call Now',
      href: 'tel:+97714123456',
      color: 'from-primary to-pink-400',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/97798XXXXXXXX',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <>
            {buttons.map((button, index) => (
              <motion.a
                key={button.label}
                href={button.href}
                target={button.href.startsWith('http') ? '_blank' : undefined}
                rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${button.color} text-white font-medium shadow-lg`}
              >
                <button.icon className="w-5 h-5" />
                <span>{button.label}</span>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isExpanded
            ? 'bg-muted text-foreground'
            : 'bg-gradient-to-br from-primary to-secondary text-primary-foreground glow-pink'
        }`}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>

      {/* Pulse animation when closed */}
      {!isExpanded && (
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-primary pointer-events-none"
        />
      )}
    </div>
  );
};

export default FloatingButtons;
