async function graphql(query) {
    let antwort = await fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query })
    });
    let daten = await antwort.json();
    return daten.data;
}
