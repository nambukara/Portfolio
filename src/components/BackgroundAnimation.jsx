// src/components/BackgroundAnimation.jsx
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      

      {/* Floating shapes layer */}
      <div className="absolute inset-0 opacity-30">
        {/* Triangle 1 */}
        <div className="absolute top-20 left-10 animate-float">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50 10 L90 90 L10 90 Z" fill="#8b5cf6" />
          </svg>
        </div>

        {/* Triangle 2 */}
        <div className="absolute bottom-32 right-20 animate-float-delay">
          <svg width="540" height="540" viewBox="0 0 100 100" fill="none">
            <path d="M50 15 L90 85 L10 85 Z" fill="#3b82f6" />
          </svg>
        </div>

        {/* Curly braces / code symbols */}
        <div className="absolute top-1/3 left-1/4 animate-float-slow">
          <pre className="text-8xl text-cyan-400 font-mono font-bold">{`{ }`}</pre>
        </div>

        <div className="absolute top-4/5 left-3/4 animate-float-slow">
          <pre className="text-8xl text-cyan font-mono font-bold">{`{ }`}</pre>
        </div>

        <div className="absolute bottom-40 left-32 animate-float-delay">
          <pre className="text-9xl text-pink-400 font-bold">{`< />`}</pre>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-52 right-40 animate-pulse">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-2xl" />
        </div>
        <div className="absolute top-96 left-1/3 animate-pulse delay-1000">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 blur-3xl" />
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
    </div>
  );
};

export default BackgroundAnimation;