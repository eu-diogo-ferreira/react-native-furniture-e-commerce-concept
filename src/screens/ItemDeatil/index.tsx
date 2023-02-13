import { StyleSheet, Text, View } from 'react-native';

const ItemDetail = () => {
  return (
    <View style={styles.container}>
      <Text>Item Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemDetail;