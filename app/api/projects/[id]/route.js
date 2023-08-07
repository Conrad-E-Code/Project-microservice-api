import { connectToDB } from "../../../../utils/db";
import ConProject from "../../../../models/conProject";


export const DELETE = async (req, { params }) => {
    console.log(params, "id from PARAMASSSSSSSSSSSS");
    try {
        await connectToDB();
        const project = await ConProject.findByIdAndDelete(params.id);
        console.log(project, "PROJECT FROM DELETE");
        return new Response(JSON.stringify(project), { status: 200 });
    } catch (error) {
        console.log(error, "MY ERROR");
    }
}

export const PATCH = async (req, { params }) => {
    console.log(params, "id from PARAMASSSSSSSSSSSS");
    const {name, description, tech, github, live, image} = await req.json();
    try {
        await connectToDB();
        const project = await ConProject.findByIdAndUpdate(params.id, {
            name,
            description,
            tech,
            github,
            live,
            image
        });
        console.log(project, "PROJECT FROM PATCH");
        return new Response(JSON.stringify(project), { status: 200 });
    }
    catch (error) {
        console.log(error, "MY ERROR");
    }
}