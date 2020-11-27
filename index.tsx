/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import SignInScreen from './src/screens/SignInScreen';
import { SCREEN_IDS } from './src/screens/constant';

Navigation.registerComponent(SCREEN_IDS.SignInScreen, () => SignInScreen);
Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREEN_IDS.SignInScreen
            }
          }
        ]
      }
    }
  });
});
