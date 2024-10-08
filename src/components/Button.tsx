export default function Button({
  text,
  type,
  url,
}: {
  text: string;
  type?: "submit";
  url?: string;
}) {
  return (
    <>
      {url ? (
        <a href={url} target="_blank">
          <button className="px-6 py-3 bg-iris_yellow text-black font-semibold rounded-lg lg:hover:bg-[#d4bb00] transition">
            {text}
          </button>
        </a>
      ) : (
        <button
          className="px-6 py-3 bg-iris_yellow text-black font-semibold rounded-lg lg:hover:bg-[#d4bb00] transition"
          type={type}
        >
          {text}
        </button>
      )}
    </>
  );
}
