-- AlterTable
ALTER TABLE `Consultancy` MODIFY `allow_name_surname` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_profession_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_age_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_gender_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_previous_consultancy_experience_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_email_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_ongoing_support_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_expectations_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_time_spent_issue_resolution_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE',
    MODIFY `allow_expertise_in_problem_field_check` ENUM('INCLUDE', 'EXCLUDE', 'REQUIRED') NOT NULL DEFAULT 'INCLUDE';
