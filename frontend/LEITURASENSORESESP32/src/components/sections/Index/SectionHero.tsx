

export default function SectionHero() {

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">

            {/* Glow Background */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-emerald-400/20 blur-[120px] rounded-full"></div>

            <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-8">

                    {/* Badge */}
                    <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 font-medium">
                        🚀 Projeto IoT • ESP32 • 4 Sensores
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Monitoramento
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            Inteligente em Tempo Real
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl">
                        Sistema embarcado com ESP32 realizando leitura de 4 sensores,
                        aplicação de média móvel, validação de dados
                        e envio estruturado via JSON para backend.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-black shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-105">
                            Ver Dashboard
                        </button>

                        <button className="px-8 py-4 border border-gray-700 hover:border-green-400 rounded-xl transition-all duration-300 hover:scale-105">
                            Ver Código
                        </button>
                    </div>

                </div>

                {/* RIGHT SIDE CARD */}
                <div className="relative">

                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">

                        <div className="flex justify-between items-center mb-6">
                            <span className="text-green-400 font-semibold">
                                Dados em Tempo Real
                            </span>
                            <span className="text-xs text-gray-500">
                                Atualizado agora
                            </span>
                        </div>

                        <div className="font-mono text-sm text-green-400 space-y-2">
                            {`{
  "sensor_temperatura": 24.8,
  "sensor_umidade": 63.2,
  "sensor_pressao": 1012,
  "sensor_gas": 78.5,
  "media_movel": 41.3,
  "status": "validado"
}`}
                        </div>

                        <div className="mt-6 flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-sm">
                                Sistema Operacional
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}