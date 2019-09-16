import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


export default function CharacterCard(props) {

  console.log(props)
  return (
    <div>
      <Card className="text-center">
        <CardImg top width="100%" src={props.char.image} alt={props.char.name} />
        <CardBody>
          <CardTitle>{props.char.name}</CardTitle>
          <CardText>Species: {props.char.species}</CardText>
          <CardText>
            <small className="text-muted">{props.char.status}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}


