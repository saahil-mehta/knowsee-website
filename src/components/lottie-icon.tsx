"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import type { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieIconProps {
  src: string;
  className?: string;
  delay?: number;
}

export function LottieIcon({ src, className = "", delay = 500 }: LottieIconProps) {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, [src]);

  const handleComplete = () => {
    setTimeout(() => {
      lottieRef.current?.goToAndPlay(0);
    }, delay);
  };

  if (!animationData) {
    return <div className={className} />;
  }

  return (
    <div className={className} style={{ filter: "brightness(0) invert(1)" }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={true}
        onComplete={handleComplete}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
