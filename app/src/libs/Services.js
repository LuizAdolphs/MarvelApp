const url = "https://gateway.marvel.com:443/v1/public/";
const params = { 
    "apikey":"b5e440ff3e0db8c3b7f44bd57e4245c3"
};

const headers = new Headers({
    "Content-Type": "application/json"
})

const Services = {
    async GetCharacters(name) {
        const buildUrl = new URL(`${url}characters`);

        buildUrl.search = new URLSearchParams({
            "nameStartsWith": name,
            ...params            
        });

        return fetch(buildUrl, { 
            method: 'GET',
            headers: headers,
            mode: 'cors'
        })
        .then(res => res.json())
        .then(data => data.data.results);
    },
    async GetStoriesByCharacterId(id) {
        const buildUrl = new URL(`${url}characters/${id}/stories`);

        buildUrl.search = new URLSearchParams({
            ...params            
        });

        return fetch(buildUrl, { 
            method: 'GET',
            headers: headers,
            mode: 'cors'
        })
        .then(res => res.json())
        .then(data => data.data.results);
    }
}

export default Services;