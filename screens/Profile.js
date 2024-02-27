// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, PermissionsAndroid, FlatList } from "react-native";
// import Contact from 'react-native-contacts';
// // import { TouchableOpacity } from "react-native-gesture-handler";

// const Profile = () => {
//     const [contacts, setContacts] = useState([]);

//     useEffect(() => { }, []);
//     const getPermission = () => {
//         PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//             title: 'Contacts',
//             message: 'This app would like to view your contacts.',
//             buttonPositive: 'Please accept bare mortal',
//         })
//             .then((res) => {
//                 if (res == 'granted') {
//                     console.log('Permission: ', res);
//                     Contact.getContactsByPhoneNumber()
//                         .then((con) => {
//                             // work with contacts
//                             console.log(con);
//                             setContacts(con);
//                         })
//                         .catch((e) => {
//                             console.log(e);
//                         });


//                 }

//             });


//     }


//     return (
//         <View style={{ flex: 1, backgroundColor: '#000' }}>
//             <FlatList
//                 data={contacts}
//                 renderItem={({ item, index }) => {
//                     return (
//                         <View style={{
//                             width: '90%',
//                             height: 70,
//                             alignSelf: 'center',
//                             borderWidth: 0.5,
//                             borderColor: '#fff',
//                             borderRadius: 10,
//                             marginTop: 10,
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                             justifyContent: 'space-between'

//                         }}>
                           
                         
//                         </View>

//                     )
//                 }} 
//                 />
//                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                 <Image
//                                     source={require('')}
//                                     style={{
//                                         width: 40,
//                                         height: 40,
//                                         marginLeft: 15
//                                     }} />
//                                     <View style={{padding:10}} >
//                                         <Text style={{color:'#fff'}}>{item.displayName}</Text>
//                                         <Text style={{color:'#fff',marginTop:4}}>
//                                             {item.phoneNumbers[0].number}
//                                         </Text>
                                    

//                                  </View>

//         </View>
//     );
// };


// export default Profile;



import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, PermissionsAndroid, FlatList, Image } from "react-native";
import Contact from 'react-native-contacts';

const Profile = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getPermission();
    }, []);

    const getPermission = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        }).then((res) => {
            if (res === 'granted') {
                console.log('Permission: ', res);
                Contact.getContactsByPhoneNumber()
                    .then((con) => {
                        console.log(con);
                        setContacts(con);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <FlatList
                data={contacts}
                renderItem={({ item }) => (
                    <View style={styles.contactItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={{ uri: item.thumbnailPath }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginLeft: 15
                                }}
                            />
                            <View style={{ padding: 10 }}>
                                <Text style={{ color: '#fff' }}>{item.displayName}</Text>
                                <Text style={{ color: '#fff', marginTop: 4 }}>
                                    {item.phoneNumbers[0].number}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.recordID}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contactItem: {
        width: '90%',
        height: 70,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
    },
});

export default Profile;
