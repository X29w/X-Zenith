import { defaultStyles } from '@/styles';
import type { FC } from 'react';
import { Text, View } from 'react-native';

interface PlaylistsScreenProps {}

const PlaylistsScreen: FC<PlaylistsScreenProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Playlists</Text>
		</View>
	);
};

export default PlaylistsScreen;
