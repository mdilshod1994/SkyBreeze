export default function (req, res, next) {
    const redirects = [
        {
            from: "/en",
            to: "/"
        }
    ]
    const redirect = redirects.find(r => r.from === req.url)
    if (redirect) {
        res.writeHead(301, { location: redirect.to })
        res.end()
    } else {
        next()
    }
}