"use client"

import { useEffect, useRef } from "react"

export default function Music({ shouldPlay, onEnded }) {
    const audioRef = useRef(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const handleEnded = () => onEnded?.()
        audio.addEventListener("ended", handleEnded)

        return () => audio.removeEventListener("ended", handleEnded)
    }, [onEnded])

    useEffect(() => {
        if (shouldPlay && audioRef.current) {
            audioRef.current.volume = 0.8
            audioRef.current.play().catch(console.log)
        }
    }, [shouldPlay])

    return (
        <audio ref={audioRef} preload="auto">
            <source src="/audio/bg.mp3" type="audio/mpeg" />
        </audio>
    )
}