import React, { useEffect, useState } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import Services from "../libs/Services";

import CharactersList from "./CharactersList";

const CharactersListContainer = props => {
    const [characters, setCharacteres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const retrieveCharacters = async searchText => {
        setIsLoading(true);

        const charactersResponse = await Services.GetCharacters(searchText);

        setCharacteres(charactersResponse);
        setIsLoading(false);
    };

    useEffect(() => {
        if (props.searchText) {
            retrieveCharacters(props.searchText);
        }
    }, [props.searchText]);

    if (isLoading) {
        return (
            <div className="mx-auto" style={{ width: "80px" }}>
                <Loader type="Oval" color="#6c757d" height={80} width={80} />
            </div>
        );
    }

    return <CharactersList characters={characters} />
};

export default CharactersListContainer;
