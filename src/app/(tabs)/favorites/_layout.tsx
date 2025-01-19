import { StackScreenWithSearchBar } from '@/constants/layout';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import type { FC } from 'react';
import { View } from 'react-native';

interface FavoritesLayoutProps {}

const FavoritesLayout: FC<FavoritesLayoutProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Favorites' }}
				/>
			</Stack>
		</View>
	);
};

export default FavoritesLayout;
