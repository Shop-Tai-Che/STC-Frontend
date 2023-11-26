import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

interface SetionProps {
  id?: string;
  placeholder?: string;
  type?: string;
}

const InputNoOutline: FC<SetionProps> = ({
  id,
  placeholder,
  type,
  ...props
}) => {
  return (
    <input
      id={id}
      type={type}
      className="w-full text-sm focus:border-b-2 mt-2  outline-none opacity-70 "
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputNoOutline;
