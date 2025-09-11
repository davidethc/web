import React from "react";
import { Button } from "../components/components/nurui/button";
import { ArrowRight, Github, Link, Linkedin, Mail } from "lucide-react";
import { GradientGridHero } from "../components/components/nurui/gradient-grid-hero";
import FlechaAnimada from "./FlechaAnimada";


const GradientHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* Flecha animada en la mitad superior, justo encima del bloque de texto principal */}
          <div className="flex justify-center mb-2">
            <FlechaAnimada />
          </div>
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-12">
              <span className="relative z-10">
                Software Engineer & Creative Developer
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Estrategia, diseño y automatización
            </span>
            <span className="block text-3xl md:text-4xl mt-2">
              todo funcionando para vender.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-[600px]">
            Landing pages optimizadas, campañas publicitarias con seguimiento y software
            a medida que integra tus ventas, pagos y atención. Menos fricción, más conversiones.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
              <span className="relative z-10 flex items-center">
                Solicitar demo{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
            <Button
              variant="outline"
              className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
            >
              Consultar portafolio
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/afsar-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <div>
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/md-afsar-mahmud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <div>
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Button>
            </a>
            <a href="mailto:mdafsar.dev@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <div>
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </div>
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <GradientGridHero />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default GradientHero;