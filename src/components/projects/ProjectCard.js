import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Github from '../icons/Github';
import Devpost from '../icons/Devpost';

const ProjectCard = (props) => {
    return (
        <Card
            style={{
                margin: '0px 30px',
                width: '250px',
                background: '#100e51',
                borderRadius: '8px',
                color: 'white',
            }}
        >
            <CardMedia
                component='img'
                alt=''
                height='200'
                image='https://www.google.com/search?q=image&client=firefox-b-d&tbm=isch&source=iu&ictx=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BL8xfQakH9a8tJM%252CBa_eiczVaD9-zM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253Bsp12V8x9gw6KuM%252C4O2GvGuD-Cf09M%252C_%253BHXLlNEpHoJATkM%252CwJy6d5uce-qbnM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253B1Y5Fex7Bw6VMkM%252CYAMnwpTKFlPEWM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_&vet=1&usg=AI4_-kRbpzbvqYJbN4TpEq9JxOLmKQxDtQ&sa=X&ved=2ahUKEwi25vHM1cj0AhXMjokEHRR-AioQ9QF6BAgCEAE&biw=1440&bih=815&dpr=2#imgrc=gxFxsvFBmxeZ9M'
            />
            <CardContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </CardContent>
            {(props.github || props.devpost) && (
                <CardActions>
                    {props.github && <Github link={props.github} />}
                    {props.devpost && <Devpost link={props.devpost} />}
                </CardActions>
            )}
        </Card>
    );
};

export default ProjectCard;
