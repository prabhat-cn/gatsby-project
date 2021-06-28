/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <title>Abid - Multipurpose business</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/select2.min.css" />
        <link rel="stylesheet" href="/assets/css/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Helmet>
      <div className="layout">
        <Header />
        <div className="content">
          {/* content for each page */}
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
