import type { FC } from 'react'
import { FlatList, FlatListProps } from 'react-native'
import TrackItem from './TrackItem'
import { library } from '@/mock/library'

interface TracksListProps extends Partial<FlatListProps<unknown>> {}

const TracksList: FC<TracksListProps> = ({ ...flatListProps }) => {
	return (
		<FlatList
			data={library}
			renderItem={({ item }) => (
				<TrackItem title={item.title} artist={item.artist} image={item.artwork} />
			)}
			{...flatListProps}
		/>
	)
}

export default TracksList
