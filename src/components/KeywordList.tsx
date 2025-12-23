export default function KeywordList({ keywords }: { keywords: string[] }) {
  const renderedKeywords = keywords?.map((keyword, index) => {
    return (
      <span
        key={index}
        className="bg-gray-200 block text-gray-700 text-xs font-semibold px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
      >
        {keyword}
      </span>
    );
  });

  return <>{renderedKeywords}</>;
}
