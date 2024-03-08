import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Playground.module.css'; // Assuming you have the CSS file in the same directory

const Playground = () => {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState('');
    const router = useRouter();
    const userName = "guest@ubuntu:/home/user/documents# ";

    const handleCommandChange = (event) => {
        setCommand(event.target.value);
    };

    const addResponse = (response) => {
        setOutput((prevOutput) => prevOutput.slice(-500) + "\n" + userName + command + "\n" + response);
    };

    const handleSubmit = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            try {
                if (command.trim() === '') return;
                if (command.trim().toLowerCase() === 'cls' || command.trim().toLowerCase() === 'clear') {
                    // If the command is 'cls' or 'clear', clear the output
                    setOutput('');
                    setCommand('');
                    return;
                }

                const response = await fetch('/api/execute-command', {
                    method: 'POST',
                    body: command,
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                });

                if (response.ok) {
                    const data = await response.json();

                    if (data.redirect) {
                        router.push(data.redirect);
                        setCommand('');
                        setOutput('');
                    } else {
                        addResponse(data.response);
                    }
                } else {
                    addResponse('Error: Unable to execute the command.');
                }
            } catch (error) {
                console.error('Error occurred:', error);
                addResponse('Error: Unable to process the request.');
            }
            setCommand('');
        }
    };



    return (
        <div className={styles['playground-container']}>
            <div>
                <pre className={`${styles['playground-response']}`}>{output}</pre>
            </div>
            <div className={styles['playground-form']}>
                <span className={styles['playground-user']}>{userName}</span>
                <input
                    type="text"
                    width={30}
                    value={command}
                    onChange={handleCommandChange}
                    onKeyDown={handleSubmit}
                    className={styles['playground-input']}
                    placeholder="ls"
                />
                
            </div>
        </div>
    );
};

export default Playground;
