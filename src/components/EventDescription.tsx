export default function EventDescription() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição do evento</h2>

        <div className="space-y-4 text-gray-700">
          <p>
            Depois do sucesso da última edição, chegou a hora de viver novamente um dos eventos mais aguardados de <strong>Volta Redonda</strong>!
          </p>
          <p>
            No dia <strong>6 de junho</strong>, o <strong>Espaço Verde da PET</strong> será palco de uma experiência única, com <strong>atrações especiais, muita música, energia e um público incrível</strong>.
          </p>
          <p>
            Prepare-se para uma noite inesquecível, reunindo pessoas, diversão e momentos marcantes em um dos locais mais queridos da cidade. Não fique de fora!
          </p>
        </div>
      </section>

      <section className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Line Up</h3>

        <div className="space-y-4 text-gray-700">
          <ul className="space-y-2 font-semibold text-lg">
            <li>🎤 Sorriso Maroto</li>
            <li>🎤 Suel</li>
            <li>🎤 TentaSamba</li>
          </ul>
        </div>
      </section>

      <section className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Experiência Premium - Camarote</h3>

        <div className="space-y-4 text-gray-700">
          <p className="font-medium">
            Eleve sua vivência com o nosso Camarote, que oferece:
          </p>
          <ul className="space-y-2 ml-4">
            <li>✨ Vista privilegiada próximo ao palco</li>
            <li>✨ Banheiro exclusivo</li>
            <li>✨ Atendimento diferenciado</li>
            <li>✨ Open bar</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
