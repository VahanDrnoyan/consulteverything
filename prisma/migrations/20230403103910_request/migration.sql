-- CreateTable
CREATE TABLE `Request` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isCompleted` BOOLEAN NOT NULL DEFAULT true,
    `isCanceled` BOOLEAN NOT NULL DEFAULT true,
    `chatId` VARCHAR(191) NOT NULL,
    `name_surname` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `email` VARCHAR(191) NULL,
    `expertise` VARCHAR(191) NULL,
    `profession` VARCHAR(191) NULL,
    `time_spent_on_issue` VARCHAR(191) NULL,
    `expectations` TEXT NULL,
    `prevoiuos_experience` TEXT NULL,
    `allow_live_vide` BOOLEAN NULL,
    `ongoing_support_needed` BOOLEAN NULL,
    `gender` ENUM('MAIL', 'FEMAIL', 'OTHER') NULL,
    `scheduled_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ConsultancyToRequest` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ConsultancyToRequest_AB_unique`(`A`, `B`),
    INDEX `_ConsultancyToRequest_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConsultancyToRequest` ADD CONSTRAINT `_ConsultancyToRequest_A_fkey` FOREIGN KEY (`A`) REFERENCES `Consultancy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConsultancyToRequest` ADD CONSTRAINT `_ConsultancyToRequest_B_fkey` FOREIGN KEY (`B`) REFERENCES `Request`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
