import { connectToDB } from "/utils/db";
import ConProject from "/models/conProject";

export const GET = async (req) => {
    try {
        await connectToDB();
        const projects = await ConProject.find({});
        return new Response(JSON.stringify(projects), { status: 200 });
    } catch (error) {
        console.log(error, "MY ERROR");
    }
    };
    