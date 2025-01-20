import { Link } from "expo-router";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";

import { Button, useTheme, Text, View, XStack, YStack } from "tamagui";
import {
  Atom,
  AudioWaveform,
  X,
  Home,
  Contact,
  Notebook,
  DollarSign,
  Plus,
} from "@tamagui/lucide-icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    // <></>
    <Tabs>
      <TabSlot />
      <TabList
        style={{
          height: 80,
          paddingHorizontal: 30,
          paddingBottom: 30,
          paddingTop: 10,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TabTrigger name="home" href="/">
          <View>
            <YStack gap="$2" alignItems="center">
              <Home />
              <Text>Home</Text>
            </YStack>
          </View>
        </TabTrigger>
        <TabTrigger name="article" href="/(tabs)/two">
          <View>
            <YStack gap="$2" alignItems="center">
              <Contact />
              <Text>Contacts</Text>
            </YStack>
          </View>
        </TabTrigger>
        <TabTrigger name="Tasks" href="/(tabs)/three">
          <View
            backgroundColor="black"
            width={50}
            height={50}
            justifyContent="center"
            alignItems="center"
            borderRadius={100}
          >
            <Plus color="white" size="$2" />
            {/* <Text>Contacts</Text> */}
          </View>
        </TabTrigger>
        <TabTrigger name="Tasks" href="/(tabs)/four">
          <View>
            <YStack gap="$2" alignItems="center">
              <Notebook />
              <Text>Tasks</Text>
            </YStack>
          </View>
        </TabTrigger>
        <TabTrigger name="Tasks" href="/(tabs)/five">
          <View>
            <YStack gap="$2" alignItems="center">
              <DollarSign />
              <Text>Opps</Text>
            </YStack>
          </View>
        </TabTrigger>
      </TabList>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button mr="$4" bg="$purple8" color="$purple12">
                Hello!
              </Button>
            </Link>
          ),
          headerShown: false,
        }}
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button mr="$4" bg="$purple8" color="$purple12">
                Hello!
              </Button>
            </Link>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
