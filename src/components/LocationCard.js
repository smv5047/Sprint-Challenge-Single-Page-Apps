import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default function LocationCard(props) {
  
  console.log(props)
  return (
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>{props.loc.name}</ListGroupItemHeading>
            <ListGroupItemText>{props.loc.type}</ListGroupItemText>
            <ListGroupItemText>{props.loc.dimension}</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  
}
