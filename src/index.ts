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