import { Link, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';


function Footer() {
    return (
        <Box mt={3} p={2}>
            <Typography align="center">
                <Divider />
                This website created by - <Link
                    color="primary"
                    href="https://www.linkedin.com/in/barak-gotesman-04424015b/"
                    target="_blank">
                     Barak Gotesman
                </Link>
                
            </Typography>
        </Box>
    )
}

export default Footer;
