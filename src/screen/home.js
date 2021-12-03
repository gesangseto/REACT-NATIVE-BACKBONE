import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, dimension} from '../constants';
import {avatar_1} from '../assets';

const home = ({route, navigation}) => {
  const [profile, setProfile] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <ScrollView
        style={{
          flexGrow: 1,
          width: dimension.width,
          height: dimension.height * 1.5,
        }}>
        <View style={{paddingTop: 15}} />
        <View style={styles.frame}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageAvatar} source={avatar_1} />
          </View>
          {/* <View style={styles.lineText}>
            <Text style={styles.labelText}>Email</Text>
            <Text style={styles.fieldText}>{profile.email}</Text>
          </View> */}
          <View style={styles.lineText}>
            <Text style={styles.labelText}>User</Text>
            <Text style={styles.fieldText}>{profile.username}</Text>
          </View>
          <View style={styles.lineText}>
            <Text style={styles.labelText}>Name</Text>
            <Text style={styles.fieldText}>{profile.full_name}</Text>
          </View>
          <View style={styles.lineText}>
            <Text style={styles.labelText}>Department</Text>
            <Text style={styles.fieldText}>
              {profile.department_description}
            </Text>
          </View>
          <View style={styles.lineText}>
            <Text style={styles.labelText}>Section</Text>
            <Text style={styles.fieldText}>{profile.section_description}</Text>
          </View>
        </View>

        <View style={styles.frame}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '700'}}>
            App Configuration
          </Text>
          <View style={styles.lineConfig}>
            <Text style={styles.labelText}>Alert Volume</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.dark_grey,
  },
  frame: {
    marginBottom: 20,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  lineText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.bg.light_grey,
    borderBottomWidth: 1,
    paddingBottom: 2,
    paddingTop: 10,
  },
  labelText: {
    alignSelf: 'flex-start',
    fontWeight: '700',
  },
  fieldText: {
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  fieldTextEPC: {
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageAvatar: {
    borderRadius: 50,
    width: 75,
    height: 75,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  lineConfig: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 2,
    paddingTop: 10,
  },
});
