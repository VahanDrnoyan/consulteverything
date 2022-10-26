-- AlterTable
ALTER TABLE `Consultancy` ALTER COLUMN `allow_name_surname` DROP DEFAULT,
    ALTER COLUMN `allow_profession_check` DROP DEFAULT,
    ALTER COLUMN `allow_age_check` DROP DEFAULT,
    ALTER COLUMN `allow_gender_check` DROP DEFAULT,
    ALTER COLUMN `allow_previous_consultancy_experience_check` DROP DEFAULT,
    ALTER COLUMN `allow_email_check` DROP DEFAULT,
    ALTER COLUMN `allow_ongoing_support_check` DROP DEFAULT,
    ALTER COLUMN `allow_expectations_check` DROP DEFAULT,
    ALTER COLUMN `allow_time_spent_issue_resolution_check` DROP DEFAULT,
    ALTER COLUMN `allow_expertise_in_problem_field_check` DROP DEFAULT;
