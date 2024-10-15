import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 text-xl font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" passHref>
              <p className="font-medium text-gray-500">Dashboard /</p>
            </Link>
          </li>
          <li className="font-medium text-gray-500">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};
