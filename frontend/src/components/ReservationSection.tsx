import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Calendar, Clock, Users, Phone, User, CheckCircle, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import heroBg from '@/assets/hero-bg.jpg';

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Reservation Request Sent! 🎉",
      description: "We'll confirm your booking shortly via phone.",
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', date: '', time: '', guests: '2' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservations" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container-custom relative py-24 md:py-40" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary uppercase tracking-[0.3em] mb-6">
              <Sparkles className="w-4 h-4" />
              Reservations
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
              Reserve Your{' '}
              <span className="text-gradient italic">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg">
              Whether it's an intimate dinner for two or a celebration with friends, 
              we're ready to craft an evening you'll never forget.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-5 p-5 rounded-2xl glass-card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-0.5">Call for instant booking</div>
                  <div className="text-xl font-semibold">+977 1-4123456</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-5 p-5 rounded-2xl glass-card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-orange-400 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-0.5">Opening Hours</div>
                  <div className="text-xl font-semibold">12 PM – 2 AM Daily</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold mb-3">Reservation Received!</h3>
                  <p className="text-muted-foreground text-lg">We'll call you to confirm shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Your Name</label>
                    <div className="relative">
                      <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        maxLength={100}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Phone Number</label>
                    <div className="relative">
                      <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                        maxLength={20}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+977 98XXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">Date</label>
                      <div className="relative">
                        <Calendar className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors ${focusedField === 'date' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('date')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">Time</label>
                      <div className="relative">
                        <Clock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors ${focusedField === 'time' ? 'text-primary' : 'text-muted-foreground'}`} />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('time')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Number of Guests</label>
                    <div className="relative">
                      <Users className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors ${focusedField === 'guests' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('guests')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                        <option value="10+">10+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full rounded-xl mt-4">
                    Reserve My Table
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-2">
                    We'll call to confirm your reservation within 30 minutes
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
