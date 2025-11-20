import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Map, List } from 'lucide-react';
import { projects } from '../data/projects';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});
export function Proyectos() {
  const {
    t
  } = useTranslation();
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const groupedProjects = projects.reduce((acc, project) => {
    const key = `${project.municipality}-${project.lat}-${project.lng}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);
  const scrollToConnect = () => {
    const element = document.getElementById('connect');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
          {t('projects.title')}
        </h2>
        <p className="text-lg text-[#595959] text-center mb-12 max-w-3xl mx-auto">
          {t('projects.intro')}
        </p>
        <div className="mb-8 flex justify-center gap-4">
          <button onClick={() => setViewMode('map')} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${viewMode === 'map' ? 'bg-[#753bbd] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
            <Map size={20} />
            {t('projects.viewMap')}
          </button>
          <button onClick={() => setViewMode('list')} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${viewMode === 'list' ? 'bg-[#753bbd] text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
            <List size={20} />
            {t('projects.viewList')}
          </button>
        </div>
        {viewMode === 'map' ? <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              {t('projects.mapTitle')}
            </h3>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <MapContainer center={[9.0, -74.0]} zoom={7} style={{
            height: '100%',
            width: '100%'
          }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                {Object.entries(groupedProjects).map(([key, projectGroup]) => <Marker key={key} position={[projectGroup[0].lat, projectGroup[0].lng]}>
                    <Popup>
                      <div className="p-2">
                        <h4 className="font-bold mb-2">
                          {projectGroup[0].municipality},{' '}
                          {projectGroup[0].department}
                        </h4>
                        <ul className="text-sm space-y-1">
                          {projectGroup.map((project, idx) => <li key={idx}>{project.name}</li>)}
                        </ul>
                      </div>
                    </Popup>
                  </Marker>)}
              </MapContainer>
            </div>
          </div> : <div className="mb-12 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                {t('projects.inDevelopment')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-black mb-1">
                      {project.name}
                    </h4>
                    <p className="text-sm text-[#595959]">
                      {project.municipality}, {project.department}
                    </p>
                  </div>)}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                {t('projects.inConstruction')}
              </h3>
              <div className="bg-gray-50 p-12 rounded-lg text-center">
                <p className="text-xl text-[#595959] font-medium">
                  {t('projects.comingSoon')}
                </p>
              </div>
            </div>
          </div>}
        <div className="text-center">
          <button onClick={scrollToConnect} className="bg-[#753bbd] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#5f2f9a] transition-colors">
            {t('projects.cta')}
          </button>
        </div>
      </div>
    </section>;
}