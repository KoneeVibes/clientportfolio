import { Link, Grid, Avatar, Container, Box, useMediaQuery } from "@mui/material";
import { navItems } from "../../Configs/app";
import headshot from "../../Assets/headshotMini.svg";
import "./styled.css";
import { useState, useEffect } from "react";

export const Nav: React.FC<{}> = () => {

    const [isActive, setIsActive] = useState(false);
    const tabletScreenAndUpwards = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        if (tabletScreenAndUpwards) {
            setIsActive(false)
        }
    }, [tabletScreenAndUpwards])


    const handleIsActive = () => {
        setIsActive(!isActive);
        if (isActive) {
            document.body.style.overflowY = 'visible';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "var(--navHeight)",
                gap: "1rem",
            }}
        >
            <Avatar
                src={headshot}
                alt="headshot"
                sx={{
                    zIndex: (isActive) ? "10" : undefined,
                    maxWidth: "100%",
                    height: (tabletScreenAndUpwards) ? undefined : "auto",
                }}
            />
            <Grid
                container
                spacing={8}
                sx={{
                    position: { mobile: "fixed", tablet: "static" },
                    top: { mobile: "var(--navHeight)", tablet: undefined },
                    left: (isActive) ? "0" : "-150%",
                    flexDirection: { mobile: "column", tablet: "row" },
                    justifyContent: { tablet: "center" },
                    background: { mobile: "#000000", tablet: undefined },
                    height: { mobile: "100%", tablet: undefined },
                    paddingTop: (isActive) ? "var(--navHeight)" : undefined,
                    transition: "all 0.3s ease-in-out",
                }}
            >
                {navItems.map((item, i) => {
                    return (
                        <Grid
                            key={i} item
                            sx={{
                                textAlign: (isActive) ? "center" : "left",
                            }}
                        >
                            <Link
                                fontFamily={"Fractul"}
                                fontWeight={"400"}
                                lineHeight={"19.2px"}
                                color={"#FFFFFF"}
                                underline="none"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": { color: "#E7CD8E" },
                                    fontSize: { mobile: "16px", miniTablet: "24px", tablet: "16px" },
                                    wordBreak: "break-all",
                                }}
                            >
                                {item.name}
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
            <Box
                component={"button"}
                onClick={() => handleIsActive()}
                className={isActive ? "active" : undefined}
                sx={{
                    background: "none",
                    border: "none",
                    display: { mobile: "block", tablet: "none" },
                    overflow: "hidden",
                }}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </Box>
        </Container >
    )
}