import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <h1 className="font-display text-8xl font-bold text-gradient mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Looks like you've wandered off the menu. Let's get you back to the good stuff.
        </p>
        <Button variant="hero" size="xl" onClick={() => navigate("/")}>
          <Home className="mr-2" size={20} />
          Return Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
