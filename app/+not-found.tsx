import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';

export default function NotFoundScreen() {
  return (

<>
        <Stack.Screen options={{ title: 'Oops!' }} />
                <LinearGradient   
           style={styles.gradient}
           colors={['#43BCF0', '#571280']}

        >
        <View style={styles.container}>
          <ThemedText type="title">This game does not exist yet.</ThemedText>
          <Link href="/" style={styles.link}>
            <ThemedText type="link">Go to home screen!</ThemedText>
          </Link>
        </View>
        </LinearGradient>
</>

    
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
