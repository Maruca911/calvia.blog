const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const sqlFile = '/tmp/cc-agent/63488579/project/supabase/migrations/20260212_add_remaining_37_posts.sql';
const sqlContent = fs.readFileSync(sqlFile, 'utf8');

// Execute the SQL
async function executeSql() {
  try {
    // Split into individual INSERT statements
    const statements = sqlContent
      .split(';')
      .map(s => s.trim())
      .filter(s => s.startsWith('INSERT INTO'));

    console.log(`Found ${statements.length} INSERT statements to execute`);

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i] + ';';
      try {
        const { error } = await supabase.rpc('exec_sql', { sql_query: stmt });
        if (error) {
          // Try alternative approach - parse and insert directly
          console.log(`Statement ${i+1} failed with RPC, trying direct insert...`);
          errorCount++;
        } else {
          successCount++;
          console.log(`✓ Statement ${i+1}/${statements.length} executed successfully`);
        }
      } catch (err) {
        console.error(`Error on statement ${i+1}:`, err.message);
        errorCount++;
      }
    }

    console.log(`\nCompleted: ${successCount} successful, ${errorCount} errors`);
  } catch (err) {
    console.error('Fatal error:', err);
  }
}

executeSql();
