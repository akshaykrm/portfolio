import React from "react";

export function DeveloperAvatar() {
  return (
    <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto md:mx-0 group">
      {/* Interactive Ambient Glow Behind Avatar */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
      
      {/* SVG Vector Graphic */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full rounded-full border border-sand-200/80 dark:border-sand-800/80 bg-sand-50 dark:bg-sand-900/80 shadow-sm overflow-hidden p-1 transition-transform duration-300 hover:scale-[1.02]"
      >
        {/* Background Gradients */}
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-sand-100 dark:text-sand-900" stopColor="currentColor" />
            <stop offset="100%" className="text-sand-200/50 dark:text-sand-900/40" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.05" />
          </linearGradient>
          <clipPath id="circleClip">
            <circle cx="100" cy="100" r="94" />
          </clipPath>
        </defs>

        {/* Base Background */}
        <circle cx="100" cy="100" r="96" fill="url(#bgGrad)" />
        <circle cx="100" cy="100" r="85" fill="url(#circleGrad)" />

        {/* Abstract Tech Grid Pattern */}
        <g clipPath="url(#circleClip)" opacity="0.3" className="text-sand-300 dark:text-sand-800">
          <line x1="20" y1="50" x2="180" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="20" y1="150" x2="180" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="50" y1="20" x2="50" y2="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="150" y1="20" x2="150" y2="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </g>

        {/* Minimalist Line Art Character Body */}
        <g clipPath="url(#circleClip)">
          {/* Shoulders / Torso */}
          <path
            d="M50 170 C 50 145, 70 135, 100 135 C 130 135, 150 145, 150 170 C 150 185, 150 200, 150 200 H 50 V 170 Z"
            className="fill-sand-200 dark:fill-sand-800/80 stroke-sand-400 dark:stroke-sand-700"
            strokeWidth="2"
          />

          {/* Collar/Neckline details */}
          <path
            d="M85 135 C 85 145, 115 145, 115 135"
            className="stroke-sand-400 dark:stroke-sand-700"
            strokeWidth="2"
            fill="none"
          />

          {/* Neck */}
          <rect
            x="91"
            y="112"
            width="18"
            height="24"
            rx="4"
            className="fill-sand-300 dark:fill-sand-800/50 stroke-sand-400 dark:stroke-sand-700"
            strokeWidth="2"
          />

          {/* Head */}
          <rect
            x="78"
            y="55"
            width="44"
            height="58"
            rx="22"
            className="fill-sand-100 dark:fill-sand-800 stroke-sand-400 dark:stroke-sand-700"
            strokeWidth="2"
          />

          {/* Hair (Sleek side-part crop) */}
          <path
            d="M78 75 C 78 50, 122 50, 122 70 C 122 75, 118 73, 110 70 C 102 67, 90 70, 78 75 Z"
            className="fill-sand-700 dark:fill-sand-400"
          />
          <path
            d="M78 75 C 75 78, 77 84, 80 84 C 82 78, 78 75, 78 75 Z"
            className="fill-sand-700 dark:fill-sand-400"
          />

          {/* Glasses */}
          {/* Left Frame */}
          <circle
            cx="89"
            y="81"
            r="10"
            className="stroke-amber-500 dark:stroke-amber-400"
            strokeWidth="2"
            fill="none"
          />
          {/* Right Frame */}
          <circle
            cx="111"
            y="81"
            r="10"
            className="stroke-amber-500 dark:stroke-amber-400"
            strokeWidth="2"
            fill="none"
          />
          {/* Glasses Bridge */}
          <path
            d="M99 81 H 101"
            className="stroke-amber-500 dark:stroke-amber-400"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Glasses Sides */}
          <path
            d="M79 81 H 75"
            className="stroke-amber-500 dark:stroke-amber-400"
            strokeWidth="1.5"
          />
          <path
            d="M121 81 H 125"
            className="stroke-amber-500 dark:stroke-amber-400"
            strokeWidth="1.5"
          />

          {/* Minimalist Face Details */}
          {/* Eyes (dots inside glasses) */}
          <circle cx="89" cy="81" r="1.5" className="fill-sand-600 dark:fill-sand-300" />
          <circle cx="111" cy="81" r="1.5" className="fill-sand-600 dark:fill-sand-300" />

          {/* Smile (Happy Arc) */}
          <path
            d="M95 99 C 95 104, 105 104, 105 99"
            className="stroke-sand-500 dark:stroke-sand-400"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ears */}
          <circle
            cx="76"
            y="83"
            r="4"
            className="fill-sand-100 dark:fill-sand-800 stroke-sand-400 dark:stroke-sand-700"
            strokeWidth="1.5"
          />
          <circle
            cx="124"
            y="83"
            r="4"
            className="fill-sand-100 dark:fill-sand-800 stroke-sand-400 dark:stroke-sand-700"
            strokeWidth="1.5"
          />
        </g>

        {/* Elegant Accent: Golden Circle Highlight */}
        <circle cx="160" cy="40" r="5" className="fill-amber-500/80 dark:fill-amber-400/80" />
        <circle cx="150" cy="45" r="2" className="fill-orange-400/60 dark:fill-orange-500/60" />
      </svg>
    </div>
  );
}
