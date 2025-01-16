import {
  AlignLeft,
  MoreHorizontal,
  NotebookPen,
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

const MeetingsList: React.FC = () => {
  return (
    <View py="$4">
      <XStack justifyContent="space-between" alignItems="center">
        <Text fontWeight="700">Today</Text>
        <Text>Meetings Only</Text>
      </XStack>
      <YStack py="$4" gap="$2">
        <Card bordered>
          <Card.Header>
            <XStack alignItems="center" gap="$2">
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
                <Avatar circular size="$2">
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Avatar circular size="$2">
                  <Avatar.Fallback backgroundColor="$blue10" />
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

          {/* any other components */}
          <Card.Background />
        </Card>
        <Card bordered>
          <Card.Header>
            <XStack alignItems="center" gap="$2">
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
                <Avatar circular size="$2">
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Avatar circular size="$2">
                  <Avatar.Fallback backgroundColor="$blue10" />
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

          {/* any other components */}
          <Card.Background />
        </Card>
        <Card bordered>
          <Card.Header>
            <XStack alignItems="center" gap="$2">
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
                <Avatar circular size="$2">
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Avatar circular size="$2">
                  <Avatar.Fallback backgroundColor="$blue10" />
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

          {/* any other components */}
          <Card.Background />
        </Card>
      </YStack>
    </View>
  );
};

export default MeetingsList;
