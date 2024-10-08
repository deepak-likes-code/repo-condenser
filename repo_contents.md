# README.md

```
# Repo Condenser

Repo Condenser is a powerful NPM package that consolidates the entire codebase of a repository into a single Markdown file. It's perfect for creating quick overviews, documentation, or backups of your project's code structure.

## Features

- Condenses all code files in a repository into a single Markdown file
- Respects `.gitignore` rules
- Allows custom folder exclusions via a configuration file
- Ignores hidden files and directories
- Overwrites existing output file to ensure up-to-date content

## Installation

You can install Repo Condenser globally to use it across all your projects:

```bash
npm install -g repo-condenser
```

Or, install it as a dev dependency in your project:

```bash
npm install --save-dev repo-condenser
```

## Usage

### Command Line

If installed globally, you can run Repo Condenser from any directory:

```bash
repo-condenser
```

If installed as a project dependency, you can use npx:

```bash
npx repo-condenser
```

### In Your Project

You can also use Repo Condenser programmatically in your Node.js projects:

```javascript
const { condenseRepo } = require("repo-condenser");

condenseRepo()
  .then(() => console.log("Repository condensed successfully!"))
  .catch((error) => console.error("Error condensing repository:", error));
```

## Configuration

Repo Condenser uses two main sources for configuration:

### 1. .gitignore

Repo Condenser automatically respects your project's `.gitignore` file. Any patterns listed in `.gitignore` will be excluded from the condensed output.

### 2. condense.config.json

You can create a `condense.config.json` file in your project root to specify additional folders to ignore. Here's an example:

```json
{
  "ignoreFolders": ["/build", "/temp", "/logs"]
}
```

## Output

Repo Condenser creates a file named `repo_contents.md` in your project root. This file contains the condensed contents of your repository, with each file represented as follows:

```markdown
# path/to/file.ext
```

file contents

```

---
```

## Limitations

- Binary files are not included in the output
- Very large repositories may result in a large output file
- Symlinks are not followed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

---

We hope Repo Condenser helps you manage and understand your codebase better. Happy coding!

```

---

# package-lock.json

```
{
  "name": "repo-condensor",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "repo-condensor",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "ignore": "^6.0.2"
      },
      "devDependencies": {
        "@types/node": "^22.7.4",
        "typescript": "^5.6.2"
      }
    },
    "node_modules/@types/node": {
      "version": "22.7.4",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.7.4.tgz",
      "integrity": "sha512-y+NPi1rFzDs1NdQHHToqeiX2TIS79SWEAw9GYhkkx8bD0ChpfqC+n2j5OXOCpzfojBEBt6DnEnnG9MY0zk1XLg==",
      "dev": true,
      "dependencies": {
        "undici-types": "~6.19.2"
      }
    },
    "node_modules/ignore": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-6.0.2.tgz",
      "integrity": "sha512-InwqeHHN2XpumIkMvpl/DCJVrAHgCsG5+cn1XlnLWGwtZBm8QJfSusItfrwx81CTp5agNZqpKU2J/ccC5nGT4A==",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/typescript": {
      "version": "5.6.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.6.2.tgz",
      "integrity": "sha512-NW8ByodCSNCwZeghjN3o+JX5OFH0Ojg6sadjEKY4huZ52TqbJTJnDo5+Tw98lSy63NZvi4n+ez5m2u5d4PkZyw==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.19.8",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
      "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==",
      "dev": true
    }
  }
}

```

---

# package.json

```
{
  "name": "repo-condenser",
  "version": "1.0.1",
  "description": "A package that condenses repository contents into a single markdown file",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "bin": {
    "repo-condenser": "./dist/cli.js"
  },
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build",
    "condense": "node -e \"require('./dist/index.js').condenseRepo()\""
  },
  "keywords": [
    "repository",
    "condense",
    "markdown",
    "code",
    "documentation"
  ],
  "author": "Deepak Komma",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/deepak-likes-code/repo-condenser.git"
  },
  "bugs": {
    "url": "https://github.com/deepak-likes-code/repo-condenser/issues"
  },
  "homepage": "https://github.com/deepak-likes-code/repo-condenser#readme",
  "devDependencies": {
    "@types/node": "^14.14.31",
    "typescript": "^4.2.3"
  },
  "dependencies": {
    "ignore": "^5.1.8"
  }
}

```

---

# repo-condenser-1.0.1.tgz

```
�     ��ks��џ�+NT'3$(ꙡ��N���8��n3Y�@�H��܁4G���=�"))��4-a�H�co߻��K����nȄ��ދg������U�����g{�;�����>y_��z���	�LH?T�HxH��'y����H�wi<%1���%B�,��c�t�����,�	M�ܥ�J�&��K*^�0�h�Mn�ԏ2�'2�(Y�����B���e�����������0��i��i,�k����6�'|���+<� {8��_c��^�j�x���'y��>�Sry�ԗ�k���d]9f�|��O���"��F\�$t����,$���d�&���En�z�����,�~%ll!��j�R@��<��t[���R�H���u���R��Li�[р�"[�pU����Yʤ?��0C5���Q�bc�"L,27��ل�^����铜\�.NfiL&���dA����ڛrdO[��,Z��Gr��_�^�O�@lY�
*5^С�Er�|�C�!��l-}�PSAb��&lLU�PX	���p��)����	��7`�+h*:58q'<,s~�,�(iK+)M����YW�o��8���8��P��$#N
��z�mI�%��zc_����(Bب쭺���6146�r,�3�]��iy��|&�*F����y:j�K?�lcL��8b�3ة�q>�y"]%��ͨ��,p�q@�������>�錜�Ţ�5��f��j���3�q�{����N� _׆)(���KX�hȢ���2��_!i���z1�`�CLH��`L\�+�w������%�r��Y���(pZ�����y��m�iZ&}#�J�'�4vsƴs�s�V+���$��R!��E����2:�<D�����J�z�7Z����� ���ھjZ(T>2E6+�/�R�i�血��7s�|z(���j�h�w����)�Y�F1O���k�+��1jRIa����7*~�5��nC��9g!�)>-�ω[6;���g�D�{�Y����Y�ڤi�eB8��<n��GQ���r��(F{H�w,�n� ,��a�2��s������s����"���i�k�n�H��QHS�c��DK�CU�3�'>�FꝢ���@>�6T�Cu��H"&��;�������/	~z��N�`���&���jƝ�?39v����C�x~q��ĘgQ�RK�34j^����Stt;��`=�`���a�gV�<����:UT����!�s�]U %�/h�O
\[Vy�*L�/����n��6�L2����PVDM�5	֋ߐ�����-Q��y��ԭ E Q [+U�2�bj%��Y5U��R��M+sm[ݪJ+r�� �UԪ�R��u�v���.�XZXQ�J�]	M�`I
M_��-M#ش��Wb!�ůu,�}��u(��$c�j�����Ż�]��_n�Z���]��t��WkIZ�����Ӝ����:ϯDS�Z
5�Y�)��U�	4�`]�suH���ԵF�jVs�j����R�ĥ��&���-�4,1P�j�:/��
L蔆�?��YqEQ��{�*!Rk5[��?�d@i�8!l�$e-�]\��fV�n�[� H�� <�O��&z��@������ͧʚ�=e�w�w�[~�s����>Ń����6��p�?�F����!�`w���z�54X����m�/s$H��U)�����^�|+O��O|��V�I�.���Z_�I�;P��s��[��Z�Y�Q�d,
q��m	����8�cg�LH��D�6��zj )�P�aw�M����#�0��Q�uM�3����yA�f��r�ef��}!TU�WB������1W�yAi�_�������X`�y��n+!�3��� ��ղ4����w��3�@���e:����v���,��� �$�p�]&DFKR�	������gB�5L_ЄbW�h	߿)}��&�:���{��g�������}o��+PW�4���/��GY��AՋ�ɓ�������G��O��A���r�%]��[4�5*s'�+�}5o�c㛕����&*�;�RP��l'�����T��E�ә��(S�t�i��^�~(Z��.5�����Mz�������W�®��q�������� �o��	�����V Rǩ�&L@���M�YD~:{���������lO�)�R�!�X8��i`5�{U��<�R6I`)�̫�zω[MH��k�!�2:mRIg`?����%W��,�� ����r����s��m� ��q:9�@j�Ѻ~��{#`^S����\��+��>�">\@����RQ~�kA�������Q�5<��*��͏C��S+�wT�A \pz�7S:Q5L���I�t$��lZ�x�߻F�Z�q~�	�X����c�4�,"a��AʅfbY��8WWW�c�f�3"դ
G9�i�· PT@ȰH��*�����vp�u��
Pd���A�,�����rh��0����*�`�_c�0���<�ɼ�ժ�+K("5%B���q�B�5d� �/ȟ3���	-����(���J���?�1@NX�{��ռ:���+ɢ|Я�k;Nu�\�Dv[�J�\�jTk]��%� +s����V�� �"�k�X%0�r�Е+-�0�~�֯ 7�ߔq�+f�,�ܫ����*��kq�<Rx�%X���S�Dj>��S��|ږ��$p�5���W9c`JL�j=EG]���"5��Y�&�P!s �'W��i��JR�%:
����� ���xB��i��@S�Dh��$�F���V��*��m8it%�$�(�P����"tI �"�@�;VCBrU/�^�$�#o������AD��y���B���=�~0� � Fk� ����ɷ�{g[���w��RS�#��9��������&L�K��f�fe�	D���A]�'@,��uF������v� ��$���zH)���7�I���bM���6`�a�r��E�0�l4�9�(fCJAkR����,S!�W��kUrU��q�����J�%�g�RE櫗o�x=�M������7��H����L:T�]-���IbpDQ`�ā�k^~��٠$~O�����1O���F����3.�O
g<je��EO ��'	:K<���7��k���U�\��w�v7�������(VS�����w�\�?�������<�:ֺ)����D(���.�k_��������(�w����M��;4�ŭ��>�xcNZ���O}Z��-��'l���?��%kΝ��M���ٲ/��ܠ�6���@������]���������'yL��\U����$��C�u=���"g���H�L�~@I����qW�ހ����\8�/�q@n�dRx�jϗ���p�z�s��u$�w��ߝ���әw�Y�ac��n�A��*�>���*����̷;�z<�=�;9o#+6�~�êv�r�� �����{VR��q��������G]�V��(X�k���R�=*���;*�s���}�v<�^�G��p>م�����jw���l~���=ol�ok,���nk<�M��ZOzk��" ����q��E1m���ߴp�� 
,]�X� ��l�<�M�!%W���b���+և��\�Pʷnߵ��l�ͳy���� N  
```

---

# repo_contents.md

```

```

---

# src/cli.ts

```
#!/usr/bin/env node

import { condenseRepo } from './index';

condenseRepo();
```

---

# src/index.ts

```
import * as fs from 'fs/promises';
import * as path from 'path';
import ignore from 'ignore';

interface CondenseConfig {
    ignoreFolders: string[];
}


const binaryExtensions = new Set([
    '.zip', '.gz', '.tar',
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.ico', '.svg',
    '.pdf', '.doc', '.docx', '.ppt', '.pptx', '.xls', '.xlsx',
    '.exe', '.dll', '.so', '.dylib',
    '.mp3', '.mp4', '.avi', '.mov', '.mkv',
    '.ttf', '.otf', '.woff', '.woff2'
]);

function isBinaryPath(filePath: string): boolean {
    const ext = path.extname(filePath).toLowerCase();
    return binaryExtensions.has(ext);
}

async function isTextFile(filePath: string): Promise<boolean> {
    try {
        const buffer = await fs.readFile(filePath);
        const textDecoder = new TextDecoder('utf-8');
        textDecoder.decode(buffer);
        return true;
    } catch (error) {
        return false;
    }
}

async function readCondenseConfig(): Promise<CondenseConfig> {
    const configPath = path.join(process.cwd(), 'condense.config.json');
    try {
        const configContent = await fs.readFile(configPath, 'utf-8');
        return JSON.parse(configContent);
    } catch (error) {
        return { ignoreFolders: [] };
    }
}

async function readGitignore(): Promise<string[]> {
    const gitignorePath = path.join(process.cwd(), '.gitignore');
    try {
        const gitignoreContent = await fs.readFile(gitignorePath, 'utf-8');
        return gitignoreContent.split('\n').filter(line => line.trim() !== '' && !line.startsWith('#'));
    } catch (error) {
        return [];
    }
}

function shouldIgnore(filePath: string, ignoreRules: string[]): boolean {
    const ig = ignore().add(ignoreRules);
    return ig.ignores(filePath);
}

function isHidden(filePath: string): boolean {
    return path.basename(filePath).startsWith('.');
}

async function processDirectory(dir: string, output: string[], ignoreRules: string[]): Promise<void> {
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(dir, file.name);
        const relativePath = path.relative(process.cwd(), filePath);

        if (isHidden(filePath) || shouldIgnore(relativePath, ignoreRules) || isBinaryPath(filePath)) {
            continue;
        }

        if (file.isDirectory()) {
            await processDirectory(filePath, output, ignoreRules);
        } else if (file.isFile()) {
            if (await isTextFile(filePath)) {
                const content = await fs.readFile(filePath, 'utf-8');
                output.push(`# ${relativePath}\n\n\`\`\`\n${content}\n\`\`\`\n\n---\n`);
            }
        }
    }
}


async function condenseRepo(): Promise<void> {
    const config = await readCondenseConfig();
    const gitignoreRules = await readGitignore();
    const ignoreRules = [...gitignoreRules, ...config.ignoreFolders];

    const output: string[] = [];
    await processDirectory(process.cwd(), output, ignoreRules);

    const outputPath = path.join(process.cwd(), 'repo_contents.md');

    try {
        await fs.writeFile(outputPath, output.join('\n'), { flag: 'w' });
        console.log(`Repository contents have been condensed into ${outputPath}`);
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}

export { condenseRepo };
```

---

# tsconfig.json

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}

```

---
