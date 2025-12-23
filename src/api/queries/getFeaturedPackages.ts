import type { PackageDetails } from "../types/packageDetails";
import { getPackageDetails } from "./getPackages";

export async function getFeaturedPackages(
  featuredPackages: string[]
): Promise<PackageDetails[]> {
  const promises = featuredPackages.map(
    async (name) => await getPackageDetails(name)
  );
  const results = await Promise.all(promises);

  return results;
}
