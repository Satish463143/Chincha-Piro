import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Mail, ArrowUpRight, LucideIcon } from 'lucide-react';

interface ContactItem {
  icon: LucideIcon;
  title: string;
  lines: string[];
  color: string;
}

interface ContactData {
  location: {
    address: string[];
    mapEmbedUrl: string;
  };
  info: ContactItem[];
}

interface ContactSectionProps {
  data?: ContactData;
}

const defaultContactInfo: ContactItem[] = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Thamel, Kathmandu', 'Nepal 44600'],
    color: 'from-primary to-pink-400',
  },
  {
    icon: Phone,
    title: 'Contact',
    lines: ['+977 1-4123456', '+977 98XXXXXXXX'],
    color: 'from-secondary to-orange-400',
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Mon-Thu: 12 PM - 12 AM', 'Fri-Sun: 12 PM - 2 AM'],
    color: 'from-primary to-secondary',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@chinchapiro.com', 'reservations@chinchapiro.com'],
    color: 'from-pink-400 to-secondary',
  },
];

const defaultMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0714839387494!2d85.30934807571694!3d27.715324926184594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdbd8888fb%3A0x99ed61c0f4bdd0af!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus";

const ContactSection = ({ data }: ContactSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const infoItems = data?.info || defaultContactInfo;
  const mapUrl = data?.location.mapEmbedUrl || defaultMapUrl;

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-[0.3em] mb-6">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            Visit{' '}
            <span className="text-gradient italic">Chincha Piro</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            We're located in the heart of Thamel. Come experience the magic in person.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden glass-card group"
          >
            <div className="relative h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay for styling */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/50 to-transparent opacity-50" />

              {/* Get Directions Button */}
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full bg-background/90 backdrop-blur-xl border border-border hover:border-primary text-sm font-medium transition-all duration-300"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoItems.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover rounded-2xl p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
