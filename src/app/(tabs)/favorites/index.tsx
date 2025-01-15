import { defaultStyles } from '@/styles'
import type { FC } from 'react'
import { Text, View } from 'react-native'

interface FavoritesScreenProps {}

const FavoritesScreen: FC<FavoritesScreenProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Favorites</Text>
		</View>
	)
}

export default FavoritesScreen
