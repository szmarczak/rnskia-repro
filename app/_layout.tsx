import { useEffect } from 'react';
import { View } from 'react-native';
import { Slot, useRouter } from 'expo-router';

const AppView = () => {
	const router = useRouter();

	useEffect(() => {
		setInterval(() => {
			router.replace('/');
		}, 10);
	}, []);

	return (
		<>
			<View style={{ flexGrow: 1 }}>
				<Slot />
			</View>
		</>
	);
};

export default function App() {
	return (
		<AppView />
	);
};
