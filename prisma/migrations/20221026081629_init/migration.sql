-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `role` ENUM('USER', 'MODERATOR', 'ADMIN', 'SUPERADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Consultancy` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `short_description` VARCHAR(191) NOT NULL,
    `long_description` TEXT NULL,
    `max_time_minuets` INTEGER NOT NULL DEFAULT 20,
    `max_attachment_count` INTEGER NOT NULL DEFAULT 3,
    `enable_video_by_provider` BOOLEAN NOT NULL DEFAULT true,
    `allow_enable_video_by_requester` BOOLEAN NOT NULL DEFAULT true,
    `allow_name_surname` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_profession_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_age_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_gender_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_previous_consultancy_experience_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_email_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_ongoing_support_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_expectations_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_time_spent_issue_resolution_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `allow_expertise_in_problem_field_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `consultantId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consultancy` ADD CONSTRAINT `Consultancy_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_consultantId_fkey` FOREIGN KEY (`consultantId`) REFERENCES `Consultancy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
