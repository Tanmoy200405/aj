import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DayInLife = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const timelineData = [
    {
      time: "08:50 AM",
      title: "The day begins with a plan.",
      img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      time: "11:45 AM",
      title: "Solving problems that matter.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      time: "03:30 PM",
      title: "Collaborating and creating impact.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      time: "07:00 PM",
      title: "Time to learn, every single day.",
      img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-step", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
      });

      // Animate horizontal progress line drawing in on scroll
      gsap.from(".timeline-bar", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section py-24 bg-[#E5E1D8] text-[var(--ink)]" id="about">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2.2fr] items-start">
          
          {/* LEFT COLUMN - TEXT */}
          <div className="flex flex-col justify-between h-full lg:sticky lg:top-32">
            <div>
              <h2 className="section-title text-5xl md:text-6xl font-medium leading-[0.92] tracking-tight">
                A day in<br />the life
              </h2>
              <p className="mt-6 text-[var(--muted)] text-base leading-relaxed max-w-[320px]">
                Different paths. Different stories. Which one will be yours?
              </p>
            </div>
            
            <a 
              href="#careers" 
              className="mt-10 lg:mt-24 inline-flex items-center gap-2 text-[var(--coral)] font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Explore stories 
              <ArrowRight size={16} />
            </a>
          </div>

          {/* RIGHT COLUMN - TIMELINE */}
          <div ref={timelineRef} className="w-full relative">
            
            {/* DESKTOP HORIZONTAL TIMELINE */}
            <div className="hidden md:block relative w-full pt-4">
              
              {/* Horizontal Connecting Bar */}
              <div className="absolute top-[48px] left-[5%] right-[5%] h-0.5 bg-[var(--stone)] z-0 overflow-hidden">
                <div className="timeline-bar w-full h-full bg-[var(--coral)]" />
              </div>

              {/* Grid of Steps */}
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {timelineData.map((step, idx) => (
                  <div key={idx} className="timeline-step flex flex-col group">
                    
                    {/* Time Label */}
                    <span className="text-sm font-bold font-body text-[var(--ink)] mb-4">
                      {step.time}
                    </span>

                    {/* Dot on the Timeline Bar */}
                    <div className="w-4 h-4 rounded-full border-4 border-[#E5E1D8] bg-[var(--stone)] group-hover:bg-[var(--coral)] group-hover:scale-125 transition-all duration-300 mb-6 -ml-1 z-20" />

                    {/* Text Description */}
                    <p className="text-xs text-[var(--muted)] group-hover:text-[var(--ink)] transition-colors duration-300 leading-relaxed min-h-[48px] pr-4">
                      {step.title}
                    </p>

                    {/* Image Card */}
                    <div className="mt-6 w-full rounded-2xl overflow-hidden aspect-square border border-[var(--stone)] hover:shadow-lg transition-shadow duration-300">
                      <img 
                        src={step.img} 
                        alt={step.time} 
                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-500"
                      />
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* MOBILE VERTICAL TIMELINE */}
            <div className="md:hidden flex flex-col relative pl-8 py-4">
              
              {/* Vertical line connector */}
              <div className="absolute left-[7px] top-[30px] bottom-[30px] w-0.5 border-l-2 border-dashed border-[var(--stone)] z-0" />

              <div className="flex flex-col gap-10">
                {timelineData.map((step, idx) => (
                  <div key={idx} className="timeline-step flex flex-col relative group">
                    
                    {/* Timeline circle indicator */}
                    <div className="absolute -left-[30px] top-[3px] w-4 h-4 rounded-full border-2 border-[#E5E1D8] bg-[var(--stone)] group-hover:bg-[var(--coral)] transition-colors duration-300 z-10" />

                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-[var(--ink)]">{step.time}</span>
                      <p className="text-sm text-[var(--muted)] font-medium leading-snug">{step.title}</p>
                      
                      {/* Optional mobile thumbnail to make it premium */}
                      <div className="w-full max-w-[260px] h-36 rounded-xl overflow-hidden mt-3 border border-[var(--stone)]">
                        <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DayInLife;
