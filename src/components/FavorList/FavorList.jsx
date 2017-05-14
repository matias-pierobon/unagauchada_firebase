// @flow

import React from "react"
import Card from "react-md/lib/Cards/Card"
import CardTitle from "react-md/lib/Cards/CardTitle"
import CardActions from "react-md/lib/Cards/CardActions"
import CardText from "react-md/lib/Cards/CardText"
import Media, { MediaOverlay } from "react-md/lib/Media"
import Avatar from "react-md/lib/Avatars"
import Button from "react-md/lib/Buttons"
import './FavorList.scss'

const Favor = ({ favor }) => (
  <Card style={{ maxWidth: 400 }} className="md-block-centered">
    <Media>
      <img src="http://placehold.it/350x150" role="presentation" />
      <MediaOverlay>
        <CardTitle title={favor.title} />
      </MediaOverlay>
    </Media>
    <CardTitle
      avatar={
        <Avatar
          src="https://unsplash.it/40/40?random&time=1494727081848"
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

const makeList = favors => favors.map(favor => <Favor favor={favor} />)

const FavorList = () => <list> {makeList(favores)}</list>

export default FavorList
