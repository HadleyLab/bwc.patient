import styled from 'styled-components';
import { media } from 'style/containers'
import logo from '../Img/BWC-Logo.svg'

const Logo = styled.div`
  width: 110px;
  height:37px;
  background: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`

export default Logo;