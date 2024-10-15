export default function Button({
  text,
  type,
  url,
  className,
}: {
  text: string;
  type?: "submit";
  url?: string;
  className?: string;
}) {
  const buttonClasseName =
    "px-4 py-2 bg-iris_yellow text-black font-semibold rounded-lg lg:hover:bg-[#d4bb00] transition";
  return (
    <>
      {url ? (
        <a href={url} target="_blank">
          <button className={`${buttonClasseName} ${className}`}>{text}</button>
        </a>
      ) : (
        <button className={buttonClasseName} type={type}>
          {text}
        </button>
      )}
    </>
  );
}
