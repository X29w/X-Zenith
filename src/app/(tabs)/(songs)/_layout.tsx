import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import type { FC } from 'react'
import { View } from 'react-native'

interface SongsLayoutProps {}

const SongsLayout: FC<SongsLayoutProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: 'Songs' }} />
			</Stack>
		</View>
	)
}

export default SongsLayout
