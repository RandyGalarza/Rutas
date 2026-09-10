import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function StudentDetailScreen() {
  // Captura el parámetro [id] desde la URL de la ruta
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID de Estudiante Detectado:</Text>
      <Text style={styles.idText}>{id}</Text>
      <Text style={styles.info}>
        Esta pantalla leyó el parámetro dinámico desde el archivo [id].tsx.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 24 },
  label: { fontSize: 14, color: '#64748B' },
  idText: { fontSize: 32, fontWeight: '900', color: '#000666', marginVertical: 8 },
  info: { fontSize: 14, color: '#334155', textAlign: 'center' }
});