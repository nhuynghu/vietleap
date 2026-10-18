import { useState, useEffect } from "react";
import {
  SITE, HERO, ABOUT, AGENDA_DAYS, SPEAKERS,
  REGISTER, SUBMIT, ORGANIZERS, SPONSORS, SPONSOR_CTA, ORGANIZER_ORGS, FORMSPREE_ID,
} from "./config";

function VL({ className = "" }: { className?: string }) {
  return <span className={className}>Viet<i>Leap</i></span>;
}

const NAV_LINKS = [
  { id: "about",      label: "About" },
  { id: "agenda",     label: "Agenda" },
  { id: "register",   label: "Register" },
  { id: "organizers", label: "Organizers-Sponsors" },
];

function useCountdown(targetDate: string) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

function Nav({ active, onNav }: { active: string; onNav: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close the mobile menu whenever the active section changes (i.e. after a nav click)
  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    onNav(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${scrolled || menuOpen ? "border-b border-white/10 bg-[#0a1628]/80" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-2">
        <button onClick={() => handleNav("hero")} className="flex items-center gap-2 group shrink-0">
          <img src={`${import.meta.env.BASE_URL}vietleap-logo.jpg`} alt="VietLeap logo" className="h-9 sm:h-12 w-auto object-contain rounded-lg" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`font-mono text-xs uppercase tracking-widest transition-colors duration-150 ${active === l.id ? "text-[#00e5ff]" : "text-[#7a7a9a] hover:text-white"}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Apply now: visible on every breakpoint, jumps straight to the register/apply section */}
          <button
            onClick={() => handleNav("register")}
            className="tag bg-[#5b4fff] text-white hover:bg-[#7c6fff] transition-colors text-[0.65rem] sm:text-xs px-3 py-2 sm:px-4 sm:py-2 whitespace-nowrap"
          >
            Apply now
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 shrink-0 text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel: section links only — Apply now is already in the bar above */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0a1628]/95 border-b border-white/10 ${
          menuOpen ? "max-h-80" : "max-h-0 border-b-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`text-left font-mono text-sm uppercase tracking-widest py-3 px-2 rounded transition-colors ${
                active === l.id ? "text-[#00e5ff]" : "text-[#7a7a9a] hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero({ onNav }: { onNav: (id: string) => void }) {
  const { days, hours, minutes, seconds } = useCountdown(SITE.countdownTarget);
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-x-hidden px-4">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#5b4fff]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#ff3d6b]/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#00e5ff]/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center px-2 sm:px-10 max-w-5xl mx-auto w-full overflow-visible pt-20 pb-10">
        <div className="inline-block tag bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 mb-6 sm:mb-8 text-xs sm:text-sm">
          {SITE.date}
        </div>
        <h1 className="font-display font-black text-[clamp(2.25rem,11vw,6.5rem)] leading-[0.95] sm:leading-none tracking-tight mb-4 px-2 sm:pr-4 break-words">
          <VL /><br />
          <span className="uppercase" style={{ color: "#e8401c" }}>{SITE.tagline}</span>
        </h1>
        <h2 className="font-display font-bold text-[clamp(1.1rem,4vw,2.5rem)] uppercase text-[#00e5ff] tracking-wide mb-3 leading-tight px-2">
          {SITE.subtitle}
        </h2>

        <p className="text-[#7a7a9a] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2">
          2.5 days. Skill-building. Data challenges. Real impact.<br />
          <span className="block sm:inline sm:whitespace-nowrap"><VL /> brings together emerging talent to transform data into decisions.</span>
        </p>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-sm mx-auto mb-10 sm:mb-12">
          {[
            { val: days,    label: "Days" },
            { val: hours,   label: "Hours" },
            { val: minutes, label: "Mins" },
            { val: seconds, label: "Secs" },
          ].map(({ val, label }) => (
            <div key={label} className="bg-[#0f1e38] border border-white/10 rounded-lg p-2 sm:p-3 text-center">
              <div className="countdown-digit text-xl sm:text-2xl">{String(val).padStart(2, "0")}</div>
              <div className="font-mono text-[#7a7a9a] text-[0.55rem] sm:text-[0.6rem] uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow px-6 sm:px-8 py-3 bg-[#5b4fff] hover:bg-[#7c6fff] text-white font-display font-bold text-base sm:text-lg uppercase tracking-widest rounded transition-colors"
          >
            {HERO.ctaPrimary}
          </a>
          <button onClick={() => onNav("about")} className="px-6 sm:px-8 py-3 border border-white/20 hover:border-white/40 text-white font-display font-bold text-base sm:text-lg uppercase tracking-widest rounded transition-colors">
            {HERO.ctaSecondary}
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float hidden xs:block">
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="#7a7a9a" strokeWidth="1.5"/>
          <rect x="9" y="5" width="2" height="6" rx="1" fill="#5b4fff"/>
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          {ABOUT.stats.map(({ val, label }) => (
            <div key={label} className="bg-[#0f1e38] border border-white/8 rounded-xl p-6 card-hover">
              <div className="font-display font-black text-5xl gradient-text mb-2">{val}</div>
              <div className="text-[#7a7a9a] font-mono text-xs uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="font-display font-bold text-3xl uppercase mb-8 text-white">Competition Tracks</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {ABOUT.tracks.map((t) => (
              <div key={t.title} className="bg-[#0f1e38] border border-white/8 rounded-xl p-6 flex gap-4 card-hover group">
                <div className="text-3xl flex-shrink-0 mt-1">{t.icon}</div>
                <div>
                  <h4 className="font-display font-bold text-xl uppercase text-white mb-2 group-hover:text-[#00e5ff] transition-colors">{t.title}</h4>
                  <p className="text-[#7a7a9a] text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="font-display font-bold text-3xl uppercase mb-8 text-white">What You Get</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ABOUT.whatYouGet.map((item) => (
              <div key={item.label} className="bg-[#0f1e38] border border-white/8 rounded-xl p-6 card-hover flex gap-4">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase text-white mb-1">{item.label}</h4>
                  <p className="text-[#7a7a9a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prize Pool — hidden for now */}
      </div>
    </section>
  );
}

const TYPE_STYLE: Record<string, string> = {
  main:      "bg-[#5b4fff]/20 text-[#a99fff] border-[#5b4fff]/40",
  workshop:  "bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/30",
  talk:      "bg-[#ff3d6b]/10 text-[#ff3d6b] border-[#ff3d6b]/30",
  logistics: "bg-white/5 text-[#7a7a9a] border-white/10",
};

function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  return (
    <section id="agenda" className="py-28 px-6 bg-[#0f1e38]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="tag bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 inline-block mb-4">Schedule</div>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none">
            Event <span className="text-[#00e5ff]">Agenda</span>
          </h2>
        </div>

        <div className="flex gap-2 mb-10 flex-wrap">
          {AGENDA_DAYS.map((d, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded border transition-all duration-150 ${
                activeDay === i
                  ? "bg-[#5b4fff] border-[#5b4fff] text-white"
                  : "border-white/10 text-[#7a7a9a] hover:border-white/30 hover:text-white"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/8" />
          <div className="space-y-1">
            {AGENDA_DAYS[activeDay].events.map((ev, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="font-mono text-[#7a7a9a] text-sm w-16 flex-shrink-0 pt-3 text-right group-hover:text-[#00e5ff] transition-colors">
                  {ev.time}
                </div>
                <div className="relative flex-shrink-0 pt-[14px]">
                  <div className="w-2 h-2 rounded-full bg-[#5b4fff] group-hover:bg-[#00e5ff] transition-colors relative z-10" />
                </div>
                <div className="flex-1 bg-[#132040] border border-white/6 rounded-lg px-4 py-3 flex items-center justify-between gap-4 group-hover:border-white/12 transition-colors">
                  <span className="text-white text-sm">{ev.label}</span>
                  <span className={`tag border ${TYPE_STYLE[ev.type]} flex-shrink-0`}>{ev.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4 flex-wrap">
          {Object.entries(TYPE_STYLE).map(([k, v]) => (
            <div key={k} className={`tag border ${v}`}>{k}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section id="speakers" className="py-28 px-6 bg-[#0f1e38]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <div className="tag bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 inline-block mb-4">Workshop Speakers</div>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none text-white">
            Meet the Speakers
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SPEAKERS.map((s) => (
            <div key={s.name} className="bg-[#0a1628] border border-white/10 rounded-2xl p-8 card-hover flex flex-col items-center text-center">
              <div className={`w-42 h-42 rounded-2xl flex items-center justify-center font-display font-black text-3xl text-white mb-5 overflow-hidden`}>
                {s.name === "Sacha Dray" ? (
                  <img src={`${import.meta.env.BASE_URL}Sacha.jpeg`} alt={s.name} className="w-full h-full object-contain" />
                ) : s.name === "Viet Nguyen-Tien" ? (
                  <img src={`${import.meta.env.BASE_URL}Viet.jpeg`} alt={s.name} className="w-full h-full object-contain" />
                ) : s.name === "Chi-Yu Lee" ? (
                  <img src={`${import.meta.env.BASE_URL}Chiyu.jpeg`} alt={s.name} className="w-full h-full object-contain" />
                ) : (
                  s.avatar
                )}
              </div>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-wide mb-1">{s.name}</h3>
              <p className="font-mono text-[#7a7a9a] text-xs uppercase tracking-widest">{s.affiliation}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-[#0a1628] border border-white/10 rounded-2xl px-8 py-5 text-center">
          <p className="text-[#7a7a9a] text-sm">
            Mentors and judges include professionals and experts from{" "}
            <span className="text-white">UEH</span>,{" "}
            <span className="text-white">Western Sydney University</span>,{" "}
            <span className="text-white">Coventry University</span>,{" "}
            <span className="text-white">University of Roehampton</span>,{" "}
            <span className="text-white">FiinGroup</span>, and other leading organizations.
          </p>
        </div>
      </div>
    </section>
  );
}

function Register() {
  return (
    <section id="register" className="py-28 px-6 bg-[#0a1628] grid-bg">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <div className="tag bg-[#5b4fff]/10 text-[#5b4fff] border border-[#5b4fff]/30 inline-block mb-4">Application</div>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none mb-4">
            Apply Now
          </h2>
          <p className="text-[#7a7a9a]">Submit your application for review. Selected candidates will be invited to <span className="text-white">register</span>.</p>
        </div>
        <div className="bg-[#0f1e38] border border-white/10 rounded-2xl p-10 text-center">
          <a
            href="https://forms.gle/ro62xQdpqPcnarL87"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00e5ff] hover:text-white font-display font-bold text-xl uppercase tracking-widest transition-colors border-b border-[#00e5ff]/40 hover:border-white/60 pb-1"
          >
            Get your CV & motivation statement ready.
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
          <p className="mt-6">
            <a
              href="https://drive.google.com/file/d/12osfpbJZkcn9xfsmUihOOtRiakgl_6qm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00e5ff] hover:text-white font-display font-bold text-base tracking-widest transition-colors border-b border-[#00e5ff]/40 hover:border-white/60 pb-1"
            >
              Take your challenge here (OPTIONAL)
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          </p>
          <p className="text-[#7a7a9a] text-sm font-mono mt-4"> Applications are reviewed on a rolling basis, and shortlisted candidates may be invited for an interview.
          </p>
          <p className="text-white text-sm font-mono mt-2">
            Applications close on October 28, 2026, at 20:30 (Vietnam time).
          </p>
          <p className="mt-6 text-[#7a7a9a] text-sm">
            Do you have any questions for the Organizer? We're happy to help!{" "}
            <a
              href="https://forms.gle/vPBvTacbyDo3zfGS7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00e5ff] hover:text-white underline underline-offset-2 transition-colors"
            >
              Reach out here
            </a>
          </p>
          <p className="mt-3 text-[#7a7a9a] text-sm">
            <a
              href="https://zalo.me/g/kidasipqcqcek9bnjvpd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00e5ff] hover:text-white underline underline-offset-2 transition-colors"
            >
              Join our Zalo group chat
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
          
function Submit() {
  const [form, setForm] = useState({ team: "", project: "", track: "", repo: "", demo: "", description: "", tech: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full bg-[#132040] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#7a7a9a] focus:border-[#ff3d6b] transition-colors";
  const labelCls = "block font-mono text-[#7a7a9a] text-xs uppercase tracking-widest mb-2";

  return (
    <section id="submit" className="py-28 px-6 bg-[#0f1e38]">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <div className="tag bg-[#ff3d6b]/10 text-[#ff3d6b] border border-[#ff3d6b]/30 inline-block mb-4">Project Submission</div>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none mb-4">
            {SUBMIT.heading}
          </h2>
          <p className="text-[#7a7a9a]">{SUBMIT.subtext}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-10">
          {SUBMIT.requirements.map((r) => (
            <div key={r} className="bg-[#132040] border border-white/8 rounded-lg p-3 text-center">
              <div className="text-[#00e5ff] text-xs font-mono">✓</div>
              <div className="text-[#7a7a9a] text-xs mt-1">{r}</div>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="bg-[#132040] border border-[#ff3d6b]/40 rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="font-display font-black text-3xl text-white uppercase mb-2">Submission Received!</h3>
            <p className="text-[#7a7a9a] mb-2"><span className="text-[#ff3d6b]">{form.project}</span> has been submitted.</p>
            <p className="text-[#7a7a9a] text-sm">Judges will review all submissions after the deadline.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#132040] border border-white/10 rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Team Name *</label>
                <input name="team" required value={form.team} onChange={handleChange} placeholder="Team Infinity" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Project Name *</label>
                <input name="project" required value={form.project} onChange={handleChange} placeholder="DataSync" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>GitHub Repository URL *</label>
              <input name="repo" required type="url" value={form.repo} onChange={handleChange} placeholder="https://github.com/team/project" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Live Demo URL</label>
              <input name="demo" type="url" value={form.demo} onChange={handleChange} placeholder="https://project.vercel.app" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Project Description *</label>
              <textarea name="description" required value={form.description} onChange={handleChange} rows={4} placeholder="What problem does it solve? How does it work? What makes it special? (300 words max)" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Tech Stack</label>
              <input name="tech" value={form.tech} onChange={handleChange} placeholder="Next.js, Supabase, OpenAI API, Python..." className={inputCls} />
            </div>
            <button type="submit" className="w-full py-4 bg-[#ff3d6b] hover:bg-[#ff5f84] text-white font-display font-bold text-xl uppercase tracking-widest rounded-lg transition-colors">
              Submit Project →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function OrganizerSection() {
  return (
    <section id="organizers" className="py-28 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="tag bg-[#ff3d6b]/10 text-[#ff3d6b] border border-[#ff3d6b]/30 inline-block mb-4">The Team</div>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none mb-4">
            Organizers &<br /><span className="text-[#ff3d6b]">Sponsors</span>
          </h2>
          <p className="text-[#7a7a9a] max-w-xl">
            Built by a passionate team, the project equips students with practical competencies, empowering Vietnam's next generation to grow their careers, contribute to society and realize their full potential.
          </p>
        </div>

        <h3 className="font-display font-bold text-2xl uppercase text-white mb-8">Organizers</h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          {ORGANIZERS.map((o) => (
            <div key={o.name} className="bg-[#0f1e38] border border-white/8 rounded-xl p-6 card-hover group">
              {o.name === "VietLeap" ? (
                <div className="w-14 h-14 rounded-xl bg-[#f5f0eb] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={`${import.meta.env.BASE_URL}vietleap-logo.png`} alt="VietLeap logo" className="w-10 h-10 object-contain" />
                </div>
              ) : o.name === "UEH" ? (
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={`${import.meta.env.BASE_URL}ueh-logo.png`} alt="UEH logo" className="w-12 h-12 object-contain" />
                </div>
              ) : o.name === "AVSE Global" ? (
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={`${import.meta.env.BASE_URL}avse-logo.png`} alt="AVSE Global logo" className="w-12 h-12 object-contain" />
                </div>
              ) : (
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${o.color} flex items-center justify-center font-display font-black text-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {o.avatar}
                </div>
              )}
              {o.name !== "UEH" && o.name !== "VietLeap" && o.name !== "AVSE Global" && (
                <div className="font-display font-bold text-xl uppercase text-white mb-0.5">
                  {o.name}
                </div>
              )}
              <div className="text-[#5b4fff] font-mono text-xs uppercase tracking-widest mb-1">{o.role}</div>
              {o.org && <div className="text-[#7a7a9a] font-mono text-xs mb-3">{o.org}</div>}
              <p className="text-[#7a7a9a] text-sm leading-relaxed">
                {o.bio.split("VietLeap").map((part, i, arr) =>
                  i < arr.length - 1 ? <span key={i}>{part}<VL /></span> : part
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-20 bg-[#0f1e38] border border-white/8 rounded-xl px-6 py-5 flex items-center gap-4">
          <img src={`${import.meta.env.BASE_URL}tcc-logo.png`} alt="APPLE Club logo" className="h-10 w-auto object-contain flex-shrink-0" />
          <img src={`${import.meta.env.BASE_URL}LOGO_NEN_TOI.png`} alt="Youth Union logo" className="h-10 w-auto object-contain flex-shrink-0" />
          <p className="text-[#7a7a9a] text-sm">
            With the support of School of Public Finance's <span className="text-white">Youth Union</span>, <span className="text-white">Student Association</span>, and <span className="text-white">APPLE Club</span> (UEH)
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-2xl uppercase text-[#ff3d6b] mb-8">Our Sponsors</h3>
          <div className="grid grid-cols-1 gap-3">
            {SPONSORS.map((s) => (
              <div key={s.name} className="bg-[#0f1e38] border border-white/8 rounded-xl px-6 py-5 flex flex-col gap-4 card-hover col-span-full">
                <div className="flex items-center gap-4">
                  <img src={`${import.meta.env.BASE_URL}goodenough-goodstart-logo.png`} alt="Goodenough College & Goodstart Fellow" className="h-10 w-auto object-contain rounded-lg flex-shrink-0" />
                </div>
                <div className="grid md:grid-cols-2 gap-6 pt-2 border-t border-white/8">
                  <div>
                    <h4 className="font-display font-bold text-base uppercase text-white mb-2">Goodenough College</h4>
                    <p className="text-[#7a7a9a] text-sm leading-relaxed">A postgraduate residential charity in Bloomsbury, London, home to 800+ international students from 90+ countries since 1930 — building a global community of future leaders.</p>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base uppercase text-white mb-2">Goodstart Fellow</h4>
                    <p className="text-[#7a7a9a] text-sm leading-relaxed">A Goodenough College alum awarded funding through the Goodstart Fellowship — an initiative created and funded by an alum to help others in the College's alumni community deliver community-impact projects in health, education, the environment, or wellbeing.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-[#0f1e38] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-2xl uppercase text-white mb-1">{SPONSOR_CTA.heading}</h4>
            <p className="text-[#7a7a9a] text-sm">{SPONSOR_CTA.subtext}</p>
          </div>
          <a href={`mailto:${SITE.sponsorEmail}`} className="flex-shrink-0 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-display font-bold text-lg uppercase tracking-widest rounded-lg transition-colors">
            {SITE.sponsorEmail}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }: { onNav: (id: string) => void }) {
  return (
    <footer className="bg-[#0f1e38] border-t border-white/8 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <img src={`${import.meta.env.BASE_URL}vietleap-logo.jpg`} alt="VietLeap logo" className="h-7 w-auto object-contain rounded-lg" />
            <span className="font-black text-xl tracking-widest text-white" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Viet<i>Leap</i> 2026
            </span>
          </div>
          <p className="text-[#7a7a9a] font-mono text-xs">{SITE.date}</p>
        </div>
        <div className="flex gap-6">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => onNav(l.id)} className="text-[#7a7a9a] hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
              {l.label}
            </button>
          ))}
        </div>
        <div className="text-[#7a7a9a] font-mono text-xs">
          © 2026 <VL /> ·{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="hover:text-white transition-colors">{SITE.contactEmail}</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const onNav = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = ["hero", "about", "agenda", "register", "organizers"];
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.4 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Nav active={activeSection} onNav={onNav} />
      <Hero onNav={onNav} />
      <About />
      <Agenda />
      <Speakers />
      <Register />
      <OrganizerSection />
      <Footer onNav={onNav} />
    </div>
  );
}
