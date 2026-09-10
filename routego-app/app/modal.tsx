import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Estado de shuttles</Text>
			<Text style={styles.text}>Vista de prueba: las rutas están disponibles desde la pestaña Rutas.</Text>
			<Pressable onPress={() => router.back()} style={styles.button}>
				<Text style={styles.buttonText}>Cerrar</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { alignItems: 'center', flex: 1, justifyContent: 'center', padding: 24 },
	title: { color: '#102A2A', fontSize: 24, fontWeight: '800' },
	text: { color: '#647477', fontSize: 15, marginTop: 10, textAlign: 'center' },
	button: { backgroundColor: '#0F766E', borderRadius: 10, marginTop: 20, paddingHorizontal: 24, paddingVertical: 12 },
	buttonText: { color: '#FFFFFF', fontWeight: '700' },
});
