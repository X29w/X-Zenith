import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from './tokens'

/** Public navigation options for screens that have a search bar */
export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerLargeStyle: {
		backgroundColor: colors.background,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,
}
