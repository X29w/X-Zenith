import type { FC } from 'react'
import { FlatList, FlatListProps } from 'react-native'
import TrackItem from './TrackItem'
import { library } from '@/mock/library'
import ItemDivider from './ItemDivider'

interface TracksListProps extends Partial<FlatListProps<unknown>> {
	tracks: any[]
}

const TracksList: FC<TracksListProps> = ({ tracks, ...flatListProps }) => {
	console.log("tracks",tracks)
	
	
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{
				paddingTop: 10,
				paddingBottom: 128,
			}}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			renderItem={({ item }) => (
				<TrackItem title={item.title} artist={item.artist} image={item.artwork} />
			)}
			{...flatListProps}
		/>
	)
}

export default TracksList
