export default function App() {
  return (
    <div className="bg-[#0a0f1c] text-white font-sans">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-12 py-6">
        <h1 className="text-xl font-bold">AutomatizaX</h1>

        <nav className="flex gap-8 text-sm">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Casos de éxito</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Blog</a>
        </nav>

        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500">
          Agendar llamada
        </button>
      </header>

      {/* HERO */}
      <section className="px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs text-gray-400 mb-4">
            AGENCIA DE AUTOMATIZACIÓN Y DESARROLLO WEB
          </p>

          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Automatizamos tu negocio.
            <br />
            <span className="text-blue-500">
              Creamos webs que venden.
            </span>
          </h2>

          <p className="text-gray-400 mb-6">
            Ahorra tiempo, reduce costes y consigue más clientes con automatizaciones inteligentes.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 px-6 py-3 rounded-lg">
              Agendar llamada gratuita
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg">
              Ver proyectos
            </button>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm">
            <span>⏱ Más tiempo</span>
            <span>⚙ Automatización</span>
            <span>📈 Más clientes</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-[350px] rounded-xl flex items-center justify-center">
          Dashboard
        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section className="text-center pb-16">
        <p className="text-gray-500 text-sm mb-4">
          HERRAMIENTAS CON LAS QUE TRABAJAMOS
        </p>

        <div className="flex justify-center gap-10 text-gray-400">
          <span>OpenAI</span>
          <span>Make</span>
          <span>Airtable</span>
          <span>WordPress</span>
          <span>Webflow</span>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-12 py-20">
        <h3 className="text-3xl text-center mb-12 font-bold">
          Soluciones que impulsan tu negocio
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Automatizaciones IA",
            "Desarrollo Web",
            "Sistemas & CRM",
            "Growth & Captación"
          ].map((s, i) => (
            <div key={i} className="bg-[#111827] p-6 rounded-xl hover:bg-[#1f2937] transition">
              <h4 className="mb-2 font-semibold">{s}</h4>
              <p className="text-gray-400 text-sm">
                Soluciones modernas para escalar tu negocio.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-12 py-20 text-center">
        <h3 className="text-3xl mb-12 font-bold">
          Un proceso simple y transparente
        </h3>

        <div className="grid md:grid-cols-5 gap-6">
          {["Auditoría", "Estrategia", "Desarrollo", "Automatización", "Optimización"].map((p, i) => (
            <div key={i}>
              <div className="bg-[#111827] w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                {i + 1}
              </div>
              <p className="text-gray-400 text-sm">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="px-12 py-20">
        <h3 className="text-3xl text-center mb-12 font-bold">
          Resultados reales para negocios reales
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {["+70%", "+120%", "+60%"].map((r, i) => (
            <div key={i} className="bg-[#111827] p-6 rounded-xl text-center">
              <p className="text-green-400 text-2xl font-bold">{r}</p>
              <p className="text-gray-400 text-sm">Crecimiento</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-12 py-20">
        <h3 className="text-3xl text-center mb-12 font-bold">
          Lo que dicen nuestros clientes
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((t) => (
            <div key={t} className="bg-[#111827] p-6 rounded-xl">
              <p className="text-gray-400 text-sm mb-4">
                “Gran trabajo, aumentamos ventas rápidamente.”
              </p>
              <p className="text-sm font-semibold">Cliente {t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-12 py-20 text-center">
        <div className="bg-[#111827] p-10 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-3xl mb-4 font-bold">
            ¿Listo para automatizar tu negocio?
          </h3>

          <p className="text-gray-400 mb-6">
            Reserva una llamada gratuita y descubre cómo podemos ayudarte.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-lg">
            Agendar llamada gratuita
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-12 py-10 text-center text-gray-500">
        © 2024 AutomatizaX
      </footer>

    </div>
  );
}
