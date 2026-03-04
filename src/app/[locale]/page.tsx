'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParams } from 'next/navigation'

// Textos manuales (simples y efectivos)
const texts = {
  en: {
    hero: {
      title: "DAVID CALDERÓN",
      subtitle: "PRODUCER OF GUARACHA AND ELECTRONIC MUSIC",
      tagline: "MINIMAL · POWERFUL · PRECISE",
      listen: "LISTEN",
      contact: "CONTACT"
    },
    music: { title: "SELECTED WORKS", play: "PLAY" },
    about: {
      title: "ABOUT",
      p1: "David Calderón develops his vision within electronic music through a raw and minimalist approach, exploring guaracha from a deeper, club-oriented perspective.",
      p2: "His sound moves away from predictability, building dense atmospheres, hypnotic structures and solid low-end designed for powerful sound systems and late-night dancefloors. His productions balance sonic experimentation with functionality, maintaining an authentic identity within the underground circuit."
    },
    experience: {
      title: "BACKGROUND",
      text: "David Calderón began his journey in electronic music at an early age, combining music production with active involvement in event organization within the Colombian scene.\n\nHis hands-on experience coordinating and developing multiple events gave him a deep understanding of real club dynamics and crowd energy, strongly shaping his approach as a producer.\n\nAt the same time, he developed a distinctive underground guaracha sound defined by minimal structures, deep basslines and hypnotic grooves built for the dancefloor.\n\nToday, he is focused on expanding his project internationally while maintaining a strong and authentic club-driven identity."
    },
    contact: {
      title: "CONTACT",
      bookings: "FOR BOOKINGS, COLLABORATIONS AND PROFESSIONAL INQUIRIES:",
      email: "contact@davidcalderonmusic.com"
    },
    footer: {
      rights: "© 2026 DAVID CALDERÓN. ALL RIGHTS RESERVED.",
      design: "MINIMAL DESIGN • PROFESSIONAL DEVELOPMENT"
    }
  },
  es: {
    hero: {
      title: "DAVID CALDERÓN",
      subtitle: "PRODUCTOR DE GUARACHA & ELECTRÓNICA",
      tagline: "MINIMAL · PODEROSO · PRECISO",
      listen: "ESCUCHAR",
      contact: "CONTACTO"
    },
    music: { title: "TRABAJOS SELECCIONADOS", play: "REPRODUCIR" },
    about: {
      title: "SOBRE MÍ",
      p1: "David Calderón desarrolla su visión dentro de la música electrónica con un enfoque crudo y minimalista, explorando la guaracha desde una perspectiva profunda y orientada al club.",
      p2: "Su propuesta se aleja de lo predecible para construir atmósferas densas, estructuras hipnóticas y bajos sólidos diseñados para sistemas de sonido potentes y pistas de baile nocturnas. Su sonido equilibra experimentación sonora y funcionalidad, manteniendo una identidad auténtica dentro del circuito underground."
    },
    experience: {
      title: "TRAYECTORIA",
      text: "David Calderón inició su camino en la música guaracha y electrónica desde temprana edad, combinando producción musical y organización de eventos dentro de la escena colombiana.\n\nSu experiencia directa en la coordinación y desarrollo de múltiples eventos le permitió comprender la dinámica real del club y la energía del público, influenciando profundamente su enfoque como productor.\n\nParalelamente, desarrolló un sonido propio dentro de la guaracha underground, caracterizado por estructuras minimalistas, bajos profundos y grooves hipnóticos diseñados para la pista de baile.\n\nHoy proyecta su propuesta hacia escenarios internacionales, manteniendo una identidad sólida y enfocada en el circuito club."
    },
    contact: {
      title: "CONTACTO",
      bookings: "PARA RESERVAS, COLABORACIONES Y CONSULTAS PROFESIONALES:",
      email: "contacto@davidcalderonmusic.com"
    },
    footer: {
      rights: "© 2026 DAVID CALDERÓN. TODOS LOS DERECHOS RESERVADOS.",
      design: "DISEÑO MINIMAL • DESARROLLO PROFESIONAL"
    }
  }
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const params = useParams()
  const locale = params?.locale === 'en' ? 'en' : 'es'
  const t = texts[locale]

  useEffect(() => {
    setIsVisible(true)
    setIsClient(true)
  }, [])

  return (
    <main className="min-h-screen">
    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* <Link href="/" className="block w-32 md:w-40 hover:opacity-80 transition-opacity">
          <img 
            src="/DCMUSIC1.png" 
            alt="David Calderón Music" 
            className="w-full h-auto"
          />
        </Link> */}
        {/* <Link href="/" className="block w-32 md:w-40 hover:opacity-80 transition-opacity">
          <img 
            src="/DCMUSIC1.png" 
            alt="David Calderón Music" 
            className="w-full h-auto bg-white/10 backdrop-blur-sm p-2 rounded-lg"
          />
        </Link> */}
        {/* <Link href="/" className="block w-32 md:w-40">
          <img 
            src="/DCMUSIC1.png" 
            alt="David Calderón Music" 
            className="w-full h-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link> */}
      <Link href="/" className="block w-32 md:w-40">
        <img 
          src="/DCMUSIC1.png" 
          alt="David Calderón Music" 
          className="w-full h-auto border border-white/20 rounded p-1"
        />
      </Link>

        <div className="flex items-center space-x-8">
          <Link href="#music" className="text-sm hover:opacity-70 hidden md:block">MUSIC</Link>
          <Link href="#about" className="text-sm hover:opacity-70 hidden md:block">ABOUT</Link>
          <Link href="#contact" className="text-sm hover:opacity-70 hidden md:block">CONTACT</Link>
          <div className="ml-4 pl-4 border-l border-white/20 flex space-x-3">
            <Link href="/en" className={`text-sm tracking-wider ${locale === 'en' ? 'opacity-100' : 'opacity-50'}`}>EN</Link>
            <span className="opacity-30">|</span>
            <Link href="/es" className={`text-sm tracking-wider ${locale === 'es' ? 'opacity-100' : 'opacity-50'}`}>ES</Link>
          </div>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/dj-david-calderon.jpg')",
          }}
        />

        <motion.div 
          className="relative z-10 text-center px-4"
          style={{ opacity: heroOpacity }}
        >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t.hero.title}
        </motion.h1>
          
          <motion.p 
            className="text-sm md:text-base tracking-[0.2em] text-white/70 mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-xs md:text-sm tracking-wider text-white/50 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.tagline}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="#music"
              className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest inline-block"
            >
              {t.hero.listen}
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest inline-block"
            >
              {t.hero.contact}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      {isClient && (
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      )}

      {/* Music Section */}
      <section id="music" className="py-24 md:py-32 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] mb-12 md:mb-16 text-white/50">{t.music.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-xs text-white/40 mb-2">2026</p>
                  <h3 className="text-xl md:text-2xl font-light tracking-wide mb-4">TRACK {item}</h3>
                </div>
                <button className="text-xs tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                  ▶ {t.music.play}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] mb-12 md:mb-16 text-white/50">{t.about.title}</h2>
          
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80">{t.about.p1}</p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/60">{t.about.p2}</p>
          </div>
        </div>
      </section>

{/* Experience Section */}
<section className="py-32 md:py-40 px-6 bg-black border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-xs tracking-[0.3em] mb-20 md:mb-24 text-white/50 text-center md:text-left">
      {t.experience.title}
    </h2>
    
    <div className="max-w-4xl mx-auto space-y-10">
      {t.experience.text.split('\n\n').map((paragraph, index) => (
        <p 
          key={index} 
          className="text-base md:text-lg lg:text-xl leading-relaxed text-white/70 font-light"
          style={{ 
            textIndent: index === 0 ? '0' : '0',
            letterSpacing: '0.3px'
          }}
        >
          {paragraph}
        </p>
      ))}
    </div>
    
    {/* Línea decorativa sutil */}
    <div className="w-16 h-px bg-white/20 mx-auto md:mx-0 mt-16" />
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] mb-12 md:mb-16 text-white/50">{t.contact.title}</h2>
          
          <div className="max-w-3xl">
            <p className="text-xs tracking-wider text-white/40 mb-4 md:mb-6">{t.contact.bookings}</p>
            
            <a 
              href={`mailto:${t.contact.email}`}
              className="text-lg md:text-xl lg:text-2xl hover:opacity-70 transition-opacity inline-block mb-12 md:mb-16 border-b border-white/20 pb-1"
            >
              {t.contact.email}
            </a>

            <div className="flex flex-wrap gap-6 md:gap-8">
              <a href="#" className="text-xs md:text-sm tracking-widest hover:opacity-70">INSTAGRAM</a>
              <a href="#" className="text-xs md:text-sm tracking-widest hover:opacity-70">SPOTIFY</a>
              <a href="#" className="text-xs md:text-sm tracking-widest hover:opacity-70">SOUNDCLOUD</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>{t.footer.rights}</p>
          <p className="mt-2 md:mt-0">{t.footer.design}</p>
        </div>
      </footer>
    </main>
  )
}