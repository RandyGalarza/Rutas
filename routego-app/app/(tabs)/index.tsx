import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <Ionicons name="navigate" size={20} color="#FFFFFF" />
            </View>
            <View>
              <Text style={styles.brand}>RouteGo</Text>
              <Text style={styles.location}>RIOHACHA · LA GUAJIRA</Text>
            </View>
          </View>
          <View style={styles.liveBadge}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>En servicio</Text>
          </View>
        </View>

        <View style={styles.welcomeBlock}>
          <Text style={styles.greeting}>Buenos días</Text>
          <Text style={styles.title}>¿A dónde vas hoy?</Text>
          <Text style={styles.subtitle}>Encuentra tu ruta y llega a tiempo a tu destino.</Text>
        </View>

        <View style={styles.serviceCard}>
          <View style={styles.serviceTop}>
            <View>
              <Text style={styles.cardEyebrow}>PRÓXIMA SALIDA</Text>
              <Text style={styles.routeTitle}>Ruta Norte</Text>
              <Text style={styles.routeDescription}>Portal Norte → Campus Principal</Text>
            </View>
            <View style={styles.busIcon}>
              <Ionicons name="bus" size={23} color="#0F766E" />
            </View>
          </View>
          <View style={styles.serviceDivider} />
          <View style={styles.serviceBottom}>
            <View style={styles.timeBlock}>
              <Text style={styles.departure}>07:40</Text>
              <Text style={styles.muted}>Próxima salida</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={styles.statValue}>28 min</Text>
              <Text style={styles.muted}>Duración estimada</Text>
            </View>
            <Pressable onPress={() => router.push('/routes')} style={styles.arrowButton} accessibilityLabel="Ver ruta Norte">
              <Ionicons name="arrow-forward" size={19} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Accesos rápidos</Text>
          <Text style={styles.sectionHint}>2 opciones</Text>
        </View>
        <View style={styles.actionsRow}>
          <Link href="/modal" asChild>
            <Pressable style={({ pressed }) => [styles.actionCard, pressed && styles.pressed]}>
              <View style={[styles.actionIcon, styles.orangeIcon]}>
                <Ionicons name="pulse" size={21} color="#C45D09" />
              </View>
              <Text style={styles.actionTitle}>Estado de shuttles</Text>
              <Text style={styles.actionDescription}>Consulta el servicio activo</Text>
              <Ionicons name="arrow-forward" size={17} color="#94A3A0" style={styles.actionArrow} />
            </Pressable>
          </Link>
          <Pressable onPress={() => router.push('/student/ST-202688')} style={({ pressed }) => [styles.actionCard, pressed && styles.pressed]}>
            <View style={[styles.actionIcon, styles.blueIcon]}>
              <Ionicons name="person" size={21} color="#1769A8" />
            </View>
            <Text style={styles.actionTitle}>Mi perfil</Text>
            <Text style={styles.actionDescription}>Estudiante ST-202688</Text>
            <Ionicons name="arrow-forward" size={17} color="#94A3A0" style={styles.actionArrow} />
          </Pressable>
        </View>

        <Pressable onPress={() => router.push('/routes')} style={({ pressed }) => [styles.mapBanner, pressed && styles.pressed]}>
          <View style={styles.mapPattern} />
          <View style={styles.mapCopy}>
            <View style={styles.mapLabelRow}>
              <Ionicons name="map-outline" size={15} color="#D6F5EA" />
              <Text style={styles.mapLabel}>MAPA EN VIVO</Text>
            </View>
            <Text style={styles.mapTitle}>Explora todas las rutas</Text>
            <Text style={styles.mapDescription}>Mira paradas, recorridos y tiempos estimados.</Text>
          </View>
          <View style={styles.mapArrow}>
            <Ionicons name="chevron-forward" size={22} color="#0F766E" />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#F3F7F5', flex: 1 },
  content: { padding: 20, paddingBottom: 112 },
  header: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  brandRow: { alignItems: 'center', flexDirection: 'row' },
  brandMark: { alignItems: 'center', backgroundColor: '#0F766E', borderRadius: 12, height: 42, justifyContent: 'center', marginRight: 10, width: 42 },
  brand: { color: '#153332', fontSize: 19, fontWeight: '800' },
  location: { color: '#78908A', fontSize: 9, fontWeight: '800', letterSpacing: 0.8, marginTop: 2 },
  liveBadge: { alignItems: 'center', backgroundColor: '#E0F4EA', borderRadius: 16, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 7 },
  liveDot: { backgroundColor: '#18A968', borderRadius: 4, height: 8, marginRight: 6, width: 8 },
  liveText: { color: '#15794F', fontSize: 11, fontWeight: '800' },
  welcomeBlock: { marginTop: 36 },
  greeting: { color: '#0F766E', fontSize: 14, fontWeight: '700' },
  title: { color: '#153332', fontSize: 29, fontWeight: '800', marginTop: 5 },
  subtitle: { color: '#72837F', fontSize: 14, lineHeight: 20, marginTop: 7, maxWidth: 290 },
  serviceCard: { backgroundColor: '#0F766E', borderRadius: 20, elevation: 5, marginTop: 23, padding: 18, shadowColor: '#0F766E', shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.2, shadowRadius: 16 },
  serviceTop: { flexDirection: 'row', justifyContent: 'space-between' },
  cardEyebrow: { color: '#A8E3D1', fontSize: 10, fontWeight: '800', letterSpacing: 1.1 },
  routeTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '800', marginTop: 5 },
  routeDescription: { color: '#D0F0E7', fontSize: 12, marginTop: 4 },
  busIcon: { alignItems: 'center', backgroundColor: '#DDF4EB', borderRadius: 14, height: 46, justifyContent: 'center', width: 46 },
  serviceDivider: { backgroundColor: '#3B9588', height: 1, marginVertical: 17 },
  serviceBottom: { alignItems: 'center', flexDirection: 'row' },
  timeBlock: { marginRight: 27 },
  departure: { color: '#FFFFFF', fontSize: 25, fontWeight: '800' },
  muted: { color: '#B7E2D6', fontSize: 11, marginTop: 3 },
  statBlock: { flex: 1 },
  statValue: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  arrowButton: { alignItems: 'center', backgroundColor: '#075C56', borderRadius: 19, height: 38, justifyContent: 'center', width: 38 },
  sectionHeading: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, marginTop: 29 },
  sectionTitle: { color: '#24403D', fontSize: 17, fontWeight: '800' },
  sectionHint: { color: '#8A9995', fontSize: 12 },
  actionsRow: { flexDirection: 'row', gap: 11 },
  actionCard: { backgroundColor: '#FFFFFF', borderColor: '#E3ECE8', borderRadius: 16, borderWidth: 1, flex: 1, minHeight: 157, padding: 14 },
  pressed: { opacity: 0.78, transform: [{ scale: 0.98 }] },
  actionIcon: { alignItems: 'center', borderRadius: 11, height: 38, justifyContent: 'center', width: 38 },
  orangeIcon: { backgroundColor: '#FFF0DB' },
  blueIcon: { backgroundColor: '#E0F0FA' },
  actionTitle: { color: '#24403D', fontSize: 14, fontWeight: '800', marginTop: 17 },
  actionDescription: { color: '#82908D', fontSize: 11, lineHeight: 16, marginTop: 5 },
  actionArrow: { bottom: 14, position: 'absolute', right: 14 },
  mapBanner: { backgroundColor: '#164B47', borderRadius: 18, flexDirection: 'row', marginTop: 22, minHeight: 111, overflow: 'hidden', padding: 17 },
  mapPattern: { borderColor: '#2C7068', borderRadius: 80, borderWidth: 18, height: 160, opacity: 0.45, position: 'absolute', right: -43, top: -26, width: 160 },
  mapCopy: { flex: 1 },
  mapLabelRow: { alignItems: 'center', flexDirection: 'row', gap: 6 },
  mapLabel: { color: '#B4EADA', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  mapTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '800', marginTop: 10 },
  mapDescription: { color: '#C0DFD7', fontSize: 12, lineHeight: 17, marginTop: 4, maxWidth: 250 },
  mapArrow: { alignItems: 'center', alignSelf: 'center', backgroundColor: '#DDF4EB', borderRadius: 18, height: 36, justifyContent: 'center', width: 36 },
});
