import { Link, Grid, Avatar, Container } from "@mui/material";
import { navItems } from "../../Configs/app";
import headshot from "../../Assets/headshotMini.svg";

export const Nav: React.FC = () => {
    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center"
            }}
        >
            <Avatar
                src={headshot}
                alt="headshot"
            />
            <Grid
                container
                spacing={8}
                justifyContent={"center"}
            >
                {navItems.map((item, i) => {
                    return (
                        <Grid key={i} item>
                            <Link>{item.name}</Link>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}