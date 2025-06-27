export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 py-10 font-sans">
      <header className="text-center mb-16">
        <img src="/logo.png" alt="IAWorks logo" className="w-28 h-28 mx-auto mb-4" />
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight">IAWorks</h1>
        <p className="text-xl text-gray-600 italic">La IA no reemplaza, potencia. IAWorks.</p>
      </header>

      <main className="max-w-4xl mx-auto text-center">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">🚀 ¿Qué hacemos?</h2>
          <p className="text-lg text-gray-700">
            Enseñamos a personas y empresas a dominar la inteligencia artificial con cursos prácticos y soluciones reales. Te damos herramientas para ganar tiempo, ideas y resultados usando IA.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">🎓 Cursos destacados</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">IA desde cero</h3>
              <p>Aprendé a usar ChatGPT, Midjourney, y otras herramientas sin saber programar.</p>
            </li>
            <li className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">IA para emprendedores</h3>
              <p>Usá IA para crear contenido, automatizar tareas y escalar ideas.</p>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">🏢 Soluciones para empresas</h2>
          <ul className="text-left list-disc list-inside text-gray-700 text-lg">
            <li>Chatbots entrenados para atención al cliente</li>
            <li>Automatización de procesos y reportes</li>
            <li>Dashboards con análisis IA</li>
            <li>Capacitación en IA aplicada a equipos</li>
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">📞 Contacto</h2>
          <p className="text-lg text-gray-700 mb-4">¿Querés implementar IA en tu vida o negocio? Escribinos y te ayudamos.</p>
          <a href="https://wa.me/34683625889" target="_blank">
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600 transition">
              Escribir por WhatsApp
            </button>
          </a>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 border-t pt-6">
        © {new Date().getFullYear()} IAWorks. Todos los derechos reservados.
      </footer>
    </div>
  );
}