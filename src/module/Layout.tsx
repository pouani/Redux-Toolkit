import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalNav from './GlobalNav'

import Style from "./LayoutStyle.module.css"

const Layout = () => {
  return (
    <>
        <article className={Style.header}>
            <header>
                <h1>Welcome !</h1>
            </header>
        </article>
        <section className={Style["content-section"]}>
            <GlobalNav />
            <main>
              <Outlet />
            </main>
        </section>
    </>
  )
}

export default Layout