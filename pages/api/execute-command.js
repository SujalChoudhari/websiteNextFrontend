import handler from "./cmdHandler";

const executeCommand = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const command = req.body;

      // Check if the command is a redirection command
      if (command.trim().toLowerCase().startsWith('ssh ')) {
        const url = command.trim().slice(4); // Remove 'ssh ' from the command to get the URL
        res.status(200).json({ redirect: url });
        return;
      }

      const result = handler(command);

      res.status(200).json({ response: result });
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ response: 'Error executing the command.' });
    }
  } else {
    res.status(405).json({ response: 'Method Not Allowed' });
  }
};

export default executeCommand;
