import { Box, Container, Typography } from "@mui/material";
import { Headshot, smIcons } from "../../Configs/app";

export const Hero: React.FC = () => {
    return (
        <Container
            sx={{
                display: "flex",
                marginTop: "var(--sectionMargin)",
                marginBottom: "var(--sectionMargin)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                    <Box>
                        <Typography
                            variant="h1"
                            color={"#FFFFFF"}
                            textAlign={"center"}
                        >
                            Hello!
                        </Typography>
                        <Typography
                            variant="h2"
                            color={"#FFFFFF"}
                            textAlign={"center"}
                        >
                            I’m Bright Emmanuel
                        </Typography>
                        <Typography
                            variant="h3"
                            color={"#FFFFFF"}
                            textAlign={"center"}
                        >
                            a Visual Designer
                        </Typography>
                    </Box>
                    <Headshot 
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                {smIcons.map((icon, i) => {
                    return (
                        <icon.img key={i} />
                    )
                })}
            </Box>
        </Container>
    )
}
