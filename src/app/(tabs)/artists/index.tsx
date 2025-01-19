import { defaultStyles } from '@/styles';
import type { FC } from 'react';
import { Text, View } from 'react-native';

interface ArtistsScreenProps {}

const ArtistsScreen: FC<ArtistsScreenProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Artists</Text>
		</View>
	);
};

export default ArtistsScreen;
