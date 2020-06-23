import React from 'react'
import NavBar from './NavBar'
import Logo from 'components/Logo'
import { Container, ContainerFluid, media } from 'style/containers'
import getUser from 'utils/getUser'
import { withStyles } from '@material-ui/core/styles/index'
import UserMenu from './UserMenu'


const styles = {
    cover:{
        background: '#fff',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        position: 'absolute',
        zIndex:9,
        width: '100%',
    },
    flex:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '13px 0',
    },
    name:{
        fontSize: 13,
        fontWeight: 300,
        marginRight:12,
    },

}

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render () {
        const user = getUser()
        return (
        <div style={styles.cover}>
          <ContainerFluid>
            <Container>
              <div style={styles.flex}>
              <a href="/"><Logo/></a>
              <NavBar>
                    <p style={styles.name}>
                      {user.firstName} {user.lastName}
                    </p>
                  <UserMenu user={user}/>
              </NavBar>
              </div>
            </Container>
          </ContainerFluid>
        </div>
    )
  }
}



export default Header
