import { NavigateNext } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import Breadcrumbs from "./Breadcrumbs";
import { Box } from "@mui/system";


const Page = ({children, title, description}: any) => {

    const nav = useNavigate();

    return(

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{p: 3, mb: 2, borderRadius: 3, color:"#FFF", background: "linear-gradient(90deg, rgba(122, 193, 67, 0.89) 0%, rgb(0, 0, 0) 100%)"}}>
            <Breadcrumbs />
            <Typography variant="h2">{title}</Typography>
            <Typography variant="subtitle1">{description}</Typography>
          </Box>
          {children}
        </Container>
    )
}

export default Page;