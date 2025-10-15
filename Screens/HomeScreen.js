import { View, Text } from 'react-native';
import { createStyles } from 'react-native-buildstrap';

export default function HomeScreen() {
    const styles =  createStyles();

  return (
    <View style={styles.container}>
<Text style={styles.text}>Pagina Inicial</Text>


    </View>
  );
}
