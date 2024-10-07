# Repo Condenser

A NPM package that condenses the entire code in a repository into a single markdown file.

## Installation

```bash
npm install repo-condenser
```

## Usage

1. Create a `condense.config.json` file in your repository root (optional):

```json
{
  "ignoreFolders": ["/some-folder-to-ignore", "/another-folder"]
}
```

2. Run the condenser:

```bash
npx repo-condenser
```

This will create a `repo_contents.md` file in your repository root containing all the code from your repository.

Note: The condenser automatically respects your `.gitignore` file and the folders specified in `condense.config.json`.
