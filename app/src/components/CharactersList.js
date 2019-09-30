import React, { useEffect, useState } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import {
    Alert,
    ListGroup, 
    ListGroupItem
} from "shards-react";
import { Link } from "react-router-dom";
import Services from "../libs/Services";

const CharactersList = (props) => {

    const [characters, setCharacteres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const retrieveCharacters = async (searchText) => {
        setIsLoading(true);
        
        const charactersResponse = await Services.GetCharacters(searchText);

        setCharacteres(charactersResponse);
        setIsLoading(false);
    };

    useEffect(() => {
        if(props.searchText) {
            retrieveCharacters(props.searchText);
        }
    }, [props.searchText]);

    if (isLoading) {
        return <div className="mx-auto" style={{width: "80px"}}><Loader type="Oval" color="#6c757d" height={80} width={80} /></div>;
    }

    if (characters && characters.length > 0) {
        const items = characters.map((character) => { 
            return (
                <ListGroupItem key={character.id}>
                    <img className="mr-1" style={{height: "25px"}} src={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name}/>
                    <Link to={`/stories/${character.id}`}>{character.name}</Link>
                </ListGroupItem>
            )
        });

        return <ListGroup>{items}</ListGroup>;
    }

    return <Alert theme="primary">No characters found</Alert>;
};

export default CharactersList;