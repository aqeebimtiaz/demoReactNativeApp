import * as React from 'react';
import { Image } from 'react-native';

export default class AppIcon extends React.Component{
    render(){
        let icon = {
            uri: 'https://www.amarbay.com/logo.png'
        };
        return <Image source = {icon} />
    }
}