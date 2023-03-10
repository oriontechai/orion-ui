import { DarkImageBackground, ScreenWrapper, WebWrapper } from "../../styled-components";
import backgroundImage from '../../assets/black_ai_bg.jpg';
import orion_purple from '../../assets/orion_purple.png';
import orion_white from '../../assets/logo_o.png';
import { Navbar } from "../../components/Navbar";
import { Body, Error, FieldContainer, FormContainer, FormLogoContainer, Img, ImgLabel, LogoTitle, Submit } from "./styled-components";
import { TextField, useMediaQuery } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../services";
import { useDispatch } from "react-redux";
import { saveSession } from '../../redux/state';
import { User } from "firebase/auth";

interface FormValues{
    email: string;
    password: string;
    passwordConfirmation: string;
}

const Register = () => {   

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
            passwordConfirmation:''
        }
    });

    const matches = useMediaQuery('(min-width:640px)');

    const onSubmit = async (data: FormValues) => {
        const user: User | undefined = await createNewUser(data.email, data.password);
        if(user){
            const userInfo = user as User;
            dispatch(saveSession({ uid: userInfo.uid }));
            navigate('/app/test-orion');
        }
    };

    const textFieldStyle = { 
        width : '70%',
        borderColor : "white !important" 
    };

    return (
        <ScreenWrapper>
            <DarkImageBackground url={`${backgroundImage}`} />

            <WebWrapper style={{ height: "100%" }}>
                <Navbar darkMode />

                <Body>
                    <FormContainer onSubmit={handleSubmit(onSubmit)}>
                        <FormLogoContainer>
                            <Img src={ !matches ? orion_white : orion_purple} />
                            <ImgLabel>ORION</ImgLabel>
                            <LogoTitle>¡Bienvenido a Orion!</LogoTitle>
                        </FormLogoContainer>

                        <FieldContainer>
                            <Controller
                                name="email"
                                control={control}
                                rules={{ 
                                    required: true,
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    } 
                                }}
                                render={({ field }) => 
                                    <TextField {...field} id="register-email" label="Email" variant="outlined" color={ !matches ? "primary": "secondary" } sx={textFieldStyle} type="email" />
                                }
                            />
                            {errors.email?.type === 'required' && <Error role="alert">Email is required</Error>}
                            {errors.email?.type != 'required' && <Error role="alert">{errors.email?.message}</Error>}
                        </FieldContainer>

                        <FieldContainer>
                            <Controller
                                name="password"
                                control={control}
                                rules={{ 
                                    required: true,
                                    minLength: 8,

                                }}
                                render={({ field }) => 
                                    <TextField {...field} id="register-password" label="Password" variant="outlined" color="secondary" sx={{ width : '70%' }} type="password" />
                                }
                            />
                            {errors.password?.type === 'required' && <Error role="alert">Password is required</Error>}
                            {errors.password?.type === 'minLength' && <Error role="alert">Password needs 8 characters min</Error>}
                            
                        </FieldContainer>

                        <FieldContainer>
                            <Controller
                                name="passwordConfirmation"
                                control={control}
                                rules={{ validate: (value, formValues) => value === formValues.password }}
                                render={({ field }) => 
                                    <TextField {...field} id="register=passwordConfirmation" label="Password Confirmation" variant="outlined" color="secondary" sx={{ width : '70%' }} type="password" />
                                }
                            />
                            {errors.passwordConfirmation?.type === 'validate' && <Error role="alert">Passwords dont match</Error>}
                        </FieldContainer>

                        <FieldContainer>
                            <Submit type="submit">Registarme</Submit>
                        </FieldContainer>
                    </FormContainer>
                </Body>
            </WebWrapper>
        </ScreenWrapper>
    );
}

export default Register;