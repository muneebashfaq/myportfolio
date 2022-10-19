import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
const ProgressBar=({value,color})=>{
const ProgressBar2 =styled(LinearProgress)(({ theme }) => ({
        height: 20,
        borderRadius: 10,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 10,
          backgroundColor: theme.palette.mode === 'light' ? `${color}` : '#308fe8',
        },
      }));
      return(<>
      <ProgressBar2 variant="determinate" value={value}/>
      </>)
    }
export default ProgressBar