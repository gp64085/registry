import { searchPackages } from "../../api/queries/searchPackages";
import type { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderData {
  packages: PackageSummary[];
}

export async function searchLoader(
  request: Request
): Promise<SearchLoaderData> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term") || "";

  if (!term) {
    throw new Error("Search term is required");
  }

  const packages = await searchPackages(term);

  return {
    packages: packages,
  };
}
