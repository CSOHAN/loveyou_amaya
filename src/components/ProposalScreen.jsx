"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/919019399845"

export default function ProposalScreen() {
    return (
        <div className="flex flex-col items-center justify-center relative text-center max-w-2xl px-4">
            <motion.div
                animate={{ scale: [1, 1.22, 1] }}
                transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4"
            >
                <Heart
                    className="w-16 h-16 fill-rose-500 text-rose-500 drop-shadow-[0_0_22px_rgba(244,63,94,0.8)]"
                    aria-hidden
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl text-foreground font-medium leading-tight text-balance mb-3"
            >
                I love you, Amaya
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-3xl md:text-4xl text-rose-300 font-medium leading-tight text-balance mb-5"
            >
                Will you marry me?
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg text-foreground/85 font-light mb-2"
            >
                Not in a rush — take your time.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.95 }}
                className="text-base md:text-lg text-foreground/75 font-light mb-6 max-w-md"
            >
                For now, can I get your WhatsApp number?
            </motion.p>

            <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.15 }}
                className="px-10 py-4 bg-linear-to-r from-primary to-secondary text-primary-foreground rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-secondary/90 hover:shadow-primary/20 font-medium"
            >
                Open WhatsApp
            </motion.a>
        </div>
    )
}
