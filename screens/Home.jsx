import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles/home';
import {Ionicons, Fontisto} from "@expo/vector-icons"
import Welcome from '../components/home/Welcome';

const Home = () => {
    return (
        <SafeAreaView>
          <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
              <Ionicons name='location-outline' size={24}/>
              <Text style={styles.location}>Burkina Faso</Text>

              <View style={{ alignItems:"flex-end" }}>
                <View style={styles.cartCount}>
                  <Text style={styles.cartNumber}>8</Text>
                </View>
                <TouchableOpacity>
                  <Fontisto name="shopping-bag" size={24} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView>
            <Welcome />
          </ScrollView>
        </SafeAreaView>
    );
};

export default Home;