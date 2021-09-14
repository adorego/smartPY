import {makeStyles, Theme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link"
import React, { FC, useState} from "react";

const useStyles = makeStyles((theme:Theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export interface LoginProps{
    email?:string;
    onSubmit(arg:any):any;
}

export interface User{
    email:string;
    password:string;
}

export const Login:FC<LoginProps> = ({email="", onSubmit}) => {
    const classes = useStyles();
    const [user, setUser] = useState({email:email, password:""});
    const handlerEmailChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUser(user =>({
            ...user,
            email: e.target.value
        }));
    };
    const handlerPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setUser(user =>({
            ...user,
            password: e.target.value
          }));
    };
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Bienvenido!
            </Typography>
            <div className={classes.paper}>
                <form className={classes.form} id="login" onSubmit={() => onSubmit(user)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={user.email}
                        onChange={handlerEmailChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Clave"
                        type="password"
                        id="password"
                        autoComplete="clave"
                        value={user.password}
                        onChange={handlerPasswordChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Ingresar
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Olvidé mi clave
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Registrate"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
};

