"use client";
import { motion, AnimatePresence } from "framer-motion";

import { X, FileText, Mail, Copy } from "lucide-react";
import { useState } from "react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vinnerhooda@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111110]/50 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] shadow-2xl z-50 flex flex-col p-6 rounded-l-3xl border-l border-[#1A1A1A]/10 dark:border-white/10"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-playfair text-2xl font-bold italic">Let's Connect</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#1A1A1A]/10 dark:hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-3 p-4 rounded-xl border border-[#1A1A1A]/20 dark:border-white/10 hover:bg-[#1A1A1A] hover:text-[#D3CAB3] dark:hover:bg-white dark:hover:text-[#1C1C1A] transition-colors group cursor-pointer"
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-sans font-semibold tracking-wider text-sm uppercase">Download Resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-between p-4 rounded-xl border border-[#1A1A1A]/20 dark:border-white/10 hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span className="font-sans font-semibold tracking-wider text-sm uppercase">
                    {copied ? "Copied!" : "vinnerhooda@example.com"}
                  </span>
                </div>
                <Copy size={16} className={`transition-opacity ${copied ? 'opacity-0' : 'opacity-50'}`} />
              </button>

              <div className="h-px bg-[#1A1A1A]/10 dark:bg-white/10 my-2" />

              <a
                href="https://github.com/Conceal34"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-[#1A1A1A]/20 dark:border-white/10 hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span className="font-sans font-semibold tracking-wider text-sm uppercase">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vinnerhooda/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-[#1A1A1A]/20 dark:border-white/10 hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="font-sans font-semibold tracking-wider text-sm uppercase">LinkedIn</span>
              </a>
            </div>

            <div className="mt-auto pt-6 text-center text-xs opacity-50 font-sans">
              Based in Delhi NCR, India.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
