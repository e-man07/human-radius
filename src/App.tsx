
import { Brain, Bone } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Floating bones background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute opacity-[0.08] transition-transform duration-1000"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.5})`,
              animation: `float ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <Bone size={100} className="text-blue-500/20" />
          </div>
        ))}
      </div>

      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] top-0 left-1/4 bg-blue-950/20 rounded-full mix-blend-multiply filter blur-[128px]" />
        <div className="absolute w-[600px] h-[600px] bottom-0 right-1/4 bg-blue-950/20 rounded-full mix-blend-multiply filter blur-[128px]" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and Header */}
          <div className="mb-12 relative group">
            <div className="relative bg-[#0A0A0A] rounded-full p-6 flex items-center justify-center border border-blue-500/20 transition-all duration-300 group-hover:border-blue-500/40">
              <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-[1.15] rotate-45 transition-all duration-300 group-hover:border-blue-500/20" />
              <Brain className="h-16 w-16 text-blue-500 transition-all duration-300 group-hover:scale-110" />
            </div>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight">
              Human Radius
              <span className="block mt-2 text-blue-500">
                Information
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              Explore the fascinating world of human radius anatomy and its 3D representation.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 px-4">
              <button 
                onClick={() => window.open('https://my.clevelandclinic.org/health/body/23122-fibula-calf-bonehttps://my.clevelandclinic.org/health/body/24528-radius', '_blank', 'noopener,noreferrer')}
                className="group relative overflow-hidden rounded-xl px-8 py-4 text-lg font-medium text-white bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_0_40px_0_rgba(59,130,246,0.3)]"
              >
                <span className="relative z-10">About Human Radius</span>
              </button>
              
              <button 
                onClick={() => window.open('https://sketchfab.com/3d-models/human-fibula-5f239617db8d4d2eaaf13b8616acf70ehttps://sketchfab.com/3d-models/human-radius-5859fa73306d45fe96049d60468ec996', '_blank', 'noopener,noreferrer')}
                className="group relative overflow-hidden rounded-xl px-8 py-4 text-lg font-medium text-blue-500 transition-all duration-300
                  hover:text-blue-400 hover:-translate-y-1 hover:shadow-[0_0_40px_0_rgba(59,130,246,0.15)]
                  border border-blue-500/20 hover:border-blue-500/40 bg-[#0A0A0A]"
              >
                <span className="relative z-10">View 3D Image</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="absolute bottom-0 w-full py-8 text-center">
          <p className="text-gray-500 text-sm"> 2025 Medical Visualization. All rights reserved.</p>
        </footer> */}
      </div>
    </div>
  );
}

export default App;