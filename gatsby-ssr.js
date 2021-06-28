/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key='1' type="text/javascript" src={"/js/jquery-1.12.4.min.js"} />,
    <script key='2' src={"/js/slick.min.js"} />,
    <script key='3' src={"/js/select2.min.js"} />,
    <script key='4' src={"/js/isotope.pkg.min.js"} />,
    <script key='5' src={"/js/lightgallery.min.js"} />,
    <script key='6' src={"/js/tamjid-counter.min.js"} />,
    <script key='7' src={"/js/wave-animation.js"} />,
    <script key='8' src={"/js/jquery-ui.min.js"} />,
    <script key='9' src={"/js/wow.min.js"} />,
    <script key='10' src={"/js/main.js"} />,
  ])
}
