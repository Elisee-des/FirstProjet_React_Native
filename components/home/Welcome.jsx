import React from "react";
import { Text, View } from "react-native";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
