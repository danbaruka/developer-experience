#!/bin/bash

# Script to add a new monthly changelog entry
# Usage: ./update-changelog.sh <version> <month> <year>

VERSION=$1
MONTH=$2
YEAR=$3

if [ -z "$VERSION" ] || [ -z "$MONTH" ] || [ -z "$YEAR" ]; then
    echo "Usage: $0 <version> <month> <year>"
    exit 1
fi

# Create the new changelog entry
NEW_ENTRY="## $VERSION - $MONTH $YEAR

### Added

- 

### Changed

- 

### Fixed

- 

### Removed

- 

### Security

- 

---

"

# Create a temporary file with the new entry
TEMP_FILE=$(mktemp)
echo "$NEW_ENTRY" > "$TEMP_FILE"

# Use Python to insert the entry at the correct position
python3 << EOF
import sys

# Read current changelog
with open('CHANGELOG.md', 'r') as f:
    content = f.read()
    lines = content.split('\n')

# Read new entry
with open('$TEMP_FILE', 'r') as f:
    new_entry = f.read()

# Find the first version entry (## X.Y or ## X.Y.Z)
insert_index = None
for i, line in enumerate(lines):
    if line.startswith('## ') and any(c.isdigit() for c in line):
        # Check if it's a version entry (not "## Structure")
        if not 'Structure' in line and not 'Developer Experience' in line:
            insert_index = i
            break

if insert_index is not None:
    # Insert new entry before the first version entry
    lines.insert(insert_index, new_entry.strip())
    updated_content = '\n'.join(lines)
else:
    # Fallback: insert after Structure section
    for i, line in enumerate(lines):
        if '---' in line and i > 10:  # After the structure section divider
            insert_index = i + 1
            break
    if insert_index:
        lines.insert(insert_index, new_entry.strip())
        updated_content = '\n'.join(lines)
    else:
        print("Could not find insertion point", file=sys.stderr)
        sys.exit(1)

# Write back
with open('CHANGELOG.md', 'w') as f:
    f.write(updated_content)

print(f"Successfully added changelog entry for $MONTH $YEAR")
EOF

# Cleanup
rm -f "$TEMP_FILE"

