import {MigrationInterface, QueryRunner} from "typeorm";

export class weight1664340668723 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_product" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "enabled" boolean NOT NULL DEFAULT (1), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "featuredAssetId" integer, "customFieldsCatimageurl" varchar(255) DEFAULT ('null'), "customFieldsWeight" integer DEFAULT (0), CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8" FOREIGN KEY ("featuredAssetId") REFERENCES "asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_product"("createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl") SELECT "createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl" FROM "product"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "enabled" boolean NOT NULL DEFAULT (1), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "featuredAssetId" integer, "customFieldsCatimageurl" varchar(255), "customFieldsWeight" integer DEFAULT (0), CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8" FOREIGN KEY ("featuredAssetId") REFERENCES "asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_product"("createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl", "customFieldsWeight") SELECT "createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl", "customFieldsWeight" FROM "product"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`, undefined);
        await queryRunner.query(`CREATE TABLE "product" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "enabled" boolean NOT NULL DEFAULT (1), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "featuredAssetId" integer, "customFieldsCatimageurl" varchar(255) DEFAULT ('null'), "customFieldsWeight" integer DEFAULT (0), CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8" FOREIGN KEY ("featuredAssetId") REFERENCES "asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "product"("createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl", "customFieldsWeight") SELECT "createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl", "customFieldsWeight" FROM "temporary_product"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_product"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`, undefined);
        await queryRunner.query(`CREATE TABLE "product" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "enabled" boolean NOT NULL DEFAULT (1), "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "featuredAssetId" integer, "customFieldsCatimageurl" varchar(255) DEFAULT ('null'), CONSTRAINT "FK_91a19e6613534949a4ce6e76ff8" FOREIGN KEY ("featuredAssetId") REFERENCES "asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "product"("createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl") SELECT "createdAt", "updatedAt", "deletedAt", "enabled", "id", "featuredAssetId", "customFieldsCatimageurl" FROM "temporary_product"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_product"`, undefined);
   }

}
