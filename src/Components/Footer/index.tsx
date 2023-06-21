import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { TelegramIcon, WaveIcon, smIcons } from "../../Configs/app";

export const Footer: React.FC<{}> = () => {

    const smallerScreen = useMediaQuery("(max-width: 200px)");

    return (
        <Container
            sx={{
                marginTop: { mobile: "5rem", desktop: "15rem" },
                marginBottom: "var(--sectionMargin)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--flexGap)",
            }}
        >
            {/* Footer Heading */}
            <Typography
                variant="h2"
                color={"#FFFFFF"}
                fontFamily={"Fractul"}
                fontWeight={500}
                lineHeight={1.4}
                textAlign={"center"}
                whiteSpace={"normal"}
                sx={{
                    fontSize: { mobile: "14px", miniTablet: "20px", tablet: "30px", desktop: "40px" }
                }}
            >
                Hire me Let’s Create Magic!
            </Typography>

            {/* Text Me Button */}
            <Box
                display={(smallerScreen) ? "none" : "block"}
                marginLeft={"auto"}
                marginRight={"auto"}
            >
                <Grid
                    container
                    component={"button"}
                    width={"fit-content"}
                    gap={"0.5rem"}
                    padding={"0.5rem"}
                    borderRadius={"20px"}
                    alignItems={"center"}
                    flexWrap={"nowrap"}
                >
                    <Grid item>
                        <WaveIcon />
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Poppins"}
                            fontWeight={500}
                            lineHeight={1.5}
                            color={"rgba(0, 0, 0, 0.5)"}
                            sx={{
                                fontSize: "14px",
                            }}
                        >
                            Text me
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TelegramIcon />
                    </Grid>
                </Grid>
            </Box>
            <hr
                style={{
                    width: "100%",
                }}
            />

            {/* Social Media Icons */}
            <Grid
                container
                justifyContent={"center"}
                gap={".3rem"}
            >
                {smIcons.map((icon, i) => {
                    return (
                        <Grid
                            item
                            key={i}
                        >
                            <icon.img
                                style={{
                                    width: "70%",
                                }}
                            />
                        </Grid>
                    )
                })}
            </Grid>

            {/* Closing Body */}
            <Typography
                variant="subtitle2"
                color={"#FFFFFF"}
                textAlign={"center"}
                fontFamily={"Poppins"}
                fontWeight={400}
                lineHeight={1.5}
                sx={{
                    fontSize: { mobile: "5px", tablet: "14px"},
                    paddingTop: "4rem",
                    paddingBottom: {mobile: "4rem", laptop: "15rem"},
                }}
            >
                © God is the Greatest Designer
            </Typography>
        </Container >
    )
}