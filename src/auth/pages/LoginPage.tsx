import { Button, Grid, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      spacing={ 0 }
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid 
        item
        className="box-shadow"
        xs={ 3 }
        sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2 }}
      >

        <Typography variant="h5" sx={{ mb:1 }}>Login</Typography>

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
            <Grid container>
              <Grid>
                <Button variant='contained'>

                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>

      </Grid>


    </Grid>
  )
}
