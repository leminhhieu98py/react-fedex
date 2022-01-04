import Grid from "@mui/material/Grid";
import classes from "./HeaderTitle.module.css";

const HeaderTitle = (props) => {
    return (
        <Grid item xs={12}>
            <div className={classes.title}>{props.children}</div>
        </Grid>
    );
};

export default HeaderTitle;
