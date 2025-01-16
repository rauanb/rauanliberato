import { Button, Container, Typography } from "@mui/material"
import Avatar from '../../../../assets/images/perfil_square.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

// Icones adicionados manualmente do site mui
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        borderRadius: "50%",
        width: "100%"
    }))

    return (
        <>
            <StyledHero>
              <Container>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                      <Grid size={{xs: 12, md: 4}}>
                        <StyledImg src={Avatar} />
                      </Grid>
                      <Grid size={{xs: 12, md: 8}}>
                        <Typography color="primary" variant="h1" textAlign="center">Rauan Liberato</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">Engenheiro Frontend</Typography>
                        <Grid container spacing={2} display="flex" justifyContent="center">
                          <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                            <Button>
                              <DownloadIcon />
                              Download CV
                            </Button>
                          </Grid>
                          <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                            <Button>
                              <EmailIcon />
                              Contato
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                  </Grid>
                </Box>
              </Container>
            </StyledHero>
        </>
    )
}
export default Hero

