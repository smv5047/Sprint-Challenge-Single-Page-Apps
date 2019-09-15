import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


export default function CharacterCard(props) {

  console.log(props)
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.char.image} alt={props.name} />
        <CardBody>
          <CardTitle>{props.char.name}</CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> */}
        </CardBody>
      </Card>
      {/* <Card>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      </Card> */}
    </div>
  )
}
