
import type { ReactNode } from 'react';
import BytheDTitle3D from '../components/BytheDTitle3D';
import NavBar from './NavBar';
import GradientHero from './Hero';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
      {/* Título */}
      <div className="relative z-10">
        <div className="w-screen flex flex-col items-start justify-center mt-8">
          <NavBar />
          <div className="w-full flex justify-center mt-28">
            <BytheDTitle3D />
          </div>
        </div>
        <GradientHero />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
