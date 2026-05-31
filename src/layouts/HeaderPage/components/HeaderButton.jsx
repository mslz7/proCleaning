export default function HeaderButton({ setOpen }) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden text-[26px]"
      >
        ☰
      </button>

    </div>
  );
}
