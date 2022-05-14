import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(nama, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(nama, params);
  }
}
