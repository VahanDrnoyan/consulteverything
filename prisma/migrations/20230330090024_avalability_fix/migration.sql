/*
  Warnings:

  - You are about to drop the column `start_data` on the `Availability` table. All the data in the column will be lost.
  - Added the required column `end` to the `Availability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Availability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Availability` DROP COLUMN `start_data`,
    ADD COLUMN `end` DATETIME(3) NOT NULL,
    ADD COLUMN `start` DATETIME(3) NOT NULL;
