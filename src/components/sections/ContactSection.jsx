import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { ContactCard } from '../common/ContactCard';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-neutral-border border-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-neutral-card rounded-3xl border border-neutral-border p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                step="05 / INITIATE_CONTACT"
                title="დამიკავშირდით"
                subtitle="გაქვთ საინტერესო იდეა, პროექტი ან ეძებთ მოტივირებულ გუნდის წევრს? სიამოვნებით გავესაუბრები თქვენთან!"
                className="mb-6"
              />

              {/* Contact channels list using reusable ContactCard */}
              <div className="space-y-4 pt-2">
                {portfolioData.contacts.map((contact) => (
                  <ContactCard
                    key={contact.id}
                    label={contact.label}
                    value={contact.value}
                    href={contact.href}
                    type={contact.type}
                    accent={contact.accent}
                  />
                ))}
              </div>
            </div>

            {/* Right: Modern Contact Form */}
            <div className="lg:col-span-7">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-secondary/15 border border-secondary/40 text-secondary text-sm flex items-center space-x-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>მადლობა შეტყობინებისთვის! უახლოეს დროში დაგიკავშირდებით.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                      თქვენი სახელი <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="მაგ: გიორგი ბერიძე"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                      ელ. ფოსტის მისამართი <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="example@domain.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                    შეტყობინება <span className="text-primary">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="მოკლედ აღწერეთ თქვენი პროექტი ან შემოთავაზება..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-input border border-neutral-border text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm resize-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-primary text-neutral hover:bg-primary-hover shadow-neon-cyan transition duration-200 flex items-center justify-center space-x-2"
                >
                  <span>შეტყობინების გაგზავნა</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
