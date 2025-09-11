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
      <div className="crosshatch-bg">
        {/* Your Content/Components */}
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
    </>
  );
}

      
