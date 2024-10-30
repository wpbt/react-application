interface Props {
  linkTitle?: string;
  url: string;
  content: string;
}

export default function LinkInfo({ linkTitle = "Link", url, content }: Props) {
  return (
    <p className="flex w-max items-center text-sm font-semibold my-6 bg-orange-700 text-white rounded px-2 py-1">
      {linkTitle}:{" "}
      <a
        className="font-normal bg-black px-2 py-1 rounded-lg ms-2"
        href={url}
        target="_blank"
      >
        {content}
      </a>
    </p>
  );
}
