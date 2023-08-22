import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ message: "ok" });
};
