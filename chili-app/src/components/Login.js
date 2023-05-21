import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function Login({ setLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
            navigate("/chilis");
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '50px' }}>
            <Typography variant="h4">Login</Typography>
            <TextField margin="normal" fullWidth label="Username" onChange={e => setUsername(e.target.value)} />
            <TextField margin="normal" fullWidth label="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={login}>Log In</Button>
        </Container>
    );
}

export default Login;
