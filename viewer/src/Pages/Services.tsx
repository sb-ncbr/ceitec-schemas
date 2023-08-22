import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Children } from "react";
import Page from "../Components/Page";

const MarketPlaceServiceCard = ({name, variant, description, img}: any) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 175}}
                    image={img}
                    title="cloud compute"
                    />
                <CardContent>
                    <Typography variant="h5" component="div">
                    {name}
                    {variant === "owned" ? <Chip label="Activated" color="success" variant="outlined" sx={{ml: 1}} /> : ""}
                    </Typography>
                    <Typography variant="body2">
                    {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">{variant !== "owned" ? "Request service" : "Manage service"}</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
const MarketplaceSection = ({name, children}: any) => {
    return (
        <><Typography variant="h3" sx={{ mt:3, mb: 2 }}>
            {name || "Compute"}
        </Typography><Paper elevation={0} sx={{mb:2, background: "none" }}>
                <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {Children.toArray(children).map((element: any) => (
                        <Grid2 xs={12} lg={4} sm={3} md={4}>
                            {element}
                        </Grid2>
                    ))}
                </Grid2>
            </Paper></>
    )
};

const Services = () => (
    <Page title="Services" description="Find most suitable service, learn, manage and request new services on your own!">
        <MarketplaceSection name="Compute">
            <MarketPlaceServiceCard name="Cloud compute" variant="owned" description={"Complete Infrastructure as a service. A place to run virtual machines and networks."} img={"https://placehold.co/600x400?text=Cloud+Compute"} />
            <MarketPlaceServiceCard name="Cloud compute" variant="owned" description={"Run your favorite applications in containers thanks to our Managed Kubernetes service."} img={"https://placehold.co/600x400?text=Container+Compute"} />
            <MarketPlaceServiceCard name="Supercomputer" variant="request" description={"Run your favorite applications in containers thanks to our Managed Kubernetes service."} img={"https://placehold.co/600x400?text=Container+Compute"} />
        </MarketplaceSection>
        <MarketplaceSection name="SensitiveCloud">
            <MarketPlaceServiceCard name="Sensitive Container Compute" variant="owned" description={"A place to run virtual machines and networks."} img={"https://placehold.co/600x400?text=Container+Compute"} />
            <MarketPlaceServiceCard name="Secured VPN Tunnel" variant="request" description={"A place to run virtual machines and networks."} img={"https://placehold.co/600x400?text=Secure+VPN"} />
        </MarketplaceSection>
    </Page>
)

export default Services;