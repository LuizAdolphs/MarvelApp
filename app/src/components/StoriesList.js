import React, { useEffect, useState } from "react";
import { useParams } from "react-router"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import {
    Alert,
    ListGroup,
    ListGroupItem
} from "shards-react";
//import { Link } from "react-router-dom";
import Services from "../libs/Services";

const StoriesList = (props) => {
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    const retrieveStories = async (characterId) => {
        setIsLoading(true);

        const storiesResponse = await Services.GetStoriesByCharacterId(characterId);

        setStories(storiesResponse);
        setIsLoading(false);
    };

    useEffect(() => {
        retrieveStories(id);
    },[id]);

    if (isLoading) {
        return <div className="mx-auto" style={{ width: "80px" }}><Loader type="Oval" color="#6c757d" height={80} width={80} /></div>;
    }

    if (stories && stories.length > 0) {
        const items = stories.map((story) => {
            return (
                <ListGroupItem key={story.id}>
                    {story.title}
                </ListGroupItem>
            )
        });

        return <ListGroup>{items}</ListGroup>;
    }

    return <Alert theme="primary">No stories found</Alert>;
};

export default StoriesList;