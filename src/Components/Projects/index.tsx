import { Box, Container, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import "./styled.css"
import { Arrow, BlockArrow, Students, events, projects } from "../../Configs/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Projects: React.FC<{}> = () => {

    const smallerScreens = useMediaQuery("(max-width: 280px)");
    const laptopScreenDownwards = useMediaQuery("(max-width: 1024px)");

    return (
        <Container
            sx={{
                background: "#F2EEEE",
                marginTop: "var(--sectionMargin)",
                marginBottom: "var(--sectionMargin)",
                padding: { mobile: (smallerScreens) ? "0.5rem" : "2rem", tablet: "4rem" },
                display: "flex",
                flexDirection: "column",
                gap: "var(--flexGap)",
            }}
        >
            {/* Projects Section Heading */}
            <Grid
                container
                alignItems={"center"}
                flexWrap={"nowrap"}
                gap={"2rem"}
                justifyContent={"space-between"}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Fractul"}
                    fontWeight={"500"}
                    lineHeight={"1.2"}
                    whiteSpace={"normal"}
                    sx={{
                        fontSize: { mobile: "16px", miniTablet: "24px", tablet: "35px", desktop: "55px", },
                        width: { laptop: "40%" },
                        flex: { mobile: 1, miniTablet: "unset" }
                    }}
                >
                    Here are some of my wor<span className="ks">ks</span>
                </Typography>
                <Link
                    underline="none"
                    fontFamily={"Fractul"}
                    fontWeight={500}
                    fontSize={"7px"}
                    lineHeight={"10.01px"}
                    color={"#000000"}
                    sx={{
                        display: { miniTablet: "none" }
                    }}
                    overflow={"hidden"}
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    flex={1}
                >
                    Click <span className="here">here</span> to Download CV
                </Link>
            </Grid>

            {/* Projects Category */}
            <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{
                    gap: { mobile: "2rem", miniTablet: "var(--flexGap)", desktop: "15rem" }
                }}
            >
                {/* Projects Category - Branding & Web Design */}
                {projects.map((project, i) => {
                    return (
                        <Grid
                            key={i}
                            container
                            sx={{
                                flexDirection: project.layout,
                            }}
                            gap={"var(--flexGap)"}
                            alignItems={"flex-end"}
                        >
                            <Grid
                                item
                                flex={1}
                                width={"100%"}
                            >
                                <project.img className="stretchWidth" />
                            </Grid>
                            <Grid
                                container item
                                flex={1}
                                sx={{
                                    flexDirection: "column",
                                    flexWrap: { mobile: "nowrap", tablet: "wrap" },
                                    paddingBottom: { laptop: "6rem" }
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    fontFamily={"Fractul"}
                                    fontWeight={500}
                                    lineHeight={1.2}
                                    whiteSpace={"normal"}
                                    sx={{
                                        fontSize: { mobile: "20px", desktop: "48px" }
                                    }}
                                >
                                    {project.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Fractul"}
                                    fontWeight={300}
                                    whiteSpace={"normal"}
                                    sx={{
                                        fontSize: { mobile: "11px", desktop: "24px" }
                                    }}
                                >
                                    {project.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })}

                {/* See more projects? */}
                <Box>
                    <Typography
                        variant="h3"
                        fontFamily={"Fractul"}
                        fontWeight={500}
                        lineHeight={1.43}
                        sx={{
                            fontSize: { mobile: "7px", tablet: "16px", desktop: "35px" }
                        }}
                    >
                        Want to see <span className="more">more?</span>
                    </Typography>

                    <Link
                        underline="none"
                        color={"#000000"}
                        fontFamily={"Fractul"}
                        fontWeight={500}
                        lineHeight={1.43}
                        fontSize={"16px"}
                        sx={{
                            display: { mobile: "none", laptop: "block" }
                        }}
                    >
                        <span className="arrow"><Arrow /></span>View my recent projects
                    </Link>
                </Box>

                {/* Projects Category - Event Planning & Management */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"var(--flexGap)"}
                    sx={{
                        marginLeft: {
                            mobile: (smallerScreens) ? "calc(-0.5rem - var(--pagePadding))" : "calc(-2rem - var(--pagePadding))",
                            tablet: "calc(-4rem - var(--pagePadding))",
                        },
                        marginRight: {
                            mobile: (smallerScreens) ? "calc(-0.5rem - var(--pagePadding))" : "calc(-2rem - var(--pagePadding))",
                            tablet: "calc(-4rem - var(--pagePadding))",
                        },
                    }}
                >
                    <Box>
                        <Typography
                            variant="h3"
                            textAlign={"center"}
                            lineHeight={1.43}
                            fontWeight={400}
                            fontFamily={"Fractul"}
                            sx={{
                                fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px", desktop: "32px" }
                            }}
                        >
                            Event Branding
                        </Typography>
                        <BlockArrow
                            style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: (laptopScreenDownwards) ? "4%" : "auto",
                            }}
                        />
                    </Box>
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        emulateTouch={true}
                        showArrows={false}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        renderIndicator={() => null}
                        renderArrowPrev={() => null}
                        renderArrowNext={() => null}
                        useKeyboardArrows={true}
                        preventMovementUntilSwipeScrollTolerance={true}
                    >
                        {events.map((event, i) => {
                            return (
                                <Box
                                    key={i}
                                    sx={{
                                        height: { mobile: "12.5rem", tablet: "36rem" },
                                        overflowY: "hidden",
                                        position: "relative",
                                        backgroundImage: `url(${event.img})`,
                                        backgroundSize: "contain",
                                    }}
                                >
                                </Box>
                            )
                        })}
                    </Carousel>
                </Box>
            </Box>
            {/* Education Section Heading */}
            <Grid
                container
                flexDirection={"column"}
                alignItems={"center"}
                gap={"var(--flexGap)"}
            >
                <Grid
                    item container
                    justifyContent={"center"}
                >
                    <Typography
                        variant="h2"
                        textAlign={"center"}
                        fontFamily={"Fractul"}
                        fontWeight={400}
                        whiteSpace={"normal"}
                        lineHeight={1.43}
                        sx={{
                            fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px", desktop: "32px" },
                            width: { desktop: "57%" }
                        }}
                    >
                        Graduated from Disgnplus Academy
                        with a Diploma In Visual Design
                    </Typography>
                </Grid>
                <Grid item>
                    <Students
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}