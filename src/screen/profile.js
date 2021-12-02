import { Slider } from "@miblanchard/react-native-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  avatar_1,
  avatar_2,
  avatar_3,
  avatar_4,
  avatar_5,
  avatar_6,
  avatar_7,
  avatar_8,
} from "../assets";
import Header from "../components/Header";
import ModalAlert from "../components/ModalAlert";
import { colors, dimension } from "../constants";
import { logoutUser } from "../resource";

const profile = ({ route, navigation }) => {
  const [profile, setProfile] = useState({});
  const [alertLogout, setAlertLogout] = useState(false);
  const [config, setConfig] = useState({
    volume_alert: 0,
  });
  const [avatar, setAvatar] = useState("");

  const confirmLogout = async () => {
    setAlertLogout(false);
    let exec = await logoutUser();
    if (exec && !exec.error) {
      await AsyncStorage.removeItem("profile");
      navigation.replace("login");
    }
  };

  useEffect(() => {
    if (Object.keys(profile).length == 0) {
      (async function() {
        setProfile(JSON.parse(await AsyncStorage.getItem("profile")));
      })();
    }

    if (Object.keys(profile).length > 0) {
      if (!avatar) {
        var temp_avatar = `${profile.mst_avatar_id}.png`;
        if (temp_avatar == "1.png") {
          setAvatar(avatar_1);
        } else if (temp_avatar == "2.png") {
          setAvatar(avatar_2);
        } else if (temp_avatar == "3.png") {
          setAvatar(avatar_3);
        } else if (temp_avatar == "4.png") {
          setAvatar(avatar_4);
        } else if (temp_avatar == "5.png") {
          setAvatar(avatar_5);
        } else if (temp_avatar == "6.png") {
          setAvatar(avatar_6);
        } else if (temp_avatar == "7.png") {
          setAvatar(avatar_7);
        } else if (temp_avatar == "8.png") {
          setAvatar(avatar_8);
        }
      }
    }
    (async function() {
      var volume_alert = await AsyncStorage.getItem("volume_alert");
      setConfig({ ...config, volume_alert: parseFloat(volume_alert) });
    })();
  }, [profile]);

  const handleSlideVolume = async (value) => {
    try {
      setConfig({ ...config, volume_alert: value });
      await AsyncStorage.setItem("volume_alert", `${value}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Header
        title="Profile"
        onBack={() => navigation.goBack()}
        onPressLogout={() => setAlertLogout(true)}
      />
      {/* fill space at the top */}

      <ScrollView
        style={{
          flexGrow: 1,
          width: dimension.width,
          height: dimension.height * 1.5,
        }}
      >
        <View style={{ paddingTop: 15 }} />
        <View style={styles.frame}>
          <View style={styles.imageContainer}>
            {avatar != "" && (
              <Image style={styles.imageAvatar} source={avatar} />
            )}
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
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
          >
            App Configuration
          </Text>
          <View style={styles.lineConfig}>
            <Text style={styles.labelText}>Alert Volume</Text>
          </View>
          <Slider
            value={config.volume_alert}
            thumbTintColor={colors.app.theme}
            minimumTrackTintColor={colors.app.theme}
            onValueChange={(value) => handleSlideVolume(value)}
          />
        </View>
      </ScrollView>
      <ModalAlert
        show={alertLogout}
        message={"Are you sure you want to logout?"}
        onClose={() => setAlertLogout(false)}
        onConfirmPressed={() => {
          confirmLogout();
        }}
      />
    </SafeAreaView>
  );
};

export default React.memo(profile);

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
    backgroundColor: "white",
  },
  lineText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.bg.light_grey,
    borderBottomWidth: 1,
    paddingBottom: 2,
    paddingTop: 10,
  },
  labelText: {
    alignSelf: "flex-start",
    fontWeight: "700",
  },
  fieldText: {
    alignSelf: "flex-end",
    textAlign: "center",
  },
  fieldTextEPC: {
    alignSelf: "flex-end",
    textAlign: "right",
  },
  imageContainer: {
    alignItems: "center",
    alignSelf: "center",
  },
  imageAvatar: {
    borderRadius: 50,
    width: 75,
    height: 75,
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 20,
  },
  lineConfig: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 2,
    paddingTop: 10,
  },
});
