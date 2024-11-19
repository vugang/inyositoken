import { Ripple } from 'react-css-spinners'
 
function loading() {
     return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <Ripple
    color="#d36ac2"
    size={93}
    thickness={7}
  />
        </div>
     )
}

export default loading;

