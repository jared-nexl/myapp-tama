import React, { useState } from "react";

import {
  View,
  Text,
  Select,
  Sheet,
  Adapt,
  H3,
  ScrollView,
  Button,
  XStack,
  styled,
} from "tamagui";

import { FlatList } from "react-native";

import {
  Bell,
  Bookmark,
  CheckCheck,
  Eye,
  Menu,
  Plus,
  Sparkles,
} from "@tamagui/lucide-icons";
import MeetingsList from "../MeetingList";

const buttonData = [
  { id: "1", icon: <Sparkles size="$1" />, size: "$4.5", themeInverse: true },
  {
    id: "2",
    icon: <Bookmark size="$1.5" />,
    size: "$4.5",
    fontSize: "$5",
    text: "Saved insights",
  },
  {
    id: "3",
    icon: <Eye size="$1.5" />,
    size: "$4.5",
    fontSize: "$5",
    text: "Watching",
  },
  { id: "4", icon: <CheckCheck />, size: "$4.5", text: "Button" },
  { id: "5", size: "$4.5", text: "Button" },
  { id: "6", size: "$4.5", text: "Button" },
];

const renderItem = ({ item }) => (
  <Button
    icon={item.icon}
    size={item.size}
    themeInverse={item.themeInverse}
    fontSize={item.fontSize}
  >
    {item.text}
  </Button>
);

const Homepage: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("Quick Overview");

  const toggleButton = () => {
    setSelectedButton((prev) =>
      prev === "Quick Overview" ? "Daily Digest" : "Quick Overview"
    );
  };

  const enterStyle = {
    x: selectedButton === "Quick Overview" ? 100 : -100,
    opacity: 0,
  };

  const SelectedButton = styled(View, {
    px: "$6",
    backgroundColor: "black",
    borderRadius: 100,
    height: "$4",
    py: "$3",
    enterStyle,
  });

  return (
    <View pt="$8" px="$4">
      <XStack alignItems="center" gap="$2">
        <Button icon={<Menu size="$1.5" />} unstyled />
        <H3>Hi Ulkar!</H3>
        <Button icon={<Bell size="$1.5" />} unstyled ml="auto" />
      </XStack>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} pt="$4">
        <XStack gap="$2">
          <Button icon={<Sparkles size="$1" />} size="$4.5" themeInverse />
          <Button icon={<Bookmark size="$1.5" />} size="$4.5" fontSize="$5">
            Saved insights
          </Button>
          <Button icon={<Eye size="$1.5" />} size="$4.5" fontSize="$5">
            Watching
          </Button>
          <Button icon={CheckCheck} size="$4.5">
            Button
          </Button>
          <Button size="$4.5">Button</Button>
          <Button size="$4.5">Button</Button>
        </XStack>
      </ScrollView> */}
      {/* <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16 }}
        data={buttonData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <XStack width={8} />}
      /> */}
      <MeetingsList />
      <View
        position="absolute"
        bottom={130}
        backgroundColor={"rgba(0, 0, 0, 0.35)"}
        height="$4"
        alignSelf="center"
        justifyContent="center"
        borderRadius={100}
        // px="$4"
      >
        {/* hacked just for presentation, not a good approach */}
        <XStack alignItems="center">
          {selectedButton === "Quick Overview" ? (
            <>
              <SelectedButton animation="quick">
                <Text fontSize="$4" color="white">
                  Quick Overview
                </Text>
              </SelectedButton>
              <UnselectedButton px="$6" onPress={toggleButton}>
                <Text fontSize="$4" color="white">
                  Daily Digest
                </Text>
              </UnselectedButton>
            </>
          ) : (
            <>
              <UnselectedButton onPress={toggleButton} animation="quick">
                <Text fontSize="$4" color="white">
                  Quick Overview
                </Text>
              </UnselectedButton>
              <SelectedButton px="$6" animation="bouncy">
                <Text fontSize="$4" color="white">
                  Daily Digest
                </Text>
              </SelectedButton>
            </>
          )}
        </XStack>
      </View>
    </View>
  );
};

// const SelectedButton = styled(View, {
//   px: "$6",
//   backgroundColor: "black",
//   borderRadius: 100,
//   height: "$4",
//   py: "$3",
// });

const UnselectedButton = styled(View, {
  px: "$6",
});

export default Homepage;
