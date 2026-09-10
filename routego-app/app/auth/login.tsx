import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Inicio de sesión</Text>
			<Text style={styles.text}>Pantalla de prueba. El inicio de sesión estará disponible próximamente.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { alignItems: 'center', flex: 1, justifyContent: 'center', padding: 24 },
	title: { color: '#102A2A', fontSize: 24, fontWeight: '800' },
	text: { color: '#647477', fontSize: 15, marginTop: 10, textAlign: 'center' },
});
