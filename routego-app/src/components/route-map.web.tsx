import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { StyleSheet, View } from 'react-native';
import type { UniversityRoute } from '../../app/(tabs)/routes';

type RouteMapProps = {
  route: UniversityRoute;
};

export default function RouteMap({ route }: RouteMapProps) {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    let map: { remove: () => void } | undefined;
    let cancelled = false;

    import('leaflet').then((leaflet) => {
      if (cancelled || !mapRef.current) return;

      const coordinates = route.stops.map((stop) => [stop.latitude, stop.longitude] as [number, number]);
      const leafletMap = leaflet.map(mapRef.current, { zoomControl: true, attributionControl: true });
      map = leafletMap;
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(leafletMap);
      leaflet.polyline(coordinates, { color: route.color, weight: 5, opacity: 0.9 }).addTo(leafletMap);
      route.stops.forEach((stop, index) => {
        leaflet.circleMarker([stop.latitude, stop.longitude], {
          color: '#FFFFFF',
          fillColor: index === route.stops.length - 1 ? '#111827' : route.color,
          fillOpacity: 1,
          radius: 8,
          weight: 3,
        })
          .addTo(leafletMap)
          .bindPopup(`<strong>${index + 1}. ${stop.name}</strong><br />${stop.detail}`);
      });
      leafletMap.fitBounds(coordinates, { padding: [24, 24] });
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [route]);

  return <View ref={mapRef} style={styles.map} accessibilityLabel={`Mapa de Riohacha con la ${route.name}`} />;
}

const styles = StyleSheet.create({
  map: { flex: 1, minHeight: 300 },
});
