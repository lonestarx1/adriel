import React, { useState } from 'react';
import {
  Award,
  Briefcase,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Shield,
  Trophy,
  X,
} from 'lucide-react';
import en from './content/en.js';
import ko from './content/ko.js';

const content = { en, ko };

const EMAIL = 'siradriel@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/adriel-niyodusaba-993a01120/';
const RESUME_SHORT = '/docs/Adriel_resume_1pager.pdf';
const RESUME_LONG = '/docs/Adriel_resume.pdf';

const NAV_SECTIONS = ['about', 'skills', 'experience', 'projects', 'education'];

export default function App({ lang = 'en' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang] ?? content.en;

  // Keep the reader on the same section when switching languages.
  const switchLanguage = (event) => {
    event.preventDefault();
    window.location.assign(t.nav.switchHref + window.location.hash);
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#about" className="text-lg font-semibold tracking-tight">
            Adriel Niyodusaba
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted">
            {NAV_SECTIONS.map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-text transition-colors">
                {t.nav[id]}
              </a>
            ))}
            <a
              href="#contact"
              className="px-3 py-1.5 border border-slate-300 rounded-full text-text hover:border-primary hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </a>
            <LanguageSwitch t={t} onClick={switchLanguage} />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <LanguageSwitch t={t} onClick={switchLanguage} />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-text p-2"
              aria-label={t.nav.toggleMenu}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-slate-200 px-6 py-5 shadow-lg">
            <div className="flex flex-col gap-4 text-sm text-muted">
              {NAV_SECTIONS.map((id) => (
                <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)} className="hover:text-text">
                  {t.nav[id]}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-primary">
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <section id="about" className="py-12 md:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                <Briefcase size={14} /> {t.hero.eyebrow}
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Adriel Niyodusaba</h1>
                <p className="text-lg text-muted">{t.hero.intro}</p>
                <p className="text-base text-muted">{t.hero.focus}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} /> {t.hero.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe size={16} /> {t.hero.availability}
                </span>
                <span className="text-muted/70">{t.hero.personal}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail size={16} /> {t.hero.email}
                </a>
                <a
                  href={RESUME_SHORT}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <FileText size={16} /> {t.hero.resumeShort}
                </a>
                <a
                  href={RESUME_LONG}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <FileText size={16} /> {t.hero.resumeLong}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin size={16} /> {t.hero.linkedin}
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-surface border border-slate-200 rounded-3xl p-4 shadow-sm">
                <img
                  src="/adriel2.png"
                  alt={t.hero.photoAlt}
                  className="w-full max-w-xs rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.map((stat) => (
              <div key={stat.label} className="bg-surface border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="text-xl font-semibold text-text">{stat.value}</div>
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16 border-t border-slate-200">
          <SectionHeader {...t.sections.skills} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.skillGroups.map((group) => (
              <div key={group.title} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-slate-100 text-sm text-muted border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16 border-t border-slate-200">
          <SectionHeader {...t.sections.experience} />
          <div className="space-y-6">
            {t.experience.map((role) => (
              <div key={role.role} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{role.role}</h3>
                    <p className="text-sm text-muted">{role.company}</p>
                  </div>
                  <div className="text-sm text-muted">
                    {role.period} · {role.location}
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="py-16 border-t border-slate-200">
          <SectionHeader {...t.sections.products} />
          <div className="grid gap-6 lg:grid-cols-2">
            {t.featuredProducts.map((product) => (
              <DetailCard
                key={product.title}
                title={product.title}
                subtitle={`${product.role} · ${product.timeframe}`}
                badge={product.badge}
                link={product.link}
                linkLabel={t.labels.visit}
                bullets={product.bullets}
                tags={product.stack}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {t.products.map((product) => (
              <DetailCard
                key={product.title}
                title={product.title}
                subtitle={`${product.role} · ${product.timeframe}`}
                bullets={product.bullets}
                tags={product.stack}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="py-16 border-t border-slate-200">
          <SectionHeader {...t.sections.projects} />
          <div className="grid gap-6 lg:grid-cols-2">
            {t.projects.map((project) => (
              <DetailCard
                key={project.title}
                title={project.title}
                subtitle={project.summary}
                link={project.link}
                linkLabel={t.labels.visit}
                bullets={project.bullets}
                tags={project.stack}
              />
            ))}
          </div>
        </section>

        <section id="open-source" className="py-16 border-t border-slate-200">
          <SectionHeader {...t.sections.openSource} />
          <div className="grid gap-6 md:grid-cols-2">
            {t.openSource.map((project) => (
              <div key={project.title} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-xs font-medium text-secondary mt-1">{project.role}</p>
                    <p className="text-sm text-muted mt-2">{project.description}</p>
                  </div>
                  <ExternalLinkButton href={project.link} label={t.labels.visit} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-16 border-t border-slate-200">
          <SectionHeader {...t.sections.education} />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <GraduationCap size={18} /> {t.labels.educationCard}
              </h3>
              <div className="mt-4 space-y-4 text-sm text-muted">
                {t.education.map((item) => (
                  <div key={item.title}>
                    <p className="font-medium text-text">{item.title}</p>
                    <p>{item.org}</p>
                    <p className="text-xs text-muted">{item.timeframe}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <Award size={18} /> {t.labels.awardsCard}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
                {t.awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <Shield size={18} /> {t.labels.exposureCard}
              </h3>
              <div className="mt-4 space-y-4 text-sm text-muted">
                <div>
                  <p className="font-medium text-text">{t.labels.exposure}</p>
                  <ul className="mt-2 space-y-2 list-disc pl-5">
                    {t.exposure.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-text">{t.labels.languages}</p>
                  <ul className="mt-2 space-y-2">
                    {t.languages.map((language) => (
                      <li key={language.name} className="flex items-center justify-between">
                        <span>{language.name}</span>
                        <span className="text-xs text-muted">{language.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 border-t border-slate-200 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">{t.contact.title}</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">{t.contact.body}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={16} /> {EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={16} /> {t.contact.linkedin}
            </a>
          </div>
          <div className="mt-8 text-sm text-muted flex items-center justify-center gap-3">
            <FileText size={14} />
            <a href={RESUME_LONG} target="_blank" rel="noreferrer" className="hover:text-primary">
              {t.contact.download}
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-sm text-muted flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Engineeradriel.com</span>
          <span>{t.footer.location}</span>
        </div>
      </footer>
    </div>
  );
}

function LanguageSwitch({ t, onClick }) {
  return (
    <a
      href={t.nav.switchHref}
      onClick={onClick}
      hrefLang={t.nav.switchHref === '/' ? 'en' : 'ko'}
      aria-label={t.nav.switchAria}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-text hover:text-primary transition-colors"
    >
      <Languages size={16} /> {t.nav.switchLabel}
    </a>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <p className="text-muted mt-3 max-w-3xl">{description}</p>
    </div>
  );
}

function ExternalLinkButton({ href, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="shrink-0 text-primary text-sm inline-flex items-center gap-1"
    >
      {label} <ExternalLink size={14} />
    </a>
  );
}

function DetailCard({ title, subtitle, badge, link, linkLabel, bullets, tags }) {
  return (
    <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm h-full flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ExternalLinkButton href={link} label={linkLabel} />
      </div>
      <p className="text-sm text-muted mt-2">{subtitle}</p>
      {badge && (
        <p className="mt-3 self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-medium text-amber-800">
          <Trophy size={14} /> {badge}
        </p>
      )}
      <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-slate-100 text-xs text-muted border border-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
