import clientPromise from "@/lib/mongo";
async function create(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("Paxful");
    console.log("body", body);

    // Check if the email already exists in the database
    // const existingUser = await db.collection("users").findOne({
    //   name: body?.name,
    //   email: body?.email,
    //   volunteer: body?.volunteer,
    // });

    // if (existingUser) {
    //   // If the name exists
    //   return Response.json(
    //     { message: "You have already volunteered" },
    //     { status: 400 }
    //   );
    // }

    // Check if any required field is missing
    // const requiredFields = ["name", "email"];
    // for (const field of requiredFields) {
    //   if (!body[field]) {
    //     return Response.json(
    //       { message: `${field} is required` },
    //       { status: 400 }
    //     );
    //   }
    // }

    // If the user does not exist by email or name Insert the new user into the database
    await db.collection("users").insertOne(body);

    return Response.json(
      { message: "Logged in  Successfully!!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { message: "An error occurred while logging in" },
      { status: 500 }
    );
  }
}

export { create as POST };
