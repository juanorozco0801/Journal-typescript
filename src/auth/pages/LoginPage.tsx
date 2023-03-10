import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link  } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{mt:2}} >
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Email"
              fullWidth                
            />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              placeholder="Contraseña"
              fullWidth                       
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant='contained' fullWidth>
                <Google/>
                <Typography sx={{ ml:1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Don't have an account? 
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                SignUp
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
