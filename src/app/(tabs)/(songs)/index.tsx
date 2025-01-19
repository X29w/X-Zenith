import { defaultStyles } from '@/styles'
import { useMemo, type FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import TracksList from './_components/TrackList'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { library } from '@/mock/library'
import { trackTitleFilter } from './_utils/track-title'

interface SongsScreenProps {}

const SongsScreen: FC<SongsScreenProps> = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in Songs',
		},
	})

	const filteredSongs = useMemo(() => {
		if (!search) return library
		return library.filter(trackTitleFilter(search))
	}, [search])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{
					paddingHorizontal: screenPadding.horizontal,
				}}
			>
				<TracksList tracks={filteredSongs} scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
