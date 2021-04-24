import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import AlumniTable from './custom_components/AlumniTable';
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
        fontWeight: "bold",
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
                        <Text style = {styles.Achievements}>Alumni Information</Text>
                        <AlumniTable/>
                    </View>
                </Page>
                <Page>
                    <View style={styles.section}>
                        <Text style = {styles.Achievements}>Expert Lectures Delivered by Faculty members</Text>
                    </View>
                </Page>
            </Document>
        )
    }
}
export default NewsLetter;