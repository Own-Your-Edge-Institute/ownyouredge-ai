import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  {
    label: "Program",
    title: "Team Program",
    desc: "Upskill entire teams with structured training and AI systems adoption. Your org gets a repeatable certification framework you can deploy to every new hire, every cohort, every quarter.",
    outcome: "After certification: your team shares a common AI framework and a deployment system they can run internally at any scale.",
  },
  {
    label: "Add-on",
    title: "Executive Layer",
    desc: "Leadership briefings and decision architecture for C-suite and senior executives. Every enterprise deployment scoped to your teams, your tools, your goals.",
    outcome: "After certification: C-suite leaders speak the same AI language and make faster, better-informed decisions.",
  },
];

const Enterprise = () => {
  const [form, setForm] = useState({ name: "", company: "", role: "", teamSize: "", challenge: "", website: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/enterprise-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full bg-white/[0.04] border border-[#3C3489]/30 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-[#7F77DD] focus:ring-1 focus:ring-[#7F77DD]/30 transition-colors";

  return (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    {/* Hero */}
    <section className="pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium"
          >
            Enterprise Program
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-serif leading-[1.05] mt-4 mb-6"
          >
            Scale AI readiness across
            <br />
            <span className="italic text-primary">your entire organization.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-foreground/40 text-base lg:text-lg leading-relaxed max-w-xl"
          >
            Structured training, measurement, and leadership alignment — built around your teams, your tools, and your goals.
          </motion.p>
        </div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="group rounded-2xl border border-border/30 p-8 lg:p-10 hover:border-primary/20 transition-colors duration-700"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-medium">{p.label}</span>
            <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-3 group-hover:text-primary transition-colors duration-500">{p.title}</h3>
            <p className="text-foreground/40 text-sm leading-relaxed max-w-2xl">{p.desc}</p>
            <p className="text-foreground/20 text-[11px] leading-relaxed mt-4 italic max-w-2xl">{p.outcome}</p>
          </motion.div>
        ))}

        {/* Strategic Advisory — premium card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.7 }}
          className="group rounded-2xl border p-8 lg:p-10 transition-colors duration-700 bg-[#7F77DD]/[0.06] border-[#7F77DD]/[0.35] hover:bg-[#7F77DD]/[0.10]"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-medium" style={{ color: "#7F77DD" }}>Retained Advisory</span>
          <div className="mt-2 mb-1">
            <span className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full font-medium bg-[#7F77DD]/10 text-[#A89EE0]">Priced separately</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-3" style={{ color: "#A89EE0" }}>Own Your Edge™ Strategic Advisory</h3>
          <p className="text-foreground/30 text-sm leading-relaxed max-w-2xl">
            Astrid works directly with your leadership team on a retained basis — quarterly or biannual sessions to keep your program current, your curriculum sharp, and your executives ahead of the curve as AI evolves. For organizations that want Astrid in the room.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Contact Form */}
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-serif mb-3 text-center">
            Ready to get started?
          </h2>
          <p className="text-foreground/30 text-sm text-center mb-10">
            Tell us about your team and we'll put together a custom proposal.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-[#3C3489]/20 flex items-center justify-center mx-auto mb-5 text-2xl">
                ✓
              </div>
              <h3 className="font-serif text-xl mb-2">We'll be in touch</h3>
              <p className="text-foreground/30 text-sm">
                Thank you for your interest. We review every inquiry personally and will respond within 2 business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-foreground/30 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-foreground/30 font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    className={inputClass}
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-foreground/30 font-medium mb-2">Role *</label>
                  <input
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => updateField("role", e.target.value)}
                    className={inputClass}
                    placeholder="Your title"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-foreground/30 font-medium mb-2">Team Size *</label>
                  <select
                    required
                    value={form.teamSize}
                    onChange={(e) => updateField("teamSize", e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Select size</option>
                    <option value="5-25">5-25</option>
                    <option value="25-100">25-100</option>
                    <option value="100-500">100-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.15em] uppercase text-foreground/30 font-medium mb-2">What are you trying to solve?</label>
                <textarea
                  value={form.challenge}
                  onChange={(e) => updateField("challenge", e.target.value)}
                  className={`${inputClass} min-h-[120px] resize-none`}
                  placeholder="Tell us about your goals, timeline, or challenges..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[#3C3489] hover:bg-[#7F77DD] disabled:opacity-50 text-white py-3.5 text-sm font-medium transition-colors duration-300"
              >
                {submitting ? "Sending..." : "Schedule a conversation"}
              </button>

              {/* Honeypot - hidden from humans, bots fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <p className="text-foreground/15 text-[11px] text-center">
                We review every inquiry personally.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default Enterprise;
