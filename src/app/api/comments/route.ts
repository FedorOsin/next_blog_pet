import { NextRequest, NextResponse } from "next/server";

let comments: any[] = [];

export async function GET() {
  return NextResponse.json(comments);
}

export async function POST(req: NextRequest) {
  const newComment = await req.json();
  comments.unshift(newComment);
  return NextResponse.json({ success: true });
}
