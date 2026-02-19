"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes subtleZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .img-anim { animation: subtleZoom 20s infinite alternate ease-in-out; }
        .text-anim { animation: slideUpFade 1.2s ease-out forwards; }
      `}</style>

      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg"
          alt="Jaguar"
          className="img-anim"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block'
          }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.4)' 
        }} />
      </div>

      <div className="text-anim" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
        <Badge className="bg-yellow-500 text-black border-none mb-6 px-4 py-1 font-bold">
          PANTHERA ONCA
        </Badge>
        
        <h1 style={{ 
          color: 'white', 
          fontSize: '4rem', 
          fontWeight: '900',
          margin: '0 0 15px 0',
          lineHeight: '1',
        }}>
          EL JAGUAR
        </h1>
        
        <p style={{ 
          color: 'white', 
          fontSize: '1.3rem', 
          maxWidth: '600px',
          margin: '0 auto 30px',
        }}>
          El monarca absoluto de las selvas de América.
        </p>

        <a
          href="#descripcion"
          style={{
            display: 'inline-block',
            backgroundColor: '#fbbf24',
            color: '#000',
            padding: '12px 30px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          CONOCER MÁS
        </a>
      </div>
    </section>
  )
}