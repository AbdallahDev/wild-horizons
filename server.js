import http from "node:http"
import { fetchData } from "./db.js";

const PORT = 8080

const server = http.createServer(async (req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(await fetchData()) + "\n")
        res.end()
    } else {
        res.statusCode = 404
        res.end("The requested url not found")
    }
})


server.listen(PORT, () => console.log(`server running successfully on port ${PORT}`))