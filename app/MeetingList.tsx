import {
  AlignLeft,
  Bookmark,
  CheckCheck,
  Eye,
  MoreHorizontal,
  NotebookPen,
  Sparkles,
  SquareCheckBig,
} from "@tamagui/lucide-icons";
import React from "react";
import {
  View,
  Text,
  XStack,
  YStack,
  Card,
  H4,
  Avatar,
  Separator,
  Button,
} from "tamagui";

import { FlatList } from "react-native";

const CardItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Card bordered>
      <Card.Header>
        <XStack alignItems="center" gap="$2" pb={"$2"}>
          <Avatar circular size="$2">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <H4>Nexl 360</H4>
        </XStack>
        <XStack alignItems="center" justifyContent="space-between">
          <XStack>
            <Avatar circular size="$2">
              <Avatar.Image
                accessibilityLabel="Nate Wienert"
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
              />
            </Avatar>
            <Avatar circular size="$2" ml={"$-3"}>
              <Avatar.Image
                accessibilityLabel="Nate Wienert"
                src="https://preview.redd.it/indians-random-faces-all-ai-generated-v0-6xkj6sda95hc1.jpg?width=640&crop=smart&auto=webp&s=4ea0d871755f59dfce6f011b99194830584fce43"
              />
            </Avatar>
            <Avatar circular size="$2" ml={"$-3"}>
              <Avatar.Image
                accessibilityLabel="Nate Wienert"
                src="https://cdn.sanity.io/images/1mk9ifx4/production/44da5179663bf4460241ec8ae840d7116a8971ed-2048x1365.jpg?rect=114,0,1820,1365&w=800&h=600"
              />
            </Avatar>
          </XStack>
          <Text fontSize="$2" color="gray">
            10:00 AM - 10:30 AM
          </Text>
        </XStack>
      </Card.Header>
      <Separator />
      <Card.Footer px="$4" py="$3">
        <XStack gap="$2">
          <Button icon={<SquareCheckBig size="$1" />} size="$3">
            Log Activity
          </Button>
          <Button icon={<AlignLeft size="$1" />} size="$3">
            Notes
          </Button>
          <Button
            icon={<MoreHorizontal size="$3" />}
            size="$3"
            unstyled
            ml="auto"
          />
        </XStack>
      </Card.Footer>
      <Card.Background />
    </Card>
  );
};

const meetingsData = [
  { id: "1", title: "Meeting 1" },
  { id: "2", title: "Meeting 2" },
  { id: "3", title: "Meeting 3" },
  { id: "4", title: "Meeting 4" },
  { id: "5", title: "Meeting 5" },
  { id: "6", title: "Meeting 6" },
];

import { ScrollView } from "tamagui";

const Header = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pt="$4">
      <XStack gap="$2">
        <Button
          animation={"bouncy"}
          icon={<Sparkles size="$1" />}
          size="$4.5"
          themeInverse
          hoverStyle={{
            scale: 1.2,
          }}
          pressStyle={{
            scale: 0.9,
          }}
        />
        <Button
          animation={"bouncy"}
          icon={<Bookmark size="$1.5" />}
          size="$4.5"
          fontSize="$5"
        >
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
  );
};
const MeetingsList: React.FC = () => {
  return (
    <View py="$4">
      <XStack justifyContent="space-between" alignItems="center">
        <Text fontWeight="700">Today</Text>
        <Text>Meetings Only</Text>
      </XStack>
      <YStack py="$4" gap="$2">
        <FlatList
          ListHeaderComponent={() => <Header />}
          ListHeaderComponentStyle={{ flexGrow: 1 }}
          data={meetingsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardItem title={item.title} />}
          ItemSeparatorComponent={() => <Separator />}
          showsVerticalScrollIndicator={false}
        />
      </YStack>
    </View>
  );
};

export default MeetingsList;
