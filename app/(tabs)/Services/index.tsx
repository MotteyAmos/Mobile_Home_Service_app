import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import EvilIcons from "@expo/vector-icons/EvilIcons";
import HomeCarousel from '@/components/serviceComponents/HomeCarousel';
import MostBookService from '@/components/serviceComponents/MostBookService';
import ServiceBySection from '@/components/serviceComponents/ServiceBySection';
import { Salon_Spa_data, handyman_Mantainance_data, health_care_data, Pest_control_data } from '@/data/data';

interface servicesProps { }


// add payment 



const Services = (props: servicesProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBorder, setSearchBorder] = useState<boolean>(false);

  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,]}>
      <View style={{ height: 657 }}>
        <ScrollView style={styles.scrollStyle}
          disableScrollViewPanResponder={true}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}

        >
          <View style={[styles.textInput, { borderWidth: 1, borderColor: searchBorder ? "#BAE6FD" : "#F8FAFC" }]}>
            <EvilIcons name="search" size={30} color="#083344" />
            <TextInput
              // style={styles.input}
              onChangeText={setSearchValue}
              value={searchValue}
              placeholder="search for service....."
              enablesReturnKeyAutomatically={true}
              inputMode='search'
              onBlur={() => setSearchBorder(false)}
              onFocus={() => setSearchBorder(true)}

            />
          </View>
          <View style={
            {
              width: "100%",
              height: 150,
              borderRadius: 20,

            }
          }>
            <HomeCarousel />

          </View>

          <View style={{ marginTop: 16 }}>

            <MostBookService />
          </View>

          <View style={{}}>
            <ServiceBySection data={Salon_Spa_data} title='Salon & Spa at Home' />
            <ServiceBySection data={handyman_Mantainance_data} title='Handyman & Maintenance' />
            <ServiceBySection data={health_care_data} title='Healthcare at Home' />
            <ServiceBySection data={Pest_control_data} title='Healthcare at Home' />



          </View>
        </ScrollView>
      </View>



    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollStyle: {
    height: 90,
    paddingVertical: 10

  },
  textInput: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#F8FAFC",
    gap: 10,
    height: 36,
    borderRadius: 20,
    marginHorizontal: 16,
    alignItems: "center",
    paddingLeft: 12,
    marginBottom: 16
  }
});
