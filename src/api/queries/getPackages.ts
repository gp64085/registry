import type { PackageDetails } from "../types/packageDetails";

export async function getPackageDetails(name: string): Promise<PackageDetails> {
  const result = await fetch(`https://registry.npmjs.org/${name}`);

  const {
    name: packageName,
    description,
    keywords,
    license,
    author,
    maintainers,
    readme,
  } = await result.json();

  return {
    name: packageName,
    description,
    keywords,
    license,
    author,
    maintainers,
    readme,
  };
}
