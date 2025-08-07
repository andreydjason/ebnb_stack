import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const artigos = await prisma.post.findMany();
    return res.status(200).json(artigos);
  }

  if (req.method === "POST") {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const post = await prisma.post.create({ data: { title, content } });
    return res.status(201).json(post);
  }

  return res.status(405).json({ error: "Method not allowed" });
}