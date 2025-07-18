export async function getData(getThis, searchThis, page = 1, limit = 20) {
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
                if (!response.ok) {
                const errorBody = await response.text(); // try to get error response as text
                throw new Error(`HTTP ${response.status}: ${response.statusText} — ${errorBody} ${url}`);
            }
            const result = await response.json();
            // if (result.status ==='error') {console.log(result)}
            return result
        } catch (error) {
            console.error(error);
            return { error: true, message: error.message, status: 'error'};
        }
    }

    if (getThis === 'sotd') {
        const url = 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=1';
        return fetchData(url)

    }

    if (getThis === 'mostPopular') {
        const url = `https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=${limit}`;
        return fetchData(url)
    }

    if (getThis === 'search') {
        const url = `https://sneaker-database-stockx.p.rapidapi.com/sg/search?query=${searchThis}&page=${page}`
        const res = await fetchData(url)
        return res
    }
    if(getThis === 'similar') {
        const url = `https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords='${searchThis}'`
        const similar = await fetchData(url)
        return similar.slice(1)
    }
}	

export async function getGif() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=qrKcLjVL1aukwxouXEUlzJvOFZlMbQjw&s=funny random gif`,
    { mode: 'cors' }
  );
  const data = await response.json();
  console.log('Fetched URL:', data.data.images.original.url);
  return data.data.images.original.url; // Ensure this is returned
}