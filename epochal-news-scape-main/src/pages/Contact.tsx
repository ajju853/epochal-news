
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally submit the form data
    toast({
      title: "Message Sent",
      description: "Thank you for your message. Our team will contact you soon.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="newspaper-heading text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with the EPOCHAL team
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="paper-texture border border-border rounded-lg p-6">
                <h2 className="newspaper-subheading text-2xl font-bold mb-6">
                  Reach Out
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent-red/10 p-2 rounded-full">
                      <Mail className="text-accent-red" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Email</h3>
                      <p className="text-muted-foreground">contact@epochal.news</p>
                      <p className="text-muted-foreground">press@epochal.news</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-accent-red/10 p-2 rounded-full">
                      <Phone className="text-accent-red" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">Mon-Fri, 9AM-6PM ET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-accent-red/10 p-2 rounded-full">
                      <MapPin className="text-accent-red" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Office</h3>
                      <p className="text-muted-foreground">
                        123 News Avenue<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="font-bold text-base mb-4">Visit Us</h3>
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    {/* This would be a Google Map iframe in a real application */}
                    <div className="w-full h-full flex items-center justify-center bg-accent-red/10 text-accent-red">
                      Interactive Map Placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="paper-texture border border-border rounded-lg p-6">
                <h2 className="newspaper-subheading text-2xl font-bold mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="bg-background resize-none"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      className="rounded border-border text-accent-red"
                    />
                    <label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for updates
                    </label>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-accent-red hover:bg-accent-red/90 text-white flex items-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </Button>
                </form>
              </div>
              
              <div className="paper-texture border border-border rounded-lg p-6 mt-6">
                <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">How can I submit a story tip?</h4>
                    <p className="text-muted-foreground">
                      You can email your tips to tips@epochal.news or use our confidential submission form.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold">How do I report a technical issue?</h4>
                    <p className="text-muted-foreground">
                      For technical support, please email support@epochal.news with details about the issue you're experiencing.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold">Are you hiring?</h4>
                    <p className="text-muted-foreground">
                      Visit our <a href="/careers" className="text-accent-red hover:underline">Careers page</a> to see our current openings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
