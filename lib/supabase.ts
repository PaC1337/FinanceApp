import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://myedrioxhmnjgmgxvowh.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZWRyaW94aG1uamdtZ3h2b3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTAwMjQsImV4cCI6MjAyNDU2NjAyNH0.e-Jk0TVcdkQtX0kkFIXPUR9g_Sm3ayX0N4h-RxiOvKw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})