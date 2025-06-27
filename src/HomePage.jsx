export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <header className="text-center mb-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-2">IAWorks</h1>
          <p className="text-lg text-gray-600 italic">Inteligencia artificial que trabaja para vos.</p>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700 transition">Ver Cursos</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-2xl shadow hover:bg-gray-300 transition">Soluciones para Empresas</button>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Cursos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Course title="ChatGPT desde cero" description="Aprendé a usarlo para estudio, trabajo y vida diaria." />
          <Course title="IA para emprendedores" description="Usá IA para crear y escalar proyectos sin programar." />
          <Course title="Midjourney, Runway y diseño con IA" description="Diseñá imágenes y videos sin saber diseñar." />
          <Course title="Automatización sin código con IA" description="Herramientas como Zapier, Make y más." />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Soluciones para Empresas</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto text-lg text-gray-700">
          <li>Chatbots entrenados para atención al cliente</li>
          <li>Automatización de tareas internas</li>
          <li>Dashboards de IA con visualización de datos</li>
          <li>Entrenamiento del equipo en IA aplicada</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Software IA a Medida</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto text-lg text-gray-700">
          <li>Chatbot personalizado para tu web</li>
          <li>Clasificador inteligente de emails o clientes</li>
          <li>Generador de contenido automático</li>
          <li>Resumen de documentos largos</li>
        </ul>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-lg text-gray-700 mb-4">Agendá una demo o escribinos para saber más.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700 transition">Agendar Demo</button>
      </section>

      <footer className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IAWorks. Todos los derechos reservados.
      </footer>
    </div>
  );
}

function Course({ title, description }) {
  return (
    <div className="border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}