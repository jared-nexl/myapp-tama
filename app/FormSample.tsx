import React from "react";
import { View, Text, Select, Sheet, Adapt } from "tamagui";

const FormSample = () => {
  return (
    <Select defaultValue="">
      <Select.Trigger>
        <Select.Value placeholder="Date time" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        {/* or <Select.Sheet> */}
        <Sheet>
          <Sheet.Frame>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Group>
            <Select.Label />
            <Select.Item index={0} value="Hello">
              <Select.ItemText>Hello</Select.ItemText>
            </Select.Item>
            <Select.Item index={1} value="Hello2">
              <Select.ItemText>Hello2</Select.ItemText>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select>
  );
};

export default FormSample;
