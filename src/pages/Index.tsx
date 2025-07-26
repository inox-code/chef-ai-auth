import { Button } from "@/components/ui/button";
import { ChefHat, Sparkles, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/chef-ai-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <img
          src={heroImage}
          alt="Chef AI Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-chef-brown/70 to-chef-orange/60" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="h-16 w-16 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold">Chef AI</h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Transform your cooking with AI-powered recipes tailored just for you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="chef" size="lg" className="text-lg px-8 py-6">
              <Link to="/signup">Start Cooking</Link>
            </Button>
            <Button asChild variant="chefOutline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-chef-brown">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-chef-cream to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-chef-brown mb-16">
            Why Choose Chef AI?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-chef-orange rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-chef-brown mb-3">AI-Powered Recipes</h3>
              <p className="text-muted-foreground">
                Get personalized recipe suggestions based on your preferences, dietary needs, and available ingredients.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-chef-orange rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-chef-brown mb-3">Community Driven</h3>
              <p className="text-muted-foreground">
                Share your culinary creations and discover amazing recipes from fellow food enthusiasts.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-chef-orange rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-chef-brown mb-3">Smart Learning</h3>
              <p className="text-muted-foreground">
                Our AI learns from your cooking habits to suggest better recipes and cooking techniques over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
