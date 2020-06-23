import styled from 'styled-components';
import { media } from 'style/containers'
import BgImg from '../Img/BG.png'

const ImgCover = styled.div`
  height:100%;
  min-height: 100vh;
  flex: 0 .46 46%;
  background: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  ${media.tablet`
    display: none;
  `}
`

export default ImgCover;