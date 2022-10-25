/*
  Warnings:

  - You are about to drop the column `long_dscription` on the `Consultancy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Consultancy` DROP COLUMN `long_dscription`,
    ADD COLUMN `long_description` TEXT NULL;
