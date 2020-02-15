import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";

const classes = () => ({
    typography: {
      textAlign: "center",
      margin: 'auto',
    },
    paper: {
        padding: '50px 20px 67% 20px',
    }
  });

class ContentCard extends Component {
    handleScroll = (event) => {
        console.log(event);
    }
    render() {
        document.addEventListener('scroll', this.handleScroll);
        const {classes, direction} = this.props;
        return (
            <Slide direction={direction} in={true} timeout={1000}>
            <Paper elevation={4} className={classes.paper}>
              <Typography variant='h2' className={classes.typography}>We change your car's oil like you're Roylty. Add more boilerplate info to throw off the rows</Typography>
            </Paper>
          </Slide>
        );
    }
}

export default withStyles(classes)(ContentCard);