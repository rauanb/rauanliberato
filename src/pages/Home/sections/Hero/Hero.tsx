import { Container, Typography } from "@mui/material"
import Avatar from '../../../../assets/images/perfil_square.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

// Icones adicionados manualmente do site mui
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        // backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        borderRadius: "50%",
        width: "80%",
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        margin: "0 auto",

        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
              <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                      <Grid size={{xs: 12, md: 5}}>
                        <StyledImg src={Avatar} />
                      </Grid>
                      <Grid size={{xs: 12, md: 7}}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Rauan Liberato</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Engenheiro Frontend</Typography>
                        <Grid container spacing={2} display="flex" justifyContent="center">
                          <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                            <StyledButton>
                              <DownloadIcon />
                              <Typography>
                                Download CV
                              </Typography>
                            </StyledButton>
                          </Grid>
                          <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                            <StyledButton>
                              <EmailIcon />
                              <Typography>
                                Contato
                              </Typography>
                            </StyledButton>
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

