import React from 'react';

const BinaryBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Binary code background */}
      <div className="absolute inset-0 bg-repeat text-[12px] leading-[1.5] font-mono opacity-10 dark:opacity-15 text-gray-600 dark:text-green-400 binary-pattern"></div>

      {/* Glass blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-white/20 dark:bg-black/30"></div>

      {/* Optional glowing blobs */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-purple-400/10 dark:bg-purple-500/20 rounded-full blur-[100px] animate-slowfloat"></div>
      <div className="absolute top-[60%] left-[70%] w-[40vw] h-[40vw] bg-blue-300/10 dark:bg-blue-500/20 rounded-full blur-[120px] animate-slowfloat-reverse"></div>
    </div>
  );
};

export default BinaryBackground;
