import AsyncStorage from '@react-native-async-storage/async-storage';


const mainAkses = {
  dev: {
    api_report: "http://103.102.153.112:1001/api",
    api_transaction: "http://103.102.153.112:1002/api",
    // api_support: "http://103.102.153.112:1003/api-support",
    api_mertrack: "http://103.102.153.112:1005/api/general",
  },
  prod: {
    api_report: "http://103.102.153.112:2001/api",
    api_transaction: "http://103.102.153.112:2002/api",
    // api_support: "http://103.102.153.112:2003/api-support",
    api_mertrack: "http://103.102.153.112:2005/api/general",
  },
};


export const server = {
  API_REPORT: mainAkses.dev.api_report,
  API_TRANSACTION: mainAkses.dev.api_transaction,
  // API_SUPPORT: mainAkses.dev.api_support,
  API_MERTRACK: mainAkses.dev.api_mertrack,
};


export const server_test = async ({ api }) => {
  if (api == "API_MERTRACK") {
    return await AsyncStorage.getItem("API_MERTRACK")
  }
  if (api == "API_REPORT") {
    return await AsyncStorage.getItem("API_REPORT")
  }

  return null
};
