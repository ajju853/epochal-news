
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Award, Users, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="newspaper-heading text-4xl md:text-5xl font-bold mb-6">About EPOCHAL</h1>
          
          <div className="paper-texture border border-border rounded-lg p-6 md:p-8 mb-8">
            <h2 className="newspaper-subheading text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              EPOCHAL was founded with a revolutionary vision: to reimagine the way we consume news by blending the rich tradition of print journalism with cutting-edge digital technology.
            </p>
            <p className="mb-4">
              Launched in 2024, we set out to create a "living newsverse" — an immersive, interactive news experience that preserves the sophistication and thoughtfulness of traditional journalism while embracing the possibilities of the digital age.
            </p>
            <p>
              Today, EPOCHAL stands at the forefront of news media innovation, offering readers a unique journey through time and information that is as informative as it is engaging.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="paper-texture border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="text-accent-red mr-3" size={24} />
                <h3 className="newspaper-subheading text-xl font-bold">Our Mission</h3>
              </div>
              <p>
                To inform and engage global citizens through immersive, thoughtful journalism that transcends time and technology, making news consumption a deeply meaningful experience.
              </p>
            </div>
            
            <div className="paper-texture border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="text-accent-red mr-3" size={24} />
                <h3 className="newspaper-subheading text-xl font-bold">Our Values</h3>
              </div>
              <p>
                We are committed to accuracy, innovation, accessibility, and thoughtfulness in all our reporting, blending journalistic integrity with technological advancement.
              </p>
            </div>
          </div>
          
          <div className="paper-texture border border-border rounded-lg p-6 md:p-8 mb-8">
            <h2 className="newspaper-subheading text-2xl font-bold mb-4">Our Approach</h2>
            <p className="mb-4">
              At EPOCHAL, we believe that news is not just information—it's a journey. Our unique approach combines:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Immersive storytelling that engages multiple senses</li>
              <li className="mb-2">Historical context through our innovative time travel feature</li>
              <li className="mb-2">Thoughtful analysis that goes beyond headlines</li>
              <li className="mb-2">Cutting-edge technology that enhances rather than distracts</li>
              <li>A commitment to factual reporting and journalistic ethics</li>
            </ul>
          </div>
          
          <div className="paper-texture border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Users className="text-accent-red mr-3" size={24} />
              <h2 className="newspaper-subheading text-2xl font-bold">Our Team</h2>
            </div>
            
            <p className="mb-6">
              EPOCHAL brings together veteran journalists, digital innovators, historians, and technologists who share a passion for reimagining news for the modern era.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Eleanor Wright', title: 'Editor-in-Chief' },
                { name: 'Marcus Chen', title: 'Technology Director' },
                { name: 'Sophia Alvarez', title: 'Head of Design' },
                { name: 'James Wilson', title: 'Chief Historian' },
                { name: 'Amara Johnson', title: 'Managing Editor' },
                { name: 'Thomas Lee', title: 'Head of Innovation' }
              ].map((team) => (
                <div key={team.name} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{team.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-bold">{team.name}</h4>
                  <p className="text-sm text-muted-foreground">{team.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
