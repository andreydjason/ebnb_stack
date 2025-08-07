import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  if (req.method === "GET") {
    const artigo = await prisma.artigo.findUnique({ where: { id } });
    if (!artigo) {
      return res.status(404).json({ error: "artigo not found" });
    }
    return res.status(200).json(artigo);
  }

  if (req.method === "PUT") {
    const { title, content, published } = req.body;
    const artigo = await prisma.artigo.update({
      where: { id },
      data: { title, content, published },
    });
    return res.status(200).json(artigo);
  }

  if (req.method === "DELETE") {
    await prisma.artigo.delete({ where: { id } });
    return res.status(204).end();
  }

  return res.status(405).json({ error: "Method not allowed" });
}
