import React from "react";

function DotsPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotted" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotted)" />
    </svg>
  );
}

export default function AnimeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute -top-32 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-500/30 blur-3xl" />

      {/* Speed lines */}
      <div className="absolute inset-0 -skew-y-6">
        <div className="absolute -left-10 top-10 h-0.5 w-1/2 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        <div className="absolute right-0 top-24 h-0.5 w-2/3 bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
        <div className="absolute left-0 bottom-20 h-0.5 w-2/5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
      </div>

      {/* Halftone dots */}
      <div className="text-gray-800">
        <DotsPattern />
      </div>

      {/* Manga panel edges */}
      <div className="absolute inset-6 rounded-xl border-4 border-black/10 shadow-[0_0_0_8px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
