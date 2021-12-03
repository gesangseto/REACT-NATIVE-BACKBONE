import { Dimensions } from "react-native";

export const dimension = {
  fix: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - 200
};
