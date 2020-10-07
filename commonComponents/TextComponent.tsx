import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface TextProps {
  children: string;
  stl?: any,
}

export default function TextComponent(props: TextProps) {
    const customStyles = props.stl ? props.stl : {};

    return (
       <Text
           style={[styles.container, customStyles]}
       >{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        color: '#f0eded',
        fontSize: 14.5,
    },
});
