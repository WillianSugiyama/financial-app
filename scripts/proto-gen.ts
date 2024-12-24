import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

const PROTO_DIR = path.join(process.cwd(), 'libs/common/src/proto');
const OUT_DIR = path.join(process.cwd(), 'libs/common/src/interfaces/proto');

async function generateTypes() {
  try {
    if (!fs.existsSync(OUT_DIR)) {
      fs.mkdirSync(OUT_DIR, { recursive: true });
    }

    const protoFiles = fs.readdirSync(PROTO_DIR)
      .filter(file => file.endsWith('.proto'));

    console.log('Found proto files:', protoFiles);

    for (const protoFile of protoFiles) {
      const protoPath = path.join(PROTO_DIR, protoFile);
      const outFile = path.join(OUT_DIR, protoFile.replace('.proto', '.ts'));

      console.log(`Generating types for ${protoFile}...`);

      const command = `protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
        --ts_proto_out=${OUT_DIR} \
        --ts_proto_opt=nestJs=true \
        --ts_proto_opt=fileSuffix=.ts \
        --proto_path=${PROTO_DIR} \
        ${protoFile}`;

      await execAsync(command);
      console.log(`Generated types at ${outFile}`);
    }

    const exportStatements = protoFiles
      .map(file => file.replace('.proto', ''))
      .map(basename => `export * from './${basename}';`)
      .join('\n');

    fs.writeFileSync(
      path.join(OUT_DIR, 'index.ts'),
      exportStatements + '\n'
    );

    console.log('Successfully generated all types!');
  } catch (error) {
    console.error('Error generating types:', error);
    process.exit(1);
  }
}

generateTypes();