import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Github, Mail, Linkedin, ArrowRight, Sparkles } from 'lucide-react'
import AnimeBackground from './AnimeBackground'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-pink-500" /> {children}
    </span>
  )
}

function SectionTitle({ pre, title }) {
  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-widest text-black/60">{pre}</p>
      <h2 className="text-2xl md:text-3xl font-black tracking-tight">
        <span className="[text-shadow:1px_1px_0_#000,2px_2px_0_#000] text-white bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
    </div>
  )
}

function Card({ children }) {
  return (
    <div className="relative rounded-xl border-2 border-black bg-white p-4 shadow-[6px_6px_0_0_#000] transition hover:shadow-[10px_10px_0_0_#000]">
      <div className="absolute -top-2 -left-2 h-2 w-2 rounded-full bg-black" />
      <div className="absolute -bottom-2 -right-2 h-2 w-2 rounded-full bg-black" />
      {children}
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen relative bg-[#0f1020] text-black">
      <AnimeBackground />

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-gradient-to-br from-pink-500 to-indigo-600 grid place-items-center shadow-[3px_3px_0_0_#000] border-2 border-black">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs leading-tight text-black/70">Portfolio</p>
              <h1 className="text-lg font-black leading-tight">Kim Kiro</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {['about','projects','skills','contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0_0_#000] transition ${activeTab===tab? 'bg-pink-500 text-white' : 'bg-white hover:bg-black hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge>Style Manga / Anime</Badge>
            <h2 className="mt-4 text-4xl md:text-6xl font-black leading-[1.05] text-white [text-shadow:2px_2px_0_#000,4px_4px_0_#000]">
              Kim Kiro — Frontend Developer & Designer
            </h2>
            <p className="mt-4 text-white/90 md:text-lg">
              Estetika panel manga, garis kecepatan, dan halftone dots. Membuat antarmuka hidup dengan animasi halus dan komposisi yang bersih.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition">
                Lihat Proyek <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-pink-500 text-white px-4 py-2 font-bold shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition">
                Hubungi Saya
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/90">
              <a target="_blank" href="https://github.com" className="inline-flex items-center gap-2 hover:text-white"><Github className="h-5 w-5" />Github</a>
              <a target="_blank" href="mailto:kim.kiro@example.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-5 w-5" />Email</a>
              <a target="_blank" href="https://linkedin.com" className="inline-flex items-center gap-2 hover:text-white"><Linkedin className="h-5 w-5" />LinkedIn</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] w-72 sm:w-80 md:w-96 rounded-xl border-4 border-black bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-[10px_10px_0_0_#000]">
              <div className="h-full w-full rounded-lg bg-white grid place-items-center overflow-hidden">
                <div className="text-center p-6">
                  <p className="text-xs uppercase tracking-widest">Karakter</p>
                  <h3 className="text-2xl font-black">KIM KIRO</h3>
                  <p className="mt-2 text-sm text-black/70">“Build with passion, animate with style.”</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-left text-xs">
                    <div className="rounded border-2 border-black p-2">
                      <p className="font-bold">HP</p>
                      <p>96/100</p>
                    </div>
                    <div className="rounded border-2 border-black p-2">
                      <p className="font-bold">ATK</p>
                      <p>88</p>
                    </div>
                    <div className="rounded border-2 border-black p-2">
                      <p className="font-bold">SPD</p>
                      <p>92</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body sections as manga panels */}
      <main className="mx-auto max-w-6xl px-4 pb-24 space-y-12">
        <section id="about">
          <SectionTitle pre="Tentang" title="Siapa itu Kim Kiro?" />
          <Card>
            <p className="text-black/80">
              Seorang pengembang antarmuka dengan kecintaan pada desain berani dan micro-interactions. Fokus pada React, animasi, dan aksesibilitas.
            </p>
          </Card>
        </section>

        <section id="projects">
          <SectionTitle pre="Proyek" title="Misi Terpilih" />
          <div className="grid md:grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.4, delay:i*0.05}}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 rounded bg-gradient-to-br from-pink-500 to-indigo-600 border-2 border-black shadow-[3px_3px_0_0_#000]" />
                    <div>
                      <h3 className="text-lg font-black">Proyek #{i}</h3>
                      <p className="text-sm text-black/70">UI interaktif dengan nuansa anime — panel, motion, dan sound subtle.</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionTitle pre="Keahlian" title="Teknik Spesial" />
          <Card>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {['React','Tailwind','Framer Motion','Accessibility','Figma','TypeScript','API','Testing'].map((s) => (
                <li key={s} className="rounded border-2 border-black bg-white px-3 py-2 text-center font-semibold shadow-[3px_3px_0_0_#000]">{s}</li>
              ))}
            </ul>
          </Card>
        </section>

        <section id="contact">
          <SectionTitle pre="Kontak" title="Ayo Kolaborasi" />
          <Card>
            <form onSubmit={(e)=> e.preventDefault()} className="grid md:grid-cols-2 gap-4">
              <input placeholder="Nama" className="rounded border-2 border-black px-3 py-2 shadow-[2px_2px_0_0_#000] focus:outline-none" />
              <input placeholder="Email" className="rounded border-2 border-black px-3 py-2 shadow-[2px_2px_0_0_#000] focus:outline-none" />
              <textarea placeholder="Pesan" className="md:col-span-2 min-h-[120px] rounded border-2 border-black px-3 py-2 shadow-[2px_2px_0_0_#000] focus:outline-none" />
              <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-md border-2 border-black bg-pink-500 px-4 py-2 font-bold text-white shadow-[4px_4px_0_0_#000]">
                Kirim <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/60 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-black/70">
          © {new Date().getFullYear()} Kim Kiro. Terinspirasi oleh estetika manga & anime.
        </div>
      </footer>
    </div>
  )
}

export default App
