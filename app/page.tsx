'use client';

import { SmoothScroll } from '@/components/SmoothScroll';
import { Magnetic } from '@/components/Magnetic';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Stagger
    const chars = document.querySelectorAll('.hero-char');
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.1,
      delay: 0.2,
    });

    // Fade up animations with blur
    const revealElements = document.querySelectorAll('.reveal-blur');
    revealElements.forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 60, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          },
        }
      );
    });

    // Image mask/clip reveal
    const revealImages = document.querySelectorAll('.reveal-img');
    revealImages.forEach((img) => {
      gsap.fromTo(
        img,
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.05 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
          },
        }
      );
    });
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#EFEBE0] text-[#131313] overflow-hidden selection:bg-[#131313] selection:text-[#EFEBE0]">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:py-8 flex justify-between items-center mix-blend-difference text-[#EFEBE0]">
          <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-medium tracking-wide">
            <span className="hidden sm:inline-block">YASVANTH — Selected works</span>
            <span className="sm:hidden">YASVANTH</span>
            <Magnetic>
              <a href="#about" aria-label="Scroll to about section" className="h-8 w-8 rounded-full border border-current flex items-center justify-center cursor-pointer transition-colors hover:bg-[#EFEBE0] hover:text-[#131313]">
                <ArrowDown size={14} />
              </a>
            </Magnetic>
          </div>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium">
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 bg-[#EFEBE0]">
            
            {/* Background Assets */}
            <div className="absolute top-0 right-0 w-full md:w-[60%] h-[70vh] md:h-[90vh] overflow-hidden z-0 reveal-img">
               <Image 
                  src="/joonassandell-pfp-with-avatar.jpg" 
                  alt="Portrait" 
                  fill 
                  className="object-cover object-center grayscale opacity-80 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#EFEBE0] via-transparent to-transparent opacity-80 md:hidden"></div>
            </div>

            {/* Giant Graphic - Left */}
            <div className="absolute top-[18%] md:top-32 left-[-10%] md:left-[10%] lg:left-32 w-[60vw] md:w-[30vw] h-[60vw] md:h-[30vw] min-w-[200px] min-h-[200px] max-w-[500px] max-h-[500px] border border-[#131313]/10 rounded-[40%] animate-spin-slow opacity-40 md:opacity-100 z-0 hidden sm:block" style={{ borderStyle: 'solid', borderWidth: '1px', borderImage: 'repeating-linear-gradient(45deg, #131313 0, #131313 1px, transparent 1px, transparent 10px) 1' }}>
                <div className="w-full h-full rounded-[40%] border border-[#131313]/10 rotate-45" />
                <div className="absolute inset-0 rounded-[40%] border border-[#131313]/10 rotate-90" />
            </div>

            <div className="relative z-10 w-full mix-blend-exclusion text-[#EFEBE0] mt-auto">
              <h1 
                ref={heroTextRef}
                className="text-[28vw] md:text-[20vw] leading-[0.8] tracking-tighter-max font-bold uppercase flex flex-col md:flex-row md:items-end gap-0 md:gap-4 overflow-hidden pt-4"
              >
                <span className="block hero-char opacity-0 translate-y-[120%]">Hello.</span>
                <span className="text-[20vw] md:text-[15vw] font-normal font-serif leading-[0.6] mb-[2vw] hero-char opacity-0 translate-y-[120%] hidden md:inline-block">✽</span>
                <span className="block hero-char opacity-0 translate-y-[120%]">YAS</span>
              </h1>
            </div>
          </section>

          {/* Intro Text */}
          <section className="px-6 md:px-12 py-24 md:py-48 max-w-5xl reveal-blur">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight-large leading-[1.25]">
              I&apos;m creative developer and designer based in Tamil Nadu, India.<br className="hidden md:block" />
              Currently working for <span className="border-b-[3px] border-[#131313] pb-1 inline-block">Biocode</span>.
            </h2>
          </section>

          {/* Split About */}
          <section id="about" className="px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row gap-12 md:gap-24">
            <div className="w-full lg:w-5/12 relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden bg-gray-200 reveal-img">
               <Image 
                  src="/joonassandell-pfp-with-avatar.jpg" 
                  alt="YASVANTH" 
                  fill 
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
               />
            </div>
            <div className="w-full lg:w-7/12 flex flex-col justify-center reveal-blur">
              <div className="space-y-6 md:space-y-8 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                <p>I&apos;m YASVANTH — Front-end developer, art director and sometimes even a music producer. I have a strong passion for all aspects of product and visual design, including web and mobile services, branding and software development. I love designing in the browser but I work a lot with Figma and other design tools as well.</p>
                <p>With more than a decade of experience in the design and software industry, I have the skills to assist clients in addressing practical business challenges.</p>
                <p>In my spare time I like to hang out with my family, <span className="border-b border-[#131313] hover:opacity-50 transition-opacity cursor-pointer">create music</span>, follow eSports, play games (mainly DayZ) and bicycle.</p>
                <p className="text-[10px] md:text-xs tracking-widest uppercase mt-8 md:mt-12 bg-[#EFEBE0] inline-block">Wow, such services and skills 👨‍💻</p>
              </div>
            </div>
          </section>

          {/* Massive Skills Text Block */}
          <section className="py-20 md:py-32 px-6 md:px-12 bg-[#EFEBE0] overflow-hidden reveal-blur">
            <div className="font-normal text-2xl sm:text-3xl md:text-5xl lg:text-[5.5rem] tracking-tight leading-[1.1] text-[#131313] break-words">
              Product design — Script — React — Node.js — Framer motion — Rive — Indesign
            </div>
          </section>

          {/* Projects */}
          <section ref={projectsRef} className="py-12 md:py-24 overflow-hidden bg-[#EFEBE0]" id="work">
             <div className="flex flex-col">
                <ProjectItem 
                   title="Product Advertiser" 
                   role="Modern Interactive \n UI/UX Design \n Frontend" 
                   index={0}
                   demoUrl="https://luxury-praline-685450.netlify.app"
                />
                
                <ProjectItem 
                   title="Portfolio Hero" 
                   role="Personal Portfolio \n Brutalist Aesthetic \n Creative Dev" 
                   index={1} 
                   demoUrl="https://resonant-jalebi-b0168a.netlify.app"
                />

                <ProjectItem 
                   title="Shop.ai" 
                   role="Industry Website \n E-commerce Platform \n Artificial Intelligence" 
                   index={2}
                   demoUrl="https://lucent-marzipan-c957a5.netlify.app"
                />
             </div>
          </section>

          {/* Extro / Clients / Footer */}
          <section className="px-6 md:px-12 py-20 md:py-32 bg-[#EFEBE0] flex flex-col lg:flex-row gap-16 reveal-blur">
            <div className="w-full lg:w-1/2 relative min-h-[12rem] md:min-h-[24rem] flex flex-col justify-center items-start lg:items-center">
               <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight z-10 text-[#131313]">
                 Let&apos;s build <br />
                 something <br />
                 unforgettable.
               </h2>
               {/* Decorative sphere */}
               <div className="absolute left-0 lg:left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 border rounded-full overflow-hidden opacity-10 pointer-events-none" style={{ borderStyle: 'solid', borderWidth: '1px', borderImage: 'repeating-linear-gradient(0deg, #131313 0, #131313 1px, transparent 1px, transparent 5px) 1' }}></div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-end">
               <p className="text-sm md:text-base font-medium lg:border-t lg:border-[#131313]/30 lg:pt-8 w-full">
                 Visit my social profiles found<br/>from the footer and follow if you<br/>like 🤙
               </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-6 md:px-12 py-8 md:py-12 bg-[#EFEBE0] border-t border-[#131313]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 text-xs md:text-sm font-medium">
             <div className="flex flex-wrap gap-4 md:gap-6 w-full md:w-auto">
               <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
               <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
               <a href="#" className="hover:opacity-70 transition-opacity">YouTube</a>
             </div>
             <div className="w-full md:w-auto flex justify-between md:block text-[#131313]/60 md:text-right">
               <p className="md:mb-1">© 2023</p>
               <p>YASVANTH</p>
             </div>
          </footer>
        </main>
      </div>
    </SmoothScroll>
  );
}

// Custom padding and responsive design enhancements for Projects
function ProjectItem({ title, role, index, demoUrl }: { title: string, role: string, index: number, demoUrl: string }) {
  const isEven = index % 2 === 0;
  return (
    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="relative w-full min-h-[60vh] md:min-h-[100vh] flex flex-col justify-center border-t border-[#131313]/20 pt-16 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 reveal-blur group block cursor-pointer">
       
       {/* Meta Data Sidebar */}
       <div className={`relative md:absolute md:top-1/4 ${isEven ? 'md:left-12 lg:left-20 xl:left-32' : 'md:right-12 lg:right-20 xl:right-32'} flex flex-col gap-3 md:gap-5 z-30 mb-8 md:mb-0 w-full md:w-auto text-left ${!isEven ? 'md:text-right' : ''}`}>
          <h3 className="text-3xl md:text-xl lg:text-3xl font-bold tracking-tight">{title}</h3>
          <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest leading-[1.8] whitespace-pre-line font-medium text-[#131313]/60">
            {role.split('\\n').map((line, i) => (
              <span key={i}>{line.trim()}<br className="hidden md:block"/></span>
            ))}
          </p>
          <Magnetic>
            <div className={`w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 border border-[#131313]/30 rounded-full flex items-center justify-center hover:bg-[#131313] hover:text-[#EFEBE0] transition-colors cursor-pointer mt-2 md:mt-4 ${isEven ? '' : 'md:ml-auto md:mr-0'}`}>
               <ArrowDown className="-rotate-45 block" size={16} />
            </div>
          </Magnetic>
       </div>

       {/* Circular Text Element */}
       <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-12 lg:right-32' : 'left-12 lg:left-32'} w-64 h-64 lg:w-[400px] lg:h-[400px] z-0 hidden lg:block animate-spin-slow opacity-[0.03] pointer-events-none`}>
          <svg viewBox="0 0 200 200" width="100%" height="100%">
             <defs>
               <path id={`circlePath-${index}`} d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
             </defs>
             <text fontSize="10.5" letterSpacing="4px" fill="currentColor" className="font-bold uppercase">
               <textPath href={`#circlePath-${index}`}>
                 VIEW PROJECT • VIEW PROJECT • VIEW PROJECT •
               </textPath>
             </text>
             <circle cx="100" cy="100" r="10" fill="currentColor" />
          </svg>
       </div>

       {/* Main Image Asset / Live Preview */}
       <div className={`relative z-20 w-full sm:w-[85%] md:w-[65%] lg:w-[45%] xl:w-[40%] aspect-[4/5] md:aspect-square mx-auto ease-out transition-transform duration-[1.2s] group-hover:scale-[1.03] transform ${isEven ? 'md:rotate-[-2deg]' : 'md:rotate-[2deg]'} reveal-img overflow-hidden rounded-sm md:rounded-none bg-[#131313]/5 shadow-2xl`}>
          <div className="w-full h-full relative transition-all duration-[1.5s] ease-out group-hover:scale-[1.05] grayscale group-hover:grayscale-0">
             <div className="absolute inset-0 w-[250%] h-[250%] scale-[0.4] origin-top-left pointer-events-none bg-white">
                 <iframe 
                    src={demoUrl} 
                    title={title}
                    className="w-full h-full border-none" 
                    loading="lazy"
                    tabIndex={-1}
                    aria-hidden="true"
                 />
             </div>
             {/* Invisible overlay ensures the anchor tag intercepts all clicks/scrolls */}
             <div className="absolute inset-0 z-10 pointer-events-none"></div>
          </div>
       </div>

       {/* Massive Title & Horizontal Line */}
       <div className="absolute bottom-[-5%] left-0 w-full flex items-center z-10 overflow-hidden text-[#131313] pointer-events-none opacity-5 md:opacity-10 transition-opacity duration-700 group-hover:opacity-15">
          <h2 className="text-[25vw] md:text-[20vw] leading-none font-bold tracking-tighter-max uppercase pl-6 md:pl-12 whitespace-nowrap">
             {title}
          </h2>
       </div>
    </a>
  )
}

