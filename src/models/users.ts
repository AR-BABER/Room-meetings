import { date, pgTable, varchar } from "drizzle-orm/pg-core";



export const usersTable = pgTable("users" , {
    uid : varchar("user_id" , {length : 256}).notNull().unique() ,
    userName : varchar("user_name", {length : 100}).notNull().unique() ,
    email : varchar("email" , {length : 100}).notNull().unique(),
    password : varchar("password" , {length : 256}).notNull() ,
    createdAt : date("created_at" ).notNull().defaultNow() ,
    createdBy : date("created_by" ).notNull().defaultNow() ,
    updatedAt : date("updated_at" ).notNull().defaultNow() ,
    updatedBy : date("updated_by" ).notNull().defaultNow() ,
})