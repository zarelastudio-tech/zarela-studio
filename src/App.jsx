import React from "react";

export default function App() {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-12 py-6">
        <h1 className="text-xl font-bold tracking-wide">Zarela Studio</h1>
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Casos de éxito</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Blog</a>
        </nav>
        <button className="bg-blue-600 px-5 py-2 rounded-xl shadow-lg hover:bg-blue-500">
          Agendar llamada
        </button>
      </header>

      {/* HERO */}
      <section className="px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
            AGENCIA DE AUTOMATIZACIÓN
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Automatizamos tu negocio.<br />
            <span className="text-blue-500">Creamos webs que venden.</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md">
            Ahorra tiempo, reduce costes y consigue más clientes con automatizaciones inteligentes.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 px-6 py-3 rounded-xl shadow-lg">
              Agendar llamada gratuita
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-xl">
              Ver proyectos
            </button>
          </div>

          <div className="flex gap-8 mt-8 text-sm text-gray-400">
            <span>⏱ Más tiempo</span>
            <span>⚙️ Automatización</span>
            <span>📈 Más clientes</span>
          </div>
        </div>

        {/* MOCK DASHBOARD */}
        <div className="relative">
          <div className="bg-[#111827] h-80 rounded-2xl shadow-2xl border border-gray-700"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-72 bg-[#111827] rounded-xl border border-gray-700 shadow-xl"></div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="text-center text-gray-500 py-10">
        <p className="mb-6">HERRAMIENTAS CON LAS QUE TRABAJAMOS</p>
        <div className="flex justify-center gap-10 opacity-70">
          <span>OpenAI</span>
          <span>Make</span>
          <span>Airtable</span>
          <span>WordPress</span>
          <span>Webflow</span>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-12 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Soluciones que impulsan tu negocio
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Automatizaciones IA",
            "Desarrollo Web",
            "Sistemas & CRM",
            "Growth & Captación"
          ].map((item) => (
            <div key={item} className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition shadow-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-lg mb-4"></div>
              <h4 className="text-lg font-semibold mb-2">{item}</h4>
              <p className="text-gray-400 text-sm">Soluciones modernas para escalar tu negocio.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-12 py-20 text-center">
        <h3 className="text-3xl font-bold mb-12">Un proceso simple y transparente</h3>

        <div className="grid md:grid-cols-5 gap-6 text-gray-300">
          {["Auditoría","Estrategia","Desarrollo","Automatización","Optimización"].map((step, i) => (
            <div key={i}>
              <div className="bg-blue-600 w-12 h-12 mx-auto rounded-full mb-4 shadow-lg"></div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="px-12 py-20">
        <h3 className="text-3xl font-bold text-center mb-10">Resultados reales</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {["+70%","+120%","+60%"].map((stat, i) => (
            <div key={i} className="bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-lg">
              <p className="text-3xl text-green-400 font-bold mb-2">{stat}</p>
              <p className="text-gray-400 text-sm">Mejora en resultados</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-12 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para automatizar tu negocio?</h3>
          <p className="mb-6 text-blue-100">Reserva una llamada gratuita y empieza hoy.</p>
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">Agendar llamada</button>
        </div>
      </section>

      {/* WHATSAPP */}
      <div className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-xl">
        💬
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 border-t border-gray-800">
        © 2026 Zarela Studio
      </footer>
    </div>
  );
}
