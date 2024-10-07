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
