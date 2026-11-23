import { db } from "@/prisma/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { language, content, title } = await req.json();

  if (!title || !language || !content) {
    return NextResponse.json(
      {
        message: "Missing input fields",
        success: false,
      },
      {
        status: 400,
      },
    );
  }

  try {
    const url = nanoid(8);

    const snippet = await db.orm.public.Snippet.create({
      title,
      content,
      url,
      language,
    });

    return NextResponse.json(
      {
        success: true,
        snippet,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Server error",
        error,
      },
      {
        status: 500,
      },
    );
  }
};
 