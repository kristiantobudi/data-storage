import { SkeletonLoaderProps } from "./columnProps";

export default function SkeletonLoader({ columnCount }: SkeletonLoaderProps) {
  const skeletonColumns = Array(columnCount).fill(null);
  return (
    <>
      {skeletonColumns.map((_, index) => (
        <td key={index} className="px-4 py-2 lg:px-6 lg:py-4">
          <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        </td>
      ))}
    </>
  );
}
