/*
  Warnings:

  - You are about to drop the column `allow_live_vide` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the `_ConsultancyToRequest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `consultancyId` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ConsultancyToRequest` DROP FOREIGN KEY `_ConsultancyToRequest_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ConsultancyToRequest` DROP FOREIGN KEY `_ConsultancyToRequest_B_fkey`;

-- AlterTable
ALTER TABLE `Request` DROP COLUMN `allow_live_vide`,
    ADD COLUMN `allow_live_video` BOOLEAN NULL,
    ADD COLUMN `consultancyId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_ConsultancyToRequest`;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_consultancyId_fkey` FOREIGN KEY (`consultancyId`) REFERENCES `Consultancy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
