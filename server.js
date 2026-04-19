import http from "node:http"

const PORT = 8000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    res.write("Data 1\n")
    res.write("Another data\n")

    if (req.url === "/") {
        res.end("Hello, From my api ❤️ 3", 'utf-8', () => console.log("responsed has finished."))
    } else {
        res.end()
    }
})


server.listen(PORT, () => console.log(`server running successfully on port ${PORT}`))