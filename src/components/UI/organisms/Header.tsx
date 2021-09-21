import styled from "styled-components";

import HeaderText from "../molecules/HeaderText"
import HeaderDescription from "../molecules/HeaderDescription";

import "../../../font/SeoulHangangM.css";

const HeaderTag = styled.header`
    margin-top : 3em;
`;

const Header: React.FC = () => {
    return <HeaderTag>
            <HeaderText/>
            <HeaderDescription/>
           </HeaderTag>;
}
export default Header;