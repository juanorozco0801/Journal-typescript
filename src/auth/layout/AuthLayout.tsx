import { Grid, Typography } from '@mui/material';

interface IAuthLayout {
  children:  JSX.Element;
  title: string;
}

export const AuthLayout = ({children, title = '' }: IAuthLayout) => {
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

        <Typography variant="h5" sx={{ mb:1 }}>{ title }</Typography>
        {children}
      </Grid>
    </Grid>
  )
}
