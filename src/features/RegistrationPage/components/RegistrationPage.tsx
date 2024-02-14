import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from '@mui/material';
import { RegistrationInputs, RegistrationValidationSchema } from '../constant';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { TRegistrationValues } from '../types';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../Theme/theme';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const RegistrationPage = () => {
  const [regInputs, setRegInputs] =
    useState<typeof RegistrationInputs>(RegistrationInputs); // we need to put it in state so that we can control the state of the password visibility

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(RegistrationValidationSchema),
  });

  //for now we would just log the value till there is an api connection
  const onSubmit = handleSubmit((data) => console.log(data));

  const togglePasswordVisibility = (id: string) => {
    const updatedInputs = regInputs.map((input) => {
      if (input.id === id) {
        return {
          ...input,
          isPasswordShown: !input.isPasswordShown,
          type: input.isPasswordShown ? 'password' : 'text',
        };
      }
      return input;
    });

    setRegInputs(updatedInputs as typeof RegistrationInputs);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} sm={9}>
            <Card sx={{ minWidth: 275, bgcolor: 'background.paper' }}>
              <CardHeader
                title="Tech Resume Pro"
                subheader="Please login to continue."
                sx={{ color: 'text.primary' }}
              />
              <CardContent>
                <form onSubmit={onSubmit}>
                  {regInputs.map((input) => {
                    const {
                      name,
                      label,
                      id,
                      type,
                      isPasswordShown,
                      isPasswordField,
                    } = input;

                    return (
                      <TextField
                        key={id}
                        label={label}
                        name={name}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        error={!!errors[name]}
                        helperText={errors[name]?.message}
                        {...register(name as keyof TRegistrationValues)}
                        type={type}
                        InputProps={{
                          endAdornment: isPasswordField ? (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                onClick={() =>
                                  togglePasswordVisibility(input.id)
                                }
                                sx={{ color: 'text.secondary' }}
                              >
                                {isPasswordShown ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ) : null,
                        }}
                      />
                    );
                  })}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ alignSelf: 'flex-end' }}
                  >
                    Save
                  </Button>

                  <Box
                    textAlign="center"
                    marginTop={3}
                    sx={{ color: 'text.secondary' }}
                  >
                    <Link
                      href="/forgot-password"
                      color="inherit"
                      variant="body1"
                    >
                      Forgot Password?
                    </Link>
                  </Box>
                  <Box
                    textAlign="center"
                    marginTop={1}
                    sx={{ color: 'text.secondary' }}
                  >
                    <Link href="/login" color="inherit" variant="body1">
                      Login
                    </Link>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default RegistrationPage;
