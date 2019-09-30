import React from "react";

import { Alert, ListGroup, ListGroupItem } from "shards-react";
import { Link } from "react-router-dom";

const CharactersList = props => {
    if (props.characters && props.characters.length > 0) {
        const items = props.characters.map(character => {
            return (
                <ListGroupItem key={character.id}>
                    <img
                        className="mr-1"
                        style={{ height: "25px" }}
                        src={
                            character.thumbnail.path +
                            "." +
                            character.thumbnail.extension
                        }
                        alt={character.name}
                    />
                    <Link to={`/stories/${character.id}`}>
                        {character.name}
                    </Link>
                </ListGroupItem>
            );
        });

        return <ListGroup>{items}</ListGroup>;
    }

    return <Alert theme="primary">No characters found</Alert>;
};

export default CharactersList;