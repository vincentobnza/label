type GradientOverlayProps = {
  position?: "top" | "bottom" | "left" | "right";
  height?: string;
  fromColor?: string;
  toColor?: string;
  className?: string;
  zIndex?: string;
  disablePointerEvents?: boolean;
};

export const OverlayFade: React.FC<GradientOverlayProps> = ({
  position = "bottom",
  height = "2rem",
  fromColor = "from-slate-100 dark:from-slate-900",
  toColor = "to-transparent",
  className = "",
  zIndex = "z-10",
  disablePointerEvents = true,
}) => {
  const positionClasses = {
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
  };

  const sizeStyle =
    position === "top" || position === "bottom"
      ? { height }
      : { width: height };

  return (
    <div
      className={`fixed ${positionClasses[position]} bg-gradient-to-${
        position === "top" || position === "bottom"
          ? "t"
          : position === "left"
          ? "r"
          : "l"
      } ${fromColor} ${toColor} ${zIndex} ${
        disablePointerEvents ? "pointer-events-none" : ""
      } ${className}`}
      style={sizeStyle}
    />
  );
};
