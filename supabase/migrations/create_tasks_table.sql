/*
      # Create tasks table

      1. New Tables
        - `tasks`
          - `id` (uuid, primary key)
          - `title` (text, not null)
          - `category` (text, not null)
          - `completed` (boolean, default false)
          - `created_at` (timestamp, default now())
      2. Security
        - Enable RLS on `tasks` table
        - Add policy for authenticated users to read and write their own tasks
    */

    CREATE TABLE IF NOT EXISTS tasks (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title text NOT NULL,
      category text NOT NULL,
      completed boolean DEFAULT false,
      created_at timestamptz DEFAULT now()
    );

    ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

    CREATE POLICY "Users can manage their tasks"
      ON tasks
      FOR ALL
      TO authenticated
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
