// src/components/AnimatedStats.jsx
import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 700, label: 'Llamadas/chats al día' },
  { value: 256263, label: 'Peticiones de Ayuda en 2023' },
  { value: 18893, label: 'Casos atendidos en 2023' },
  { value: 2220, label: 'Niños/as acogidos en nuestros Hogares ANAR desde 1970' },
  { value: 197572, label: 'Alumnos, profesionales y familias formados en Colegios e Institutos desde 2003' },
  { value: 6.5, suffix: ' mill', label: 'Peticiones de Ayuda atendidas en el Teléfono y Chat ANAR desde 1994' },
];

const AnimatedStats = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix || ''} />
            </h2>
            <p className="mt-2 text-base sm:text-lg text-red-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
