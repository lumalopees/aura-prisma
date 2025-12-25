import Skeleton from "./Skeleton";

export default function ServiceCardSkeleton() {
  return (
    <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6">
      <Skeleton variant="text" width="50%" height={28} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="90%" height={16} />
      <Skeleton variant="text" width="70%" height={16} />
      <Skeleton variant="text" width="40%" height={20} className="mt-4" />
    </div>
  );
}

