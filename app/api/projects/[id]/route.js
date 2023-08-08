import { connectToDB } from "../../../../utils/db";
import ConProject from "../../../../models/conProject";

export const DELETE = async (req, { params }) => {
  try {
    // Access the "origin" header directly from the request object
    // const origin = req.headers.get("origin");
    // console.log(origin)

    // // List of allowed origins
    // const allowedOrigins = ["http://localhost:3000/"];

    // if (true) {
    //     console.log("CORS CHECk DELETE");

    await connectToDB();
    const project = await ConProject.findByIdAndDelete(params.id);
    console.log(project, "PROJECT FROM DELETE");
    return new Response(JSON.stringify(project), { status: 200,
      // headers: {
      //   "access-control-allow-origin": "*",
      //   // Add other necessary CORS headers here
      //   },
       });
    // } else {
        // return new Response("Not allowed by CORS", {
        //     status: 403,
        //     headers: {
        //     // You can set appropriate headers for a forbidden response
        //     },
        // });
        // }
  } catch (error) {
    console.log(error, "MY ERROR");
  }
};

export const PATCH = async (req, { params }) => {
  console.log(params, "id from PARAMASSSSSSSSSSSS");
  const { name, description, tech, github, live, image, points, ytId } =
    await req.json();
  try {
    await connectToDB();
    const project = await ConProject.findByIdAndUpdate(params.id, {
      name,
      description,
      tech,
      github,
      live,
      image,
      points,
      ytId,
    });
    console.log(project, "PROJECT FROM PATCH");
    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    console.log(error, "MY ERROR");
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};

export const OPTIONS = async (req) => {
  try {
    return new Response(JSON.stringify({message: "ok"}), {
      status: 200,
})
  } catch (error) {
    console.log(error, "MY ERROR");
  }
};
