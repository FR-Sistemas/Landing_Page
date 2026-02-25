import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";

type SplineSceneProps = {
    className?: string;
};

export function SplineScene({ className }: SplineSceneProps) {
    return (
        <div className={cn("w-full h-full", className)}>
            <Spline scene="https://prod.spline.design/0xffF-XfjIJsLTrS/scene.splinecode" />
        </div>
    );
}
