import React, { FC, useEffect } from "react";
import { Icon, Box, Text, Button } from "zmp-ui";
import { openChatScreen } from "@utils/helper/openchat";
import { primaryColor, tertiaryColor } from "@utils/helper/config";

const ButtonSecondary: FC<{
  title: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isGray?: boolean;
  onClick?: () => void;
}> = ({ title, isPrimary, isSecondary, isGray, onClick, ...props }) => {
  const hexToRgb = (hex) => {
    const normalizedHex = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1);
    const rgbValues = normalizedHex.match(/.{2}/g);

    if (!rgbValues) {
      // Handle invalid hex input
      return [0, 0, 0];
    }
    return rgbValues.map((x) => parseInt(x, 16));
  };

  const primaryColorHexToRgb = hexToRgb(primaryColor);
  const backgroundColorOpacity = `rgba(${primaryColorHexToRgb[0]}, ${primaryColorHexToRgb[1]}, ${primaryColorHexToRgb[2]}, 0.3)`;

  let style;
  if (isPrimary) {
    style = { backgroundColor: primaryColor, color: "white" };
  } else {
    style = { backgroundColor: backgroundColorOpacity, color: primaryColor };
  }
  return (
    <button {...props} onClick={onClick} className="font-semibold py-3 px-4 rounded-full w-60" style={style}>
      {title}
    </button>
  );
};

export default ButtonSecondary;