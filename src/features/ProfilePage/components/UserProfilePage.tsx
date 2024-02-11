import { Container, Typography, Avatar, Grid, TextField, Button } from '@mui/material';
import { useProfilePage } from '../hooks/useProfilePage';

interface UserProfilePageProps {
  userId?: string; // replace with actual user id
}

const UserProfilePage = ({ userId }: UserProfilePageProps) => {

  const { user, handleChange, handleSubmit, editMode, setEditMode } = useProfilePage();
  
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Avatar alt={user.name} src={user.profilePicture || 'default-profile-image.jpg'} sx={{ width: 120, height: 120 }} />
        </Grid>
        <Grid item xs={12} sm={9} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <TextField label="Name" name="name" value={user.name} onChange={handleChange} fullWidth required sx={{ marginBottom: 2 }} />
              <TextField label="Email" name="email" value={user.email} onChange={handleChange} fullWidth required sx={{ marginBottom: 2 }} />
              <TextField label="Headline" name="headline" value={user.headline} onChange={handleChange} fullWidth required sx={{ marginBottom: 2 }} />
              <TextField label="Bio" name="bio" value={user.bio} onChange={handleChange} multiline fullWidth required sx={{ marginBottom: 2 }} />
              <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'flex-end' }}>
                Save
              </Button>
            </form>
          ) : (
            <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h4">{user.name}</Typography>
              <Button onClick={() => setEditMode(true)} variant="outlined" color="primary" >
                Edit
              </Button>
            </div>
              <Typography variant="body1">{user.email}</Typography>
              <Typography variant="h5">{user.headline}</Typography>
              <Typography variant="body1">{user.bio}</Typography>
            </>
          )}
        </Grid>   
      </Grid>
    </Container>
  );
};

export default UserProfilePage;
