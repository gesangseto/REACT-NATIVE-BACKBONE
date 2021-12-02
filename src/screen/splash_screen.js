import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import { useSelector } from "react-redux";
import { splash_bottom, splash_center, splash_top } from "../assets";
import InputText from "../components/InputText";
import { colors, error } from "../constants";
import { checkTokenV2 } from "../resource";
import { Toaster } from "../utils";
import { registerBroadcastReceiver } from "../utils/scanner";

const splash_screen = ({ navigation }) => {
  const ref_input_1 = useRef();
  const ref_input_2 = useRef();
  // const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const stateProfile = useSelector((state) => state.profile);
  const [profile, setProfile] = useState();
  const [token, setToken] = useState();
  const [endpoint, setEndpoint] = useState({
    API_MERTRACK: "http://103.102.153.112:1005",
    API_REPORT: "http://103.102.153.112:1001",
  });
  const modalAddApi = useRef(null);

  const handleSubmitEndpoint = async () => {
    await AsyncStorage.setItem("API_MERTRACK", `${endpoint.API_MERTRACK}`);
    await AsyncStorage.setItem("API_REPORT", `${endpoint.API_REPORT}`);
    navigation.replace("splash_screen");
  };

  const handleCheckSession = async () => {
    let exec = await checkTokenV2(false);
    console.log(exec);
    if (!exec || (exec && exec.StatusCode && exec.StatusCode == "401")) {
      Toaster(error.unathorized);
      await AsyncStorage.removeItem("profile");
      await AsyncStorage.removeItem("token");
      navigation.replace("login");
      return false;
    }
    return true;
  };

  const handleCheckEndPoint = async () => {
    var API_MERTRACK = await AsyncStorage.getItem("API_MERTRACK");
    var API_REPORT = await AsyncStorage.getItem("API_REPORT");
    var profile = await AsyncStorage.getItem("profile");
    var volume_alert = await AsyncStorage.getItem("volume_alert");
    if (!volume_alert) {
      await AsyncStorage.setItem("volume_alert", "0");
    }
    if (API_MERTRACK && API_REPORT) {
      setTimeout(() => {
        (async function() {
          if (profile) {
            let check_session = await handleCheckSession();
            if (check_session) {
              navigation.replace("menu_master");
            }
          } else {
            navigation.replace("login");
          }
        })();
      }, 500);
    } else {
      modalAddApi.current?.open();
    }
  };

  useEffect(() => {
    registerBroadcastReceiver();
    (async function() {
      await handleCheckEndPoint();
    })();
  }, [navigation, stateProfile.tokenApps]);

  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <ImageBackground
            source={splash_top}
            style={{
              width: null,
              height: "105%",
            }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <ImageBackground
            source={splash_center}
            style={{
              width: null,
              height: "90%",
            }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <ImageBackground
            source={splash_bottom}
            style={{
              width: null,
              height: "105%",
            }}
          />
        </View>
      </View>
      <Portal>
        <Modalize
          ref={modalAddApi}
          closeOnOverlayTap={false}
          closeSnapPointStraightEnabled={false}
          // modalHeight={isKeyboardOpen ? 400 : 225}
          modalHeight={250}
          modalStyle={{ backgroundColor: colors.bg.light_grey }}
        >
          <InputText
            ref={ref_input_1}
            max={100}
            required
            upperCase
            defaultText={endpoint.API_MERTRACK}
            title="Endpoind Api-Mertrack"
            onChange={(val) => setEndpoint({ ...endpoint, API_MERTRACK: val })}
            onSubmitEditing={() => ref_input_2.current.focus()}
            blurOnSubmit={false}
          />
          <InputText
            ref={ref_input_2}
            max={100}
            required
            upperCase
            defaultText={endpoint.API_REPORT}
            title="Endpoind Api-Report"
            onChange={(val) => setEndpoint({ ...endpoint, API_REPORT: val })}
            onSubmitEditing={() => handleSubmitEndpoint()}
          />
          <View style={styles.btnContainer}>
            <View style={styles.buttonContainer} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => handleSubmitEndpoint()}
                style={{
                  backgroundColor: colors.app.theme,
                  borderRadius: 7,
                  width: 100,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.text}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modalize>
      </Portal>
    </>
  );
};

// Define some colors and default sane values
const utils = {
  colors: { primaryColor: "#af0e66" },
  dimensions: { defaultPadding: 12 },
  fonts: { largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: "flex-end",
    flex: 1,
  },
  button: {},
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default React.memo(splash_screen);
