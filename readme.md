###Initial setup 

npm install  
`Ios`  
In Xcode Drag React to Library from `node_modules/react-native/React/React.xcodeproj` 



###Linking libraries
**[`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)**  
`Ios`  
Don't run `react-native-link`.  
Instead run `pod install`.  

**[`react-native-gesture-handler`](https://github.com/kmagiera/react-native-gesture-handler)**  
`Ios`  
1. Right Click Libraries "Add Files to Project"  
2. `/node_modules/react-native-gesture-handlers/ios/RNGestureHandler.xcodeproj`  
3. Go to Build Phases > Link Binary with Libraries and add libRNGestureHandler.a  

