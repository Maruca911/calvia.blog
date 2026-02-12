#!/usr/bin/env python3
"""Apply all remaining Mallorca posts directly"""
import os
import sys

# Run the SQL directly
sql_file = '/tmp/cc-agent/63488579/project/supabase/migrations/20260212_add_remaining_37_posts.sql'

with open(sql_file, 'r') as f:
    sql_content = f.read()

# Print first 500 chars to verify
print("SQL Content (first 500 chars):")
print(sql_content[:500])
print(f"\n\nTotal SQL length: {len(sql_content)} characters")
print(f"Total lines: {sql_content.count('INSERT INTO')}")

# Write to stdout for piping
sys.stdout.write(sql_content)
