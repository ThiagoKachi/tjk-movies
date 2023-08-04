export function ErrorBadge() {
  return (
    <div
      className="flex items-center justify-center p-4 mb-4 text-md text-red-800 rounded-md bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">
          Erro ao carregar filmes. Tente novamente!
      </span>
    </div>
  );
}