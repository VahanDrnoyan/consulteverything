/*
  Warnings:

  - You are about to drop the column `userId` on the `Request` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[consultantUserId]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `consultantUserId` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestUserId` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Request` DROP FOREIGN KEY `Request_userId_fkey`;

-- AlterTable
ALTER TABLE `Request` DROP COLUMN `userId`,
    ADD COLUMN `consultantUserId` VARCHAR(191) NOT NULL,
    ADD COLUMN `requestUserId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Request_consultantUserId_key` ON `Request`(`consultantUserId`);

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_requestUserId_fkey` FOREIGN KEY (`requestUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_consultantUserId_fkey` FOREIGN KEY (`consultantUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
