import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from "../../../constants";

import { getStatusBarHeight } from "react-native-status-bar-height";

const Home = () => {

  function renderHeader() {
    return (
      <View style={{ marginTop: getStatusBarHeight(), paddingHorizontal: SIZES.padding }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {}}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, alignItems: "flex-end" }}
            onPress={() => {}}
          >
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  }
});

export default Home;