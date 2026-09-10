import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RouteMap from '../../src/components/route-map';

export type RouteStop = {
  name: string;
  detail: string;
  latitude: number;
  longitude: number;
};

export type UniversityRoute = {
  id: string;
  name: string;
  code: string;
  direction: string;
  color: string;
  nextDeparture: string;
  duration: string;
  stops: RouteStop[];
};

export const universityRoutes: UniversityRoute[] = [
  // =====================================================
  // RUTA 1 - NORTE / CENTRO
  // =====================================================
  {
    id: 'norte-campus',
    name: 'Ruta Norte',
    code: 'R-01',
    direction: 'Portal Norte a Campus Principal',
    color: '#0F766E',
    nextDeparture: '07:40',
    duration: '28 min',

    stops: [
      {
        name: 'Portal Norte',
        detail: 'Calle 15 con Carrera 7',
        latitude: 11.5574,
        longitude: -72.9062,
      },
      {
        name: 'Monumento Francisco El Hombre',
        detail: 'Glorieta de la Carrera 7 con Calle 15',
        latitude: 11.5570,
        longitude: -72.9060,
      },
      {
        name: 'Avenida de los Estudiantes',
        detail: 'Corredor universitario',
        latitude: 11.5528,
        longitude: -72.9048,
      },
      {
        name: 'Mercado Viejo',
        detail: 'Calle 12 con Carrera 8',
        latitude: 11.5501,
        longitude: -72.8998,
      },
      {
        name: 'Plaza José Prudencio Padilla',
        detail: 'Centro histórico de Riohacha',
        latitude: 11.5449,
        longitude: -72.9070,
      },
      {
        name: 'Campus Principal',
        detail: 'Parada central universitaria',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },

  // =====================================================
  // RUTA 2 - SUR
  // =====================================================
  {
    id: 'sur-medicina',
    name: 'Ruta Sur',
    code: 'R-02',
    direction: 'Portal Sur a Campus Principal',
    color: '#D97706',
    nextDeparture: '08:05',
    duration: '34 min',

    stops: [
      {
        name: 'Portal Sur',
        detail: 'Salida hacia Maicao',
        latitude: 11.5328,
        longitude: -72.9131,
      },
      {
        name: 'Las Tunas',
        detail: 'Sector residencial Las Tunas',
        latitude: 11.5297,
        longitude: -72.9170,
      },
      {
        name: 'Aeropuerto Almirante Padilla',
        detail: 'Acceso principal al aeropuerto',
        latitude: 11.5286,
        longitude: -72.9194,
      },
      {
        name: 'Los Olivos',
        detail: 'Sector residencial Los Olivos',
        latitude: 11.5320,
        longitude: -72.9210,
      },
      {
        name: 'Calle Ancha',
        detail: 'Corredor comercial y residencial',
        latitude: 11.5380,
        longitude: -72.9138,
      },
      {
        name: 'Divina Pastora',
        detail: 'Sector Divina Pastora',
        latitude: 11.5398,
        longitude: -72.9115,
      },
      {
        name: 'Campus Principal',
        detail: 'Acceso principal universitario',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },

  // =====================================================
  // RUTA 3 - OCCIDENTE
  // =====================================================
  {
    id: 'occidente-ingenieria',
    name: 'Ruta Occidente',
    code: 'R-03',
    direction: 'Terminal Occidente a Ingeniería',
    color: '#2563EB',
    nextDeparture: '08:20',
    duration: '22 min',

    stops: [
      {
        name: 'Terminal de Transporte',
        detail: 'Terminal de Transportes de Riohacha',
        latitude: 11.5482,
        longitude: -72.9263,
      },
      {
        name: 'Avenida Francisco El Hombre',
        detail: 'Corredor principal de acceso',
        latitude: 11.5510,
        longitude: -72.9205,
      },
      {
        name: 'Residencias',
        detail: 'Sector Carrera 10',
        latitude: 11.5487,
        longitude: -72.9172,
      },
      {
        name: 'Mercado Nuevo',
        detail: 'Avenida Los Remedios',
        latitude: 11.5434,
        longitude: -72.9150,
      },
      {
        name: 'Coquivacoa',
        detail: 'Sector residencial Coquivacoa',
        latitude: 11.5420,
        longitude: -72.9110,
      },
      {
        name: 'Facultad de Ingeniería',
        detail: 'Plazoleta universitaria',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },

  // =====================================================
  // RUTA 4 - MALECÓN / CENTRO
  // =====================================================
  {
    id: 'malecon-campus',
    name: 'Ruta Malecón',
    code: 'R-04',
    direction: 'Malecón a Campus Principal',
    color: '#7C3AED',
    nextDeparture: '08:35',
    duration: '25 min',

    stops: [
      {
        name: 'Malecón',
        detail: 'Avenida La Marina - Calle 1',
        latitude: 11.5440,
        longitude: -72.9088,
      },
      {
        name: 'Muelle Turístico',
        detail: 'Avenida Primera',
        latitude: 11.5425,
        longitude: -72.9097,
      },
      {
        name: 'Catedral Nuestra Señora de los Remedios',
        detail: 'Centro histórico',
        latitude: 11.5448,
        longitude: -72.9076,
      },
      {
        name: 'Plaza José Prudencio Padilla',
        detail: 'Plaza principal de Riohacha',
        latitude: 11.5449,
        longitude: -72.9070,
      },
      {
        name: 'Centro de Riohacha',
        detail: 'Zona comercial del centro',
        latitude: 11.5475,
        longitude: -72.9060,
      },
      {
        name: 'Campus Principal',
        detail: 'Parada central universitaria',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },

  // =====================================================
  // RUTA 5 - AEROPUERTO
  // =====================================================
  {
    id: 'aeropuerto-campus',
    name: 'Ruta Aeropuerto',
    code: 'R-05',
    direction: 'Aeropuerto Almirante Padilla a Campus',
    color: '#DC2626',
    nextDeparture: '09:00',
    duration: '30 min',

    stops: [
      {
        name: 'Aeropuerto Almirante Padilla',
        detail: 'Terminal aérea de Riohacha',
        latitude: 11.5286,
        longitude: -72.9194,
      },
      {
        name: 'Las Tunas',
        detail: 'Sector residencial',
        latitude: 11.5297,
        longitude: -72.9170,
      },
      {
        name: 'Los Olivos',
        detail: 'Sector Los Olivos',
        latitude: 11.5320,
        longitude: -72.9210,
      },
      {
        name: 'Calle Ancha',
        detail: 'Zona comercial y residencial',
        latitude: 11.5380,
        longitude: -72.9138,
      },
      {
        name: 'Mercado Nuevo',
        detail: 'Avenida Los Remedios',
        latitude: 11.5434,
        longitude: -72.9150,
      },
      {
        name: 'Campus Principal',
        detail: 'Acceso universitario',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },

  // =====================================================
  // RUTA 6 - COQUIVACOA
  // =====================================================
  {
    id: 'coquivacoa-campus',
    name: 'Ruta Coquivacoa',
    code: 'R-06',
    direction: 'Coquivacoa a Campus Principal',
    color: '#0891B2',
    nextDeparture: '09:20',
    duration: '27 min',

    stops: [
      {
        name: 'Coquivacoa',
        detail: 'Sector residencial Coquivacoa',
        latitude: 11.5420,
        longitude: -72.9110,
      },
      {
        name: 'Padilla',
        detail: 'Barrio Padilla',
        latitude: 11.5455,
        longitude: -72.9128,
      },
      {
        name: 'Las Mercedes',
        detail: 'Sector Las Mercedes',
        latitude: 11.5480,
        longitude: -72.9140,
      },
      {
        name: 'Avenida Los Remedios',
        detail: 'Corredor principal',
        latitude: 11.5470,
        longitude: -72.9105,
      },
      {
        name: 'Mercado Nuevo',
        detail: 'Zona comercial',
        latitude: 11.5434,
        longitude: -72.9150,
      },
      {
        name: 'Campus Principal',
        detail: 'Parada universitaria',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },

  // =====================================================
  // RUTA 7 - TERMINAL / MERCADO
  // =====================================================
  {
    id: 'terminal-centro',
    name: 'Ruta Terminal',
    code: 'R-07',
    direction: 'Terminal de Transporte a Campus',
    color: '#16A34A',
    nextDeparture: '09:45',
    duration: '24 min',

    stops: [
      {
        name: 'Terminal de Transporte',
        detail: 'Calle 15',
        latitude: 11.5482,
        longitude: -72.9263,
      },
      {
        name: '7 de Agosto',
        detail: 'Sector residencial',
        latitude: 11.5500,
        longitude: -72.9230,
      },
      {
        name: '15 de Mayo',
        detail: 'Sector residencial',
        latitude: 11.5530,
        longitude: -72.9185,
      },
      {
        name: 'Avenida Francisco El Hombre',
        detail: 'Corredor urbano',
        latitude: 11.5510,
        longitude: -72.9205,
      },
      {
        name: 'Mercado Viejo',
        detail: 'Calle 12',
        latitude: 11.5501,
        longitude: -72.8998,
      },
      {
        name: 'Centro de Riohacha',
        detail: 'Zona comercial',
        latitude: 11.5475,
        longitude: -72.9060,
      },
      {
        name: 'Campus Principal',
        detail: 'Destino universitario',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },

  // =====================================================
  // RUTA 8 - LA LAGUNA
  // =====================================================
  {
    id: 'laguna-campus',
    name: 'Ruta Laguna',
    code: 'R-08',
    direction: 'Laguna Salada a Campus',
    color: '#9333EA',
    nextDeparture: '10:10',
    duration: '32 min',

    stops: [
      {
        name: 'Laguna Salada',
        detail: 'Sector Laguna Salada',
        latitude: 11.5560,
        longitude: -72.9130,
      },
      {
        name: 'Nuevo Horizonte',
        detail: 'Sector residencial',
        latitude: 11.5530,
        longitude: -72.9155,
      },
      {
        name: 'Nuevo Faro',
        detail: 'Sector residencial',
        latitude: 11.5500,
        longitude: -72.9125,
      },
      {
        name: 'Avenida de los Estudiantes',
        detail: 'Corredor educativo',
        latitude: 11.5528,
        longitude: -72.9048,
      },
      {
        name: 'Mercado Nuevo',
        detail: 'Avenida Los Remedios',
        latitude: 11.5434,
        longitude: -72.9150,
      },
      {
        name: 'Campus Principal',
        detail: 'Acceso universitario',
        latitude: 11.5444,
        longitude: -72.9072,
      },
    ],
  },
];

export function getUniversityRoute(id: string) {
  return universityRoutes.find((route) => route.id === id);
}

export default function RoutesScreen() {
  const [selectedRouteId, setSelectedRouteId] = useState(universityRoutes[0].id);
  const selectedRoute = useMemo(
    () => getUniversityRoute(selectedRouteId) ?? universityRoutes[0],
    [selectedRouteId],
  );
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>ROUTEGO RIOHACHA</Text>
        <Text style={styles.title}>Rutas universitarias</Text>
        <Text style={styles.subtitle}>Selecciona una ruta para ver su recorrido y paradas.</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.routeList}>
          {universityRoutes.map((route) => {
            const isSelected = route.id === selectedRoute.id;
            return (
              <Pressable
                key={route.id}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                onPress={() => setSelectedRouteId(route.id)}
                style={[styles.routeCard, isSelected && { borderColor: route.color, backgroundColor: `${route.color}12` }]}
              >
                <View style={[styles.routeDot, { backgroundColor: route.color }]} />
                <Text style={styles.routeCode}>{route.code}</Text>
                <Text style={styles.routeName}>{route.name}</Text>
                <Text style={styles.routeDuration}>{route.duration}</Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.mapCard}>
          <RouteMap route={selectedRoute} />
        </View>

        <View style={styles.summary}>
          <View style={[styles.summaryAccent, { backgroundColor: selectedRoute.color }]} />
          <View style={styles.summaryText}>
            <Text style={styles.selectedName}>{selectedRoute.name}</Text>
            <Text style={styles.direction}>{selectedRoute.direction}</Text>
            <Text style={styles.nextDeparture}>Próxima salida: {selectedRoute.nextDeparture}</Text>
          </View>
        </View>

        <Text style={styles.stopsTitle}>Paradas del recorrido</Text>
        {selectedRoute.stops.map((stop, index) => (
          <View key={`${stop.name}-${index}`} style={styles.stopRow}>
            <View style={styles.stopRail}>
              <View style={[styles.stopMarker, { backgroundColor: selectedRoute.color }]} />
              {index < selectedRoute.stops.length - 1 && <View style={[styles.stopLine, { backgroundColor: `${selectedRoute.color}55` }]} />}
            </View>
            <View style={styles.stopContent}>
              <Text style={styles.stopName}>{stop.name}</Text>
              <Text style={styles.stopDetail}>{stop.detail}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F7F5' },
  content: { padding: 20, paddingBottom: 110 },
  eyebrow: { color: '#0F766E', fontSize: 12, fontWeight: '800', letterSpacing: 1.2 },
  title: { color: '#102A2A', fontSize: 28, fontWeight: '800', marginTop: 6 },
  subtitle: { color: '#647477', fontSize: 14, lineHeight: 20, marginTop: 6 },
  routeList: { gap: 10, paddingVertical: 18 },
  routeCard: { backgroundColor: '#FFFFFF', borderColor: '#E1E9E5', borderRadius: 12, borderWidth: 1, minWidth: 126, padding: 12 },
  routeDot: { borderRadius: 6, height: 12, marginBottom: 8, width: 12 },
  routeCode: { color: '#81908E', fontSize: 11, fontWeight: '800' },
  routeName: { color: '#203536', fontSize: 15, fontWeight: '800', marginTop: 3 },
  routeDuration: { color: '#6D7B7B', fontSize: 12, marginTop: 4 },
  mapCard: { backgroundColor: '#DCE9E5', borderRadius: 16, height: 300, overflow: 'hidden' },
  map: { flex: 1 },
  summary: { alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 14, flexDirection: 'row', marginTop: 14, padding: 14 },
  summaryAccent: { borderRadius: 4, height: 46, marginRight: 12, width: 7 },
  summaryText: { flex: 1 },
  selectedName: { color: '#162E2E', fontSize: 18, fontWeight: '800' },
  direction: { color: '#657675', fontSize: 13, marginTop: 3 },
  nextDeparture: { color: '#0F766E', fontSize: 13, fontWeight: '700', marginTop: 8 },
  stopsTitle: { color: '#203536', fontSize: 18, fontWeight: '800', marginBottom: 8, marginTop: 24 },
  stopRow: { flexDirection: 'row', minHeight: 62 },
  stopRail: { alignItems: 'center', marginRight: 12, width: 18 },
  stopMarker: { borderColor: '#FFFFFF', borderRadius: 8, borderWidth: 3, height: 16, width: 16 },
  stopLine: { flex: 1, width: 2 },
  stopContent: { flex: 1, paddingBottom: 14 },
  stopName: { color: '#203536', fontSize: 15, fontWeight: '700' },
  stopDetail: { color: '#71807F', fontSize: 12, marginTop: 3 },
});