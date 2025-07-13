export async function getData() {
    const url = 'https://sneaker-database-stockx.p.rapidapi.com/stockxonly';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '36c3414fa1mshe650ab878f0dafbp1d814fjsn1047a36444ba',
            'x-rapidapi-host': 'sneaker-database-stockx.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}	