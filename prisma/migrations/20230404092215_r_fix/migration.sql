/*
  Warnings:

  - You are about to drop the column `scheduled_at` on the `Request` table. All the data in the column will be lost.
  - Added the required column `end` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Request` DROP COLUMN `scheduled_at`,
    ADD COLUMN `end` VARCHAR(191) NOT NULL,
    ADD COLUMN `start` VARCHAR(191) NOT NULL;
