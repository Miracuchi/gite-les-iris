interface SliderButtonProps {
  onClick: () => void;
  direction: "left" | "right";
}
export default function SliderButton({
  onClick,
  direction,
}: SliderButtonProps) {
  return (
    <div>
      <button onClick={onClick}>
        <span>{direction === "left" ? "Left" : "Right"}</span>
      </button>
    </div>
  );
}
