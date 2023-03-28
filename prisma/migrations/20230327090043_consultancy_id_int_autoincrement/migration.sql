/*
  Warnings:

  - The primary key for the `Consultancy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Consultancy` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `consultancyId` on the `Tag` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_consultancyId_fkey`;

-- AlterTable
ALTER TABLE `Consultancy` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Tag` MODIFY `consultancyId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_consultancyId_fkey` FOREIGN KEY (`consultancyId`) REFERENCES `Consultancy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
