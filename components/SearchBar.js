import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit } ) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput 
            style={styles.inputStyle} 
            placeholder="Search" 
            value={term}
            autoCorrect={false}
            onChangeText={ onTermChange }
            onEndEditing={ onTermSubmit }
            />
            <MaterialIcons name="search" size ={40}/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE' ,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    inputStyle: {
        flex: 1,
        marginHorizontal: 15,
    },
        iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});

export default SearchBar;
