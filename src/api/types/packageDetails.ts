export interface PackageDetails {
    name: string;
    description: string;
    keywords?: string[];
    license: string;
    author: {name: string, email: string},
    maintainers: {name: string, email: string}[],
    readme: string;
}