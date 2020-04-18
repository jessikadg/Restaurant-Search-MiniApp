import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../src/API/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async () => {
       try{ 
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: "Amsterdam"
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

      
   
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={ newTerm => setTerm(newTerm) }
            onTermSubmit={ () => searchApi(term)}
            />
           {errorMessage ?  <Text>{errorMessage}</Text> : null}
            
            <Text>We have found {results.length} results. </Text>
         </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
