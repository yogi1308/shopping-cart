export async function getData(getThis, searchThis, page = 1) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '36c3414fa1mshe650ab878f0dafbp1d814fjsn1047a36444ba',
            'x-rapidapi-host': 'sneaker-database-stockx.p.rapidapi.com'
        }
    };
    async function fetchData(url) {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result
        } catch (error) {
            console.error(error);
            return error
        }
    }
    const allUrls = ['https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=100', 
        `https://sneaker-database-stockx.p.rapidapi.com/stockx/sneakers?query=${''}`]

    if (getThis === 'sotd') {
        const url = 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=1';
        return fetchData(url)

    }

    if (getThis === 'mostPopular') {
        const url = 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=20';
        return fetchData(url)
    }

    if (getThis === 'search') {
        const url = `https://sneaker-database-stockx.p.rapidapi.com/sg/search?query=${searchThis}&page=${page}`
        return fetchData(url)
    }
}	