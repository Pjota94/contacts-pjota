import { MigrationInterface, QueryRunner } from "typeorm";

export class update1676158213707 implements MigrationInterface {
    name = 'update1676158213707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "createdAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
