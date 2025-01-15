import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import type { FC } from 'react'
import { View } from 'react-native'

interface ArtistsLayoutProps {}

const ArtistsLayout: FC<ArtistsLayoutProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: 'Artists' }} />
			</Stack>
		</View>
	)
}

export default ArtistsLayout
