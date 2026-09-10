import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Página no encontrada</Text>
			<Link href="/" style={styles.link}>Volver al inicio</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { alignItems: 'center', flex: 1, justifyContent: 'center', padding: 24 },
	title: { color: '#102A2A', fontSize: 24, fontWeight: '800' },
	link: { color: '#0F766E', fontSize: 15, fontWeight: '700', marginTop: 16 },
});
