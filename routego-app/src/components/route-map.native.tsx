import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import type { UniversityRoute } from '../../app/(tabs)/routes';

type RouteMapProps = {
  route: UniversityRoute;
};

export default function RouteMap({ route }: RouteMapProps) {
  const latitudes = route.stops.map((stop) => stop.latitude);
  const longitudes = route.stops.map((stop) => stop.longitude);
  const minLatitude = Math.min(...latitudes);
  const maxLatitude = Math.max(...latitudes);
  const minLongitude = Math.min(...longitudes);
  const maxLongitude = Math.max(...longitudes);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: (minLatitude + maxLatitude) / 2,
        longitude: (minLongitude + maxLongitude) / 2,
        latitudeDelta: Math.max((maxLatitude - minLatitude) * 1.5, 0.02),
        longitudeDelta: Math.max((maxLongitude - minLongitude) * 1.5, 0.02),
      }}
      mapType="standard"
      loadingEnabled
      toolbarEnabled={false}
      zoomEnabled
      zoomControlEnabled
      scrollEnabled
      rotateEnabled
      pitchEnabled
      showsCompass
      showsScale
      moveOnMarkerPress={false}
    >
      <Polyline coordinates={route.stops} strokeColor={route.color} strokeWidth={5} />
      {route.stops.map((stop, index) => (
        <Marker
          key={`${route.id}-${stop.name}-${index}`}
          coordinate={stop}
          title={stop.name}
          description={stop.detail}
          pinColor={index === route.stops.length - 1 ? '#111827' : route.color}
          tracksViewChanges={false}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
});
