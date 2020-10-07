import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextComponent from "./TextComponent";

interface AnswerProps {
    data: {
        title: string;
        answers: string[];
    };
}

export default function Answer(props: AnswerProps) {
    const answers = props.data.answers.map(answr => <View
        style={styles.answerItem}
    >
        <TextComponent>&#9658;</TextComponent>
        <TextComponent>{answr}</TextComponent>
    </View>)

    return (
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <TextComponent
                    stl={styles.headerText}
                >{props.data.title}</TextComponent>
            </View>
            <View>
                <View>
                    {answers}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f0eded',
    },
    header: {
        marginBottom: 3
    },
    headerText: {
        fontWeight: 'bold'
    },
    answerItem:{
      flexDirection: "row",
    }
});
