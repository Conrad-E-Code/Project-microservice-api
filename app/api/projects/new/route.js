import { connectToDB } from "/utils/db";
import ConProject from "/models/conProject";
// import bcrypt, {hash} from "bcrypt";

export const POST = async (req) => {
    const {name, description, tech, github, live, image} = await req.json();
    try{
        console.log(name, description, tech, github, live, image, "MY TRY")
        await connectToDB();
        const proj = await ConProject.findOne({name});
        if (!proj) {
            console.log("NO PROJECT FOUND");
            const newProj = new ConProject({
                name,
                description,
                tech,
                github,
                live,
                image
            });
            await newProj.save();
            return new Response(JSON.stringify(newProj), { status: 201 });
        }
        return new Response(JSON.stringify({ error: "Project already exists" }), {
            status: 409,
        });
    } catch (error) {
        console.log(error, "MY ERROR")
    }

}