import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './Main/Main';
import CaptchaScreen from './CaptchaScreen';

const Routes = createAppContainer(
  createSwitchNavigator({
      Main,
      CaptchaScreen
  })

);

export default Routes;