import fs from 'fs';
import path from 'path';


export default function handler(command) {
    if (command.startsWith("help")) {
        return helpHandler();
    } else if (command.startsWith("ls")) {
        return lsHandler(command);
    } else if (command.startsWith("pwd")) {
        return pwdHandler();
    } else if (command.startsWith("echo")) {
        return echoHandler(command);
    } else if (command.startsWith("whoami")) {
        return whoamiHandler();
    } else if (command.startsWith("sudo")) {
        return sudoHandler(command);
    } else if (command.startsWith("cat")) {
        return catHandler(command);
    } else if (command.startsWith("date")) {
        return dateHandler();
    } else if (command.startsWith("about")) {
        return aboutHandler();
    } else if (command.startsWith("version")) {
        return versionHandler();
    } else if (command.startsWith("fortune")) {
        return fortuneHandler();
    } else {
        return "Invalid command. Type 'help' to see available commands.";
    }
}

function helpHandler() {
    const commands = [
        {
            name: "ls",
            description: "List files and directories in the current directory.",
            usage: "ls [-l] [-a]",
        },
        {
            name: "cls",
            description: "Clear the terminal screen.",
            usage: "cls | clear",
        },
        {
            name: "ssh",
            description: "Connect to a remote server via SSH.",
            usage: "ssh <url>",
        },
        {
            name: "pwd",
            description: "Show the current working directory.",
            usage: "pwd",
        },
        {
            name: "echo",
            description: "Display a message.",
            usage: "echo <message>",
        },
        {
            name: "whoami",
            description: "Display the current user.",
            usage: "whoami",
        },
        {
            name: "sudo",
            description: "Execute a command with superuser privileges.",
            usage: "sudo <command>",
        },
        {
            name: "cat",
            description: "Display the contents of a file.",
            usage: "cat <file>",
        },
        {
            name: "date",
            description: "Display the current date and time.",
            usage: "date",
        },
        {
            name: "about",
            description: "Show information about this application.",
            usage: "about",
        },
        {
            name: "version",
            description: "Display the version number of this application.",
            usage: "version",
        },
        {
            name: "fortune",
            description: "Display a random fortune or quote.",
            usage: "fortune",
        },
    ];

    const helpMessage = `
  Available commands:\n${commands
            .map((cmd) => `  ${cmd.name}\t${cmd.description}`)
            .join("\n")}
  
  For detailed usage, use:\n${commands
            .map((cmd) => `  ${cmd.usage}`)
            .join("\n")}`;

    return helpMessage;
}



function lsHandler(command) {
    // Get the path to the public folder
    const publicFolderPath = path.join(process.cwd(), 'static');

    // Read the files in the public folder
    const files = fs.readdirSync(publicFolderPath);

    // Parse the command to check for flags
    const flags = command.split(" ").slice(1);

    // Check for -a or -la flag (show hidden files)
    const showHiddenFiles = flags.includes("-a") || flags.includes("-la") || flags.includes("-al");

    // Check for -l or -la flag (detailed file information)
    const showDetailedInfo = flags.includes("-l") || flags.includes("-la") || flags.includes("-al");

    // Filter out hidden files if not requested
    const filteredFiles = showHiddenFiles ? files : files.filter((file) => !file.startsWith("."));

    if (showDetailedInfo) {
        // Fetch detailed file information for all files (including hidden files)
        const detailedFiles = filteredFiles.map((file) => {
            const filePath = path.join(publicFolderPath, file);
            const fileStats = fs.statSync(filePath);

            return {
                name: file,
                type: fileStats.isDirectory() ? 'directory' : 'file',
                size: fileStats.size,
                owner: 'user', // Replace with actual owner information if available
                permissions: fileStats.mode.toString(8).slice(-3), // Convert to octal and take last 3 digits
            };
        });

        // Convert detailedFiles array to formatted string representation
        return detailedFiles.map((file) => {
            const typeIndicator = file.type === 'directory' ? 'd' : '-';
            return `${typeIndicator}${file.permissions} 1 ${file.owner} 1 ${file.size} ${file.name}`;
        }).join("\n");
    } else {
        // Default behavior without -l flag
        return filteredFiles.join("\n");
    }
}


function pwdHandler() {
    // Prototype data for demonstration purposes
    return "/home/user/documents";
}

function echoHandler(command) {
    // Extracting the message from the command
    const message = command.substring("echo".length).trim();
    return message;
}


function whoamiHandler() {
    // Prototype data for demonstration purposes
    return "guest";
}

function sudoHandler(command) {
    return "Permission denied.";
}


function catHandler(command) {
    // Extract the filename from the command
    const fileName = command.substring("cat".length).trim();

    // Get the path to the file in the static folder
    const filePath = path.join(process.cwd(), 'static', fileName);

    try {
        // Read the content of the file
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Return the content of the file
        return fileContent;
    } catch (err) {
        // If the file does not exist or there's an error, return an error message
        return `Error: File '${fileName}' not found.`;
    }
}


function dateHandler() {
    // Get the current date and time
    const currentDate = new Date();
    return currentDate.toString();
}

function aboutHandler() {
    // Return a short description or information about your application
    return "Hello! I am Sujal Choudhari. I am a hobby developer and a student.";
}

function versionHandler() {
    // Return the version number of your application
    return "Version 1.1.2";
}

function fortuneHandler() {
    // Prototype data for some fun fortunes related to programming
    const fortunes = [
        "A computer program does what you tell it to do, not what you want it to do.",
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "Computers are like bikinis. They save people a lot of guesswork.",
        "Computers make very fast, very accurate mistakes.",
        "Computers are like air conditioners. They work fine until you start opening windows.",
        "If at first you don't succeed; call it version 1.0.",
        "I would love to change the world, but they won't give me the source code.",
        "My software never has bugs. It just develops random features."
    ];

    // Pick a random fortune from the array
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}