interface UpdateButtonProps {
  onClick: () => void;
}

export default function UpdateItem({ onClick }: UpdateButtonProps) {
  return (
    <button
      className="bg-purple-700 text-white rounded p-2 transition-all hover:bg-purple-500 hover:text-indigo-900"
      onClick={onClick}
    >
      Edit
    </button>
  );
}
