import React, { useState } from "react";

import { debounce } from "lodash";
import {
    Card,
    CardBody,
    CardTitle,
    Form,
    FormInput,
    FormGroup
} from "shards-react";

import { withRouter } from "react-router-dom";

const debounceUpdateSearchText = debounce((searchText, props) => {
    props.history.push("/");
    props.onChange(searchText);
}, 1000);

function SearchBox(props) {
    const [searchText, setSeachText] = useState("");

    const textHandler = e => {
        e.preventDefault();

        setSeachText(e.target.value);

        debounceUpdateSearchText(e.target.value.trim(), props);
    };

    const onKeyPress = e => {
        if (e.which === 13) {
            e.preventDefault();
        }
    }

    return (
        <Card className={props.className}>
            <CardBody>
                <CardTitle>Search for Character</CardTitle>
                <Form>
                    <FormGroup>
                        <FormInput
                            onChange={textHandler}
                            value={searchText}
                            onKeyPress={onKeyPress}
                        ></FormInput>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    );
}

export default withRouter(SearchBox);
