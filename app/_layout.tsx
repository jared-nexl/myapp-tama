import "../tamagui-web.css";
import React from "react";
import { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Provider } from "./Provider";
import {
  Adapt,
  FontSizeTokens,
  getFontSize,
  Label,
  Sheet,
  useTheme,
} from "tamagui";

// import { LinearGradient } from "tamagui/linear-gradient";

import {
  View,
  Text,
  XStack,
  YStack,
  Avatar,
  AvatarFallback,
  TabsContentProps,
} from "tamagui";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Tabs,
  Separator,
  SizableText,
  Select,
} from "tamagui";
import { SafeAreaView } from "react-native";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import FormSample from "./FormSample";
import Homepage from "./Homepage";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <Providers>
      <RootLayoutNav />
    </Providers>
  );
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const [val, setVal] = React.useState("apple");
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView>
        {/* <YStack alignItems="center" gap="$2">
          <Avatar circular size="$10">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <H3>Sam Whitfield</H3>
          <Text>Director of Marketing</Text>
          <Text>Farrel Fritz Australia</Text>
        </YStack>
        <Tabs
          defaultValue="tab1"
          orientation="horizontal"
          flexDirection="column"
          width={400}
          height={150}
          borderRadius="$4"
          borderWidth="$0.25"
          overflow="hidden"
          borderColor="$borderColor"
        >
          <Tabs.List
            disablePassBorderRadius="bottom"
            aria-label="Manage your account"
          >
            <Tabs.Tab flex={1} value="tab1">
              <SizableText fontFamily="$body">Profile</SizableText>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab2">
              <SizableText fontFamily="$body">Connections</SizableText>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab3">
              <SizableText fontFamily="$body">Notifications</SizableText>
            </Tabs.Tab>
          </Tabs.List>
          <TabsContent value="tab1">
            <H5>Profile</H5>
          </TabsContent>

          <TabsContent value="tab2">
            <H5>Connections</H5>
          </TabsContent>

          <TabsContent value="tab3">
            <H5>Notifications</H5>
          </TabsContent>
        </Tabs>
        <FormSample /> */}
        <Homepage />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};
