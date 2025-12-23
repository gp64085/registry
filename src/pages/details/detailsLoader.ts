import type { Params } from "react-router-dom";
import { getPackageDetails } from "../../api/queries/getPackages";
import type { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  result: PackageDetails;
}

export async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderResult> {
  const { name } = params;

  if (!name) throw new Error("Invalid package name");
  const result = await getPackageDetails(name);

  return { result };
}
