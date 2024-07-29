import React, { Component, useState, useReducer } from 'react'
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { router } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import type { AutocompleteDropdownItem } from "react-native-autocomplete-dropdown"
import Checkbox from 'expo-checkbox';
import OutLineButtonWithArrow from '@/components/buttons/OutlineButtonWithArrow';


export default function ProfessionalInfo() {
    const [yearsOfExperience, setYearsOfExperience] = useState<AutocompleteDropdownItem | null>(null);
    //days
    const [mondays, setMondays] = useState<boolean>(false);
    const [tuesdays, setTuesdays] = useState<boolean>(false);
    const [wednessdays, setWednessdays] = useState<boolean>(false);
    const [thursdays, setThursdays] = useState<boolean>(false);
    const [fridays, setFridays] = useState<boolean>(false);
    const [saturdays, setSaturdays] = useState<boolean>(false);
    const [sundays, setSundays] = useState<boolean>(false);

    //pricing
    const [priceHourly, setPriceHourly] = useState<boolean>(false);
    const [priceFixed, setPriceFixed] = useState<boolean>(false);

    const [minimumCharge, setMinimumCharge] = useState<string>("");
    const [howICharge, setHowICharge] = useState<string>("");

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : "height"} keyboardVerticalOffset={0} >
            <ScrollView style={{ flex: 1, backgroundColor:"white"}}>
                <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 16, gap: 16 }}>
                    <View style={{ gap: 8 }}>
                        <Text style={{}}>Skills</Text>
                        <Text>we recommend adding your top 5 used skills, they will also appear in your skills section</Text>
                        <TouchableOpacity
                            style={
                                {
                                    backgroundColor: "#083344",
                                    width: 100,
                                    paddingVertical: 5,
                                    flex: 0,
                                    height: 36,
                                    flexDirection: "row",
                                    // justifyContent:"space-between",
                                    alignItems: "center",
                                    borderRadius: 20,
                                    gap: 5,
                                    justifyContent: "center",
                                    paddingHorizontal: 8
                                }
                            }
                            activeOpacity={0.8}

                            onPress={() => { [router.push("/service/Message")] }}
                        >
                            <AntDesign name="plus" size={20} color="white" />

                            <Text style={{ color: "white" }}>Add Skill</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text>
                            Years of Experience
                        </Text>
                        <AutocompleteDropdown
                            inputContainerStyle={{
                                backgroundColor: "#F8FAFC",

                            }}
                            textInputProps={{
                                placeholder: 'Select years of experience',
                                autoCorrect: false,
                                autoCapitalize: 'none',
                                style: {

                                    //   backgroundColor: '#383b42',
                                    color: 'black',
                                    paddingLeft: 18,
                                },
                            }}
                            containerStyle={{
                                // backgroundColor:"#BAE6FD",
                                borderWidth: 1,
                                borderRadius: 5
                            }}
                            suggestionsListContainerStyle={{
                                backgroundColor: "white"

                            }}
                            suggestionsListTextStyle={{
                                color: "black"

                            }}

                            showClear={false}
                            clearOnFocus={false}
                            closeOnBlur={true}
                            closeOnSubmit={false}
                            ignoreAccents={false}
                            initialValue={{ id: '2' }} // or just '2'
                            onSelectItem={setYearsOfExperience}
                            dataSet={[
                                { id: '1', title: 'less than a year' },
                                { id: '2', title: '1-2 years' },
                                { id: '3', title: '3-5 years' },
                                { id: "4", title: "5-7 years" },
                                { id: "5", title: "8-10 years" },
                                { id: "6", title: "above 10 years" }
                            ]}
                        />

                    </View>


                    <View style={{ gap: 8 }}>
                        <Text>Certificate and Licences</Text>
                        <TouchableOpacity
                            style={
                                {
                                    backgroundColor: "#083344",
                                    width: 155,
                                    height: 36,
                                    paddingVertical: 5,
                                    flex: 0,
                                    flexDirection: "row",
                                    // justifyContent:"space-between",
                                    alignItems: "center",
                                    borderRadius: 20,
                                    gap: 5,
                                    justifyContent: "center",
                                    paddingHorizontal: 8
                                }
                            }
                            activeOpacity={0.8}

                            onPress={() => { [router.push("/service/Message")] }}
                        >
                            <AntDesign name="plus" size={20} color="white" />

                            <Text style={{ color: "white" }}>Upload certificate</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{gap:8}}>
                        <Text>What days are you available?</Text>

                        <View style={{gap:8}}>
                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={mondays}
                                onValueChange={setMondays}
                                color={mondays ? '#083344' : "#083344"}
                            />
                            <Text > Mondays</Text>
                        </View>

                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={tuesdays}
                                onValueChange={setTuesdays}
                                color={tuesdays ? '#083344' : "#083344"}
                            />
                            <Text >Tuesdays </Text>
                        </View>

                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={wednessdays}
                                onValueChange={setWednessdays}
                                color={wednessdays ? '#083344' : "#083344"}
                            />
                            <Text > Wednessdays</Text>
                        </View>

                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={thursdays}
                                onValueChange={setThursdays}
                                color={thursdays ? '#083344' : "#083344"}
                            />
                            <Text > Thursdays</Text>
                        </View>

                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={fridays}
                                onValueChange={setFridays}
                                color={fridays ? '#083344' : "#083344"}
                            />
                            <Text > Fridays</Text>
                        </View>

                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={saturdays}
                                onValueChange={setSaturdays}
                                color={saturdays ? '#083344' : "#083344"}
                            />
                            <Text > Saturdays</Text>
                        </View>

                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={sundays}
                                onValueChange={setSundays}
                                color={sundays ? '#083344' : "#083344"}
                            />
                            <Text > Sundays</Text>
                        </View>
                        </View>
                    </View>

                    <View style={{gap:8}}>
                        <Text>How do you charge</Text>
                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={priceHourly}
                                onValueChange={setPriceHourly}
                                color={priceHourly ? '#083344' : "#083344"}
                            />
                            <Text > Hourly Rate</Text>
                        </View>

                        <View style={{ flex: 0, flexDirection: "row" }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={priceFixed}
                                onValueChange={setPriceFixed}
                                color={priceFixed ? '#083344' : "#083344"}
                            />
                            <Text > Fixed Rate</Text>
                        </View>
                    </View>

                    <View>
                        <View style={{ }}>
                            <Text>Minimum Fee Charge</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 8,
                                marginTop: 10
                            }}>
                                {/* <Fontisto name="email" size={22} color="#083344" /> */}
                                <TextInput
                                    style={{
                                        flex: 1,

                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",

                                    }}
                                    onChangeText={setMinimumCharge}
                                    value={minimumCharge}
                                    placeholder="Enter minimum fee charge eg. GHC 100" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                        <View style={{ marginTop:8 }}>
                            <Text>How do you charge</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 8,
                                marginTop: 10
                            }}>
                                {/* <Fontisto name="email" size={22} color="#083344" /> */}
                                <TextInput

                                    style={{
                                        flex: 1,
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",

                                        // backgroundColor:"red"
                                    }}
                                    onChangeText={setHowICharge}
                                    value={howICharge}
                                    multiline={true}
                                    numberOfLines={5}
                                    placeholder="if possible give description on how you charge clients" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                    </View>


                </View >
                <View style={
                    {
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        marginVertical: 16,
                        paddingRight: 16
                    }
                }>
                    <OutLineButtonWithArrow title='Next' href='/(aux)/BecomeWorker/AddtionalPersonalInfo' />
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    )

}
