import { useForm } from "react-hook-form";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider } from '@mui/material/styles';
import { useLoginPage } from "../hooks/useLoginPage";
import { FormValues } from "../types/LoginFormTypes";
import { theme } from "../../Theme/theme";


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { showPassword, togglePasswordVisibility, onSubmit, loading } =
    useLoginPage();

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ bgcolor: 'background.default' }}
      >
        <Card sx={{ minWidth: 275, bgcolor: 'background.paper' }}>
          <CardHeader title="Tech Resume Pro" subheader="Please login to continue." sx={{ color: 'text.primary' }} />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                id="email"
                label="Email Address"
                type="email"
                autoComplete="email"
                variant="outlined"
                margin="normal"
                fullWidth
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
                error={!!errors.email}
                helperText='Email is required and must be a valid email address.'
                sx={{ input: { color: 'text.primary' } }}
              />
              <TextField
                required
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                variant="outlined"
                margin="normal"
                fullWidth
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText='Password is required and must be a valid password.'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        sx={{ color: 'text.secondary' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { color: 'text.primary' },
                }}
              />
              <Box textAlign='center' marginTop={2}>
                <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ bgcolor: 'primary.main' }}>
                  {loading ? <CircularProgress size={24} /> : "Login"}
                </Button>
              </Box>
              <Box textAlign='center' marginTop={2} sx={{ color: 'text.secondary' }}>
                <a href="/forgot-password" style={{ color: 'inherit' }}>Forgot Password?</a>
              </Box>
              <Box textAlign='center' marginTop={2} sx={{ color: 'text.secondary' }}>
                <a href="/create-account" style={{ color: 'inherit' }}>Create an account</a>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;