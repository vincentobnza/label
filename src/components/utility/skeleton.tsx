import { Skeleton } from "../ui/skeleton";

type SkeletonLoadingProps = {
  count: number;
  width?: string;
  height?: string;
  showAvatar?: boolean;
  showUsername?: boolean;
  showContent?: boolean;
  showImage?: boolean;
  className?: string;
};

export const SkeletonLoading = ({
  count,
  width,
  height,
  showAvatar = true,
  showUsername = true,
  showContent = true,
  showImage = true,
  className = "",
}: SkeletonLoadingProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`p-4 border rounded space-y-3 ${className}`}
        >
          {(showAvatar || showUsername) && (
            <div className="flex items-center space-x-3">
              {showAvatar && <Skeleton className="h-10 w-10 rounded-full" />}
              {showUsername && <Skeleton className="h-4 w-32" />}
            </div>
          )}
          {showContent && (
            <>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </>
          )}
          {showImage && (
            <Skeleton
              className={`h-${height || "40"} w-${width || "full"} rounded-md`}
            />
          )}
        </div>
      ))}
    </>
  );
};
