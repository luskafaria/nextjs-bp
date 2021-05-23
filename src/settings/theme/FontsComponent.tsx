import React from "react";
import { Global, css } from "@emotion/react";

const FontsComponent = (): JSX.Element => (
  <Global
    styles={css`
      @font-face {
        font-family: "Roboto Bold";
        src: local("Roboto Bold"),
          url("fonts/Roboto-Bold.woff2") format("woff2");
      }

      @font-face {
        font-family: "Roboto Medium";
        src: local("Roboto Medium"),
          url("fonts/Roboto-Medium.woff2") format("woff2");
      }

      @font-face {
        font-family: "Roboto Regular";
        src: local("Roboto Regular"),
          url("fonts/Roboto-Regular.woff2") format("woff2");
      }

      @font-face {
        font-family: "Roboto Light";
        src: local("Roboto Light"),
          url("fonts/Roboto-Light.woff2") format("woff2");
      }
    `}
  />
);

export default FontsComponent;
