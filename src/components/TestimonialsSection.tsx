import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Astrid is a critical thinker who can demystify complex ideas and make them relatable for a broad audience. Her three-part Masterclass Series for founders and creatives to start using AI as a partner to amplify talents, and truly start building the future alongside intelligent systems was our most popular class and received accolades from the audience who continue to seek her advice as a leader in implementing AI",
    name: "Clare Tattersall",
    title: "Founder & CEO, Digital Fashion Week NYC",
  },
  {
    quote: "Astrid led two panels focused on artificial intelligence, featuring, among others, a General Manager from Tesla. The discussions explored humanoid AI and Astrid's robot, Miku, generating significant interest and engagement from our audience. The sessions were dynamic, forward-looking, and sparked an active Q&A, reflecting the relevance and impact of the topic.",
    name: "Karin Hammar",
    title: "CEO SACC-USA",
];

const TestimonialsSection = () => (
  <section className="py-32 lg:py-48 px-6 lg:px-12">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.8 }}
            className="rounded-2xl border border-border/30 bg-card p-8 flex flex-col"
          >
            <span className="text-3xl font-serif leading-none mb-4" style={{ color: "#D4AF37" }}>"</span>
            <p className="text-sm text-foreground/80 leading-relaxed flex-1 mb-6">{t.quote}</p>
            <p className="text-sm font-medium text-foreground">
              — {t.name}, <span className="text-foreground/50">{t.title}</span>
            </p>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-xs text-foreground/30 mt-8">Real quotes from certified professionals.</p>
    </div>
  </section>
);

export default TestimonialsSection;
