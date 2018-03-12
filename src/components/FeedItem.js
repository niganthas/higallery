import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap';

export default ({feed}) => {
  const isVideo = feed.images && feed.images[0].type === 'video/mp4'

  const image = (feed.images && isVideo) ?
      <video width="100%" autoPlay src={feed.images[0].link}></video> :
      <CardImg top width="100%" src={feed.images ? feed.images[0].link : feed.link} alt={feed.title}/>
  return(
      <Card>
        {image}
        <CardBody>
          <CardTitle>{feed.title}</CardTitle>
          <CardSubtitle>{feed.account_url}</CardSubtitle>
          <CardText>{feed.description}</CardText>
          {/*<Button>Button</Button>*/}
        </CardBody>
      </Card>
  )
}