/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // coincidiendo con todas las rutas de API
                source: "/api/:path*",
                headers: [
                  // omitido por brevedad...
                ]
            },
            {
                source: "/api/special-data",
                headers: [
                   { key: "Access-Control-Allow-Credentials", value: "false" },
                   { key: "Access-Control-Allow-Origin", value: "https://example.com" },
                   { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                   { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date" },
                ]
            }
        ]
    }
 
}

module.exports = nextConfig
