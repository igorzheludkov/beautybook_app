#!/usr/bin/env bash

# Decode the GOOGLE_SERVICES_JSON environment variable and create the google-services.json file
if [ ! -z "$GOOGLE_SERVICES_JSON" ]; then
  echo $GOOGLE_SERVICES_JSON | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json"
fi

# Decode the GOOGLE_SERVICES_PLIST environment variable and create the GoogleService-Info.plist file
if [ ! -z "$GOOGLE_SERVICES_PLIST" ]; then
  echo $GOOGLE_SERVICES_PLIST | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/ios/react-native-starter/GoogleService-Info.plist"
fi
