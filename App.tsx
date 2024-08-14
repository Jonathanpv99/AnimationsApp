
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Animation1 from './components/Animation1';
import Animation2 from './components/Animation2';

function App(): React.JSX.Element {
  

  return (
    <View style={styles.contenido}>
      <Animation1/>
      <Animation2/>
    </View>
  );
}

const styles = StyleSheet.create({
  contendio: {
    marginTop: 150,
  },
});

export default App;
