import {MigrationInterface, QueryRunner} from "typeorm";

export class productReview1664360447954 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "product_review" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "text" varchar NOT NULL, "rating" integer NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "product_review"`, undefined);
   }

}
