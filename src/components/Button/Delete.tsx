interface DeleteButtonProps {
  onClick: () => void;
}

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      className="bg-red-600 text-white rounded p-2 transition-all hover:bg-red-400 hover:text-indigo-900"
      onClick={onClick}
    >
      Delete
    </button>
  );
}
