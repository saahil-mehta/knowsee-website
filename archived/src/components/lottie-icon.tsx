"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import type { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieIconProps {
  src: string;
  className?: string;
}

export function LottieIcon({ src, className = "" }: LottieIconProps) {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const directionRef = useRef<1 | -1>(1);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, [src]);

  const handleComplete = () => {
    setTimeout(() => {
      directionRef.current = directionRef.current === 1 ? -1 : 1;
      lottieRef.current?.setDirection(directionRef.current);
      lottieRef.current?.play();
    }, 800);
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
