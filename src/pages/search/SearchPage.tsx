import { useLoaderData } from "react-router-dom";
import type { SearchLoaderData } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const { packages } = useLoaderData<SearchLoaderData>();

  const renderedList = packages.map((pack, index) => {
    return <PackageListItem key={index} pack={pack} />;
  });

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Search Result</h1>
      <p className="text-sm text-gray-500">Found {packages.length} packages</p>
      <div className="space-y-4">{renderedList}</div>
    </div>
  );
}

export default SearchPage;
