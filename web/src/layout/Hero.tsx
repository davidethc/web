
import { GradientGridHero } from "../components/components/nurui/gradient-grid-hero";
import GradientText from "../components/components/nurui/gradient-text";


const GradientHero = () => {
  return (
  <section className="relative flex items-center justify-center overflow-hidden px-4 md:px-6 min-h-[80vh] -mt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 md:top-40 right-5 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 md:bottom-20 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="space-y-2 md:space-y-4">
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-1 md:mb-2">
              <span className="relative z-10">
                Software Engineer & Creative Developer
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            <GradientText
              colors={["#9333ea", "#db2777", "#9333ea", "#db2777", "#9333ea"]}
              animationSpeed={8}
              showBorder={false}
              className="text-4xl sm:text-5xl md:text-7xl font-bold"
            >
              Estrategia, diseño y automatización
            </GradientText>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-2">
              Todo funcionando para vender.
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-normal text-gray-700 max-w-[600px] leading-relaxed">
            Landing pages optimizadas, campañas publicitarias con seguimiento y software
            a medida que integra tus ventas, pagos y atención. Menos fricción, más conversiones.
          </p>
        </div>
        <div className="flex justify-center w-full max-w-[95vw] lg:max-w-full mx-auto -mt-2 lg:mt-0">
          <GradientGridHero />
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default GradientHero;