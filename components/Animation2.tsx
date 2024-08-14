import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Animated,
  View,
} from 'react-native';

function Animation2(): React.JSX.Element {
  
  const [animacion] = useState(new Animated.Value(1)); // Valor inicial de escala

  useEffect(() => {
    Animated.timing(
      animacion, {
        toValue: 8,  // Valor final de escala (450px / 100px = 4.5)
        duration: 1000,  // Duración de la animación
        useNativeDriver: true,  // Usar el controlador nativo
      }
    ).start(); // Iniciar la animación
  }, []);

  return (
    <Animated.View
      style={[
        styles.caja,
        {
          transform: [
            { scaleX: animacion },  // Animar la propiedad scaleX
            { scaleY: animacion },  // Animar la propiedad scaleY
          ],
        }
      ]}
    >
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,  // Valor inicial que será reemplazado por la animación
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation2;
