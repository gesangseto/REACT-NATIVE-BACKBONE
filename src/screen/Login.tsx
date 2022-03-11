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
 const Login = () => {
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
           <Heading size="lg">Welcome to NativeBase Splash Screen</Heading>
           <HStack space={2} alignItems="center">
             <Text>Edit</Text>
             <Code>App.tsx</Code>
             <Text>and save to reload.</Text>
           </HStack>
           <Link href="https://docs.nativebase.io" isExternal>
             <Text color="primary.500" underline fontSize={'xl'}>
               Learn NativeBase
             </Text>
           </Link>
         </VStack>
       </Center>
     </NativeBaseProvider>
   );
 };
 export default Login;
 