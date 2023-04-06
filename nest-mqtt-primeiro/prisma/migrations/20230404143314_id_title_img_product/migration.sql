/*
  Warnings:

  - You are about to drop the column `email` on the `testTable` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `testTable` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `testTable` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `testTable` table. All the data in the column will be lost.
  - Added the required column `image` to the `testTable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `testTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `testTable` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `password`,
    DROP COLUMN `role`,
    ADD COLUMN `image` VARCHAR(127) NOT NULL,
    ADD COLUMN `title` VARCHAR(63) NOT NULL;
