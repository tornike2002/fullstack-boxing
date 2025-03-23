"use client";

import dynamic from "next/dynamic";
import noDataAnimation from "@/public/animation/noDataAnimation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface NoDataAnimationProps {
  height?: number;
  width?: number;
}

const NoDataAnimation: React.FC<NoDataAnimationProps> = ({
  height = 400,
  width = 400,
}) => {
  return (
    <div className="bg-black flex items-center justify-center">
      <Lottie
        animationData={noDataAnimation}
        loop={true}
        autoplay={true}
        style={{ height, width }}
      />
    </div>
  );
};

export default NoDataAnimation;
