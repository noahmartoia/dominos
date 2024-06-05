import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mfdzcnjzstjkpcicoifg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mZHpjbmp6c3Rqa3BjaWNvaWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MDk3NzksImV4cCI6MjAzMzA4NTc3OX0.J-l3WU4aKjiuBYtBSEwHqpiiv1Trg__dZiI3jFuy6ow'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})