import http from "node:http"
import { fetchData } from "./db.js";

const PORT = 8080

const server = http.createServer(async (req, res) => {
    const urlParts = req.url.split("/")
    if (urlParts[1] === "api" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')

        const data = await fetchData()
        if (urlParts[2]) {
            const location = data.find(({ location }) => location.toLowerCase() === urlParts[2].toLowerCase())
            if (location)
                res.write(JSON.stringify(location) + "\n")
            else {
                res.statusCode = 404
                res.write(JSON.stringify("City not included."))
            }
        }
        else
            res.write(JSON.stringify(data) + "\n")

        res.end()
    } else {
        res.statusCode = 404
        res.end("The requested url not found")
    }
})

server.listen(PORT, () => console.log(`server running successfully on port ${PORT}`))