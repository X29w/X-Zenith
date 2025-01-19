import type { FC } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import TrackItem from './TrackItem';
import { library } from '@/mock/library';
import ItemDivider from './ItemDivider';
import { Track } from 'react-native-track-player';

interface TracksListProps extends Partial<FlatListProps<Track>> {
	tracks: Track[];
}

const TracksList: FC<TracksListProps> = ({ tracks, ...flatListProps }) => {
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{
				paddingTop: 10,
				paddingBottom: 128,
			}}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			renderItem={({ item: track }) => <TrackItem track={track} />}
			{...flatListProps}
		/>
	);
};

export default TracksList;
