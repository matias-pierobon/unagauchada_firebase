import React from "react"
import List from "react-md/lib/Lists/List"
import ListItem from "react-md/lib/Lists/ListItem"
import FontIcon from "react-md/lib/FontIcons"

const HomeIcon = () => <FontIcon>home</FontIcon>
const ExplorIcon = () => <FontIcon>explor</FontIcon>
const ProfileIcon = () => <FontIcon>profile</FontIcon>

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
  <main>
    <SideBar />
    <content>
      {children}
    </content>
  </main>
)
