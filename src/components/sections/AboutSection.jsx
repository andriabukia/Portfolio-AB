import React from 'react';
import { Check, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-neutral-border border-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              step="03 / BIOGRAPHY"
              title="ჩემ შესახებ & სასწავლო გზა"
              className="mb-6"
            />

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light">
              ჩემი მოგზაურობა ვებ დეველოპმენტში დაიწყო ინტერესით, თუ როგორ იქმნება ინტერნეტი. თავდაპირველად ინტერესის ობიექტი იყო ინტერაქციული ვებ გვერდები, დღეს კი ეს გატაცება ჩემს პროფესიულ მიზნად იქცა.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light">
              ყოველდღიურად ვწერ კოდს, ვეცნობი ახალ ტექნოლოგიებს და ვქმნი რეალურ პროექტებს. ჩემი მიზანია შევუერთდე მოტივირებულ გუნდს, სადაც შევძლებ როგორც ჩემი უნარების რეალიზებას, ასევე გამოცდილი დეველოპერებისგან სწავლას.
            </p>

            {/* Feature list checks */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">საფუძვლები & JavaScript Core</h4>
                  <p className="text-xs text-neutral-textMuted mt-0.5">
                    DOM მანიპულაცია, ასინქრონული JS (Async/Await), Event Loop, Closures
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">React & ეკოსისტემა</h4>
                  <p className="text-xs text-neutral-textMuted mt-0.5">
                    State Management (Hooks, Context), Reusable კომპონენტები, SPA არქიტექტურა
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Activity Growth Card & Interactive Graph */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-card rounded-2xl border border-neutral-border p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">ყოველდღიური კოდის აქტივობა</h4>
                  <span className="text-xs text-neutral-textMuted font-mono">Day 1</span>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/10 border border-secondary/30 text-secondary inline-flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Consistent Growth</span>
                  </span>
                  <div className="text-xs text-primary font-mono mt-1">Today (365+ Days)</div>
                </div>
              </div>

              {/* Growth Curve SVG Illustration */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-neutral-surface border border-neutral-border border-opacity-60 p-2 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="curveGradientReact" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 110 Q 50 100 100 85 T 200 55 T 300 15 L 300 120 L 0 120 Z" fill="url(#curveGradientReact)" />
                  <path d="M 0 110 Q 50 100 100 85 T 200 55 T 300 15" fill="none" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="300" cy="15" r="4" fill="#00F0FF" />
                </svg>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-gray-300">პროგრესის დინამიკა</span>
                    <span className="text-primary font-bold">90%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-surface overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-gray-300">React Components & State</span>
                    <span className="text-secondary font-bold">92%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-surface overflow-hidden">
                    <div className="h-full bg-secondary rounded-full shadow-neon-green" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

