import { pgTable, integer, text, varchar, serial } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
export const MockInterview = pgTable('mockinterview', { //name of the table ,{cols}
    id: integer('id').primaryKey().generatedByDefaultAsIdentity() ,
    jobMockResponse: text('jobMockResponse').notNull(),
    jobDescription: varchar('job_Description').notNull(),
    jobPosition: varchar('job_Position').notNull(),
    JobExperience: varchar('job_Experience').notNull(),
    createdBy: varchar('CreatedBy').notNull(),
    createdAt: varchar('CreatedAt'),
    mockId: varchar('mockId').notNull(),
});
