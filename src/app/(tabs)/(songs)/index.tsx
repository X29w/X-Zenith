import { defaultStyles } from '@/styles'
import type { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import TracksList from './_components/TrackList'

interface SongsScreenProps {}

const SongsScreen: FC<SongsScreenProps> = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
