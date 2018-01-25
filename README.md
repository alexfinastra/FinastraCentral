# Prepare Windows:

- Create folder **D:/jsbin**

# Prepare Node.js:

- Goto https://nodejs.org/en/download/
- Download Windows Binary (.exe)
- Move `node.exe` to `/jsbin`

# Prepare NPM.js

- Goto https://github.com/npm/npm/releases/latest
- Download Source code (zip)
- Extract zip to `/jsbin` (in this case, my NPM extracted folder is: **/npm-3.10.8**)

# Prepare: npm.cmd

- Create batch-file inside `/jsbin` with name `npm.cmd` or `npm.bat`

copas (copy-paste) this to npm batch file:
```batch
@echo off
node "%~dp0npm-3.10.8\bin\npm-cli.js" %*
```

# Prepare cli (Finishing):

- Add **D:/jsbin** to Windows **env-path** ([howto](https://www.google.com/search?q=windows+add+env+variable))

Open Windows command-prompt (close first, if u already open one).

test node:
```batch
node --version
```

test npm:
```batch
npm --version
```

# FinastraCentral

