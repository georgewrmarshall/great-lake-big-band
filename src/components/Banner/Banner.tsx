import React, { ComponentProps } from "react";
import { Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

interface BannerProps extends ComponentProps<typeof Box> {
  children: React.ReactNode;
}

export const Banner = ({ children, ...props }: BannerProps) => (
  <Box display="grid" {...props}>
    <Box display="grid" gridArea="1/1">
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        alt="Great Lake Big Band"
        src="../../images/img-bg-2.png"
        formats={["auto", "webp", "avif"]}
      />
      <Box
        width="100%"
        height="100%"
        backgroundColor={"rgba(0,0,0,.6)"}
        position="relative"
        gridArea="1/1"
      />
    </Box>
    <Box gridArea="1/1" position="relative" placeItems="center" display="grid">
      {children}
    </Box>
  </Box>
);
