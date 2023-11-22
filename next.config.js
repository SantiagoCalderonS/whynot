/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // coincidiendo con todas las rutas de API
                source: "/api/:path*",
              headers: [
                 {
                     key: "Access-Control-Allow-Credentials",
                     value: "true"
                 },
                 {
                     key: "Access-Control-Allow-Origin",
                     value: "*" // reemplaza esto por tu origen real
                 },
                 {
                     key: "Access-Control-Allow-Methods",
                     value: "GET,DELETE,PATCH,POST,PUT"
                 },
                 {
                     key: "Access-Control-Allow-Headers",
                     value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
                 }
              ]
            }
        ]
    }
 
}

module.exports = nextConfig
