import { connectToDB } from "/utils/db";
import ConProject from "/models/conProject";

export const dynamic = 'force-dynamic';
export const GET = async (req) => {
    try {
        // Access the "origin" header directly from the request object
        // const origin = req.headers.get("origin");

        // List of allowed origins
        // const allowedOrigins = ['http://localhost:3000'];

        // Check if the origin is in the allowed list
        // if (allowedOrigins.includes(origin)) {
            // console.log("CORS CHECk")
            await connectToDB();
            const projects = await ConProject.find({});
            return new Response(JSON.stringify(projects), {
                status: 200,
            });
        // } else {
        //     return new Response("Not allowed by CORS", {
        //         status: 403,
        //         headers: {
        //             // You can set appropriate headers for a forbidden response
        //         },
        //     });
        // }
    } catch (error) {
        console.log(error, "GET error pjms route");
    }
};
