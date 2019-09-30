import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardBody, CardTitle } from "shards-react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Services from "../libs/Services";
import CharactersList from "./CharactersList";

const StoryDetail = props => {
    const [story, setStory] = useState({});
    const [storyCharacters, setStoryCharacters] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const retrieveStory = async storyId => {
        setIsLoading(true);

        const storyResponse = await Services.GetStoryById(storyId);
        const storyCharacteresResponse = await Services.GetCharactersByStoryId(storyId);

        setStory(storyResponse[0]);
        setStoryCharacters(storyCharacteresResponse);
        setIsLoading(false);
    }

    const { id } = useParams();

    useEffect(() => {
        retrieveStory(id);
    }, [id]);

    if (isLoading) {
        return (
            <div className="mx-auto" style={{ width: "80px" }}>
                <Loader type="Oval" color="#6c757d" height={80} width={80} />
            </div>
        );
    }
    
    const description = story.description !== "" ? story.description : "No description available";

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {story.title}
                </CardTitle>
                {description}
            </CardBody>
            <CardBody>
                <CardTitle>
                    Characters
                </CardTitle>
                <CharactersList characters={storyCharacters} />
            </CardBody>
        </Card>
    )
}

export default StoryDetail;