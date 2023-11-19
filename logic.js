let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer {TOKEN}',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
    });
    const data = await result.json();

    shortURL.value = data.result.short_link2;

  
    console.log(data.result.short_link2);
}
