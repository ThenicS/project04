/*
  Warnings:

  - Added the required column `name` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "parentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
