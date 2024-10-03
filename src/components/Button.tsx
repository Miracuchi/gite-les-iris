export default function Button({
  text,
  type,
}: {
  text: string;
  type?: "submit";
}) {
  return (
    <div>
      <button
        className="px-6 py-3 bg-iris_yellow text-black font-semibold rounded-lg hover:bg-[#d4bb00] transition"
        type={type}
      >
        {text}
      </button>
    </div>
  );
}
