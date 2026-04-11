/*
  Warnings:

  - You are about to drop the column `class` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `Follow` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `img` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_userId_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "class",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "content",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "sender" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Follow";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
