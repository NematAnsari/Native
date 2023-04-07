import React, { useState } from 'react';
import { Button, Text, Touchable, TouchableOpacity, View, PermissionsAndroid } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import  { launchCamera, launchImageLibrary, ImageLibraryOptions } from "react-native-image-picker"

function UserProfile(props: SheetProps<{ Name: String }>) {

  const option: ImageLibraryOptions = {
    mediaType: "photo",
    presentationStyle: 'overFullScreen'
  }



  const OpenCamera = () => {

    launchCamera(option, (response) => {
      if (response.assets) {

        SheetManager.hide(props.sheetId, {
          payload: response.assets[0].uri,
        });


      }
    
    })
  }

  const OpenGallery = () => {
    launchImageLibrary(option, (response) => {


      if (response.assets) {

        SheetManager.hide(props.sheetId, {
          payload: response.assets[0].uri,
        });
      }
    });




  }


  return (
    <ActionSheet
      id={props.sheetId}
      statusBarTranslucent={false}
      drawUnderStatusBar={false}
      gestureEnabled={true}
      containerStyle={{
        paddingHorizontal: 5,
        paddingVertical: 200
      }}
      springOffset={50}
      defaultOverlayOpacity={0.3}>
      <View style={{ marginBottom: 100 }}>

        <TouchableOpacity >
          <Text onPress={OpenCamera} style={{ borderWidth: 1, padding: 10, marginTop: 10, marginBottom: 5, color: "red", fontWeight: "bold", width: 300, fontSize: 30 }}>Open Camera</Text>
          <Text onPress={OpenGallery} style={{
            borderWidth: 1, padding: 10, marginTop: 10, marginBottom: 5, color: "red", fontWeight: "bold",
            fontSize: 30, width: 300, justifyContent: "center"
          }}>Open Gallery</Text>
        </TouchableOpacity>
      </View>

    </ActionSheet>
  );
}

export default UserProfile;
