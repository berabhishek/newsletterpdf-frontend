import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import SampleTable from './custom_components/SampleTable';
import AchievementView from './custom_components/AchievementView';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fafafa'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }, Achievements: {
        color: "red",
        fontSize: "30px",
        fontWeight: "bold"
  }
});
class NewsLetter extends Component {
    render() {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style = {styles.Achievements}>Faculty & Achievements:</Text>
                        <AchievementView />
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                        <SampleTable/>
                    </View>
                </Page>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section #Image</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
        )
    }
}
export default NewsLetter;