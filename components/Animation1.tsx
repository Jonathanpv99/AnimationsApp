
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
} from 'react-native';

function Animation1(): React.JSX.Element {
  
  const [animacion] = useState( new Animated.Value(0) );

  useEffect( () => {
    Animated.timing(
      animacion, {
        toValue: 1,  //el valor que llega
        duration: 1000,  //cantidad de tiempo en iniciar
        useNativeDriver: true,
      }
    ).start(); //iniciar la animacion
  },[]);

  return (
    <Animated.View
      style={{
        opacity: animacion
      }}
    >
      <Text style={styles.texto}>Animación 1</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animation1;
