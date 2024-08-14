
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Animation1 from './components/Animation1';

function App(): React.JSX.Element {
  

  return (
    <View style={styles.contenido}>
      <Animation1/>
    </View>
  );
}

const styles = StyleSheet.create({
  contendio: {
    marginTop: 150,
  },
});

export default App;
