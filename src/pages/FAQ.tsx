import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long is the certification program?",
    a: "The program is self-paced and designed to be completed in 6 to 8 hours. Most professionals move through it over a few days, fitting it around their schedule. There are no deadlines and no expiration on your access.",
  },
  {
    q: "What format is the certification?",
    a: "Everything is online and on-demand. No Zoom calls, no set schedules. You'll work through a mix of short video lessons, written content, and short-answer exercises, plus downloadable resources you keep forever.",
  },
  {
    q: "What is my investment?",
    a: "The Standard track is $1,495. That's a one-time investment for lifetime access, including any content updates as AI evolves. The Executive Track is available at a separate investment, contact us to discuss what's right for your role and organization.",
  },
  {
    q: "When can I sign up?",
    a: "Right now. Enrollment is open and you can start the same day.",
  },
  {
    q: "Does the certification expire?",
    a: "Never. Own Your Edge™ is a lifetime credential. No renewals, no annual fees, no re-testing.",
  },
  {
    q: "Will employers recognize this certification?",
    a: "The credential is verified and designed to be displayed on LinkedIn and shared with hiring teams, boards, and executive peers. AI fluency is now one of the top skills employers are actively looking for — having a verified credential puts you ahead of the majority of professionals who are self-taught with no proof of proficiency.",
  },
  {
    q: "How do I display it on LinkedIn?",
    a: "Once you earn your certification you'll receive a verified digital badge you can add directly to your LinkedIn profile under Licenses and Certifications. We walk you through exactly how to do it.",
  },
  {
    q: "Do I need a technical background?",
    a: "No. This program was built specifically for business leaders, executives, and professionals who need to lead with AI, not build it. If you can run a meeting, you can complete this certification.",
  },
  {
    q: "What does the curriculum cover?",
    a: "The Standard track covers AI fluency fundamentals, practical prompting, evaluating AI tools, leading AI initiatives across departments, and understanding the risks and governance considerations every leader needs to know. You'll finish with a framework you can apply immediately.",
  },
  {
    q: "How hard is the assessment?",
    a: "It's rigorous enough to mean something but designed for professionals, not engineers. The assessment tests applied understanding, not memorization. If you've engaged with the material you'll be ready.",
  },
  {
    q: "Can I go at my own pace?",
    a: "Completely. There are no live sessions, no cohort schedules, and no deadlines. You start when you're ready and finish on your own timeline.",
  },
  {
    q: "What happens if I don't pass the assessment?",
    a: "You can retake it. We want you to earn this credential with confidence, not scramble through it.",
  },
  {
    q: "Do I get access to updated content as AI evolves?",
    a: "Yes. The landscape moves fast and your certification should stay current. Content updates are included with your enrollment at no additional cost.",
  },
  {
    q: "Who built this curriculum?",
    a: "Astrid Pilla — a 7-time founder, CES Industry Analyst, and AI Strategist who has spent decades at the intersection of tech and business. This isn't academic content. Every module reflects real deployment experience across real organizations.",
  },
  {
    q: "How is Own Your Edge™ different from other AI certifications?",
    a: "Most AI programs teach you what AI is. Own Your Edge™ teaches you how to lead with it. The curriculum is built by an executive who's run every department, not a developer who studied the business side. And unlike most certifications, yours never expires and never requires renewal.",
  },
  {
    q: "Can my company pay for this?",
    a: "Yes. Many professionals expense this as professional development. If your organization wants to certify an entire team, we have an Enterprise Program built for exactly that. Reach out and we'll scope it together.",
  },
  {
    q: "Is there a group or team option?",
    a: "Yes. The Enterprise Program is designed for teams of any size, with a repeatable certification framework your organization can deploy across departments, new hires, and leadership cohorts. See the Enterprise Program for details or schedule a conversation with Astrid directly.",
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    {/* Hero */}
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[10px] tracking-[0.35em] uppercase text-primary/70 mb-6"
        >
          FAQ
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.1] tracking-tight"
        >
          Everything you need to know{" "}
          <span className="italic text-primary">before you certify.</span>
        </motion.h1>
      </div>
    </section>

    {/* Accordion */}
    <section className="px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-[720px] mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border/20"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground/80 hover:text-primary hover:no-underline data-[state=open]:text-primary py-5 gap-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/50 leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>

    {/* CTA */}
    <section className="px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[720px] mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-display tracking-tight mb-8">
          Still have questions?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/certification"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Begin Certification →
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center border border-primary text-primary text-sm font-medium px-8 py-3 rounded-full hover:bg-primary/10 transition-colors"
          >
            Contact us →
          </a>
        </div>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default FAQ;
