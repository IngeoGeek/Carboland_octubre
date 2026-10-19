/* Configuración del plano: acopio Carboland, levantamiento con dron del 2 de octubre de 2026 */
self.PLANO = {
  version: 1,
  titulo: 'Acopio Carboland',
  subtitulo: 'Levantamiento fotogramétrico con dron · 2 de octubre de 2026 · maqueta 1:500',
  color: '#014f7d',
  hoja: { ancho_mm: 781.721, alto_mm: 848.383 },
  marco: {
    x_mm: 0, y_mm: 0,
    ancho_mm: 781.721, alto_mm: 848.383,
    E_min: 1012090.482, E_max: 1012481.343,
    N_min: 1193821.009, N_max: 1194245.201
  },
  relieve: { imagen: 'relieve.png', z_min: 152.986, z_max: 205.735, exageracion: 1 },
  // EPSG:3116 · MAGNA-SIRGAS / Colombia Bogotá zone
  proyeccion: { lat_0: 4.596200416666667, lon_0: -74.07750791666666, k: 1, x_0: 1000000, y_0: 1000000, elipsoide: 'GRS80' },
  archivos: {
    modelo: 'plano_relieve.glb',
    modelo_iphone: 'plano_relieve.usdz',
    plano2d: 'plano.jpg',
    poster: ''
  },
  etiquetas: [],
  ficha: [
    ['Escala de la maqueta', '1:500'],
    ['Exageración vertical', '1 × (alturas reales)'],
    ['Fotografías', '382 · RTK FIX en todas'],
    ['Ortofoto', 'GSD 1,86 cm'],
    ['Área levantada', '8,9 ha'],
    ['Sistema', 'MAGNA-SIRGAS · Bogotá (EPSG:3116)']
  ],
  elaboro: {
    nombre: 'Osney Izaquita',
    titulos: [
      ['Ingeniero Geólogo', 'Universidad Pedagógica y Tecnológica de Colombia'],
      ['Especialista en Aplicación de TIC para la Enseñanza', 'Universidad de Santander'],
      ['Magíster en Gestión de Cuencas Hidrográficas', 'Universidad Santo Tomás'],
      ['Estudiante de Maestría en Recursos Digitales Aplicados a la Educación', 'Universidad de Cartagena'],
      ['Piloto de drones', '']
    ]
  },
  pie: { logo: 'logo.png', texto: 'Grupo Invercoal' }
};
