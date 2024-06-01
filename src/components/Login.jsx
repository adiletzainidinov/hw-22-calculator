import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (username === 'adilet' && password === '1999') {
      navigate('/calculate');
    } else {
      alert('Напишите: Username: adilet, password: 1999');
    }
  };
  return (
    <>
      <StyledDiv>
        <Box
          className="box"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              className="input"
              id="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <TextField
              className="input"
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <Button className="button" variant="contained" type="submit">
              Войти
            </Button>
          </div>
        </Box>
      </StyledDiv>
    </>
  );
};

export default Login;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  .box {
    padding: 50px 50px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
    width: 400px;
    .input {
      width: 100%;
    }
    .button {
      width: 100%;
      background-color: #c71b1b;
      margin-top: 30px;
    }
  }
`;
