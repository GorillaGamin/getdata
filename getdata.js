(async () => {
    // Get the entire HTML of the page
    let pageData = document.documentElement.outerHTML;

    // Send data to your Node.js server
    await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ html: pageData })
    });

    console.log("Website data sent to Node.js server!");
})();
