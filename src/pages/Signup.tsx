import { SignupForm } from "@/components/auth/SignupForm";
import heroImage from "@/assets/chef-ai-hero.jpg";
import { ChefHat } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={heroImage}
          alt="Chef AI - Cooking with artificial intelligence"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-chef-orange/80 to-chef-brown/60 flex items-center justify-center">
          <div className="text-center text-white px-8">
            <div className="flex items-center justify-center mb-6">
              <ChefHat className="h-12 w-12 mr-3" />
              <h1 className="text-4xl font-bold">Chef AI</h1>
            </div>
            <p className="text-xl mb-4">Your culinary journey starts here</p>
            <p className="text-lg opacity-90">
              Join thousands of home chefs creating amazing meals with AI
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-chef-cream to-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <ChefHat className="h-8 w-8 mr-2 text-chef-orange" />
              <h1 className="text-3xl font-bold text-chef-brown">Chef AI</h1>
            </div>
          </div>
          
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;