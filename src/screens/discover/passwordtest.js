import React, { useState } from 'react';
import { COLORS, FONTS, icons, images } from '../../../constants/';
import { View,Text,Image,StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
const PasswordTest=()=>{
    const [password, setPassword] = useState(true)

return(
    <View style={{flexDirection:'row'}}>
<TextInput {...password}
style={{flex:1}}
secureTextEntry={password}/>


{
    password?<View>
        <TouchableOpacity onPress={() => setPassword(false)}>
<Image source={icons.locationIcon} style={styles.locationIconSize}/>
</TouchableOpacity>
    </View>:
     <View>
         <TouchableOpacity onPress={() => setPassword(true)}>
<Image source={icons.timeIcon} style={styles.locationIconSize}/>
</TouchableOpacity>
     </View>
}
{/* <TouchableOpacity onPress={() => setPassword(false)}>
<Image source={icons.back} style={styles.locationIconSize}/>
</TouchableOpacity> */}
    </View>
)
}
const styles=StyleSheet.create({
    locationIconSize: {
        width: 15,
        height: 18,
        resizeMode: 'contain',
        marginLeft:'auto'
    
    }
})
export default PasswordTest;