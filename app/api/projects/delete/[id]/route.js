import { connectToDB } from "../../../../../utils/db";
import ConProject from "../../../../../models/conProject";


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