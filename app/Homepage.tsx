import React from "react";

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
} from "tamagui";

import {
  Bell,
  Bookmark,
  CheckCheck,
  Eye,
  Menu,
  Plus,
  Sparkles,
} from "@tamagui/lucide-icons";
import MeetingsList from "./MeetingList";

const Homepage: React.FC = () => {
  return (
    <View pt="$6" px="$4">
      <XStack alignItems="center" gap="$2">
        <Button icon={<Menu size="$1.5" />} unstyled />
        <H3>Hi Ulkar!</H3>
        <Button icon={<Bell size="$1.5" />} unstyled ml="auto" />
      </XStack>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} pt="$4">
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
      </ScrollView>
      <MeetingsList />
    </View>
  );
};

export default Homepage;
