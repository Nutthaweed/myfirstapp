import React, { useCallback, useState} from 'react'
import { Pressable } from 'react-native'
import { Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base'
import ThemeToggle  from '../components/theme-toggle'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

export default function MainScreen() {
    const [ checked, setChecked ] = useState(false)
    const handlePressCheckbox = useCallback(() =>{
        setChecked(prev => {  return !prev } )
    }, [])
    return (
        <Center _dark={{ bg: 'blueGray.900' }} _light={{bg: 'blueGray.50'}} px={4} flex={1}>
                 <VStack space={5} alignItems="center">
                     <Box width={30} height={30} mr={2}>
                         <Pressable onPress={handlePressCheckbox} >
                             <AnimatedCheckbox 
                            checked={checked} highlightColor='#4444ff' checkmarkColor='#ffffff' boxOutlineColor='#4444ff'                            />
                         </Pressable>
                     </Box>
                     <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
                 <Text>Hello</Text>
                 </Box>
                 </VStack>
                 <ThemeToggle />
        </Center>
    )
}