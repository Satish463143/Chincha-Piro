import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';
import { venues } from '@/data/venueData';

const VenuesSection = () => {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden bg-background">
      {/* Dramatic ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-pink/8 blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-brand-orange/6 blur-[150px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-brand-pink/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - More Dramatic */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-pink" />
            <span className="text-brand-pink uppercase tracking-luxury text-xs md:text-sm font-medium font-body">
              Discover Our Locations
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-pink" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold md:text-6xl lg:text-7xl font-display text-foreground mb-8 leading-[1.1]"
          >
            Choose Your{' '}
            <span className="text-gradient italic">Experience</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-2xl mx-auto"
          >
            Three unique destinations, each crafted to deliver an unforgettable journey
          </motion.p>
        </div>

        {/* Venue Cards - More Impactful */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {venues.map((venue, index) => (
            <motion.article
              key={venue.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative h-[550px] md:h-[620px] cursor-pointer"
            >
              <a href={venue.path} className="block h-full w-full relative rounded-2xl overflow-hidden">
                {/* Glow effect on hover */}
                <div 
                  className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 ${
                    venue.accentColor === 'pink' ? 'bg-brand-pink/30' : 'bg-brand-orange/30'
                  }`} 
                />
                
                {/* Card container */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-foreground/5 group-hover:border-foreground/10 transition-colors duration-500">
                  {/* Background Image with zoom */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out">
                      <img
                        src={venue.image}
                        alt={venue.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Multi-layer gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Color tint on hover */}
                    <div 
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                        venue.accentColor === 'pink' 
                          ? 'bg-gradient-to-t from-brand-pink/20 via-transparent to-transparent' 
                          : 'bg-gradient-to-t from-brand-orange/20 via-transparent to-transparent'
                      }`} 
                    />
                  </div>

                  {/* Accent line at top */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                      venue.accentColor === 'pink' 
                        ? 'bg-gradient-to-r from-transparent via-brand-pink to-transparent' 
                        : 'bg-gradient-to-r from-transparent via-brand-orange to-transparent'
                    }`} 
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                    {/* Icon with glow */}
                    <div className="mb-6 transform transition-all duration-500 ease-out group-hover:-translate-y-4">
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500 ${
                          venue.accentColor === 'pink'
                            ? 'bg-brand-pink/10 border-brand-pink/20 text-foreground/80 group-hover:bg-brand-pink/20 group-hover:border-brand-pink/50 group-hover:text-brand-pink group-hover:shadow-[0_0_30px_rgba(255,0,128,0.3)]'
                            : 'bg-brand-orange/10 border-brand-orange/20 text-foreground/80 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/50 group-hover:text-brand-orange group-hover:shadow-[0_0_30px_rgba(255,128,0,0.3)]'
                        }`}
                      >
                        <venue.icon strokeWidth={1.3} size={26} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-4">
                      {/* Subtitle */}
                      <motion.span 
                        className={`text-xs uppercase tracking-luxury font-body mb-3 block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 ${
                          venue.accentColor === 'pink' ? 'text-brand-pink' : 'text-brand-orange'
                        }`}
                      >
                        {venue.subtitle}
                      </motion.span>
                      
                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-display text-foreground mb-4 tracking-wide leading-tight">
                        {venue.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/60 font-body font-light text-sm md:text-base leading-relaxed mb-6 max-w-sm opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {venue.description}
                      </p>

                      {/* CTA Button */}
                      <div 
                        className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border backdrop-blur-sm opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 ${
                          venue.accentColor === 'pink'
                            ? 'border-brand-pink/40 bg-brand-pink/10 hover:bg-brand-pink/20'
                            : 'border-brand-orange/40 bg-brand-orange/10 hover:bg-brand-orange/20'
                        }`}
                      >
                        <span className={`text-xs uppercase tracking-luxury font-body font-medium ${
                          venue.accentColor === 'pink' ? 'text-brand-pink' : 'text-brand-orange'
                        }`}>
                          Visit Venue
                        </span>
                        <ArrowRight 
                          size={14} 
                          className={`transform transition-transform duration-300 group-hover:translate-x-1 ${
                            venue.accentColor === 'pink' ? 'text-brand-pink' : 'text-brand-orange'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <div className={`w-10 h-[1px] ${venue.accentColor === 'pink' ? 'bg-brand-pink/60' : 'bg-brand-orange/60'}`} />
                    <div className={`w-[1px] h-10 absolute top-0 right-0 ${venue.accentColor === 'pink' ? 'bg-brand-pink/60' : 'bg-brand-orange/60'}`} />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;
