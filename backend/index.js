const express = require('express')
const app = express()
const cors = require('cors')

// Load the JSON data from `data.json`. The following `data`
// variable is therefore a JSON object
const data = require('./data.json')
const {json} = require("express");

// Specify which port we want our backend to listen on
const port = 8080

// Use the CORS middleware (we don't explicitly use it here, but it's to make sure
// that we won't get any weird CORS errors when fetch()-ing from the browser)
app.use(cors())

// We also want to use the JSON middleware
app.use(json())

// The following registers a mapping for a 'GET' request, which should return an array
// of all the servers in the data JSON
app.get('/all', (req, res) => {
        return data['servers']
})

// The following is also a GET mapping, but this one contains a URL parameter (`:system`)
// We use this endpoint to search for servers based on their operating system
app.get('/server/os/:system', (req, res) => {
        let operatingSystem = req.params['system']

        // Here, we just filter the server array by their 'os' parameter comparing it to the URL parameter
        res.json(data['servers'].filter(server => server['os'] === operatingSystem))
})

app.get('/server/price/:priceValue', (req, res) => {
        let price = req.params['priceValue']

        // Find all servers with a price lower or equal to the URL parameter's value
        res.json(data['servers'].filter(server => server['pricePerHour'] <= price))
})

// Make the backend listen at the specified port.
app.listen(port, () => {
        console.log(`Server up and running on port ${port}.`)
})