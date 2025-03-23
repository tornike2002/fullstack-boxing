import Lottie from "lottie-react";
import noDataAnimation from "@/public/animation/noDataAnimation.json";

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
