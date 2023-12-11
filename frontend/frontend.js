async function allServers() {
        let response = await fetch('http://localhost:8080/all')
        let json = await response.json()

        // Clear all the contents from the target div
        document.getElementById('listAllServers').innerHTML = ''

        json.forEach(server => {
                displayServersInDiv('listAllServers', server)
        })
}

async function serverWithOS() {
        let price = document.getElementById('os').value
        let response = await fetch(`http://localhost:8080/server/os/${price}`)
        let json = await response.json()

        // Clear all the contents from the target div
        document.getElementById('listServersWithOS').innerHTML = ''

        json.forEach(server => {
                displayServersInDiv('listServersWithOS', server)
        })
}

async function serverWithPrice() {
        let price = document.getElementById('price').value
        let response = await fetch(`http://localhost:8080/server/price/${price}`)
        let json = await response.json()

        // Clear all the contents from the target div
        document.getElementById('listServersWithPrice').innerHTML = ''

        json.forEach(server => {
                displayServersInDiv('listServersWithPrice', server)
        })
}

// This function adds an entry to the result div-s
function displayServersInDiv(id, server) {
        let div = document.getElementById(id)

        let line = document.createElement('span')
        line.innerHTML = `<bold>Hosting:</bold> ${server['hosting']}, <bold>Description:</bold> ${server['description']}, <bold>Price</bold>: ${server['pricePerHour']}, <bold>OS:</bold> ${server['os']}<br>`

        div.appendChild(line)
}