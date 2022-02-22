import { createGlobalStyle } from "styled-components";
import tungstenBlack from "../assets/fonts/Tungsten-Black.otf";
import tungstenBold from "../assets/fonts/Tungsten-Bold.otf";
import tungstenBook from "../assets/fonts/Tungsten-Book.otf";
import tungstenMedium from "../assets/fonts/Tungsten-Medium.otf";
import tungstenSemiBold from "../assets/fonts/Tungsten-Semibold.otf";
import tungstenLight from "../assets/fonts/Tungsten-Light.otf";
import tungstenThin from "../assets/fonts/Tungsten-Thin.otf";
import graphikRegular from "../assets/fonts/Graphik-Regular.ttf";

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Tungsten';
        src: url(${tungstenBlack}) format('opentype');
        font-weight: 900;
    }
    @font-face {
        font-family: 'Tungsten';
        src: url(${tungstenBold}) format('opentype');
        font-weight: 700;
    }
    @font-face {
        font-family: 'Tungsten';
        src: url(${tungstenSemiBold}) format('opentype');
        font-weight: 600;
    }
    @font-face {
        font-family: 'Tungsten';
        src: url(${tungstenMedium}) format('opentype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Tungsten';
        src: url(${tungstenBook}) format('opentype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Tungsten';
        src: url(${tungstenLight}) format('opentype');
        font-weight: 300;
    }
    @font-face {
        font-family: 'Tungsten';
        src: url(${tungstenThin}) format('opentype');
        font-weight: 200;
    }

    @font-face {
        font-family: 'Graphik';
        src: url(${graphikRegular}) format('truetype');
        font-weight: 400;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Tungsten', sans-serif;
    }

    .graphik{
        font-family: 'Graphik', sans-serif;
    }

    .tungsten{
        font-family: 'Tungsten', sans-serif;
    }

    .open-sans{
        font-family: 'Open Sans', sans-serif;
    }

    .cinzel{
        font-family: 'Cinzel', serif;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        background-color: #0A0A0A;
        color: #ffffff;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;
