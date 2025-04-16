
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Check, AlertTriangle } from 'lucide-react';

const Ethics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="newspaper-heading text-4xl md:text-5xl font-bold mb-6">Ethics Policy</h1>
          
          <div className="paper-texture border border-border rounded-lg p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <Shield className="text-accent-red mr-3" size={24} />
              <h2 className="newspaper-subheading text-2xl font-bold">Our Commitment</h2>
            </div>
            
            <p className="mb-4">
              At EPOCHAL, we believe that journalistic integrity is the foundation of our work. We are committed to the highest standards of accuracy, transparency, and ethical conduct in all our reporting and editorial decisions.
            </p>
            <p>
              This ethics policy outlines the principles that guide our newsroom and the standards to which we hold ourselves accountable.
            </p>
          </div>
          
          <div className="space-y-8">
            <section className="paper-texture border border-border rounded-lg p-6">
              <h3 className="newspaper-subheading text-xl font-bold mb-3">
                Accuracy and Fact-Checking
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We verify all information before publication through multiple reliable sources.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>All articles undergo a rigorous fact-checking process by our editorial team.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We promptly correct errors and issue transparent correction notices.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We distinguish clearly between news reporting, analysis, opinion, and sponsored content.</p>
                </li>
              </ul>
            </section>
            
            <section className="paper-texture border border-border rounded-lg p-6">
              <h3 className="newspaper-subheading text-xl font-bold mb-3">
                Independence and Conflicts of Interest
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>Our reporting is free from improper influence by advertisers, donors, or any special interests.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>Journalists must disclose any potential conflicts of interest related to their reporting.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>Staff members may not report on organizations in which they have a financial interest.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We maintain a strict separation between news coverage and editorial opinions.</p>
                </li>
              </ul>
            </section>
            
            <section className="paper-texture border border-border rounded-lg p-6">
              <h3 className="newspaper-subheading text-xl font-bold mb-3">
                Fair Treatment and Diversity
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We treat sources, subjects, colleagues, and members of the public with respect and dignity.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We seek diverse perspectives in our reporting and within our organization.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We avoid stereotyping by race, gender, age, religion, ethnicity, geography, sexual orientation, disability, or social status.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We give individuals or organizations that are publicly accused of wrongdoing the opportunity to respond.</p>
                </li>
              </ul>
            </section>
            
            <section className="paper-texture border border-border rounded-lg p-6">
              <h3 className="newspaper-subheading text-xl font-bold mb-3">
                Transparency and Attribution
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We identify sources clearly and attribute information properly.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We use anonymous sources only when necessary and explain why anonymity was granted.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We disclose how information was obtained, especially in sensitive or controversial cases.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We clearly label sponsored content, partnerships, and other paid relationships.</p>
                </li>
              </ul>
            </section>
            
            <section className="paper-texture border border-border rounded-lg p-6">
              <h3 className="newspaper-subheading text-xl font-bold mb-3">
                Accountability and Feedback
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We welcome feedback and criticism from our audience.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We correct errors promptly and transparently.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-accent-red mt-1 flex-shrink-0" />
                  <p>We explain editorial decisions when appropriate, especially on sensitive topics.</p>
                </li>
              </ul>
            </section>
            
            <div className="paper-texture border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-accent-red" size={20} />
                <h3 className="newspaper-subheading text-xl font-bold">Report an Ethics Concern</h3>
              </div>
              <p className="mb-4">
                If you have concerns about our reporting, factual errors, or potential ethical violations, please contact our ethics team:
              </p>
              <p className="text-center p-3 bg-muted rounded">
                <a href="mailto:ethics@epochal.news" className="text-accent-red font-medium">ethics@epochal.news</a>
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground text-center italic">
              This ethics policy was last updated on April 14, 2025. We review our ethical guidelines regularly to ensure they reflect best practices in journalism.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ethics;
