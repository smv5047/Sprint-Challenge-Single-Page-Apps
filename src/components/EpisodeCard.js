import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


export default function EpisodeCard(props) {

  console.log(props)
  return (
    <div>
      <Card className="text-center">
        {/* <CardImg top width="100%" src={props.epi.image} alt={props.char.name} /> */}
        <CardBody>
          <CardTitle>{props.epi.name}</CardTitle>
          <CardText>Species: {props.epi.episode}</CardText>
          <CardText>
            <small className="text-muted">{props.epi.created}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}