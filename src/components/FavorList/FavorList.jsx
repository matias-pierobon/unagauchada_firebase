// @flow

import React from "react"
import Card from "react-md/lib/Cards/Card"
import CardTitle from "react-md/lib/Cards/CardTitle"
import CardActions from "react-md/lib/Cards/CardActions"
import CardText from "react-md/lib/Cards/CardText"
import Media, { MediaOverlay } from "react-md/lib/Media"
import Avatar from "react-md/lib/Avatars"
import Button from "react-md/lib/Buttons"
import MainPage from '../MainPage'
import './FavorList.scss'

const Favor = ({ favor }) => (
  <Card style={{ maxWidth: 400 }} className="md-block-centered">
    <Media>
      <img src={`https://unsplash.it/350/150/?random&time=${(new Date()).getTime()}`} role="presentation" />
      <MediaOverlay>
        <CardTitle title={favor.title} />
      </MediaOverlay>
    </Media>
    <CardTitle
      avatar={
        <Avatar
          src={`https://unsplash.it/40/40?random&time=${(new Date()).getTime()}`}
          role="presentation"
        />
      }
      title={favor.user.name}
      subtitle={favor.user.email}
    />
    <CardText>
      {favor.text}
    </CardText>
    <CardActions>
      <Button flat label="View" />
    </CardActions>
  </Card>
)

const favor = (id, title, text, name, email) => ({
  id,
  title,
  text,
  user: { name, email }
})

const favores = [
  favor(
    1,
    "Titulo",
    "Un gran texto",
    "Matias Pierobon",
    "matias.pierobonm@gmail.com"
  ),
  favor(
    2,
    "Titulo",
    "Un gran texto",
    "Franco Borrelli",
    "francoberrelli96@gmail.com"
  ),
  favor(
    3,
    "Titulo",
    "Un gran texto",
    "Matias Pierobon",
    "matias.pierobonm@gmail.com"
  ),
  favor(
    4,
    "Titulo",
    "Un gran texto",
    "Matias Pierobon",
    "matias.pierobonm@gmail.com"
  ),
  favor(
    5,
    "Titulo",
    "Un gran texto",
    "Matias Pierobon",
    "matias.pierobonm@gmail.com"
  ),
  favor(
    6,
    "Titulo",
    "Un gran texto",
    "Matias Pierobon",
    "matias.pierobonm@gmail.com"
  )
]

const makeList = favors => favors.map(favor => <Favor key={favor.id} favor={favor} />)

const FavorList = () => <MainPage><list> {makeList(favores)}</list></MainPage>

export default FavorList
