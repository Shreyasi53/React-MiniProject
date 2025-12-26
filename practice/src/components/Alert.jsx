export default function Alert({ alert, onClose }) {
  return (
    <div className="flex items-center justify-between p-4 mb-4 text-sm text-green-800 bg-green-100 rounded">
      <strong>{alert}</strong>

      <button
        onClick={onClose}
        className="ml-4 text-xl font-bold leading-none text-green-800 hover:text-green-900"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
