import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">
        404 - Página Não Encontrada
      </h1>
      <p className="text-gray-600 mt-4">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-md font-bold transition-colors"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
