import { StackScreenWithSearchBar } from '@/constants/layout';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import type { FC } from 'react';
import { View } from 'react-native';

interface PlaylistsLayoutProps {}

const PlaylistsLayout: FC<PlaylistsLayoutProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Playlists' }}
				/>
			</Stack>
		</View>
	);
};

export default PlaylistsLayout;
