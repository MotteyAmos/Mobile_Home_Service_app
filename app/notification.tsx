import NotificationCard from '@/components/notification/NotificationCard';
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { noficationCard_data } from '@/data/data';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface NotificationProps { }

const Notification = (props: NotificationProps) => {
    const insets = useSafeAreaInsets();
    
    return (

        <View style={[styles.container]}>
            <ScrollView style={styles.scrollStyle}
                disableScrollViewPanResponder={true}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
            >
                {
                    noficationCard_data.map((value, index) => {
                        return (
                            <View>
                                <NotificationCard data={value} key={index} />

                            </View>

                        )
                    })
                }

            </ScrollView>


        </View>


    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
            flex:1
    },
    scrollStyle: {
        height: 90,
        paddingVertical: 10

    },
});
