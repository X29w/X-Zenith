import { defaultStyles } from '@/styles'
import type { FC } from 'react'
import { Text, View } from 'react-native'

interface SongsScreenProps {}

const SongsScreen: FC<SongsScreenProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={defaultStyles.text}>Songs</Text>
		</View>
	)
}

export default SongsScreen
