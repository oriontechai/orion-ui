import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { writeUserData } from "../../../../services";
import { FormContainer, Header, Submit } from './styled-components';

// ICONS 
import WorkIcon from "@mui/icons-material/Work";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const AssitentSettings = () => {

    const userId = useSelector( (state: RootState) => state.uid );

    const testFun = () => {
        writeUserData(userId, 'company test');
    }

    return(
        <div>
            <Header>Configuración de Orion</Header>
            <FormContainer>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <WorkIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Nombre de la empresa" variant="standard" color="secondary" sx={{ flexGrow: 1 }}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "25px" }}>
                    <AccountCircleIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Nombre del chatbot" variant="standard" color="secondary" sx={{ flexGrow: 1 }}/>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "25px" }}>
                    <LocalGroceryStoreIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Nicho de mercado" variant="standard" color="secondary" sx={{ flexGrow: 1 }}/>
                </Box>

                <Submit type="submit" value="Guardar"/>
            </FormContainer>
        </div>
    );
}

export default AssitentSettings;