/*
  Warnings:

  - Added the required column `short_description` to the `Consultancy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Consultancy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Consultancy` ADD COLUMN `allow_age_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_email_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_enable_video_by_requester` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `allow_expectations_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_expertise_in_problem_field_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_gender_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_name_surneame` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_ongoing_support_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_prefession_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_previous_consulancy_experience_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `allow_time_spent_issue_resolution_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    ADD COLUMN `enable_video_by_provider` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `long_dscription` TEXT NULL,
    ADD COLUMN `max_attachment_count` INTEGER NOT NULL DEFAULT 3,
    ADD COLUMN `max_time_minuets` INTEGER NOT NULL DEFAULT 20,
    ADD COLUMN `short_description` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
