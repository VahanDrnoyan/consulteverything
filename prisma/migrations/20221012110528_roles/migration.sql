/*
  Warnings:

  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('USER', 'MODERATOR', 'ADMIN', 'SUPERADMIN') NOT NULL DEFAULT 'USER';
