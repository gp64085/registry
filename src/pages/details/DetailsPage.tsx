import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./detailsLoader";
import KeywordList from "../../components/KeywordList";

function DetailsPage() {
  const { result } = useLoaderData<DetailsLoaderResult>();
  return (
    <div className="space-y-4 px-4">
      <h1 className="text-3xl font-bold my-4">{result.name}</h1>
      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{result.description}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-200 rounded">{result.license}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Author</h3>
        <div className="p-3 bg-gray-200 rounded">{result.author?.name}</div>
      </div>
      {result.maintainers && (
        <div>
          <h3 className="text-lg font-bold">Maintainers</h3>
          <div className="p-3 bg-gray-200 rounded">
            {result.maintainers.map((maintainer) => maintainer.name).join(", ")}
          </div>
        </div>
      )}

      {result.keywords && (
        <div>
          <h3 className="text-lg font-bold">Keywords</h3>
          <div className="flex flex-row flex-wrap gap-2 p-3 bg-gray-200">
            <KeywordList keywords={result.keywords} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
