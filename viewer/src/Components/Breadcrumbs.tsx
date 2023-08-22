import { Link, Typography } from "@mui/material";
import { useMatches } from "react-router-dom";
import { Breadcrumbs as BC} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";


const Breadcrumbs = () => {
    let matches = useMatches();
    let crumbs = matches
      // first get rid of any matches that don't have handle and crumb
      .filter((match: any) => Boolean(match.handle?.crumb))
      // now map them into an array of elements, passing the loader
      // data to each one
      .map((match: any) => match.handle.crumb(match.data));
  
    return (
        <BC
        maxItems={3}
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        color="#FFF"
        >
        {crumbs.map((crumb, index): any => (
            // <Link underline="hover" color="primary">{crumb}</Link>
            <>{crumb}</>
        ))}

        </BC>
    );
  }

export default Breadcrumbs;