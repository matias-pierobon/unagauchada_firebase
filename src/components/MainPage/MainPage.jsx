import React from "react"
import List from "react-md/lib/Lists/List"
import ListItem from "react-md/lib/Lists/ListItem"
import FontIcon from "react-md/lib/FontIcons"
import CSSModules from 'react-css-modules'
import styles from './MainPage.scss'

const HomeIcon = () => <FontIcon>home</FontIcon>
const ExplorIcon = () => <FontIcon>group_work</FontIcon>
const ProfileIcon = () => <FontIcon>account_circle</FontIcon>

const SideBar = () => (
  <aside>
    <List>
      <ListItem leftIcon={<HomeIcon />} primaryText="Inicio" />
      <ListItem leftIcon={<ExplorIcon />} primaryText="Explorar" />
      <ListItem leftIcon={<ProfileIcon />} primaryText="Mi Perfil" />
    </List>
  </aside>
)

const MainPage = ({ children }) => (
  <main className="mainPage">
    <SideBar />
    <content>
      {children}
    </content>
  </main>
)

export default MainPage