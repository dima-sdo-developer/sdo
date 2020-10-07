import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, TextInput} from 'react-native';
import answersData from './data/answers.json';
import Answer from "./commonComponents/Answer";

export default function App() {
  let answersComponents = [];
  const [searchString, setSearchString] =  useState<string>('');

  if (searchString.trim()) {
    answersComponents = answersData.answers
        .filter(answr =>
          answr.title.toLowerCase().includes(searchString.toLowerCase()) ||
          answr.answers.some(ans => ans.toLowerCase().includes(searchString.toLowerCase()))
        )
        .map(answr => <Answer  key={answr.title} data={answr}/>)
  } else {
    answersComponents = answersData.answers.map(answr => <Answer  key={answr.title} data={answr}/>)
  }

  return (
    <View style={styles.container}>
      <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchString(text)}
          value={searchString}
      />
      <ScrollView>
        {answersComponents}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 100,
    paddingLeft: 20
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 7,
    padding: 10,
    width: '100%',
    marginTop: 30,
    marginBottom: 20,
    color: '#f0eded',
  }
});
