import { ReactNode, type FC } from 'react'

interface ConditionalRenderProps {
	/** the condition to render */
	condition: boolean

	/** rendered when condition is true  */
	children: ReactNode

	/** rendered when condition is false */
	fallback?: ReactNode
}

const ConditionalRender: FC<ConditionalRenderProps> = ({ condition = true, children, fallback }) =>
	condition ? children : fallback

export default ConditionalRender
