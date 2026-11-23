import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { language, content, title } = await req.json();

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
};
