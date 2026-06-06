"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb, Pencil, Code2, CheckCircle2, Rocket, Headphones,
  Play, Layers, RefreshCw, Zap, Trash2, GitBranch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Types ────────────────────────────────────── */

interface Phase {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

/* ─── Data ─────────────────────────────────────── */

const appPhases: Phase[] = [
  { Icon: Lightbulb,    title: "Discovery",    desc: "Client requirements, project scope, tech stack decision, and feasibility analysis." },
  { Icon: Pencil,       title: "UI/UX Design", desc: "Wireframes, prototypes, and pixel-perfect design using user-centered principles." },
  { Icon: Code2,        title: "Development",  desc: "Clean Flutter code with state management, REST API integration, and best practices." },
  { Icon: CheckCircle2, title: "Testing & QA", desc: "Unit tests, widget tests, and thorough manual QA on Android and iOS devices." },
  { Icon: Rocket,       title: "Deployment",   desc: "Play Store & App Store submission, CI/CD pipeline setup, and production launch." },
  { Icon: Headphones,   title: "Maintenance",  desc: "Bug fixes, performance tuning, feature updates, and long-term technical support." },
];

const flutterPhases: Phase[] = [
  { Icon: Play,       title: "runApp()",          desc: "The entry point of every Flutter app. Inflates the root widget and attaches it to the screen." },
  { Icon: Layers,     title: "createState()",     desc: "Called when a StatefulWidget is inserted into the tree. Creates the mutable State object." },
  { Icon: GitBranch,  title: "initState()",       desc: "Called once after the widget is created. Ideal for initializing controllers, streams, and subscriptions." },
  { Icon: Code2,      title: "build()",           desc: "Describes the UI at any given moment. Called whenever setState() triggers a rebuild." },
  { Icon: Zap,        title: "setState()",        desc: "Notifies the framework that internal state has changed and schedules a rebuild of the widget." },
  { Icon: Trash2,     title: "dispose()",         desc: "Called when the widget is removed from the tree. Clean up controllers, streams, and listeners here." },
];

/* ─── Circle helpers ─────────────────────────── */

const SIZE = 420;
const R    = 148;
const CX   = SIZE / 2;
const CY   = SIZE / 2;

function polar(index: number, n: number) {
  const angle = (index / n) * 2 * Math.PI - Math.PI / 2;
  return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
}

function arcPath(i: number, n: number) {
  const a = polar(i, n);
  const b = polar((i + 1) % n, n);
  return `M ${a.x} ${a.y} A ${R} ${R} 0 0 1 ${b.x} ${b.y}`;
}

/* ─── Shared Circle Component ────────────────── */

function LifecycleCircle({ phases, label, title }: { phases: Phase[]; label: string; title: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const N = phases.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % N), 2500);
    return () => clearInterval(id);
  }, [paused, N]);

  const { Icon: ActiveIcon } = phases[active];

  return (
    <section className="container-width pt-20 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-16"
      >
        {/* ── Circle ── */}
        <div
          className="relative flex-shrink-0 scale-[0.72] origin-top sm:scale-90 lg:scale-100"
          style={{ width: SIZE, height: SIZE }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <svg width={SIZE} height={SIZE} className="absolute inset-0 pointer-events-none">
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="#F59E0B" strokeOpacity={0.12} strokeWidth={1} strokeDasharray="4 7" />
            {phases.map((_, i) => (
              <path key={i} d={arcPath(i, N)} fill="none"
                stroke="#F59E0B"
                strokeOpacity={i === active ? 0.75 : 0.14}
                strokeWidth={i === active ? 2.5 : 1.5}
                strokeLinecap="round"
              />
            ))}
            <circle cx={CX} cy={CY} r={68} fill="#F59E0B" fillOpacity={0.04} stroke="#F59E0B" strokeOpacity={0.08} strokeWidth={1} />
          </svg>

          {/* Nodes */}
          {phases.map(({ Icon, title: t }, i) => {
            const pos = polar(i, N);
            const isActive = i === active;
            return (
              <div key={t} style={{ position: "absolute", left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}>
                <motion.button
                  animate={{ scale: isActive ? 1.12 : 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => { setActive(i); setPaused(true); }}
                  className="flex flex-col items-center gap-1.5 focus:outline-none"
                >
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? "#F59E0B" : "#1c1c1c",
                      borderColor:     isActive ? "#F59E0B" : "#2a2a2a",
                      boxShadow:       isActive ? "0 0 0 6px rgba(245,158,11,0.14), 0 0 28px rgba(245,158,11,0.4)" : "none",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center rounded-full border-2"
                    style={{ width: 52, height: 52 }}
                  >
                    <Icon size={20} color={isActive ? "#000" : "#555"} />
                  </motion.div>
                  <motion.span
                    animate={{ color: isActive ? "#F59E0B" : "#444" }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] font-semibold whitespace-nowrap"
                  >
                    {t}
                  </motion.span>
                </motion.button>
              </div>
            );
          })}

          {/* Center number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.65 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <p className="text-5xl font-black text-[#F59E0B] leading-none">
                  {String(active + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[11px] font-medium text-white/30">of {N}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Detail panel ── */}
        <div className="w-full max-w-sm lg:max-w-none lg:flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F59E0B] shadow-[0_8px_24px_rgba(245,158,11,0.3)]">
                  <ActiveIcon size={24} color="#000" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F59E0B]/50 uppercase tracking-[0.18em]">
                    Step {active + 1} / {N}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-tight font-mono">
                    {phases[active].title}
                  </h3>
                </div>
              </div>

              <p className="text-[0.95rem] leading-relaxed text-white/55">
                {phases[active].desc}
              </p>

              <div className="mt-8 flex items-center gap-2">
                {phases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActive(i); setPaused(true); }}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{ width: i === active ? 28 : 8, background: i === active ? "#F59E0B" : "#2a2a2a" }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Exports ────────────────────────────────── */

export function LifecycleSection() {
  return <LifecycleCircle phases={appPhases} label="How I Work" title="App Development Lifecycle" />;
}

export function FlutterLifecycleSection() {
  return <LifecycleCircle phases={flutterPhases} label="Flutter Internals" title="Flutter Widget Lifecycle" />;
}
