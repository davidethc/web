
import type { ReactNode } from 'react';
import BytheDTitle3D from '../components/BytheDTitle3D';

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
        <BytheDTitle3D />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
