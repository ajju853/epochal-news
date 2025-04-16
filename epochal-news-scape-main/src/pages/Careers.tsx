
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openings = [
    {
      title: "Senior Journalist - Technology",
      location: "New York, NY",
      type: "Full-time",
      description: "Join our team covering cutting-edge technology trends and innovations.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      description: "Create immersive news experiences that blend traditional editorial design with modern interfaces.",
    },
    {
      title: "Front-end Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build the next generation of interactive news features using React and modern web technologies.",
    },
    {
      title: "Data Visualization Specialist",
      location: "Remote",
      type: "Contract",
      description: "Transform complex data into compelling visual stories for our readers.",
    },
    {
      title: "Investigative Reporter",
      location: "Washington, DC",
      type: "Full-time",
      description: "Conduct in-depth investigations on stories that matter to our audience.",
    }
  ];

  const benefits = [
    "Competitive salary and equity options",
    "Comprehensive health, dental, and vision insurance",
    "Generous paid time off and flexible work arrangements",
    "Professional development and learning opportunities",
    "Collaborative, innovative work environment",
    "State-of-the-art equipment and tools"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="newspaper-heading text-4xl md:text-5xl font-bold mb-2">Careers at EPOCHAL</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Join us in redefining journalism for the digital age
          </p>
          
          {/* Hero Banner */}
          <div className="paper-texture relative overflow-hidden rounded-xl border border-border mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-red/20 to-transparent z-0"></div>
            <div className="relative z-10 p-6 md:p-10">
              <h2 className="newspaper-subheading text-2xl md:text-3xl font-bold mb-4">
                Shape the Future of News
              </h2>
              <p className="max-w-2xl mb-6">
                At EPOCHAL, we're bringing together the best of traditional journalism and cutting-edge technology. 
                We're looking for passionate individuals who want to help us create a new standard for news consumption.
              </p>
              <Button className="bg-accent-red hover:bg-accent-red/90 text-white">
                View Current Openings
              </Button>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-12">
            <h2 className="newspaper-subheading text-2xl font-bold mb-6">Why Work With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="paper-texture border border-border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-accent-red mr-3" size={24} />
                  <h3 className="newspaper-subheading text-xl font-bold">Innovation</h3>
                </div>
                <p>
                  Work on groundbreaking features that blend traditional journalism with immersive digital experiences.
                </p>
              </div>
              
              <div className="paper-texture border border-border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-accent-red mr-3" size={24} />
                  <h3 className="newspaper-subheading text-xl font-bold">Community</h3>
                </div>
                <p>
                  Join a diverse team of journalists, designers, and developers who care deeply about informing the public.
                </p>
              </div>
              
              <div className="paper-texture border border-border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Zap className="text-accent-red mr-3" size={24} />
                  <h3 className="newspaper-subheading text-xl font-bold">Impact</h3>
                </div>
                <p>
                  Be part of redefining how people around the world consume and interact with news.
                </p>
              </div>
            </div>
          </div>
          
          {/* Current Openings */}
          <div className="mb-12">
            <h2 className="newspaper-subheading text-2xl font-bold mb-6" id="openings">
              Current Openings
            </h2>
            
            <div className="space-y-4">
              {openings.map((job, index) => (
                <div 
                  key={index} 
                  className="paper-texture border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="newspaper-subheading text-xl font-bold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-sm">
                          {job.location}
                        </span>
                        <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-sm">
                          {job.type}
                        </span>
                      </div>
                      <p className="mt-3 text-muted-foreground">{job.description}</p>
                    </div>
                    <Button variant="outline" className="whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div className="paper-texture border border-border rounded-lg p-6 md:p-8">
            <h2 className="newspaper-subheading text-2xl font-bold mb-6">Benefits & Perks</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Briefcase size={14} className="text-accent-red" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center border-t border-border pt-6">
              <h3 className="font-bold mb-2">Ready to Join Our Team?</h3>
              <p className="mb-4 text-muted-foreground">
                We're always looking for talented individuals who are passionate about journalism and technology.
              </p>
              <Button className="bg-accent-red hover:bg-accent-red/90 text-white">
                See All Positions
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
