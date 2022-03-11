/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import {
  Center, Code, Heading, HStack, Link, NativeBaseProvider, Text, VStack
} from 'native-base';
import React, { useEffect } from 'react';
import NativeBaseIcon from '../components/NativeBaseIcon';
 
 // Color Switch Component
 const MainScreen = () => {
  useEffect(()=>{console.log("SPLASH SCREEN");
  },[])


   return (
     <NativeBaseProvider>
       <Center
         _dark={{ bg: 'blueGray.900' }}
         _light={{ bg: 'blueGray.50' }}
         px={4}
         flex={1}>
         <VStack space={5} alignItems="center">
           <NativeBaseIcon />
         </VStack>
       </Center>
     </NativeBaseProvider>
   );
 };
 export default MainScreen;
 