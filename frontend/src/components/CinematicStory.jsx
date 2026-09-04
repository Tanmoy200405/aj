import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StoryScene, SceneText, CinematicImage } from './CinematicComponents';
import { cinematicScenes } from '../data/cinematicScenes';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicStory({ isMobile, isReducedMotion }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  // We will store refs for each scene's root, image, and text
  const sceneRefs = useRef([]);
  const imgRefs = useRef([]);
  const textRefs = useRef([]);
  const wordRefs = useRef([]);
  const crossroadsContainerRef = useRef(null);
  const svgPathRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ctx = gsap.context(() => {
      // Create master timeline pinned to the container
      const totalScenes = cinematicScenes.length;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScenes * 120}%`, // Gives plenty of scroll space
          scrub: 0.5,
          pin: true,
          anticipatePin: 1
        }
      });

      // Initial Setup: Hide all scenes except scene 1
      sceneRefs.current.forEach((el, i) => {
        if (el) {
          if (i === 0) {
            gsap.set(el, { xPercent: 0, autoAlpha: 1 });
          } else {
            // Initialize them off-screen right
            gsap.set(el, { xPercent: 100, autoAlpha: 1 });
          }
        }
      });

      // SCENE 01: THE SCHOOL (CINEMATIC PARALLAX REVEAL)
      if (imgRefs.current[0]) {
        gsap.fromTo(imgRefs.current[0], 
          { scale: 1.12, opacity: 0.2, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 1.8, ease: "power2.out" }
        );
      }
      if (textRefs.current[0]) {
        gsap.fromTo(textRefs.current[0],
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, delay: 0.3, ease: "power2.out" }
        );
      }

      // Scroll timeline starts here
      // Scene 01 hold and then move out
      tl.to(sceneRefs.current[0], { xPercent: -100, scale: 1.03, duration: 1, ease: "none" }, 1);

      // =========================================================================
      // SCENE 02: THE CLASSROOM (SIDEWAYS CHAPTER TRANSITION)
      // =========================================================================
      // Enters from right
      tl.fromTo(sceneRefs.current[1], 
        { xPercent: 100, scale: 1.03 }, 
        { xPercent: 0, scale: 1, duration: 1, ease: "none" }, 
        1 // overlaps with scene 1 exit
      );
      // Text enters from right
      tl.fromTo(textRefs.current[1],
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power1.out" },
        1.5
      );
      // Exit Scene 02
      tl.to(sceneRefs.current[1], { autoAlpha: 0, duration: 0.5 }, 2.5);

      // =========================================================================
      // SCENE 03: THE EMPTY CLASSROOM (SLOW PUSH-IN)
      // =========================================================================
      tl.set(sceneRefs.current[2], { xPercent: 0, autoAlpha: 1 }, 2.5);
      tl.fromTo(imgRefs.current[2],
        { scale: 1 },
        { scale: 1.08, duration: 1.5, ease: "none" },
        2.5
      );
      // Clip path reveal text
      tl.fromTo(textRefs.current[2],
        { clipPath: "inset(0 100% 0 0)", opacity: 1 },
        { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "power2.out" },
        2.8
      );
      tl.to(sceneRefs.current[2], { autoAlpha: 0, duration: 0.5 }, 4);

      // =========================================================================
      // SCENE 04: THE CORRIDOR (HORIZONTAL CAMERA TRAVEL)
      // =========================================================================
      tl.set(sceneRefs.current[3], { xPercent: 0, autoAlpha: 1 }, 4);
      tl.fromTo(imgRefs.current[3],
        { xPercent: 0 },
        { xPercent: -15, duration: 1.5, ease: "none" },
        4
      );
      tl.fromTo(textRefs.current[3],
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power1.out" },
        4.2
      );
      tl.to(textRefs.current[3], { x: -100, opacity: 0, duration: 0.5 }, 5);
      tl.to(sceneRefs.current[3], { autoAlpha: 0, duration: 0.5 }, 5.5);

      // =========================================================================
      // SCENE 05: THE SCHOOL GATE (DEPTH REVEAL)
      // =========================================================================
      tl.set(sceneRefs.current[4], { xPercent: 0, autoAlpha: 1 }, 5.5);
      tl.fromTo(imgRefs.current[4],
        { scale: 1.12 },
        { scale: 1, duration: 1.5, ease: "none" },
        5.5
      );
      tl.fromTo(textRefs.current[4],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        6
      );
      tl.to(sceneRefs.current[4], { autoAlpha: 0, duration: 0.5 }, 7);

      // =========================================================================
      // SCENE 06: THE UNKNOWN ROAD (CINEMATIC ZOOM OUT)
      // =========================================================================
      tl.set(sceneRefs.current[5], { xPercent: 0, autoAlpha: 1 }, 7);
      tl.fromTo(imgRefs.current[5],
        { scale: 1.08 },
        { scale: 1, duration: 1.5, ease: "none" },
        7
      );
      tl.fromTo(textRefs.current[5],
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        7.5
      );
      tl.to(sceneRefs.current[5], { autoAlpha: 0, duration: 0.5 }, 8.5);

      // =========================================================================
      // SCENE 07: THE PRESSURE (LAYERED TEXT)
      // =========================================================================
      tl.set(sceneRefs.current[6], { xPercent: 0, autoAlpha: 1 }, 8.5);
      const words = wordRefs.current.filter(el => el !== null);
      if (words.length > 0) {
        tl.fromTo(words, 
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power1.out" },
          8.7
        );
        tl.to(words, { opacity: 0, duration: 0.4, stagger: 0.1 }, 10.5);
      }
      tl.to(sceneRefs.current[6], { autoAlpha: 0, duration: 0.5 }, 11);

      // =========================================================================
      // SCENE 08: THE QUESTION (MINIMAL HOLD)
      // =========================================================================
      tl.set(sceneRefs.current[7], { xPercent: 0, autoAlpha: 1 }, 11);
      tl.fromTo(imgRefs.current[7],
        { scale: 1.02 },
        { scale: 1, duration: 2, ease: "none" },
        11
      );
      tl.fromTo(textRefs.current[7],
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        11.5
      );
      // Long hold
      tl.to(sceneRefs.current[7], { autoAlpha: 0, duration: 0.8 }, 13.5);

      // =========================================================================
      // SCENE 09: CAREER CROSSROADS
      // =========================================================================
      tl.set(sceneRefs.current[8], { xPercent: 0, autoAlpha: 1 }, 13.5);
      // Horizontal scroll
      const crossroads = crossroadsContainerRef.current;
      if (crossroads) {
        tl.to(crossroads, {
          xPercent: -100,
          ease: "none",
          duration: 3
        }, 13.8);
      }
      tl.to(sceneRefs.current[8], { autoAlpha: 0, duration: 0.5 }, 17);

      // =========================================================================
      // SCENE 10: THE DISCOVERY
      // =========================================================================
      tl.set(sceneRefs.current[9], { xPercent: 0, autoAlpha: 1 }, 17);
      // Split text reveal
      tl.fromTo(".discovery-split-text", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power2.out" },
        17.5
      );
      tl.to(sceneRefs.current[9], { autoAlpha: 0, duration: 0.5 }, 19);

      // =========================================================================
      // SCENE 11, 12, 13: UI PANELS (FADE IN/OUT)
      // =========================================================================
      // Scene 11: Quiz
      tl.set(sceneRefs.current[10], { xPercent: 0, autoAlpha: 1 }, 19);
      tl.fromTo(sceneRefs.current[10].children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 19.2);
      tl.to(sceneRefs.current[10], { autoAlpha: 0, duration: 0.5 }, 20.5);

      // Scene 12: Explorer
      tl.set(sceneRefs.current[11], { xPercent: 0, autoAlpha: 1 }, 20.5);
      tl.fromTo(sceneRefs.current[11].children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 20.7);
      tl.to(sceneRefs.current[11], { autoAlpha: 0, duration: 0.5 }, 22);

      // Scene 13: Roadmap (Path Draw)
      tl.set(sceneRefs.current[12], { xPercent: 0, autoAlpha: 1 }, 22);
      if (svgPathRef.current) {
        const length = svgPathRef.current.getTotalLength();
        gsap.set(svgPathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(svgPathRef.current, { strokeDashoffset: 0, duration: 1.5, ease: "none" }, 22.2);
      }
      tl.fromTo(".roadmap-node", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.2, duration: 0.5 }, 22.2);
      tl.to(sceneRefs.current[12], { autoAlpha: 0, duration: 0.5 }, 24.5);

      // =========================================================================
      // SCENE 14: THE FUTURE
      // =========================================================================
      tl.set(sceneRefs.current[13], { xPercent: 0, autoAlpha: 1 }, 24.5);
      tl.fromTo(imgRefs.current[13],
        { y: 20 },
        { y: -20, duration: 1.5, ease: "none" },
        24.5
      );
      tl.fromTo(textRefs.current[13],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        25
      );
      tl.to(sceneRefs.current[13], { autoAlpha: 0, duration: 0.5 }, 26.5);

      // =========================================================================
      // FINAL SCENE
      // =========================================================================
      tl.set(sceneRefs.current[14], { xPercent: 0, autoAlpha: 1 }, 26.5);
      tl.fromTo(sceneRefs.current[14].querySelector('.final-cta-btn'),
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        27
      );

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, isReducedMotion]);

  // Navbar animation logic (opacity fading based on scroll direction)
  useLayoutEffect(() => {
    const showNav = gsap.fromTo("nav", { yPercent: 0 }, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (!isMobile) {
          self.direction === -1 ? showNav.play() : showNav.reverse();
        }
      }
    });
  }, [isMobile]);

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden bg-background text-warm-ivory relative">
      
      {/* SCENE 01 */}
      <StoryScene ref={(el) => sceneRefs.current[0] = el}>
        <CinematicImage ref={(el) => imgRefs.current[0] = el} src={cinematicScenes[0].image} alt="School Arrival" priority={true} />
        <SceneText ref={(el) => textRefs.current[0] = el} className="items-start text-left">
          {cinematicScenes[0].title}
        </SceneText>
      </StoryScene>

      {/* SCENE 02 */}
      <StoryScene ref={(el) => sceneRefs.current[1] = el}>
        <CinematicImage ref={(el) => imgRefs.current[1] = el} src={cinematicScenes[1].image} alt="Classroom" />
        <SceneText ref={(el) => textRefs.current[1] = el} className="items-end text-right pb-[20svh]">
          {cinematicScenes[1].title}
        </SceneText>
      </StoryScene>

      {/* SCENE 03 */}
      <StoryScene ref={(el) => sceneRefs.current[2] = el}>
        <CinematicImage ref={(el) => imgRefs.current[2] = el} src={cinematicScenes[2].image} alt="Empty Classroom" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 z-20 pointer-events-none">
          <h2 ref={(el) => textRefs.current[2] = el} className="font-display text-4xl md:text-6xl font-bold tracking-tight text-warm-ivory max-w-4xl leading-tight">
            <span className="block mb-4 text-muted-gold">{cinematicScenes[2].title}</span>
            <span className="block">{cinematicScenes[2].subtitle}</span>
          </h2>
        </div>
      </StoryScene>

      {/* SCENE 04 */}
      <StoryScene ref={(el) => sceneRefs.current[3] = el}>
        <CinematicImage ref={(el) => imgRefs.current[3] = el} src={cinematicScenes[3].image} alt="Corridor" />
        <SceneText ref={(el) => textRefs.current[3] = el} className="items-center text-center">
          {cinematicScenes[3].title}
        </SceneText>
      </StoryScene>

      {/* SCENE 05 */}
      <StoryScene ref={(el) => sceneRefs.current[4] = el}>
        <CinematicImage ref={(el) => imgRefs.current[4] = el} src={cinematicScenes[4].image} alt="Gate" />
        <SceneText ref={(el) => textRefs.current[4] = el} className="items-start justify-end pb-[15svh] text-left">
          {cinematicScenes[4].title}
        </SceneText>
      </StoryScene>

      {/* SCENE 06 */}
      <StoryScene ref={(el) => sceneRefs.current[5] = el}>
        <CinematicImage ref={(el) => imgRefs.current[5] = el} src={cinematicScenes[5].image} alt="Road" />
        <SceneText ref={(el) => textRefs.current[5] = el} className="items-center text-center text-5xl md:text-8xl leading-none">
          {cinematicScenes[5].title.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
        </SceneText>
      </StoryScene>

      {/* SCENE 07: LAYERED TEXT */}
      <StoryScene ref={(el) => sceneRefs.current[6] = el}>
        <CinematicImage ref={(el) => imgRefs.current[6] = el} src={cinematicScenes[6].image} alt="Pressure" />
        <div className="absolute inset-0 z-20 p-8 md:p-24 flex flex-wrap gap-8 items-center justify-center content-center pointer-events-none">
           {cinematicScenes[6].words.map((w, i) => (
             <h3 key={i} ref={(el) => wordRefs.current[i] = el} className={`font-display font-bold ${i === cinematicScenes[6].words.length - 1 ? 'text-5xl md:text-7xl w-full text-center mt-12 text-muted-gold' : 'text-3xl md:text-5xl text-warm-ivory opacity-80'}`}>
               {w}
             </h3>
           ))}
        </div>
      </StoryScene>

      {/* SCENE 08: MINIMAL HOLD */}
      <StoryScene ref={(el) => sceneRefs.current[7] = el}>
        <CinematicImage ref={(el) => imgRefs.current[7] = el} src={cinematicScenes[7].image} alt="Alone" />
        <SceneText ref={(el) => textRefs.current[7] = el} className="items-center text-center">
          {cinematicScenes[7].title.split('\n').map((line, i) => <span key={i} className="block text-6xl md:text-9xl">{line}</span>)}
        </SceneText>
      </StoryScene>

      {/* SCENE 09: HORIZONTAL CAREER JOURNEY */}
      <StoryScene ref={(el) => sceneRefs.current[8] = el} className="bg-background">
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div ref={crossroadsContainerRef} className="flex gap-16 px-[50vw] items-center h-[60vh] w-max will-change-transform">
            {["ENGINEERING", "MEDICINE", "DESIGN", "TECHNOLOGY", "BUSINESS"].map((career, i) => (
              <div key={i} className="w-[80vw] md:w-[35vw] shrink-0 h-full relative group rounded-xl overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop`} alt={career} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-12 flex flex-col justify-end">
                  <span className="text-muted-gold font-sans text-sm tracking-widest mb-2">0{i+1}</span>
                  <h3 className="font-display text-5xl md:text-6xl text-warm-ivory">{career}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StoryScene>

      {/* SCENE 10: DISCOVERY */}
      <StoryScene ref={(el) => sceneRefs.current[9] = el} className="bg-background flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
           <img src={cinematicScenes[9].image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"} alt="Discovery" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-12 md:p-24">
           <h2 className="discovery-split-text font-display text-5xl md:text-7xl text-muted-gold mb-12">START WITH YOU.</h2>
           {["INTERESTS", "STRENGTHS", "PERSONALITY", "SKILLS", "GOALS"].map((t, i) => (
             <p key={i} className="discovery-split-text font-sans text-2xl md:text-4xl text-warm-ivory mb-6 font-light">{t}</p>
           ))}
        </div>
      </StoryScene>

      {/* SCENE 11: CAREER QUIZ UI */}
      <StoryScene ref={(el) => sceneRefs.current[10] = el} className="bg-background flex items-center justify-center p-8">
        <div className="max-w-4xl w-full text-center">
          <h2 className="font-display text-5xl md:text-7xl mb-12 text-warm-ivory">WHAT FITS YOU?</h2>
          <div className="bg-deep-brown/40 border border-muted-olive/30 p-12 rounded-2xl backdrop-blur-md transition-transform hover:scale-[1.02] duration-500">
            <h3 className="font-sans text-2xl mb-8 text-warm-ivory/80">What environment do you see yourself in?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Corporate Office", "Creative Studio", "Hospital / Clinic", "Outdoors / Field"].map((opt, i) => (
                <button key={i} className="text-left px-8 py-6 rounded-xl border border-muted-gold/20 hover:border-muted-gold hover:bg-muted-gold/10 transition-colors font-sans text-lg text-warm-ivory group">
                  <span className="inline-block transition-transform group-hover:translate-x-2">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </StoryScene>

      {/* SCENE 12: CAREER EXPLORATION UI */}
      <StoryScene ref={(el) => sceneRefs.current[11] = el} className="bg-background flex items-center justify-center p-8">
        <div className="max-w-7xl w-full">
          <h2 className="font-display text-5xl md:text-7xl mb-12 text-warm-ivory text-center">EXPLORE YOUR OPTIONS.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((item) => (
              <div key={item} className="group relative h-[60vh] rounded-2xl overflow-hidden cursor-pointer">
                 <img src={`https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Career" />
                 <div className="absolute inset-0 bg-background/60 transition-colors group-hover:bg-background/40" />
                 <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="font-display text-4xl text-warm-ivory mb-2">Architect</h3>
                    <p className="font-sans text-muted-beige mb-6">Design the future of spaces.</p>
                    <div className="flex items-center text-muted-gold font-sans gap-2 group-hover:translate-x-2 transition-transform">
                      View Details <ArrowRight size={18} />
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </StoryScene>

      {/* SCENE 13: THE ROADMAP */}
      <StoryScene ref={(el) => sceneRefs.current[12] = el} className="bg-background flex flex-col items-center justify-center">
        <h2 className="font-display text-5xl md:text-7xl mb-24 text-warm-ivory">SEE THE PATH.</h2>
        <div className="relative w-full max-w-5xl h-64 flex items-center justify-between px-12">
           <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
             <path ref={svgPathRef} d="M 50 128 L 950 128" stroke="#C3A36A" strokeWidth="2" fill="none" strokeDasharray="900" />
           </svg>
           {["CLASS 12", "DEGREE", "SKILLS", "INTERNSHIP", "CAREER"].map((step, i) => (
             <div key={i} className="roadmap-node relative z-10 flex flex-col items-center">
               <div className="w-4 h-4 rounded-full bg-muted-gold mb-4 shadow-[0_0_15px_rgba(195,163,106,0.6)]" />
               <span className="font-sans tracking-widest text-sm font-bold text-warm-ivory">{step}</span>
             </div>
           ))}
        </div>
      </StoryScene>

      {/* SCENE 14: THE FUTURE */}
      <StoryScene ref={(el) => sceneRefs.current[13] = el}>
        <CinematicImage ref={(el) => imgRefs.current[13] = el} src={cinematicScenes[13].image} alt="Future" />
        <SceneText ref={(el) => textRefs.current[13] = el} className="items-center text-center">
          {cinematicScenes[13].title.split('\n').map((line, i) => <span key={i} className="block leading-tight text-5xl md:text-8xl">{line}</span>)}
        </SceneText>
      </StoryScene>

      {/* FINAL SCENE */}
      <StoryScene ref={(el) => sceneRefs.current[14] = el} className="bg-background flex flex-col items-center justify-center text-center">
        <h2 className="font-display text-6xl md:text-9xl text-warm-ivory mb-12">YOUR PATH<br/>STARTS HERE.</h2>
        <button className="final-cta-btn flex items-center gap-4 px-12 py-6 bg-warm-ivory text-background rounded-full font-sans font-bold text-lg hover:bg-muted-gold hover:text-background transition-all group">
          DISCOVER YOUR PATH
          <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />
        </button>
        <button className="final-cta-btn mt-8 text-muted-beige font-sans uppercase tracking-widest text-sm hover:text-warm-ivory transition-colors">
          TAKE THE CAREER QUIZ
        </button>
      </StoryScene>

    </div>
  );
}
