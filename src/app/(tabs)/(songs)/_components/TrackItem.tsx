import ConditionalRender from '@/components/ConditionRender'
import { unknownTrackImageUri } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import type { FC } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

interface TrackItemProps {
	title: string
	image?: string
	artist?: string
}

const TrackItem: FC<TrackItemProps> = ({ title, image, artist }) => {
	const isActive = false
	return (
		<TouchableHighlight>
			<View style={styles.trackItemContainer}>
				<View>
					<Image
						source={{
							uri: image ?? unknownTrackImageUri,
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isActive ? 0.6 : 1,
						}}
					/>
				</View>

				<View style={{ width: '100%' }}>
					<Text
						style={{ ...styles.trackTitleText, color: isActive ? colors.primary : colors.text }}
					>
						{title}
					</Text>

					<ConditionalRender condition={!!artist}>
						<Text numberOfLines={1} style={{ ...styles.trackArtistText }}>
							{artist}
						</Text>
					</ConditionalRender>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})

export default TrackItem