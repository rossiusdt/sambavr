import { ExternalLink } from 'lucide-react';

export default function EventLocation() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Mapa do Evento</h2>

      <div className="space-y-4">
        <div className="w-full">
          <img
            src="/Screenshot_129.png"
            alt="Mapa do Evento"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="pt-6 border-t">
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Termos e políticas
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Denunciar este evento
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
