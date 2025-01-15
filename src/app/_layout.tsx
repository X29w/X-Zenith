import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import type { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootLayout: FC<unknown> = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => (
	<Stack>
		<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
	</Stack>
)

export default RootLayout
