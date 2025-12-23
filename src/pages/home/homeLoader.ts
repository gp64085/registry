import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";
import type { PackageDetails } from "../../api/types/packageDetails";

export interface HomeLoaderData {
  featuredPackages: PackageDetails[];
}

const FEATURED_PACKAGES = ["react", "typescript", "vite", "react-router-dom"];
export async function homeLoader(): Promise<HomeLoaderData> {
  const results = await getFeaturedPackages(FEATURED_PACKAGES);
  return { featuredPackages: results };
}
