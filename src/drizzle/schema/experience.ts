import { date, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const experienceTable = pgTable('experience', {
  id: serial('id').primaryKey(),
  title: varchar('name', { length: 100 }).notNull(),
  date: date('date').notNull(),
});
