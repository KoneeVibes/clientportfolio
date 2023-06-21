import { Box, Container, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import { services } from "../../Configs/app";
import "./styled.css"

export const About: React.FC<{}> = () => {

    const smallerScreens = useMediaQuery("(max-width: 280px)");

    return (
        <Container
            sx={{
                marginTop: "var(--sectionMargin)",
                marginBottom: "var(--sectionMargin)",
                background: "#F5F3F3",
                borderRadius: "18px",
                padding: { mobile: (smallerScreens) ? "0.5rem" : "2rem", tablet: "4rem" },
                display: "flex",
                flexDirection: "column",
                gap: (smallerScreens) ? "0.5rem" : "2rem",
            }}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap={(smallerScreens) ? "0.5rem" : "2rem"}
            >
                <Typography
                    variant="h3"
                    textAlign={"center"}
                    fontFamily={"Inter"}
                    fontWeight={"600"}
                    sx={{
                        fontSize: { mobile: "14px", miniTablet: "32px" },
                        lineHeight: { mobile: "52.5px", miniTablet: "100px" }
                    }}
                >
                    About me
                </Typography>
                <Typography
                    variant="body1"
                    whiteSpace={"normal"}
                    textAlign={"center"}
                    fontFamily={"Poppins"}
                    fontWeight={"300"}
                    sx={{
                        fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px" },
                        lineHeight: { mobile: "24.5px", miniTablet: "27px", tablet: "32px" }
                    }}
                >
                    I’m an experienced visual designer from Nigeria with a proven track record of three years,
                    I possess a wealth of expertise in crafting bespoke designs that effectively communicate
                    brand messages. My unwavering dedication to brand growth fuels my passion for creating
                    impactful designs. I am driven to deliver exceptional value and am eager to offer my services
                    pro bono to non-governmental organizations and philanthropic initiatives.
                    I have had the opportunity to create designs for various industries, including Oil and Gas,
                    Real Estate, Blockchain, Agriculture, Entertainment, and more. My strong interest
                    in Web3 has led me to pursue projects such as Building <Link>Lemonhq.xyz</Link>
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap={(smallerScreens) ? "0.5rem" : "2rem"}
            >
                <Typography
                    variant="h3"
                    textAlign={"center"}
                    fontFamily={"Inter"}
                    fontWeight={"600"}
                    sx={{
                        fontSize: { mobile: "14px", miniTablet: "32px" },
                        lineHeight: { mobile: "52.5px", miniTablet: "100px" }
                    }}
                >
                    My Services
                </Typography>
                <Grid
                    container
                    gap={"var(--flexGap)"}
                    paddingTop={"1rem"}
                    paddingBottom={"1rem"}
                >
                    {services.map((service, i) => {
                        return (
                            <Grid
                                key={i}
                                container item
                                className="serviceContainer"
                                alignItems={"center"}
                                justifyContent={"center"}
                                sx={{
                                    background: "#010101",
                                    padding: (smallerScreens) ? "10%" : "var(--cardPadding)",
                                    borderRadius: "19px",
                                    height: { mobile: "auto", laptop: "15.875rem" },
                                    cursor: "pointer"
                                }}
                                flex={1}
                                overflow={(smallerScreens) ? "hidden" : "visible"}
                                border={"1px solid #010101"}
                            >
                                <Typography
                                    color={"#FFFFFF"}
                                    overflow={(smallerScreens) ? "hidden" : "visible"}
                                    whiteSpace={"normal"}
                                    fontFamily={"Fractul"}
                                    fontWeight={"600"}
                                    textAlign={"center"}
                                    sx={{
                                        fontSize: { mobile: "15px", miniTablet: "24px", laptop: "32px" },
                                        lineHeight: { mobile: "18px", miniTablet: "36px", laptop: "38.4px" },
                                    }}
                                >
                                    {service}
                                </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Container >
    )
}