import { utilsStyles } from '@/styles';
import type { FC } from 'react';
import { View } from 'react-native';

interface ItemDividerProps {}

const ItemDivider: FC<ItemDividerProps> = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginHorizontal: 9, marginLeft: 60 }} />
);

export default ItemDivider;
