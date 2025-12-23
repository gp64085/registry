import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";
import KeywordList from "./KeywordList";

interface PackageListItemProps {
  pack: PackageSummary;
}

export default function PackageListItem({ pack }: PackageListItemProps) {
  return (
    <div className="border border-gray-400 shadow-gray-400 shadow-md p-4 flex items-center justify-between rounded">
      <div className="flex flex-col gap-4">
        <Link to={`/packages/${pack.name}`} className="text-lg font-bold">
          {pack.name}
        </Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        {pack.keywords && (
          <div className="flex flex-row flex-wrap gap-2">
            <KeywordList keywords={pack.keywords}></KeywordList>
          </div>
        )}
      </div>
      <div className="mr-6">
        <Link
          to={`/packages/${pack.name}`}
          className="px-3 py-2 rounded bg-black text-white text-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
