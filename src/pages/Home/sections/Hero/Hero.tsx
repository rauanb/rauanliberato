import { Button, Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from '../../../../assets/images/perfil_square.png'

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
                <Grid2 container spacing={2}>
                    <Grid2 item size={{xs: 12, md: 4}}>
                      <StyledImg src={Avatar} />
                    </Grid2>
                    <Grid2 item size={{xs: 12, md: 8}}>
                      <Typography color="primary" variant="h1" textAlign="center">Rauan Liberato</Typography>
                      <Typography color="primary" variant="h2" textAlign="center">Engenheiro Frontend</Typography>
                      <Grid2 container spacing={2} display="flex" justifyContent="center">
                        <Grid2 item size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                          <Button>
                            <DownloadIcon />
                            Download CV
                          </Button>
                        </Grid2>
                        <Grid2 item size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                          <Button>
                            <EmailIcon />
                            Contato
                          </Button>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                </Grid2>
              </Container>
            </StyledHero>
        </>
    )
}

export default Hero
