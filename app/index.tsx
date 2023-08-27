import { View } from 'react-native';

import {Skia, Drawing, Canvas} from "@shopify/react-native-skia";

export default function TabOneScreen() {
	const size = 256;
	const r = size * 0.33;

  return (
    <View>
		<Canvas style={{ width: 160, height: 80 }}>
			<Drawing
				drawing={({ canvas, paint }) => {
				paint.setColor(Skia.Color("cyan"));
				canvas.drawCircle(r, r, r, paint);
				paint.setColor(Skia.Color("magenta"));
				canvas.drawCircle(size - r, r, r, paint);
				paint.setColor(Skia.Color("yellow"));
				canvas.drawCircle(size / 2, size - r, r, paint);
			}}
			/>
		</Canvas>
    </View>
  );
}
