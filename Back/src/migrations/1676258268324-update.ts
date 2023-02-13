import { MigrationInterface, QueryRunner } from "typeorm";

export class update1676258268324 implements MigrationInterface {
    name = 'update1676258268324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "foto" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "foto"`);
    }

}
