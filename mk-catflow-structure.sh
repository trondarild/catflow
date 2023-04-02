#!/bin/bash

# Create directory structure
mkdir -p src/components
mkdir -p src/models
mkdir -p src/styles
mkdir -p src/utils

# Create source files
touch src/components/App.tsx
touch src/components/Diagram.tsx
touch src/components/Box.tsx
touch src/components/Arrow.tsx
touch src/components/TerminatorNode.tsx
touch src/components/Port.tsx

touch src/models/BoxModel.ts
touch src/models/ArrowModel.ts
touch src/models/TerminatorNodeModel.ts
touch src/models/PortModel.ts

touch src/styles/App.css
touch src/styles/Diagram.css
touch src/styles/Box.css
touch src/styles/Arrow.css
touch src/styles/TerminatorNode.css
touch src/styles/Port.css

touch src/utils/typeCheck.ts
touch src/utils/uuid.ts
