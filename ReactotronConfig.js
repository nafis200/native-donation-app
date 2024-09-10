import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ host: '10.0.1.1', port: 8082 }) // Change this to your IP and port
  .useReactNative()
  .connect();
