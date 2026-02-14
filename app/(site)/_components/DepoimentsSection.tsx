export function DepoimentsSection() {
  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Depoimentos</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-700 text-lg italic mb-4">
                &ldquo;Participar do curso foi uma experiência
                transformadora!&rdquo;
              </p>
              <p className="text-gray-900 font-semibold">
                Ana Souza, Voluntária.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
                alt="Ana Souza"
                className="w-24 h-24 rounded-full object-cover border-4 border-orange-200"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
