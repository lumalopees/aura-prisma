import Skeleton from "./Skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton variant="rectangular" height={240} className="w-full" />
      <Skeleton variant="text" width="60%" height={24} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="80%" height={16} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
        <Skeleton variant="rectangular" width={80} height={24} className="rounded-full" />
      </div>
    </div>
  );
}

