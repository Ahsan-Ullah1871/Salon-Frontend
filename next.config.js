/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
			},
		],
	},
	env: {
		BASE_URL: "https://salonbd.vercel.app/api/v1/salon",
	},
};

module.exports = nextConfig;

