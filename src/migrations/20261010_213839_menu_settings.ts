import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "menu_settings_meats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"translation" varchar,
  	"san_anselmo_only" boolean DEFAULT false
  );
  
  CREATE TABLE "menu_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "menu_settings_meats" ADD CONSTRAINT "menu_settings_meats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "menu_settings_meats_order_idx" ON "menu_settings_meats" USING btree ("_order");
  CREATE INDEX "menu_settings_meats_parent_id_idx" ON "menu_settings_meats" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "menu_settings_meats" CASCADE;
  DROP TABLE "menu_settings" CASCADE;`)
}
