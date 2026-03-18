import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cobqmtujidfvjkyyowku.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvYnFtdHVqaWRmdmpreXlvd2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NDMyNzYsImV4cCI6MjA4OTExOTI3Nn0.xOTZjZ4-7Ot6Vg8fInVs3SG1gGwR524g4qYBXnESUyY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)