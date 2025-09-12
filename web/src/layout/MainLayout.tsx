import type { ReactNode } from 'react';
import BytheDTitle3D from '../components/BytheDTitle3D';
import NavBar from './NavBar';
import GradientHero from './Hero';
import SplashCursor from '../components/components/nurui/splash-cursor';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <SplashCursor
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING={true}
        TRANSPARENT={true}
      />
      <div className="fixed inset-0 overflow-hidden crosshatch-bg">
        <div className="relative min-h-screen">
          <div className="w-screen flex flex-col items-start justify-center">
            <NavBar />
            <div className="w-full flex justify-center mt-0 md:mt-8">
              <BytheDTitle3D />
            </div>
          </div>
          <div className="-mt-8 md:-mt-16">
            <GradientHero />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
