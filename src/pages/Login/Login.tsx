import { 
    DarkImageBackground,
    ImageBackground,
    ScreenWrapper, 
    Shadow 
} from "../../styled-components";

import { FormContainer, LoginForm, LoginWrapper } from "./login.styled.component.ts";
import { useForm } from "react-hook-form";

import backgroundImage from '../../assets/black_ai_bg.jpg';

import { TextField } from "@mui/material";

type FormData = {
    email: string;
    password: string;
};

const Login = () => {

    return(
        <ScreenWrapper>
            
            <DarkImageBackground url={`${backgroundImage}`}/>

            <LoginWrapper>

                <LoginForm>
                    <h1>¡Bienvenido a Orion!</h1>

                    <label>Email</label>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />

                    <label>Password</label>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />

                    <button>login</button>
                </LoginForm>
                
            </LoginWrapper>
        </ScreenWrapper>
    );
}

export default Login;