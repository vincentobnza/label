import { cn } from "@/lib/utils";
import { DotPattern } from "../magicui/dot-pattern";

export const DotPatternCard = () => {
  return (
    <DotPattern
      className={cn(
        "p-1 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
      )}
    />
  );
};
