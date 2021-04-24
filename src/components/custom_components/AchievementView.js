import React, { Component } from 'react'
import ApiConnector from '../connectors/ApiConnector';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

class AchievementView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: []
        };
    }

    getComponents() {
        let views = [];
        this.state.achievements.forEach(achievement => {
            views.push(
                <View style={{flexDirection: "column", padding: "10px"}}>
                    <View style={{flexDirection: "row", paddingRight: "30px", marginRight: "30px", marginLeft: "10px"}}>
                        <Image src={{uri: achievement.image, method: "GET", headers: {}, body: ''}} style={{width: "100px", height: "100px"}}/>
                        <Text style={{padding: "10px"}}>{achievement.body}</Text>
                    </View>
                </View>
            );
        });
        return views;
    }
    componentWillMount() {
        this.setState((prevState, props) => {
            prevState["achievements"] = new ApiConnector().fetchData("/api/achievements");
            return prevState;
        });
    }
    
    render() {
        return (
            <div>
                {this.getComponents()}
            </div>
        )
    }
}

export default AchievementView;