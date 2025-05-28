export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 cursor-pointer bg-blue-600 rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="text-white mt-2">
        Página {currentPage + 1} de {totalPages}
      </span>
      <button
        disabled={currentPage + 1 >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 cursor-pointer bg-blue-600 rounded disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
}
